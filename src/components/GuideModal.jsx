import React, { useState } from 'react';
import { X, Download, FileText, CheckCircle2, BookOpen } from 'lucide-react';

export default function GuideModal({ isOpen, onClose }) {
  const [downloaded, setDownloaded] = useState(false);

  if (!isOpen) return null;

  const handleDownload = () => {
    setDownloaded(true);
    // Create mock PDF download trigger
    const element = document.createElement("a");
    const file = new Blob([
      `UDHAYAN MUSHROOM FARM AND INSTITUTION\nCULTIVATION GUIDE & MYCOLOGY PROTOCOLS\n\n` +
      `Table of Contents:\n` +
      `1. Substrate preparation with 65% RH baseline\n` +
      `2. Sterile inoculation & spore handling\n` +
      `3. Maintaining 94% humidity without droplet pooling\n` +
      `4. Harvesting flushes at dawn sporulation\n` +
      `5. Culinary preservation & dehydration methods\n\n` +
      `© 2025 Udhayan Mushroom Farm and Institution.`
    ], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = "Udhayan_Mushroom_Cultivation_Handbook.pdf";
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div onClick={onClose} className="fixed inset-0 bg-black/60 backdrop-blur-sm" />

      <div className="relative bg-[#FAF4ED] text-[#1D1E18] rounded-3xl max-w-lg w-full border border-outline-variant shadow-2xl p-6 sm:p-8 z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#E2EBDA] text-[#2D4229] flex items-center justify-center">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-headline-sm text-xl font-serif font-bold text-[#1D1E18]">
                Cultivation Handbook
              </h3>
              <p className="text-xs text-[#475C3E]">Official 2025 Edition • 48 Pages</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-outline-variant flex items-center justify-center hover:bg-white/80"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <p className="font-body-md text-sm text-on-surface-variant leading-relaxed">
          Comprehensive practical insights from Dr. Elena Ashford detailing cleanroom inoculation, microclimate equilibrium, flush timing, and culinary pan-sear techniques.
        </p>

        <div className="p-4 rounded-2xl bg-white border border-outline-variant flex flex-col gap-2 text-xs">
          <div className="font-semibold text-[#1D1E18]">Includes:</div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <CheckCircle2 className="w-4 h-4 text-[#475C3E]" />
            <span>Optimum humidity charts for Oyster, Lion's Mane, and Shiitake</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <CheckCircle2 className="w-4 h-4 text-[#475C3E]" />
            <span>Cleanroom airflow and HEPA filtration setup guide</span>
          </div>
          <div className="flex items-center gap-2 text-on-surface-variant">
            <CheckCircle2 className="w-4 h-4 text-[#475C3E]" />
            <span>Chef-standard braising and pan-searing temperature matrices</span>
          </div>
        </div>

        <button
          onClick={handleDownload}
          className="w-full py-3.5 rounded-full bg-[#2D4229] hover:bg-[#20311D] text-white font-label-md font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
        >
          {downloaded ? (
            <>
              <CheckCircle2 className="w-4 h-4" />
              <span>Guide Downloaded Successfully</span>
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              <span>Download PDF Handbook (4.2 MB)</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
}
