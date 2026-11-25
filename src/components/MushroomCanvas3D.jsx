import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { Rotate3d, Sparkles, RefreshCw } from 'lucide-react';

export default function MushroomCanvas3D() {
  const containerRef = useRef(null);
  const [isInteracting, setIsInteracting] = useState(false);
  const [sporeRate, setSporeRate] = useState('Active');

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Clean up any existing canvas
    while (container.firstChild) {
      container.removeChild(container.firstChild);
    }

    const getWidth = () => container.clientWidth || container.offsetWidth || 600;
    const getHeight = () => container.clientHeight || container.offsetHeight || 600;

    let width = getWidth();
    let height = getHeight();

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.2, 5.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;

    renderer.domElement.style.width = '100%';
    renderer.domElement.style.height = '100%';
    renderer.domElement.style.display = 'block';
    renderer.domElement.style.touchAction = 'none';
    renderer.domElement.style.cursor = 'grab';

    container.appendChild(renderer.domElement);

    // --- LIGHTING ---
    const ambientLight = new THREE.AmbientLight(0xfff5ee, 1.6);
    scene.add(ambientLight);

    const mainLight = new THREE.DirectionalLight(0xfffaec, 2.8);
    mainLight.position.set(4, 8, 4.5);
    mainLight.castShadow = true;
    mainLight.shadow.mapSize.width = 1024;
    mainLight.shadow.mapSize.height = 1024;
    scene.add(mainLight);

    const crimsonRimLight = new THREE.DirectionalLight(0xc8bd93, 1.8);
    crimsonRimLight.position.set(-4, 3, -3);
    scene.add(crimsonRimLight);

    const underFill = new THREE.PointLight(0xd8c9a6, 1.8, 12);
    underFill.position.set(0, 0.8, 2.6);
    scene.add(underFill);

    // --- MAIN SCENE GROUP ---
    const mainGroup = new THREE.Group();
    mainGroup.position.set(0, -1.05, 0);
    mainGroup.scale.set(0.9, 0.9, 0.9);
    scene.add(mainGroup);

    // --- BLACK SOIL MOUND & TEXTURED BED ---
    const blackSoilMaterial = new THREE.MeshStandardMaterial({
      color: 0x141210,
      roughness: 0.95,
      metalness: 0.08
    });

    const dampSoilDetailMat = new THREE.MeshStandardMaterial({
      color: 0x1f1b16,
      roughness: 0.88,
      metalness: 0.05
    });

    const myceliumWebMat = new THREE.MeshStandardMaterial({
      color: 0xead9d5,
      roughness: 0.5,
      transparent: true,
      opacity: 0.75
    });

    const soilGeo = new THREE.CylinderGeometry(1.95, 2.3, 0.65, 36, 6);
    const soilPos = soilGeo.attributes.position;
    for (let i = 0; i < soilPos.count; i++) {
      const vx = soilPos.getX(i);
      const vy = soilPos.getY(i);
      const vz = soilPos.getZ(i);
      if (vy > 0.1) {
        const dist = Math.sqrt(vx * vx + vz * vz);
        const lump = Math.sin(vx * 4.5) * 0.08 + Math.cos(vz * 4.0) * 0.07;
        const centerDepress = Math.max(0, 0.12 - dist * 0.07);
        soilPos.setY(i, vy + lump - centerDepress);
      }
    }
    soilGeo.computeVertexNormals();

    const soilMound = new THREE.Mesh(soilGeo, blackSoilMaterial);
    soilMound.position.y = -0.36;
    soilMound.receiveShadow = true;
    mainGroup.add(soilMound);

    // Soil crumbles and pebbles
    const crumbCount = 28;
    for (let c = 0; c < crumbCount; c++) {
      const rScale = 0.08 + Math.random() * 0.12;
      const crumbGeo = new THREE.DodecahedronGeometry(rScale, 1);
      const crumb = new THREE.Mesh(crumbGeo, dampSoilDetailMat);
      const rad = 0.35 + Math.random() * 1.5;
      const angle = Math.random() * Math.PI * 2;
      crumb.position.set(Math.cos(angle) * rad, -0.05 + Math.random() * 0.08, Math.sin(angle) * rad);
      crumb.rotation.set(Math.random() * 3, Math.random() * 3, Math.random() * 3);
      crumb.castShadow = true;
      crumb.receiveShadow = true;
      mainGroup.add(crumb);
    }

    // Mycelium hyphae filaments
    const hyphaeCount = 14;
    for (let h = 0; h < hyphaeCount; h++) {
      const ang = (h / hyphaeCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.3;
      const dist1 = 0.2 + Math.random() * 0.2;
      const dist2 = 0.8 + Math.random() * 0.6;
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(Math.cos(ang) * dist1, 0.0, Math.sin(ang) * dist1),
        new THREE.Vector3(Math.cos(ang + 0.2) * (dist1 + dist2) * 0.5, 0.02, Math.sin(ang + 0.2) * (dist1 + dist2) * 0.5),
        new THREE.Vector3(Math.cos(ang) * dist2, -0.05, Math.sin(ang) * dist2)
      );
      const hyphaeGeo = new THREE.TubeGeometry(curve, 10, 0.016, 6, false);
      const hyphaeMesh = new THREE.Mesh(hyphaeGeo, myceliumWebMat);
      mainGroup.add(hyphaeMesh);
    }

    // --- MUSHROOM MATERIALS ---
    const mushroomCapMaterial = new THREE.MeshStandardMaterial({
      color: 0xb8a78e,
      roughness: 0.32,
      metalness: 0.04
    });

    const mushroomGillMaterial = new THREE.MeshStandardMaterial({
      color: 0x806e59,
      roughness: 0.55,
      metalness: 0.0
    });

    const stemMaterial = new THREE.MeshStandardMaterial({
      color: 0xffedea,
      roughness: 0.42,
      metalness: 0.02
    });

    function createSproutingRedMushroom(baseScale, heightMult, posX, posZ, rotX, rotY, rotZ, tintColor, phaseOffset, growthSpeedMult) {
      const mGroup = new THREE.Group();
      mGroup.position.set(posX, 0.0, posZ);
      mGroup.rotation.set(rotX, rotY, rotZ);

      const effHeight = heightMult || 1.6;
      const topY = 0.8 * baseScale * effHeight;

      // Graceful curved stem
      const curve = new THREE.QuadraticBezierCurve3(
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(0.1 * baseScale, 0.48 * topY, -0.05 * baseScale),
        new THREE.Vector3(0, topY, 0.1 * baseScale)
      );
      const stemGeo = new THREE.TubeGeometry(curve, 22, 0.1 * baseScale, 14, false);
      const stemMesh = new THREE.Mesh(stemGeo, stemMaterial);
      stemMesh.castShadow = true;
      mGroup.add(stemMesh);

      // Scalloped Red Oyster Cap
      const capGeo = new THREE.SphereGeometry(0.74 * baseScale, 32, 12, 0, Math.PI * 2, 0, Math.PI / 2);
      capGeo.scale(0.9, 0.18, 0.8);
      const capPos = capGeo.attributes.position;
      for (let i = 0; i < capPos.count; i++) {
        const vx = capPos.getX(i);
        const vy = capPos.getY(i);
        const vz = capPos.getZ(i);
        const wave = Math.sin(vx * 6.0) * 0.045 * baseScale + Math.cos(vz * 5.0) * 0.035 * baseScale;
        capPos.setY(i, vy + wave);
      }
      capGeo.computeVertexNormals();

      const capMat = mushroomCapMaterial.clone();
      if (tintColor) capMat.color.setHex(tintColor);

      const capMesh = new THREE.Mesh(capGeo, capMat);
      capMesh.position.set(0, topY + 0.05 * baseScale, 0.12 * baseScale);
      capMesh.rotation.x = 0.35;
      capMesh.castShadow = true;
      mGroup.add(capMesh);

      // Gills under red cap
      const gillGeo = new THREE.CylinderGeometry(0.68 * baseScale, 0.07 * baseScale, 0.07 * baseScale, 24);
      gillGeo.scale(0.9, 0.32, 0.78);
      const gillMesh = new THREE.Mesh(gillGeo, mushroomGillMaterial);
      gillMesh.position.set(0, topY - 0.06 * baseScale, 0.11 * baseScale);
      gillMesh.rotation.x = 0.35;
      mGroup.add(gillMesh);

      // Soil eruption collar
      const collarGeo = new THREE.TorusGeometry(0.12 * baseScale, 0.04 * baseScale, 8, 16);
      collarGeo.rotateX(Math.PI / 2);
      const collarMesh = new THREE.Mesh(collarGeo, blackSoilMaterial);
      collarMesh.position.y = 0.01;
      mGroup.add(collarMesh);

      return {
        group: mGroup,
        stemMesh,
        capMesh,
        gillMesh,
        collarMesh,
        baseScale,
        topY,
        initRotZ: rotZ,
        phaseOffset: phaseOffset || 0,
        speedMult: growthSpeedMult || 1.0
      };
    }

    // Cluster of tall vibrant red mushrooms sprouting from black soil
    // Significantly increased height multipliers (2.3 - 2.8) for soaring mushrooms
    const shroomData = [
      // Hero centerpiece (tall crimson red)
      createSproutingRedMushroom(1.45, 2.65, 0.05, 0.15, -0.06, 0.18, -0.06, 0xc6b49b, 0.0, 1.0),
      // Secondary tall scarlet
      createSproutingRedMushroom(1.25, 2.50, -0.45, 0.28, 0.10, -0.28, 0.18, 0xb9a78e, 0.9, 0.95),
      // Tall ruby sprout
      createSproutingRedMushroom(1.10, 2.70, 0.46, -0.12, -0.14, 0.60, -0.22, 0xd0bea2, 1.6, 1.1),
      // Mid-tier bright red
      createSproutingRedMushroom(0.95, 2.40, -0.24, -0.20, -0.10, -0.38, 0.12, 0xcab99e, 2.3, 1.05),
      // High reaching side bloom
      createSproutingRedMushroom(0.80, 2.80, 0.62, 0.34, 0.18, 0.72, -0.16, 0xb7a58b, 3.1, 1.15),
      createSproutingRedMushroom(0.68, 2.35, -0.65, 0.12, 0.14, -0.85, 0.24, 0xd4c2a6, 1.2, 1.2),
      createSproutingRedMushroom(0.58, 2.55, 0.18, 0.65, 0.24, 0.10, -0.08, 0xc2b092, 2.8, 1.25),
      createSproutingRedMushroom(0.82, 2.45, -0.36, -0.38, -0.24, 3.14, 0.10, 0xa9967a, 1.9, 0.92),
      createSproutingRedMushroom(0.62, 2.40, 0.42, -0.40, -0.18, 2.45, -0.15, 0xd1bea1, 3.6, 1.0)
    ];

    shroomData.forEach((item) => mainGroup.add(item.group));

    // --- GLOWING SPORES (200 particles) ---
    const sporeCount = 200;
    const sporeGeo = new THREE.BufferGeometry();
    const sporePositions = new Float32Array(sporeCount * 3);
    const sporeVelocities = new Float32Array(sporeCount * 3);

    for (let i = 0; i < sporeCount; i++) {
      sporePositions[i * 3 + 0] = (Math.random() - 0.5) * 3.6;
      sporePositions[i * 3 + 1] = Math.random() * 3.4 - 0.2;
      sporePositions[i * 3 + 2] = (Math.random() - 0.5) * 3.6;

      sporeVelocities[i * 3 + 0] = (Math.random() - 0.5) * 0.004;
      sporeVelocities[i * 3 + 1] = Math.random() * 0.01 + 0.005;
      sporeVelocities[i * 3 + 2] = (Math.random() - 0.5) * 0.004;
    }

    sporeGeo.setAttribute('position', new THREE.BufferAttribute(sporePositions, 3));

    const sporeMat = new THREE.PointsMaterial({
      color: 0xe4d3a9,
      size: 0.065,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending
    });

    const sporeSystem = new THREE.Points(sporeGeo, sporeMat);
    scene.add(sporeSystem);

    // --- INTERACTIVE CONTROLS (MOUSE & TOUCH DRAG) ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let isDragging = false;
    let previousPointerX = 0;
    let previousPointerY = 0;
    let userRotationY = 0;
    let userRotationX = 0;

    const handlePointerDown = (e) => {
      isDragging = true;
      setIsInteracting(true);
      renderer.domElement.style.cursor = 'grabbing';
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;
      previousPointerX = clientX;
      previousPointerY = clientY;
    };

    const handlePointerMove = (e) => {
      const clientX = e.clientX || (e.touches && e.touches[0].clientX) || 0;
      const clientY = e.clientY || (e.touches && e.touches[0].clientY) || 0;

      if (isDragging) {
        const deltaX = clientX - previousPointerX;
        const deltaY = clientY - previousPointerY;
        userRotationY += deltaX * 0.008;
        userRotationX += deltaY * 0.006;
        userRotationX = Math.max(-0.4, Math.min(0.4, userRotationX));
        previousPointerX = clientX;
        previousPointerY = clientY;
      } else {
        const normX = (clientX / window.innerWidth) * 2 - 1;
        const normY = -(clientY / window.innerHeight) * 2 + 1;
        targetX = normX * 0.35;
        targetY = normY * 0.25;
      }
    };

    const handlePointerUp = () => {
      isDragging = false;
      setIsInteracting(false);
      renderer.domElement.style.cursor = 'grab';
    };

    const domEl = renderer.domElement;
    domEl.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    domEl.addEventListener('touchstart', handlePointerDown, { passive: true });
    window.addEventListener('touchmove', handlePointerMove, { passive: true });
    window.addEventListener('touchend', handlePointerUp);

    const updateDimensions = () => {
      const w = getWidth();
      const h = getHeight();
      if (w > 0 && h > 0) {
        camera.aspect = w / h;
        // Keep entire scene framed with padding regardless of viewport ratio
        const baseZ = 5.8;
        if (camera.aspect < 1.0) {
          camera.position.z = baseZ + (1.0 - camera.aspect) * 2.5;
        } else {
          camera.position.z = baseZ;
        }
        camera.updateProjectionMatrix();
        renderer.setSize(w, h);
      }
    };
    updateDimensions();

    window.addEventListener('resize', updateDimensions);
    let resizeObserver = null;
    if (window.ResizeObserver) {
      resizeObserver = new ResizeObserver(updateDimensions);
      resizeObserver.observe(container);
    }

    // --- ANIMATION LOOP ---
    const clock = new THREE.Clock();
    let animationFrameId;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Lerp mouse response
      mouseX += (targetX - mouseX) * 0.05;
      mouseY += (targetY - mouseY) * 0.05;

      mainGroup.rotation.y = Math.sin(elapsedTime * 0.3) * 0.12 + mouseX + userRotationY;
      mainGroup.rotation.x = Math.cos(elapsedTime * 0.22) * 0.05 - mouseY + userRotationX;

      // 8.5s blooming & sprouting cycle
      const cycleDuration = 8.5;

      shroomData.forEach((shroom) => {
        const localTime = ((elapsedTime * shroom.speedMult * 0.5 + shroom.phaseOffset) % cycleDuration) / cycleDuration;

        let sproutProgress;
        if (localTime < 0.65) {
          const t = localTime / 0.65;
          sproutProgress = 0.15 + 0.85 * (1 - Math.pow(1 - t, 3.2));
        } else {
          const t = (localTime - 0.65) / 0.35;
          sproutProgress = 1.0 - 0.85 * (0.5 - 0.5 * Math.cos(t * Math.PI));
        }

        const breathe = Math.sin(elapsedTime * 2.2 + shroom.phaseOffset) * 0.03;
        const currentGrowth = sproutProgress + breathe;
        const stemScaleY = Math.max(0.18, currentGrowth * 1.25);

        // Stem vertical elongation with increased height
        shroom.stemMesh.scale.set(
          0.38 + currentGrowth * 0.62,
          stemScaleY,
          0.38 + currentGrowth * 0.62
        );

        // Dynamic Cap & Gill Elevation matching the taller stem elongation
        const currentTopY = shroom.topY * stemScaleY;
        shroom.capMesh.position.y = currentTopY + 0.05 * shroom.baseScale;
        shroom.gillMesh.position.y = currentTopY - 0.06 * shroom.baseScale;

        // Cap expansion & unfurling
        const capExpansion = Math.pow(Math.max(0.2, currentGrowth), 1.3);
        shroom.capMesh.scale.set(
          capExpansion * 1.1,
          0.4 + currentGrowth * 0.6,
          capExpansion * 1.05
        );

        shroom.gillMesh.scale.set(
          capExpansion * 1.08,
          0.4 + currentGrowth * 0.6,
          capExpansion * 1.03
        );

        shroom.capMesh.rotation.x = 0.35 + (1.0 - sproutProgress) * 0.22;
        shroom.gillMesh.rotation.x = 0.35 + (1.0 - sproutProgress) * 0.22;

        shroom.collarMesh.scale.set(
          0.7 + sproutProgress * 0.3,
          0.7 + sproutProgress * 0.3,
          0.7 + sproutProgress * 0.3
        );
      });

      // Spore floating upward
      const posArr = sporeGeo.attributes.position.array;
      for (let i = 0; i < sporeCount; i++) {
        const idx = i * 3;
        posArr[idx + 0] += sporeVelocities[idx + 0] + Math.sin(elapsedTime * 1.2 + i) * 0.0012;
        posArr[idx + 1] += sporeVelocities[idx + 1];
        posArr[idx + 2] += sporeVelocities[idx + 2] + Math.cos(elapsedTime * 1.2 + i) * 0.0012;

        if (posArr[idx + 1] > 3.2) {
          posArr[idx + 0] = (Math.random() - 0.5) * 1.8;
          posArr[idx + 1] = -0.15 + Math.random() * 0.15;
          posArr[idx + 2] = (Math.random() - 0.5) * 1.8;
        }
      }
      sporeGeo.attributes.position.needsUpdate = true;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      domEl.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);
      domEl.removeEventListener('touchstart', handlePointerDown);
      window.removeEventListener('touchmove', handlePointerMove);
      window.removeEventListener('touchend', handlePointerUp);
      window.removeEventListener('resize', updateDimensions);
      if (resizeObserver) resizeObserver.disconnect();

      if (container.contains(domEl)) {
        container.removeChild(domEl);
      }
      renderer.dispose();
      soilGeo.dispose();
      sporeGeo.dispose();
      blackSoilMaterial.dispose();
      dampSoilDetailMat.dispose();
      myceliumWebMat.dispose();
      mushroomCapMaterial.dispose();
      mushroomGillMaterial.dispose();
      stemMaterial.dispose();
      sporeMat.dispose();
    };
  }, []);

  return (
    <div className="w-full h-full relative select-none flex flex-col items-center justify-center">
      {/* ThreeJS WebGL Canvas Container */}
      <div
        ref={containerRef}
        className="w-full h-full relative rounded-3xl overflow-hidden flex items-center justify-center"
      />

      {/* Floating Interaction Pill Guide */}
      <div className="absolute bottom-4 left-2 sm:left-4 lg:-left-12 z-20 pointer-events-auto max-w-[95%] sm:max-w-full flex justify-start">
        <div className={`inline-flex items-center gap-2.5 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white/95 border border-outline-variant backdrop-blur-md shadow-md text-[#1D1E18] transition-all duration-300 ${isInteracting ? 'scale-105 border-secondary ring-2 ring-secondary/20' : ''}`}>
          <Rotate3d className="w-4 h-4 text-secondary animate-pulse shrink-0" />
          <span className="font-label-md text-[12px] sm:text-label-md text-[#1D1E18] font-medium">
            Drag or move cursor to observe live blooming tall red mushroom cluster & spore release
          </span>
          <span className="w-2 h-2 rounded-full bg-secondary shrink-0 animate-ping" />
        </div>
      </div>
    </div>
  );
}

