import React, { useState } from 'react';
import { X, Plus, Minus, ShoppingBasket, Check, Sparkles, Clock, Layers, Leaf } from 'lucide-react';

export default function ProductDetailsModal({ mushroom, onClose, onAddToCart }) {
  const [qty, setQty] = useState(1);
  const [added, setAdded] = useState(false);

  if (!mushroom) return null;

  const handleAdd = () => {
    onAddToCart(mushroom, qty);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" 
      />

      {/* Modal Dialog Content */}
      <div className="relative bg-[#FAF4ED] rounded-3xl max-w-3xl w-full border border-outline-variant shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-8 h-8 rounded-full bg-white/90 border border-outline-variant flex items-center justify-center text-primary hover:bg-white shadow-sm"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Left: Image & Tags */}
        <div className="w-full md:w-1/2 relative bg-[#F5EDE2] p-6 flex flex-col justify-between">
          <div className="relative w-full h-72 md:h-full rounded-2xl overflow-hidden shadow-inner">
            <img
              src={mushroom.image}
              alt={mushroom.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/95 backdrop-blur-sm border border-outline-variant text-[#475C3E] font-label-sm text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 shadow-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#475C3E]" />
              {mushroom.badge}
            </div>
            <div className="absolute bottom-3 left-3 px-3 py-1 rounded-full bg-[#2D4229] text-white font-label-sm text-xs">
              {mushroom.subBadge}
            </div>
          </div>
        </div>

        {/* Right: Detailed Specification & Purchase */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between gap-6">
          <div className="flex flex-col gap-4">
            <div>
              <span className="text-xs font-semibold text-[#475C3E] uppercase tracking-wider block mb-1">
                {mushroom.category}
              </span>
              <h2 className="font-headline-lg text-2xl sm:text-3xl text-[#1D1E18] font-serif font-bold">
                {mushroom.name}
              </h2>
              <p className="text-sm italic text-[#475C3E]">
                {mushroom.scientificName}
              </p>
            </div>

            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold font-serif text-[#1D1E18]">
                ${mushroom.price}
              </span>
              <span className="text-sm text-on-surface-variant">{mushroom.unit} (Fresh Harvested)</span>
            </div>

            <p className="text-sm text-on-surface-variant leading-relaxed">
              {mushroom.fullDescription || mushroom.description}
            </p>

            {/* Tasting Notes */}
            {mushroom.flavorNotes && (
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-bold text-[#1D1E18] uppercase tracking-wider">Aromatic & Flavor Profile</span>
                <div className="flex flex-wrap gap-1.5">
                  {mushroom.flavorNotes.map((note, idx) => (
                    <span 
                      key={idx}
                      className="px-2.5 py-1 rounded-full bg-[#E2EBDA] text-[#263B22] text-xs font-medium"
                    >
                      {note}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Spec grid */}
            <div className="grid grid-cols-2 gap-3 text-xs bg-white p-3.5 rounded-2xl border border-outline-variant">
              <div>
                <span className="text-on-surface-variant block">Ideal Cook Time</span>
                <span className="font-semibold text-[#1D1E18]">{mushroom.cookTime || '5-7 mins'}</span>
              </div>
              <div>
                <span className="text-on-surface-variant block">Substrate Base</span>
                <span className="font-semibold text-[#1D1E18]">{mushroom.substrate || 'Organic Oak/Alder'}</span>
              </div>
              <div>
                <span className="text-on-surface-variant block">Shelf Life</span>
                <span className="font-semibold text-[#1D1E18]">{mushroom.shelfLife || '10 Days Cold'}</span>
              </div>
              <div>
                <span className="text-on-surface-variant block">Purity Standard</span>
                <span className="font-semibold text-[#475C3E]">Zero Synthetics</span>
              </div>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-4 pt-4 border-t border-outline-variant">
            {/* Quantity Selector */}
            <div className="flex items-center gap-2 bg-[#F5EDE2] px-3 py-2 rounded-full border border-outline-variant">
              <button
                onClick={() => setQty(Math.max(1, qty - 1))}
                className="w-6 h-6 flex items-center justify-center text-primary hover:text-red-700"
              >
                <Minus className="w-3.5 h-3.5" />
              </button>
              <span className="text-sm font-bold w-6 text-center">{qty}</span>
              <button
                onClick={() => setQty(qty + 1)}
                className="w-6 h-6 flex items-center justify-center text-primary hover:text-green-800"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Add to Basket button */}
            <button
              onClick={handleAdd}
              className={`flex-1 py-3 px-6 rounded-full font-label-md font-semibold flex items-center justify-center gap-2 shadow-md transition-all ${
                added 
                  ? 'bg-[#475C3E] text-white' 
                  : 'bg-[#2D4229] hover:bg-[#20311D] text-white hover:shadow-lg'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added {qty}kg to Basket</span>
                </>
              ) : (
                <>
                  <ShoppingBasket className="w-4 h-4" />
                  <span>Add to Basket • ${(mushroom.price * qty).toFixed(2)}</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
