import React, { useState } from 'react';
import MushroomIcon from './MushroomIcon';

const ownerWhatsAppNumber = (import.meta.env.VITE_OWNER_WHATSAPP_NUMBER || '').replace(/\D/g, '');

export default function Footer() {
  const [status, setStatus] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!ownerWhatsAppNumber) {
      setStatus('WhatsApp contact is not configured yet. Please contact the farm directly.');
      return;
    }

    const form = new FormData(event.currentTarget);
    const message = [
      'Consultation request from Udhayan Mushroom Farm website',
      `Name: ${form.get('name')}`,
      `Email: ${form.get('email')}`,
      `Phone: ${form.get('phone')}`,
      `Address: ${form.get('address')}`,
    ].join('\n');

    window.open(`https://wa.me/${ownerWhatsAppNumber}?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
    setStatus('WhatsApp opened with your details ready to send.');
    event.currentTarget.reset();
  };

  const fieldClass = 'w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-sm text-[#f4efd9] placeholder:text-[#9fa292] focus:border-[#a7b48b] focus:outline-none focus:ring-2 focus:ring-[#a7b48b]/30';

  return (
    <footer id="consultation" className="w-full bg-[#0b110c] text-[#eee9d8] py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
        <div>
          <div className="flex items-center gap-2">
            <MushroomIcon className="w-5 h-5 text-[#D1E6BF]" />
            <h2 className="font-serif font-bold text-lg">Udhayan Mushroom Cultivation Farm</h2>
          </div>
          <p className="mt-2 text-sm text-[#b7baa8]">Kadachanenthal, Madurai, Tamil Nadu</p>
          <p className="mt-6 text-sm leading-relaxed text-[#b7baa8]">
            Have a question about cultivation or training? Send us your contact details and we’ll get back to you.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-4" aria-label="Request a consultation">
          <label className="text-sm text-[#d6d9c8]">
            Name
            <input className={`${fieldClass} mt-2`} type="text" name="name" autoComplete="name" placeholder="Your name" required />
          </label>
          <label className="text-sm text-[#d6d9c8]">
            Email
            <input className={`${fieldClass} mt-2`} type="email" name="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
          <label className="text-sm text-[#d6d9c8]">
            Phone number
            <input className={`${fieldClass} mt-2`} type="tel" name="phone" autoComplete="tel" placeholder="Your phone number" required />
          </label>
          <label className="text-sm text-[#d6d9c8]">
            Address
            <input className={`${fieldClass} mt-2`} type="text" name="address" autoComplete="street-address" placeholder="Your address" required />
          </label>
          <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
            <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#25D366] px-6 py-3 font-semibold text-white hover:bg-[#1DA851] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white">
              Send via WhatsApp
            </button>
            <p className="text-xs text-[#9fa292]">WhatsApp will open with your details ready to send.</p>
          </div>
          {status && <p className="sm:col-span-2 text-sm text-[#d6c89e]" role="status">{status}</p>}
        </form>
      </div>
    </footer>
  );
}
