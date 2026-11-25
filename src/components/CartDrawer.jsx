import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, ShoppingBag, ArrowRight, CheckCircle, Sparkles } from 'lucide-react';

export default function CartDrawer({ 
  isOpen, 
  onClose, 
  cartItems, 
  onUpdateQuantity, 
  onRemoveItem,
  onClearCart
}) {
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoMsg, setPromoMsg] = useState('');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  if (!isOpen) return null;

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const freeShippingThreshold = 60;
  const isFreeShipping = subtotal >= freeShippingThreshold;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const progressPercent = Math.min(100, (subtotal / freeShippingThreshold) * 100);
  const shippingCost = subtotal > 0 && !isFreeShipping ? 8 : 0;
  const finalTotal = Math.max(0, subtotal - discount + shippingCost);

  const applyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'MYCELIUM10' || promoCode.trim().toUpperCase() === 'HARVEST10') {
      const disc = Math.round(subtotal * 0.1);
      setDiscount(disc);
      setPromoMsg('10% Harvest discount applied!');
    } else {
      setPromoMsg('Invalid promo code. Try "HARVEST10"');
    }
  };

  const handleCheckout = () => {
    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderPlaced(true);
      onClearCart();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300" 
      />

      {/* Slide-out drawer panel */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#FAF4ED] shadow-2xl flex flex-col border-l border-outline-variant">
          
          {/* Header */}
          <div className="p-6 bg-surface border-b border-outline-variant flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <span className="w-8 h-8 rounded-full bg-[#E2EBDA] text-[#263B22] flex items-center justify-center font-bold">
                <ShoppingBag className="w-4 h-4" />
              </span>
              <div>
                <h3 className="font-headline-sm text-xl text-[#1D1E18] font-serif font-bold">
                  Your Harvest Basket
                </h3>
                <span className="font-body-sm text-xs text-on-surface-variant">
                  {cartItems.reduce((acc, i) => acc + i.quantity, 0)} kg total harvest
                </span>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="w-8 h-8 rounded-full bg-white border border-outline-variant flex items-center justify-center text-primary hover:bg-white/80"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="px-6 py-3 bg-[#EAE0CF]/70 border-b border-outline-variant">
            <div className="flex items-center justify-between text-xs font-medium text-[#1D1E18] mb-1.5">
              <span>{isFreeShipping ? '🎉 Free Cold-Chain Delivery unlocked!' : `Add $${remainingForFreeShipping.toFixed(2)} more for Free Shipping`}</span>
              <span>{Math.round(progressPercent)}%</span>
            </div>
            <div className="w-full h-2 rounded-full bg-white overflow-hidden">
              <div 
                className="h-full bg-[#2D4229] transition-all duration-500 rounded-full"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-4">
            {orderPlaced ? (
              <div className="my-auto py-12 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 rounded-full bg-[#E2EBDA] text-[#2D4229] flex items-center justify-center animate-bounce">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="font-headline-sm text-2xl text-[#1D1E18] font-serif font-bold">
                  Harvest Order Confirmed!
                </h4>
                <p className="font-body-md text-sm text-on-surface-variant max-w-xs">
                  Your fresh mushroom harvest has been queued for tomorrow morning's dawn clipping. Cold-chain dispatch notification will follow shortly.
                </p>
                <button
                  onClick={() => {
                    setOrderPlaced(false);
                    onClose();
                  }}
                  className="mt-4 px-6 py-2.5 rounded-full bg-[#2D4229] text-white font-label-md"
                >
                  Continue Exploring
                </button>
              </div>
            ) : cartItems.length === 0 ? (
              <div className="my-auto py-12 flex flex-col items-center text-center gap-4 text-on-surface-variant">
                <ShoppingBag className="w-12 h-12 stroke-[1.5] text-outline" />
                <p className="font-headline-sm text-xl text-[#1D1E18] font-serif">Your basket is empty</p>
                <p className="text-sm max-w-xs">Explore our living mushroom collection and add seasonal culinary or medicinal flushes.</p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-full bg-[#2D4229] text-white font-label-md mt-2"
                >
                  Browse Harvests
                </button>
              </div>
            ) : (
              cartItems.map((item) => (
                <div 
                  key={item.id}
                  className="p-3.5 rounded-2xl bg-white border border-outline-variant flex gap-3.5 items-center shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-16 h-16 rounded-xl object-cover bg-surface-container shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h4 className="font-headline-sm text-sm text-[#1D1E18] font-serif font-bold truncate">
                      {item.name}
                    </h4>
                    <span className="text-xs text-[#475C3E] italic block mb-1">
                      {item.scientificName}
                    </span>
                    <span className="font-bold text-sm text-[#1D1E18]">
                      ${item.price} <span className="font-normal text-xs text-on-surface-variant">{item.unit}</span>
                    </span>
                  </div>

                  {/* Quantity Controller */}
                  <div className="flex items-center gap-2 bg-[#F5EDE2] px-2 py-1 rounded-full border border-outline-variant">
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                      className="w-5 h-5 flex items-center justify-center text-primary hover:text-red-700"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                      className="w-5 h-5 flex items-center justify-center text-primary hover:text-green-800"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => onRemoveItem(item.id)}
                    className="p-1 text-outline hover:text-red-700 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Footer & Checkout */}
          {cartItems.length > 0 && !orderPlaced && (
            <div className="p-6 bg-surface border-t border-outline-variant flex flex-col gap-4">
              {/* Promo Code Input */}
              <form onSubmit={applyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code (e.g. HARVEST10)"
                  className="flex-1 bg-white border border-outline-variant px-3 py-1.5 rounded-full text-xs placeholder:text-outline focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-1.5 rounded-full bg-[#E2EBDA] text-[#263B22] font-label-sm font-semibold text-xs hover:bg-[#d1e0c5]"
                >
                  Apply
                </button>
              </form>
              {promoMsg && <span className="text-[11px] text-[#475C3E]">{promoMsg}</span>}

              {/* Calculations */}
              <div className="flex flex-col gap-1.5 text-xs text-on-surface-variant border-t border-outline-variant/60 pt-3">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-medium text-[#1D1E18]">${subtotal.toFixed(2)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#475C3E]">
                    <span>Discount</span>
                    <span>-${discount.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Cold-Chain Insulated Shipping</span>
                  <span className="font-medium text-[#1D1E18]">
                    {isFreeShipping ? 'FREE' : `$${shippingCost.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#1D1E18] pt-2 border-t border-outline-variant">
                  <span>Total Due</span>
                  <span className="font-serif text-lg">${finalTotal.toFixed(2)}</span>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="w-full py-3.5 rounded-full bg-[#2D4229] hover:bg-[#20311D] text-white font-label-lg font-semibold flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
              >
                {isCheckingOut ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    <span>Processing Fresh Harvest Order...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Cold-Chain Delivery</span>
                    <ArrowRight className="w-4 h-4" />
                  </>
                )}
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
