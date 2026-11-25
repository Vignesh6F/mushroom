import React from 'react';
import { ChevronRight, Plus, Check } from 'lucide-react';

export default function MushroomCard({ mushroom, onSelect, onAddToCart, isInCart }) {
  return (
    <div className="group rounded-3xl bg-white p-5 border border-outline-variant shadow-sm hover:shadow-md transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Image Container with Badges */}
      <div className="relative w-full h-64 rounded-2xl overflow-hidden bg-surface-container mb-5">
        <img
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          src={mushroom.image}
          alt={mushroom.alt}
          loading="lazy"
        />
        
        {/* Top Status Badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-outline-variant text-[#475C3E] font-label-sm text-label-sm font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#475C3E]" />
          {mushroom.badge}
        </div>

        {/* Bottom Category Sub-Badge */}
        <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#2D4229] text-white font-label-sm text-label-sm font-medium shadow-sm">
          {mushroom.subBadge}
        </div>
      </div>

      {/* Header Info */}
      <div className="flex items-start justify-between mb-2">
        <div>
          <h3 className="font-headline-sm text-xl text-[#1D1E18] font-serif font-semibold">
            {mushroom.name}
          </h3>
          <p className="font-body-sm text-body-sm italic text-[#475C3E]">
            {mushroom.scientificName}
          </p>
        </div>
        <div className="text-right">
          <span className="font-headline-sm text-xl text-[#1D1E18] font-serif font-bold">
            ${mushroom.price}
          </span>
          <span className="font-body-sm text-body-sm text-on-surface-variant">
            {mushroom.unit}
          </span>
        </div>
      </div>

      {/* Description */}
      <p className="font-body-md text-body-md text-on-surface-variant mb-6 line-clamp-2">
        {mushroom.description}
      </p>

      {/* Action Buttons */}
      <div className="mt-auto flex items-center gap-2 pt-4 border-t border-outline-variant">
        <button
          onClick={() => onSelect(mushroom)}
          className="flex-1 py-2.5 rounded-full bg-[#F5EDE2] hover:bg-[#EAE0CF] text-[#1D1E18] font-label-md text-label-md transition-colors flex items-center justify-center gap-1 font-medium"
        >
          <span>View Details</span>
          <ChevronRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => onAddToCart(mushroom)}
          aria-label={`Add ${mushroom.name} to cart`}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 shadow-sm ${
            isInCart 
              ? 'bg-[#475C3E] text-white scale-105' 
              : 'bg-[#2D4229] hover:bg-[#20311D] text-white hover:scale-105 active:scale-95'
          }`}
        >
          {isInCart ? <Check className="w-4 h-4" /> : <Plus className="w-[18px] h-[18px]" />}
        </button>
      </div>
    </div>
  );
}
