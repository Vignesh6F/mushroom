import React from 'react';
import { Check, X } from 'lucide-react';

export default function Toast({ message, onClose }) {
  if (!message) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 duration-300">
      <div className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-[#2D4229] text-white shadow-xl border border-white/10">
        <span className="w-6 h-6 rounded-full bg-[#E2EBDA] text-[#263B22] flex items-center justify-center">
          <Check className="w-3.5 h-3.5 stroke-[3]" />
        </span>
        <span className="text-sm font-medium">{message}</span>
        <button 
          onClick={onClose}
          className="ml-2 text-white/70 hover:text-white"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
