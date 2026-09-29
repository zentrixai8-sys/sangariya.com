import React from 'react';
import { Sparkles, MapPin, Phone, Mail, Clock, Wine, Instagram, Facebook, Globe, MessageCircle } from 'lucide-react';

interface FooterProps {
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenBooking }) => {
  return (
    <footer className="bg-[#050304] border-t border-[#420811]/60 text-[#8e8576] text-xs pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-[#24050a]">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl border border-[#ffd76e]/70 flex items-center justify-center bg-gradient-to-br from-[#540c1a] via-[#1a0408] to-[#821428] text-[#ffd76e] font-exotic font-black text-lg shadow-[0_0_20px_rgba(212,175,55,0.4)]">
                S
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-exotic text-lg font-bold tracking-[0.16em] text-shimmer-gold">
                    SANGRÍA
                  </span>
                  <span className="text-[8px] font-bold px-1 py-0.5 rounded bg-[#ffd76e] text-black tracking-widest uppercase">
                    ROYALE
                  </span>
                </div>
                <span className="text-[9px] tracking-[0.34em] text-[#faf3d4] uppercase font-marcellus font-semibold">
                  L'Exotique Restro & Lounge
                </span>
              </div>
            </div>
            <p className="text-[#c8bfb0] leading-relaxed">
              Sangariya's premier high-luxury destination celebrating artisanal slow-macerated Sangrias, woodfired Spanish tapas, and royal culinary heritage under starlight pergolas.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a href="#" className="w-8 h-8 rounded-full bg-[#140205] border border-[#420811] flex items-center justify-center text-[#dfc571] hover:border-[#d4af37] transition-all">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#140205] border border-[#420811] flex items-center justify-center text-[#dfc571] hover:border-[#d4af37] transition-all">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-[#140205] border border-[#420811] flex items-center justify-center text-[#dfc571] hover:border-[#d4af37] transition-all">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Service Hours & Etiquette */}
          <div className="space-y-3">
            <h4 className="font-exotic text-sm font-bold text-white tracking-wider uppercase">
              Operating Hours
            </h4>
            <div className="space-y-2 text-[#a89f91]">
              <div>
                <span className="text-[#dfc571] block font-semibold">Lunch & Tapas:</span>
                12:00 PM – 04:00 PM (Daily)
              </div>
              <div>
                <span className="text-[#dfc571] block font-semibold">Sangria Sunset Happy Hours:</span>
                04:00 PM – 08:00 PM (BOGO Pitchers)
              </div>
              <div>
                <span className="text-[#dfc571] block font-semibold">Dinner & Speakeasy Bar:</span>
                08:00 PM – 01:30 AM (Daily)
              </div>
              <div className="pt-1 text-[11px] text-[#8e8576]">
                <strong className="text-[#ded7c8]">Dress Code:</strong> Chic Sophisticated / Elegant Evening Wear.
              </div>
            </div>
          </div>

          {/* Col 3: Location & Concierge */}
          <div className="space-y-3">
            <h4 className="font-exotic text-sm font-bold text-white tracking-wider uppercase">
              Location & Reservations
            </h4>
            <div className="space-y-2 text-[#a89f91]">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#d4af37] shrink-0 mt-0.5" />
                <span>Royal Heritage Promenade, Main Sangariya Boulevard &bull; Free VIP Valet</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#d4af37] shrink-0" />
                <a href="tel:+919829088221" className="hover:text-white font-semibold">
                  +91 98290 88221 / +91 98290 88222
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a href="https://wa.me/919829088221" className="hover:text-white text-emerald-400 font-semibold">
                  WhatsApp Concierge Available 24/7
                </a>
              </div>
            </div>
          </div>

          {/* Col 4: Quick Navigation & Services */}
          <div className="space-y-3">
            <h4 className="font-exotic text-sm font-bold text-white tracking-wider uppercase">
              Patron Services & Cellar
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={onOpenBooking}
                  className="hover:text-[#dfc571] transition-colors text-left"
                >
                  Reserve Table & VIP Cabana
                </button>
              </li>
              <li>
                <a href="#sangria-spotlight" className="hover:text-[#dfc571] transition-colors block">
                  Sangria Pitcher & Tower Collection
                </a>
              </li>
              <li>
                <a href="#events" className="hover:text-[#dfc571] transition-colors block">
                  Weekly Events & Happy Hours
                </a>
              </li>
              <li>
                <a href="#bill-estimator" className="hover:text-[#dfc571] transition-colors block">
                  Party Bill & Spend Estimator
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#dfc571] transition-colors block">
                  Location, Timings & FAQs
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#786e60]">
          <div>
            &copy; {new Date().getFullYear()} Sangría Royale &bull; L'Exotique Restro & Lounge. All rights reserved. High Premium Exotic Hospitality.
          </div>
          <div className="flex items-center gap-6">
            <a href="#faq" className="hover:text-[#dfc571]">Liquor License Policies</a>
            <a href="#faq" className="hover:text-[#dfc571]">Guest Code of Conduct</a>
            <a href="#faq" className="hover:text-[#dfc571]">Privacy Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

