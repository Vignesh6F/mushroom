import React, { useState } from 'react';
import { MessageCircle, MapPin, Phone } from 'lucide-react';
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

  const field = 'w-full rounded-xl border px-4 py-3 text-sm transition-colors focus:outline-none focus:ring-2';
  const fieldStyle = {
    background: 'rgba(255,255,255,.04)',
    borderColor: 'rgba(167,180,139,.18)',
    color: '#f0ebd8',
  };

  return (
    <footer id="consultation" className="w-full py-16 border-t" style={{ background: '#070c08', borderColor: 'rgba(167,180,139,.12)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        {/* Top grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left — farm info */}
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <MushroomIcon className="w-5 h-5" style={{ color: 'var(--green-soft)' }} />
              <span className="font-serif font-bold text-lg" style={{ color: 'var(--cream)' }}>
                Udhayan Mushroom Cultivation Farm
              </span>
            </div>

            <div className="flex items-start gap-2 mb-6">
              <MapPin className="w-4 h-4 mt-0.5 shrink-0" style={{ color: 'var(--sage)' }} />
              <p className="text-sm" style={{ color: 'var(--muted)' }}>
                Kadachanenthal, Madurai, Tamil Nadu
              </p>
            </div>

            <p className="text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
              Have a question about cultivation or training? Fill in your details and we'll reach out
              via WhatsApp as soon as possible.
            </p>

            {/* Quick contact */}
            <a
              href="https://wa.me/91"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full text-sm font-semibold transition-all hover:-translate-y-1"
              style={{
                background: 'rgba(37,211,102,.12)',
                border: '1px solid rgba(37,211,102,.3)',
                color: '#4bde82',
              }}
            >
              <MessageCircle size={16} />
              Chat on WhatsApp
            </a>
          </div>

          {/* Right — consultation form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            aria-label="Request a consultation"
          >
            <label className="text-sm flex flex-col gap-1.5" style={{ color: 'var(--muted)' }}>
              Name
              <input
                className={field}
                style={fieldStyle}
                type="text"
                name="name"
                autoComplete="name"
                placeholder="Your name"
                required
                onFocus={(e) => { e.target.style.borderColor = 'rgba(167,180,139,.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(167,180,139,.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(167,180,139,.18)'; e.target.style.boxShadow = 'none'; }}
              />
            </label>

            <label className="text-sm flex flex-col gap-1.5" style={{ color: 'var(--muted)' }}>
              Email
              <input
                className={field}
                style={fieldStyle}
                type="email"
                name="email"
                autoComplete="email"
                placeholder="you@example.com"
                required
                onFocus={(e) => { e.target.style.borderColor = 'rgba(167,180,139,.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(167,180,139,.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(167,180,139,.18)'; e.target.style.boxShadow = 'none'; }}
              />
            </label>

            <label className="text-sm flex flex-col gap-1.5" style={{ color: 'var(--muted)' }}>
              Phone number
              <input
                className={field}
                style={fieldStyle}
                type="tel"
                name="phone"
                autoComplete="tel"
                placeholder="Your phone number"
                required
                onFocus={(e) => { e.target.style.borderColor = 'rgba(167,180,139,.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(167,180,139,.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(167,180,139,.18)'; e.target.style.boxShadow = 'none'; }}
              />
            </label>

            <label className="text-sm flex flex-col gap-1.5" style={{ color: 'var(--muted)' }}>
              Address
              <input
                className={field}
                style={fieldStyle}
                type="text"
                name="address"
                autoComplete="street-address"
                placeholder="Your address"
                required
                onFocus={(e) => { e.target.style.borderColor = 'rgba(167,180,139,.5)'; e.target.style.boxShadow = '0 0 0 3px rgba(167,180,139,.1)'; }}
                onBlur={(e) => { e.target.style.borderColor = 'rgba(167,180,139,.18)'; e.target.style.boxShadow = 'none'; }}
              />
            </label>

            <div className="sm:col-span-2 flex flex-col sm:flex-row sm:items-center gap-3">
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 font-semibold text-sm text-white transition-all hover:-translate-y-1"
                style={{ background: '#25D366', boxShadow: '0 6px 20px rgba(37,211,102,.2)' }}
                onMouseEnter={(e) => e.currentTarget.style.background = '#1DA851'}
                onMouseLeave={(e) => e.currentTarget.style.background = '#25D366'}
              >
                <MessageCircle size={16} />
                Send via WhatsApp
              </button>
              <p className="text-xs" style={{ color: '#7a8070' }}>
                WhatsApp will open with your details ready.
              </p>
            </div>

            {status && (
              <p className="sm:col-span-2 text-sm" role="status" style={{ color: 'var(--gold)' }}>
                {status}
              </p>
            )}
          </form>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs border-t"
          style={{ borderColor: 'rgba(167,180,139,.1)', color: '#5a6054' }}
        >
          <span>© {new Date().getFullYear()} Udhayan Mushroom Cultivation Farm. All rights reserved.</span>
          <span>Established 17 January 2007 · Madurai, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
