import React, { useState } from 'react';
import { X, User, Package, Award, Sparkles, MapPin } from 'lucide-react';

export default function ProfileModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      <div onClick={onClose} className="fixed inset-0 bg-black/50 backdrop-blur-sm" />

      <div className="relative bg-[#FAF4ED] text-[#1D1E18] rounded-3xl max-w-md w-full border border-outline-variant shadow-2xl p-6 sm:p-8 z-10 flex flex-col gap-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#2D4229] text-white flex items-center justify-center font-headline-sm font-serif font-bold">
              DM
            </div>
            <div>
              <h3 className="font-headline-sm text-lg font-serif font-bold text-[#1D1E18]">
                Dhanish Marudhu
              </h3>
              <p className="text-xs text-[#475C3E]">Cultivator Patron • Member since 2025</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white border border-outline-variant flex items-center justify-center hover:bg-white/80"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Member Perks */}
        <div className="grid grid-cols-2 gap-3">
          <div className="p-3.5 rounded-2xl bg-white border border-outline-variant flex flex-col gap-1">
            <span className="text-[11px] text-on-surface-variant uppercase font-semibold">Spore Points</span>
            <span className="font-headline-sm text-xl font-serif font-bold text-[#2D4229]">450 pts</span>
            <span className="text-[10px] text-on-surface-variant">Eligible for free grow kit</span>
          </div>
          <div className="p-3.5 rounded-2xl bg-white border border-outline-variant flex flex-col gap-1">
            <span className="text-[11px] text-on-surface-variant uppercase font-semibold">Tier</span>
            <span className="font-headline-sm text-xl font-serif font-bold text-[#475C3E]">Mycophile</span>
            <span className="text-[10px] text-on-surface-variant">Priority dawn allocation</span>
          </div>
        </div>

        {/* Recent Harvest Orders */}
        <div className="flex flex-col gap-2.5">
          <span className="text-xs font-bold uppercase tracking-wider text-[#1D1E18]">Recent Dispatches</span>
          <div className="p-3 bg-white rounded-2xl border border-outline-variant flex items-center justify-between text-xs">
            <div className="flex items-center gap-2.5">
              <Package className="w-4 h-4 text-[#475C3E]" />
              <div>
                <span className="font-semibold block text-[#1D1E18]">Order #UM-8824</span>
                <span className="text-[11px] text-on-surface-variant">2kg King Oyster, 1kg Lion's Mane</span>
              </div>
            </div>
            <span className="px-2.5 py-1 rounded-full bg-[#E2EBDA] text-[#263B22] font-semibold text-[10px]">
              Delivered
            </span>
          </div>
        </div>

        <button
          onClick={onClose}
          className="w-full py-2.5 rounded-full bg-[#2D4229] text-white font-label-md text-sm font-semibold hover:bg-[#20311D]"
        >
          Close Account View
        </button>
      </div>
    </div>
  );
}
