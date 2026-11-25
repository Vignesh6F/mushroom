import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, CalendarDays, Users, MessageSquare, Send, CheckCircle2, ChevronDown } from 'lucide-react';
import { fadeInUp, staggerContainer, staggerItem, viewport } from '../utils/animations';
import { getWhatsAppUrl } from '../utils/whatsapp';

const trainingOptions = [
  'Oyster & Milky Mushroom Cultivation',
  'Mushroom Spawn Training',
  'Mushroom Culture Training',
  'Compost Preparation from Waste',
  'Value-Added Products Training',
  'General Consultation / Farm Visit',
  'Entrepreneurship Mentoring',
];

const groupOptions = ['1 (Individual)', '2–5', '6–15', '16–30', '30+'];

const INITIAL = {
  name: '',
  phone: '',
  email: '',
  training: '',
  date: '',
  group: '',
  message: '',
};

function Field({ label, icon: Icon, error, children }) {
  return (
    <div className="consult-field">
      <label className="consult-label">
        <Icon className="consult-label-icon" aria-hidden="true" />
        {label}
      </label>
      {children}
      {error && <span className="consult-error">{error}</span>}
    </div>
  );
}

export default function ConsultationSection() {
  const [form, setForm] = useState(INITIAL);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const submittedName = useRef('');

  const set = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  function validate() {
    const e = {};
    if (!form.name.trim())    e.name     = 'Full name is required.';
    if (!form.phone.trim())   e.phone    = 'Phone number is required.';
    else if (!/^\+?[\d\s\-]{7,15}$/.test(form.phone.trim())) e.phone = 'Enter a valid phone number.';
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email address.';
    if (!form.training)       e.training = 'Please select a training or consultation type.';
    if (!form.group)          e.group    = 'Please select a group size.';
    return e;
  }

  function buildWhatsAppMessage(f) {
    const lines = [
      '🍄 *New Consultation Enquiry — Udhayan Farm*',
      '',
      `👤 *Name:* ${f.name}`,
      `📞 *Phone:* ${f.phone}`,
      f.email ? `📧 *Email:* ${f.email}` : null,
      `📚 *Training / Type:* ${f.training}`,
      f.date  ? `📅 *Preferred Date:* ${f.date}` : null,
      `👥 *Group Size:* ${f.group}`,
      f.message ? `\n💬 *Message:*\n${f.message}` : null,
    ];
    return lines.filter(Boolean).join('\n');
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setErrors({});

    const message = buildWhatsAppMessage(form);
    const url = getWhatsAppUrl(message);
    window.open(url, '_blank', 'noopener,noreferrer');

    submittedName.current = form.name;
    setSubmitted(true);
    setForm(INITIAL);
  }

  return (
    <section id="consultation">
      <div className="section-wrap">

        {/* Header */}
        <motion.div
          className="section-header"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeInUp}
        >
          <span className="section-eyebrow">Book a Session</span>
          <h2 className="section-heading">Consultation &amp; Training Enquiry</h2>
          <p className="section-body">
            Fill in the form below and our team at Udhayan Farm will get back to you within
            <strong style={{ color: 'var(--gold)' }}> 24 hours</strong>. All fields marked
            with <span style={{ color: '#e06c6c' }}>*</span> are required.
          </p>
        </motion.div>

        {/* Two-column layout: form + info panel */}
        <motion.div
          className="consult-layout"
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={staggerContainer}
        >

          {/* ── LEFT: Form ── */}
          <motion.div variants={staggerItem} className="consult-form-wrap card-dark">
            {submitted ? (
              <div className="consult-success">
                <span className="consult-success-icon">
                  <CheckCircle2 size={48} />
                </span>
                <h3>WhatsApp Opened! 🎉</h3>
                <p>
                  Hi <strong>{submittedName.current || 'there'}</strong>! Your enquiry has been pre-filled in
                  WhatsApp. Just hit <strong>Send</strong> and we'll respond promptly.
                </p>
                <button className="consult-btn-reset" onClick={() => setSubmitted(false)}>
                  Submit another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="consult-form" aria-label="Consultation enquiry form">

                {/* Row 1 — Name + Phone */}
                <div className="consult-row">
                  <Field label={<>Full Name <span style={{ color: '#e06c6c' }}>*</span></>} icon={User} error={errors.name}>
                    <input
                      id="consult-name"
                      type="text"
                      className={`consult-input ${errors.name ? 'consult-input-err' : ''}`}
                      placeholder="e.g. Ramesh Kumar"
                      value={form.name}
                      onChange={set('name')}
                      autoComplete="name"
                    />
                  </Field>

                  <Field label={<>Phone Number <span style={{ color: '#e06c6c' }}>*</span></>} icon={Phone} error={errors.phone}>
                    <input
                      id="consult-phone"
                      type="tel"
                      className={`consult-input ${errors.phone ? 'consult-input-err' : ''}`}
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={set('phone')}
                      autoComplete="tel"
                    />
                  </Field>
                </div>

                {/* Row 2 — Email */}
                <Field label="Email Address (optional)" icon={Mail} error={errors.email}>
                  <input
                    id="consult-email"
                    type="email"
                    className={`consult-input ${errors.email ? 'consult-input-err' : ''}`}
                    placeholder="you@example.com"
                    value={form.email}
                    onChange={set('email')}
                    autoComplete="email"
                  />
                </Field>

                {/* Row 3 — Training type */}
                <Field label={<>Training / Consultation Type <span style={{ color: '#e06c6c' }}>*</span></>} icon={CalendarDays} error={errors.training}>
                  <div className="consult-select-wrap">
                    <select
                      id="consult-training"
                      className={`consult-input consult-select ${errors.training ? 'consult-input-err' : ''}`}
                      value={form.training}
                      onChange={set('training')}
                    >
                      <option value="">— Select a training programme —</option>
                      {trainingOptions.map((o) => (
                        <option key={o} value={o}>{o}</option>
                      ))}
                    </select>
                    <ChevronDown className="consult-select-caret" aria-hidden="true" />
                  </div>
                </Field>

                {/* Row 4 — Preferred date + Group size */}
                <div className="consult-row">
                  <Field label="Preferred Date" icon={CalendarDays} error={errors.date}>
                    <input
                      id="consult-date"
                      type="date"
                      className="consult-input consult-date"
                      value={form.date}
                      min={new Date().toISOString().split('T')[0]}
                      onChange={set('date')}
                    />
                  </Field>

                  <Field label={<>Group Size <span style={{ color: '#e06c6c' }}>*</span></>} icon={Users} error={errors.group}>
                    <div className="consult-select-wrap">
                      <select
                        id="consult-group"
                        className={`consult-input consult-select ${errors.group ? 'consult-input-err' : ''}`}
                        value={form.group}
                        onChange={set('group')}
                      >
                        <option value="">— Participants —</option>
                        {groupOptions.map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                      <ChevronDown className="consult-select-caret" aria-hidden="true" />
                    </div>
                  </Field>
                </div>

                {/* Row 5 — Message */}
                <Field label="Your Message / Questions" icon={MessageSquare} error={errors.message}>
                  <textarea
                    id="consult-message"
                    className="consult-input consult-textarea"
                    placeholder="Tell us your goals, existing setup, or any specific questions…"
                    value={form.message}
                    onChange={set('message')}
                    rows={4}
                  />
                </Field>

                <button
                  id="consult-submit"
                  type="submit"
                  className="consult-submit"
                >
                  <Send size={16} />
                  Send to WhatsApp
                </button>

              </form>
            )}
          </motion.div>

          {/* ── RIGHT: Info Panel ── */}
          <motion.aside variants={staggerItem} className="consult-info">

            <div className="consult-info-card card-dark">
              <h3 className="consult-info-title">Why Consult Udhayan?</h3>
              <ul className="consult-info-list">
                {[
                  ['🍄', '13+ years of hands-on experience in mushroom cultivation.'],
                  ['🎓', 'Nearly 2,000 individual & group trainees since 2013.'],
                  ['🌿', 'Practical field sessions at the farm — not just theory.'],
                  ['📦', 'Post-training support for spawn supply & troubleshooting.'],
                  ['💼', 'Entrepreneurship mentoring for new mushroom businesses.'],
                ].map(([emoji, text]) => (
                  <li key={text} className="consult-info-item">
                    <span className="consult-info-emoji">{emoji}</span>
                    <span>{text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="consult-info-card card-dark consult-contact-card">
              <h3 className="consult-info-title">Quick Contact</h3>
              <p className="consult-contact-label">Prefer to reach us directly?</p>
              <a
                href={getWhatsAppUrl("I'd like to enquire about a consultation")}
                target="_blank"
                rel="noopener noreferrer"
                className="consult-wa-btn"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.126 1.533 5.857L.057 23.882a.5.5 0 0 0 .613.613l6.102-1.47A11.942 11.942 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.6a9.588 9.588 0 0 1-4.9-1.342l-.351-.208-3.624.873.892-3.538-.228-.363A9.567 9.567 0 0 1 2.4 12C2.4 6.698 6.698 2.4 12 2.4S21.6 6.698 21.6 12 17.302 21.6 12 21.6z"/>
                </svg>
                Chat on WhatsApp
              </a>
            </div>

          </motion.aside>

        </motion.div>
      </div>
    </section>
  );
}
