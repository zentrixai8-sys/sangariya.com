import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/restaurantData';
import { Clock, MapPin, Phone, Mail, ChevronDown, ChevronUp, ShieldCheck, Car, HelpCircle, Navigation, MessageCircle, Wine } from 'lucide-react';

export const RestaurantInfoAndFAQ: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [faqCategory, setFaqCategory] = useState<string>('all');

  const filteredFaqs = FAQ_ITEMS.filter((f) => {
    if (faqCategory === 'all') return true;
    return f.category === faqCategory;
  });

  return (
    <section id="faq" className="py-24 bg-[#080506] relative border-t border-[#420811]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8c1426] bg-[#24050a] text-[#dfc571] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(105,12,27,0.4)]">
            <HelpCircle className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Essential Details & Guest Guidance</span>
          </div>

          <h2 className="font-exotic text-3xl sm:text-5xl font-bold tracking-wide text-[#fbf8eb] mb-3">
            LOCATION, TIMINGS & FREQUENTLY ASKED
          </h2>

          <p className="font-italiana text-xl text-[#dfc571]">
            Everything You Need for a Seamless Dining & Lounge Experience
          </p>
        </div>

        {/* 2-Columns: Left Practical Info Card & Map, Right FAQ Accordion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: 5 Cols (Practical Info & Map) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Quick Details Card */}
            <div className="rounded-3xl bg-gradient-to-b from-[#140205] to-[#080506] border border-[#420811] p-6 sm:p-8 shadow-2xl">
              <h3 className="font-exotic text-xl font-bold text-white mb-6 flex items-center gap-2">
                <Wine className="w-5 h-5 text-[#d4af37]" />
                <span>SANGRIA RESTRO & BAR</span>
              </h3>

              <div className="space-y-5 text-xs text-[#b5ad9e]">
                {/* Hours */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#24050a] border border-[#420811] text-[#d4af37] shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white font-bold mb-1">
                      Operating Hours
                    </div>
                    <div><strong>Lunch & Tapas:</strong> 12:00 PM – 04:00 PM</div>
                    <div><strong className="text-[#ecdda4]">Sangria Sunset Happy Hours:</strong> 04:00 PM – 08:00 PM (1+1)</div>
                    <div><strong>Dinner & Speakeasy Bar:</strong> 08:00 PM – 01:30 AM</div>
                    <div className="text-[11px] text-[#dfc571] mt-1">Open 7 Days a Week</div>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#24050a] border border-[#420811] text-[#d4af37] shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white font-bold mb-1">
                      Address & Neighborhood
                    </div>
                    <div>Sangria Restro & Bar Building, Royal Heritage Promenade</div>
                    <div>Main Sangariya Boulevard, Civil Lines Extension</div>
                    <div className="text-[11px] text-[#a89f91] mt-1">Landmark: Opposite Heritage Fountain Gardens</div>
                  </div>
                </div>

                {/* Valet & Parking */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#24050a] border border-[#420811] text-[#d4af37] shrink-0 mt-0.5">
                    <Car className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white font-bold mb-1">
                      Valet Parking
                    </div>
                    <div>100% Complimentary VIP Valet Parking at the Main Portico. Safe subterranean car care.</div>
                  </div>
                </div>

                {/* Contact & WhatsApp */}
                <div className="flex items-start gap-3.5">
                  <div className="p-2.5 rounded-xl bg-[#24050a] border border-[#420811] text-[#d4af37] shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-wider text-white font-bold mb-1">
                      Direct Reservations & Desk
                    </div>
                    <a href="tel:+919829088221" className="text-white hover:text-[#dfc571] block font-semibold">
                      +91 98290 88221 / +91 98290 88222
                    </a>
                    <a href="mailto:concierge@sangriarestrobar.com" className="text-[#a89f91] hover:text-white block mt-0.5">
                      concierge@sangriarestrobar.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Direct Buttons */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-5 border-t border-[#24050a]">
                <a
                  href="https://wa.me/919829088221?text=Hello%20Sangria%20Restro%20Bar%2C%20I%20have%20an%20inquiry%20regarding%20table%20reservation."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2.5 px-3 rounded-xl bg-emerald-700/80 hover:bg-emerald-600 text-white font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Desk</span>
                </a>
                <a
                  href="tel:+919829088221"
                  className="py-2.5 px-3 rounded-xl bg-gradient-to-r from-[#d4af37] to-[#b89324] text-black font-bold text-xs flex items-center justify-center gap-1.5 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Maître d'</span>
                </a>
              </div>
            </div>

            {/* Simulated Live Google Maps Card */}
            <div className="rounded-3xl overflow-hidden border border-[#420811] relative bg-[#140205] h-52 group shadow-xl">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                alt="Map overview"
                className="w-full h-full object-cover brightness-[0.35] contrast-125"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="absolute inset-0 p-5 flex flex-col justify-between">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-[#8c1426] text-white text-[10px] font-bold uppercase tracking-wider">
                    Interactive Map Pin
                  </span>
                  <Navigation className="w-4 h-4 text-[#d4af37] animate-pulse" />
                </div>

                <div>
                  <div className="font-playfair text-base font-bold text-white mb-0.5">
                    Sangria Restro & Bar
                  </div>
                  <div className="text-xs text-[#ecdda4]">
                    Civil Lines, Sangariya Promenade • 12 Mins from City Center
                  </div>
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-[11px] text-[#dfc571] hover:underline mt-2 font-semibold"
                  >
                    <span>Open in Google Maps / Get Navigation</span>
                    <span>→</span>
                  </a>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: 7 Cols (FAQ Accordion) */}
          <div className="lg:col-span-7">
            
            {/* Category tabs */}
            <div className="flex items-center gap-2 mb-6 flex-wrap">
              {[
                { id: 'all', label: 'All Questions' },
                { id: 'Bar & Drinks', label: 'Bar & Sangrias' },
                { id: 'Reservations', label: 'Bookings' },
                { id: 'Dress Code', label: 'Dress & Parking' },
                { id: 'Events', label: 'Events & Parties' }
              ].map((c) => (
                <button
                  key={c.id}
                  onClick={() => setFaqCategory(c.id)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wider transition-all ${
                    faqCategory === c.id
                      ? 'bg-[#8c1426] text-white shadow-md'
                      : 'bg-[#140205] text-[#a89f91] border border-[#24050a] hover:text-white'
                  }`}
                >
                  {c.label}
                </button>
              ))}
            </div>

            {/* Accordion list */}
            <div className="space-y-4">
              {filteredFaqs.map((faq, index) => {
                const isOpen = openFaqIndex === index;
                return (
                  <div
                    key={faq.question}
                    className="rounded-2xl bg-[#140205] border border-[#24050a] hover:border-[#690c1b] transition-all overflow-hidden"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : index)}
                      className="w-full p-5 text-left flex items-center justify-between gap-4"
                    >
                      <span className="font-playfair text-base font-bold text-white">
                        {faq.question}
                      </span>
                      <span className="p-1 rounded-full bg-[#24050a] text-[#d4af37] shrink-0">
                        {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-5 pb-5 text-xs text-[#c8bfb0] leading-relaxed border-t border-[#24050a] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Still have questions banner */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-[#24050a] to-[#140205] border border-[#8c1426] flex items-center justify-between gap-4">
              <div>
                <div className="font-playfair text-base font-bold text-white mb-1">
                  Have a Custom Event or Dietary Requirement?
                </div>
                <div className="text-xs text-[#a89f91]">
                  Our Hospitality Director is available 24/7 on WhatsApp for immediate assistance.
                </div>
              </div>
              <a
                href="https://wa.me/919829088221?text=Hello%20Sangria%20Restro%20Bar%2C%20I%20have%20a%20special%20inquiry."
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs whitespace-nowrap shadow-lg transition-colors"
              >
                Chat on WhatsApp
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
