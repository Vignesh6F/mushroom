import React, { useState } from 'react';
import { X, Play, Pause, RotateCcw, CheckCircle2, Sparkles, Volume2, VolumeX } from 'lucide-react';

export default function VideoModal({ isOpen, onClose }) {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [activeChapter, setActiveChapter] = useState(0);

  if (!isOpen) return null;

  const chapters = [
    { title: "01. Substrate Formulation", duration: "1:15", desc: "Hardwood alder sawdust hydrated and blended with wheat bran nutrients." },
    { title: "02. Autoclave Sterilization", duration: "1:45", desc: "121°C pressurized steam ensures 100% elimination of wild spores." },
    { title: "03. Cleanroom Inoculation", duration: "2:05", desc: "Liquid culture introduced beneath sterile laminar air curtains." },
    { title: "04. Circadian Misting & Fruiting", duration: "2:40", desc: "Ultrasonic mist and 6500K LED dawn-to-dusk light emulations." }
  ];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div onClick={onClose} className="fixed inset-0 bg-black/70 backdrop-blur-md" />
      
      <div className="relative bg-[#1C2A1A] text-[#FAF4ED] rounded-3xl max-w-4xl w-full border border-white/10 shadow-2xl overflow-hidden z-10 flex flex-col">
        {/* Header */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#D1E6BF]" />
            <h3 className="font-headline-sm text-lg font-serif font-bold text-white">
              Behind the Harvest — Cultivation Documentary
            </h3>
          </div>
          <button 
            onClick={onClose} 
            className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas Simulation */}
        <div className="relative w-full aspect-video bg-black flex items-center justify-center overflow-hidden group">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDIp2hsET9TeVwUfgJMzH_9X4kl6Zaah2WynHfGmXl4kXS0v37Mi_ja7vTKj5vmT8MQaLADYCbdF8-BXtjvPeU8NzGms4m6wbsVQyqCD6609Tufwr_3Ha9DAq3oByWL1yztwe2pepBybgxqzE3sq6ASek1nnbPWC08kMvPMsySo_pQcf8RCzO3aejMZSBK5-QsNAIPkHM_fYssq0MMbMjAibUVLmfNcnKVFiw90CFBv"
            alt="Farm interior video simulation"
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />

          {/* Chapter Overlay Indicator */}
          <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 text-xs text-[#D1E6BF] flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping" />
            <span>PLAYING: {chapters[activeChapter].title}</span>
          </div>

          {/* Controls Bar */}
          <div className="absolute bottom-4 inset-x-4 z-10 flex items-center justify-between bg-black/60 backdrop-blur-md px-5 py-2.5 rounded-full border border-white/15">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="w-8 h-8 rounded-full bg-[#2D4229] text-white flex items-center justify-center hover:bg-[#3d5937]"
              >
                {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
              </button>
              <button 
                onClick={() => setIsMuted(!isMuted)}
                className="p-1 text-white/80 hover:text-white"
              >
                {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
              </button>
              <span className="text-xs text-white/70">01:24 / 07:45</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#D1E6BF]">
              <span>4K HDR 60fps</span>
              <span className="w-1 h-1 rounded-full bg-white/40" />
              <span>Bio-Chamber Cam 02</span>
            </div>
          </div>
        </div>

        {/* Chapters selection */}
        <div className="p-6 bg-[#243821] border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {chapters.map((ch, idx) => (
            <div
              key={idx}
              onClick={() => setActiveChapter(idx)}
              className={`p-3 rounded-2xl cursor-pointer border transition-all ${
                activeChapter === idx 
                  ? 'bg-white/10 border-[#D1E6BF] text-white' 
                  : 'bg-black/20 border-white/5 text-white/70 hover:bg-white/5'
              }`}
            >
              <div className="flex justify-between items-center text-xs font-semibold mb-1">
                <span className="truncate">{ch.title}</span>
                <span className="text-[10px] opacity-70">{ch.duration}</span>
              </div>
              <p className="text-[11px] opacity-75 line-clamp-2">{ch.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
