const configuredNumber = import.meta.env.VITE_OWNER_WHATSAPP_NUMBER || '919655196699';

export const WHATSAPP_NUMBER = configuredNumber.replace(/\D/g, '');

export function getWhatsAppUrl(message = '') {
  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  return message ? `${baseUrl}?text=${encodeURIComponent(message)}` : baseUrl;
}
