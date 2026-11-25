import React from 'react';
import { MessageCircle, MapPin } from 'lucide-react';
import MushroomIcon from './MushroomIcon';
import { getWhatsAppUrl } from '../utils/whatsapp';

export default function Footer() {
  return (
    <footer className="w-full py-16 border-t" style={{ background: '#070c08', borderColor: 'rgba(167,180,139,.12)' }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-12">

        <div className="flex flex-col items-center text-center">
          <div className="flex items-center justify-center gap-2.5 mb-4">
            <MushroomIcon className="w-5 h-5" style={{ color: 'var(--green-soft)' }} />
            <span className="font-serif font-bold text-lg" style={{ color: 'var(--cream)' }}>
              Udhayan Mushroom Cultivation Farm
            </span>
          </div>

          <div className="flex items-center justify-center gap-2 mb-6">
            <MapPin className="w-4 h-4 shrink-0" style={{ color: 'var(--sage)' }} />
            <p className="text-sm" style={{ color: 'var(--muted)' }}>
              Kadachanenthal, Madurai, Tamil Nadu
            </p>
          </div>

          <p className="max-w-xl text-sm leading-relaxed mb-6" style={{ color: 'var(--muted)' }}>
            Have a question about cultivation or training? Reach out to us directly on WhatsApp.
          </p>

          <a
            href={getWhatsAppUrl()}
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

        {/* Bottom bar */}
        <div
          className="mt-14 pt-6 flex flex-col items-center gap-3 text-center text-xs border-t"
          style={{ borderColor: 'rgba(167,180,139,.1)', color: '#5a6054' }}
        >
          <span>© {new Date().getFullYear()} Udhayan Mushroom Cultivation Farm. All rights reserved.</span>
          <span>Established 17 January 2007 · Madurai, Tamil Nadu</span>
        </div>
      </div>
    </footer>
  );
}
