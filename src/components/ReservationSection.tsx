import React, { useState } from 'react';
import { Calendar, Clock, Users, Sparkles, CheckCircle2, Shield, Phone, Mail, Award, X, Wine, Send, MessageCircle } from 'lucide-react';
import { ReservationDetails } from '../types';

interface ReservationSectionProps {
  isOpenModal?: boolean;
  onCloseModal?: () => void;
  preSelectedPlan?: string;
  defaultGuests?: number;
}

export const ReservationSection: React.FC<ReservationSectionProps> = ({
  isOpenModal,
  onCloseModal,
  preSelectedPlan = '',
  defaultGuests = 2,
}) => {
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    date: new Date().toISOString().split('T')[0],
    time: '20:30',
    guests: defaultGuests,
    seatingArea: 'The Velvet Sangria Lounge' as ReservationDetails['seatingArea'],
    occasion: 'Anniversary / Celebration',
    specialRequests: preSelectedPlan || ''
  });

  const [confirmedReservation, setConfirmedReservation] = useState<ReservationDetails | null>(null);
  const [formError, setFormError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setFormError('Please provide your name and contact phone number to proceed.');
      return;
    }
    setFormError(null);

    const newReservation: ReservationDetails = {
      id: `SANGRIA-${Math.floor(100000 + Math.random() * 900000)}`,
      fullName: formData.fullName,
      phone: formData.phone,
      email: formData.email,
      date: formData.date,
      time: formData.time,
      guests: formData.guests,
      seatingArea: formData.seatingArea,
      occasion: formData.occasion,
      specialRequests: formData.specialRequests,
      preSelectedPlan: preSelectedPlan,
      createdAt: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setConfirmedReservation(newReservation);
  };

  const seatingOptions: { name: ReservationDetails['seatingArea']; tag: string; desc: string }[] = [
    { name: 'The Velvet Sangria Lounge', tag: 'Indoor Velvet', desc: 'Plush velvet banquettes, candlelight, and Spanish mood music.' },
    { name: 'The Starlight Rooftop & Cabana', tag: 'Open Air Skyline', desc: 'Starlit pergolas, fairy lights, live flamenco guitar.' },
    { name: 'The Vintage Wine Cellar', tag: 'Private Vault', desc: 'Surrounded by rare vintage wines with personal sommelier.' },
    { name: 'The Golden Brass Bar', tag: 'Nightlife & Beats', desc: 'Brass counter, mixology theater, resident DJ console.' }
  ];

  const generateWhatsAppUrl = (res: ReservationDetails) => {
    const text = `🍷 *SANGRIA RESTRO & BAR - VIP TABLE RESERVATION*
Booking Pass ID: ${res.id}
Guest: ${res.fullName}
Phone: ${res.phone}
Date: ${res.date} at ${res.time}
Guests: ${res.guests} Person(s)
Seating Zone: ${res.seatingArea}
Occasion: ${res.occasion}
${res.specialRequests ? `Special Requests/Plan: ${res.specialRequests}` : ''}
Please confirm my VIP table. Thank you!`;
    return `https://wa.me/919829088221?text=${encodeURIComponent(text)}`;
  };

  const content = (
    <div className="max-w-5xl mx-auto">
      <div className="text-center max-w-2xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8c1426] bg-[#24050a] text-[#dfc571] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(105,12,27,0.4)]">
          <Wine className="w-3.5 h-3.5 text-[#d4af37]" />
          <span>Priority Table & Cabana Booking</span>
        </div>
        <h2 className="font-exotic text-3xl sm:text-5xl font-bold tracking-wide text-[#fbf8eb] mb-3">
          RESERVE YOUR VIP TABLE
        </h2>
        <p className="font-italiana text-xl text-[#dfc571]">
          Make Your Evening Unforgettable at Sangría Royale
        </p>
        <p className="text-xs sm:text-sm text-[#b5ad9e] mt-1">
          Complimentary valet parking and personalized welcome sangria flute for all reserved patrons.
        </p>
      </div>

      <div className="p-6 sm:p-10 rounded-3xl border border-[#420811] bg-gradient-to-b from-[#140205] via-[#0d0305] to-[#080506] shadow-[0_25px_60px_rgba(0,0,0,0.85)]">
        
        {preSelectedPlan && (
          <div className="p-4 rounded-2xl bg-[#24050a] border border-[#d4af37]/60 mb-8 flex items-center justify-between">
            <div className="text-xs text-[#f5eed0]">
              <span className="font-bold text-[#dfc571]">Pre-Configured Plan Attached:</span> {preSelectedPlan}
            </div>
            <span className="text-[10px] bg-[#8c1426] text-white px-2 py-0.5 rounded-full uppercase font-bold shrink-0">
              Active Plan
            </span>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-8">
          
          {/* 1. Seating Area Selection */}
          <div>
            <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-3">
              1. Choose Seating Ambiance / Lounge
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
              {seatingOptions.map((opt) => {
                const isSelected = formData.seatingArea === opt.name;
                return (
                  <button
                    key={opt.name}
                    type="button"
                    onClick={() => setFormData({ ...formData, seatingArea: opt.name })}
                    className={`p-4 rounded-2xl border text-left transition-all ${
                      isSelected
                        ? 'border-[#d4af37] bg-gradient-to-b from-[#420811] to-[#24050a] text-white shadow-[0_0_20px_rgba(105,12,27,0.5)]'
                        : 'border-[#24050a] bg-[#140205] text-[#8e8576] hover:border-[#690c1b] hover:text-[#dfc571]'
                    }`}
                  >
                    <span className="text-[9px] uppercase tracking-wider text-[#dfc571] font-bold block mb-1">
                      {opt.tag}
                    </span>
                    <div className="font-playfair text-sm font-bold">{opt.name}</div>
                    <div className="text-[10px] text-[#a89f91] mt-1 leading-snug">{opt.desc}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. Date, Time & Guests */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-2">
                Date of Visit
              </label>
              <div className="relative">
                <input
                  type="date"
                  required
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#140205] border border-[#420811] text-white text-xs font-sans focus:outline-none focus:border-[#d4af37]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-2">
                Preferred Time Slot
              </label>
              <select
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#140205] border border-[#420811] text-white text-xs font-sans focus:outline-none focus:border-[#d4af37]"
              >
                <optgroup label="Sunset & Happy Hours (4 PM - 8 PM)">
                  <option value="16:30">04:30 PM (Sunset Hours 1+1)</option>
                  <option value="17:30">05:30 PM (Sunset Hours 1+1)</option>
                  <option value="18:30">06:30 PM (Sunset Hours 1+1)</option>
                  <option value="19:30">07:30 PM (Sunset Hours 1+1)</option>
                </optgroup>
                <optgroup label="Dinner & Nightlife (8 PM - 1:30 AM)">
                  <option value="20:00">08:00 PM (Live Flamenco / DJ)</option>
                  <option value="20:45">08:45 PM (Prime Dinner)</option>
                  <option value="21:30">09:30 PM (Prime Dinner)</option>
                  <option value="22:30">10:30 PM (Late Night Cocktails)</option>
                  <option value="23:30">11:30 PM (Midnight Speakeasy)</option>
                </optgroup>
                <optgroup label="Sunday Boozy Brunch (12:30 PM - 4:30 PM)">
                  <option value="13:00">01:00 PM (Sunday Brunch)</option>
                  <option value="14:00">02:00 PM (Sunday Brunch)</option>
                </optgroup>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-2">
                Party Size (Guests)
              </label>
              <select
                value={formData.guests}
                onChange={(e) => setFormData({ ...formData, guests: parseInt(e.target.value) })}
                className="w-full px-4 py-3 rounded-xl bg-[#140205] border border-[#420811] text-white text-xs font-sans focus:outline-none focus:border-[#d4af37]"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 15, 20].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? 'Guest (Solo Lounge)' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* 3. Guest Contact Details */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-2">
                Primary Guest Name *
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Vikramaditya Rathore"
                value={formData.fullName}
                onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#140205] border border-[#420811] text-white text-xs placeholder-[#5a4e40] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-2">
                Phone Number (for SMS & WhatsApp) *
              </label>
              <input
                type="tel"
                required
                placeholder="+91 98290 XXXXX"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#140205] border border-[#420811] text-white text-xs placeholder-[#5a4e40] focus:outline-none focus:border-[#d4af37]"
              />
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-2">
                Email Address (for VIP Voucher)
              </label>
              <input
                type="email"
                placeholder="guest@luxury.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#140205] border border-[#420811] text-white text-xs placeholder-[#5a4e40] focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          {/* 4. Occasion & Special Requests */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-2">
                Dining Occasion
              </label>
              <select
                value={formData.occasion}
                onChange={(e) => setFormData({ ...formData, occasion: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#140205] border border-[#420811] text-white text-xs font-sans focus:outline-none focus:border-[#d4af37]"
              >
                <option value="Romantic Date Night">Romantic Date Night</option>
                <option value="Birthday Celebration">Birthday Celebration (Complimentary Dessert)</option>
                <option value="Anniversary Dinner">Anniversary Celebration</option>
                <option value="Squad Weekend Party">Squad Weekend Party / Night Out</option>
                <option value="Corporate / Executive Dining">Corporate / Executive Dinner</option>
                <option value="Casual Fine Dining">Casual Sangria & Tapas</option>
              </select>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-widest text-[#dfc571] font-semibold mb-2">
                Special Dietary or Seating Notes
              </label>
              <input
                type="text"
                placeholder="e.g. Jain food options, corner sofa, chilled Sangria pitcher ready on arrival"
                value={formData.specialRequests}
                onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                className="w-full px-4 py-3 rounded-xl bg-[#140205] border border-[#420811] text-white text-xs placeholder-[#5a4e40] focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          {/* Submit CTA */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-xs text-[#a89f91]">
              <Shield className="w-4 h-4 text-[#d4af37]" />
              <span>Instant Digital Pass • No prepayment required • Free cancellation</span>
            </div>

            {formError && (
              <div className="w-full p-3 rounded-xl bg-[#420811]/90 border border-[#8c1426] text-[#f5eed0] text-xs font-semibold text-center">
                {formError}
              </div>
            )}

            <button
              type="submit"
              className="w-full sm:w-auto px-10 py-4 rounded-full bg-gradient-to-r from-[#d4af37] via-[#e8c868] to-[#b89324] text-black font-bold text-xs uppercase tracking-[0.25em] hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all"
            >
              Confirm VIP Reservation
            </button>
          </div>

        </form>

      </div>

      {/* Confirmation Modal / Pass */}
      {confirmedReservation && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="relative w-full max-w-lg rounded-3xl bg-gradient-to-b from-[#24050a] via-[#140205] to-[#080506] border-2 border-[#d4af37] p-6 sm:p-8 shadow-[0_0_50px_rgba(212,175,55,0.3)]">
            <button
              onClick={() => setConfirmedReservation(null)}
              className="absolute top-4 right-4 p-2 text-[#a89f91] hover:text-white rounded-full bg-[#140205] border border-[#420811]"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center mb-6">
              <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center mx-auto mb-3">
                <CheckCircle2 className="w-8 h-8 text-[#d4af37]" />
              </div>
              <div className="inline-block px-3 py-1 rounded-full bg-[#8c1426] text-white text-[10px] font-bold uppercase tracking-widest mb-2">
                VIP Pass Confirmed
              </div>
              <h3 className="font-exotic text-2xl font-bold text-white">
                SANGRIA RESTRO & BAR
              </h3>
              <p className="text-xs text-[#dfc571]">Priority Table Access Pass</p>
            </div>

            {/* Pass Card */}
            <div className="p-5 rounded-2xl bg-[#080506] border border-[#420811] space-y-3 text-xs mb-6">
              <div className="flex justify-between border-b border-[#24050a] pb-2">
                <span className="text-[#a89f91]">Pass ID:</span>
                <span className="font-mono text-[#dfc571] font-bold">{confirmedReservation.id}</span>
              </div>
              <div className="flex justify-between border-b border-[#24050a] pb-2">
                <span className="text-[#a89f91]">Guest:</span>
                <span className="text-white font-bold">{confirmedReservation.fullName}</span>
              </div>
              <div className="flex justify-between border-b border-[#24050a] pb-2">
                <span className="text-[#a89f91]">Date & Time:</span>
                <span className="text-white font-semibold">{confirmedReservation.date} at {confirmedReservation.time}</span>
              </div>
              <div className="flex justify-between border-b border-[#24050a] pb-2">
                <span className="text-[#a89f91]">Party:</span>
                <span className="text-white font-semibold">{confirmedReservation.guests} Guest(s)</span>
              </div>
              <div className="flex justify-between border-b border-[#24050a] pb-2">
                <span className="text-[#a89f91]">Lounge Area:</span>
                <span className="text-[#dfc571] font-semibold">{confirmedReservation.seatingArea}</span>
              </div>
              {confirmedReservation.specialRequests && (
                <div className="pt-1 text-[11px] text-[#a89f91]">
                  <strong className="text-white">Plan/Notes:</strong> {confirmedReservation.specialRequests}
                </div>
              )}
            </div>

            {/* Action buttons */}
            <div className="space-y-3">
              <a
                href={generateWhatsAppUrl(confirmedReservation)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Send Pass to Host via WhatsApp</span>
              </a>

              <button
                onClick={() => setConfirmedReservation(null)}
                className="w-full py-3 rounded-full border border-[#420811] text-[#a89f91] hover:text-white text-xs font-semibold"
              >
                Done
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );

  if (isOpenModal) {
    return (
      <div className="fixed inset-0 z-50 overflow-y-auto bg-black/90 backdrop-blur-md p-4 sm:p-6 flex items-center justify-center">
        <div className="relative w-full max-w-5xl my-8">
          <button
            onClick={onCloseModal}
            className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#140205] text-[#b5ad9e] hover:text-white border border-[#420811]"
          >
            <X className="w-6 h-6" />
          </button>
          {content}
        </div>
      </div>
    );
  }

  return (
    <section id="reservation" className="py-24 bg-[#080506] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {content}
      </div>
    </section>
  );
};
