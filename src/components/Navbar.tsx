import React, { useState, useEffect, useRef } from 'react';
import { Sparkles, Calendar, Menu as MenuIcon, X, Volume2, VolumeX, Flame, Clock, Wine, Calculator } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {

  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [ambientAudio, setAmbientAudio] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorNodeRef = useRef<{ osc1: OscillatorNode; osc2: OscillatorNode; gain: GainNode } | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Web Audio subtle lounge ambient hum
  const toggleSound = () => {
    if (!ambientAudio) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioContextRef.current = ctx;

        // Warm subtle ambient drone (A minor chord pad / lounge warmth)
        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(220, ctx.currentTime); // A3
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(329.63, ctx.currentTime); // E4

        gain.gain.setValueAtTime(0.015, ctx.currentTime);

        osc1.connect(gain);
        osc2.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();
        oscillatorNodeRef.current = { osc1, osc2, gain };
        setAmbientAudio(true);
      } catch {
        setAmbientAudio(true);
      }
    } else {
      if (oscillatorNodeRef.current) {
        try {
          oscillatorNodeRef.current.gain.gain.setValueAtTime(0.0001, audioContextRef.current?.currentTime || 0);
          oscillatorNodeRef.current.osc1.stop();
          oscillatorNodeRef.current.osc2.stop();
        } catch {
          // ignore
        }
      }
      setAmbientAudio(false);
    }
  };

  return (
    <header id="main-navbar" className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top Exotic Sangria Happy Hour Announcement Bar */}
      <div className="bg-gradient-to-r from-[#24050a] via-[#690c1b] to-[#24050a] text-[#fbf8eb] text-xs py-1.5 px-4 border-b border-[#8c1426]/50 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between text-[11px] sm:text-xs">
          <div className="flex items-center gap-2 tracking-wider overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center gap-1 font-bold text-[#f5eed0] bg-[#8c1426]/70 px-2 py-0.5 rounded-full uppercase text-[10px] tracking-widest animate-pulse shrink-0">
              <Wine className="w-3 h-3 text-[#ecdda4]" /> Happy Hours
            </span>
            <span className="text-[#f5eed0]">
              <strong className="text-[#f5eed0]">Sangria Sunset Hours 4 PM - 8 PM:</strong> 1+1 on All Sangria Pitchers & Craft Cocktails
            </span>
          </div>

          <div className="hidden sm:flex items-center gap-4 text-[#ecdda4] text-[11px] shrink-0">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#d4af37]" /> Open 12:00 PM – 01:30 AM
            </span>
            <span className="text-[#d4af37]/40">|</span>
            <a href="tel:+919829088221" className="hover:text-white transition-colors underline decoration-[#d4af37]">
              VIP Desk: +91 98290 88221
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div
        className={`transition-all duration-300 ${
          scrolled
            ? 'bg-[#12070c]/98 backdrop-blur-xl border-b border-[#ffd76e]/30 shadow-[0_10px_35px_rgba(0,0,0,0.85)] py-2.5'
            : 'bg-gradient-to-b from-[#14060b]/98 via-[#12070c]/85 to-transparent py-3.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Logo Brand in Exotic Typography & Lighting */}
            <a href="#" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-2xl border border-[#ffd76e]/70 flex items-center justify-center bg-gradient-to-br from-[#540c1a] via-[#1a0408] to-[#821428] group-hover:border-[#ffd76e] transition-all duration-300 shadow-[0_0_20px_rgba(212,175,55,0.4)] group-hover:shadow-[0_0_30px_rgba(255,215,110,0.6)] shrink-0">
                <div className="absolute inset-0 rounded-2xl bg-[#ffd76e]/10 animate-pulse" />
                <Wine className="w-5 h-5 text-[#ffd76e] group-hover:scale-110 transition-transform relative z-10 drop-shadow-[0_0_8px_rgba(255,215,110,0.8)]" />
              </div>
              
              <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                  <span className="font-exotic text-xl sm:text-2xl font-black tracking-[0.12em] text-shimmer-gold glow-text-exotic leading-none whitespace-nowrap">
                    SANGRÍA
                  </span>
                  <span className="text-[9px] font-black px-1.5 py-0.5 rounded bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black tracking-widest uppercase shadow-sm whitespace-nowrap">
                    ROYALE
                  </span>
                </div>
                <span className="text-[10px] tracking-[0.22em] text-[#ffd76e]/90 uppercase font-marcellus mt-0.5 font-semibold flex items-center gap-1 whitespace-nowrap">
                  <span>L'Exotique Restro & Lounge</span>
                  <Sparkles className="w-2.5 h-2.5 text-[#ffd76e]" />
                </span>
              </div>
            </a>

            {/* Desktop Navigation with perfect font sizing and single-line whitespace-nowrap */}
            <nav className="hidden xl:flex items-center gap-7 text-[13px] tracking-[0.14em] uppercase font-semibold font-marcellus text-[#f5eed0]/90">
              <a href="#sangrias" className="hover:text-[#ffd76e] transition-colors flex items-center gap-1.5 whitespace-nowrap drop-shadow-[0_0_8px_rgba(212,175,55,0.3)]">
                <Wine className="w-3.5 h-3.5 text-[#ffd76e]" />
                <span>Sangrias</span>
              </a>
              <a href="#menu" className="hover:text-[#ffd76e] transition-colors whitespace-nowrap">
                Tapas & Menu
              </a>
              <a href="#events" className="hover:text-[#ffd76e] transition-colors flex items-center gap-1.5 whitespace-nowrap">
                <Flame className="w-3.5 h-3.5 text-[#ff8095]" />
                <span>Events</span>
              </a>
              <a href="#bill-estimator" className="hover:text-[#ffd76e] transition-colors flex items-center gap-1.5 whitespace-nowrap">
                <Calculator className="w-3.5 h-3.5 text-[#ffd76e]" />
                <span>Party Planner</span>
              </a>
              <a href="#ambiance" className="hover:text-[#ffd76e] transition-colors whitespace-nowrap">
                4 Lounges
              </a>
              <a href="#faq" className="hover:text-[#ffd76e] transition-colors whitespace-nowrap">
                FAQ & Location
              </a>
            </nav>

            {/* Right Action CTAs */}
            <div className="hidden sm:flex items-center gap-3 shrink-0">
              {/* Ambient Lounge Sound */}
              <button
                onClick={toggleSound}
                title={ambientAudio ? 'Mute lounge ambiance' : 'Play ambient lounge sounds'}
                className="px-3 py-2 rounded-full border border-[#540c1a] bg-[#1a0408]/90 text-[#ddd2c0] hover:text-[#ffd76e] hover:border-[#ffd76e]/50 transition-all text-xs font-semibold flex items-center gap-1.5 shadow-md whitespace-nowrap"
              >
                {ambientAudio ? (
                  <>
                    <Volume2 className="w-3.5 h-3.5 text-[#ffd76e] animate-pulse" />
                    <span className="text-[11px] text-[#ffd76e] font-bold">Lounge Audio</span>
                  </>
                ) : (
                  <>
                    <VolumeX className="w-3.5 h-3.5" />
                    <span className="text-[11px]">Ambiance</span>
                  </>
                )}
              </button>

              {/* VIP Reservation Button */}
              <button
                id="nav-reservation-btn"
                onClick={onOpenBooking}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold text-xs tracking-[0.16em] uppercase hover:brightness-110 shadow-[0_0_25px_rgba(212,175,55,0.45)] transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                <Calendar className="w-3.5 h-3.5" />
                <span>Book VIP Table</span>
              </button>
            </div>

            {/* Mobile Menu Hamburger */}
            <div className="flex xl:hidden items-center gap-2">
              <button
                onClick={onOpenBooking}
                className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#ffd76e] to-[#b89324] text-black text-xs font-bold uppercase tracking-wider shadow-md"
              >
                Book VIP
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-[#ffd76e] hover:text-white rounded-xl bg-[#24050a] border border-[#540c1a]"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>

          </div>
        </div>
      </div>


      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#080506]/98 border-b border-[#420811] backdrop-blur-xl px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-semibold tracking-widest uppercase text-[#e8e4dc]">
            <a
              href="#sangrias"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#24050a] flex items-center justify-between text-[#dfc571]"
            >
              <span>Exotic Sangrias Collection</span>
              <Wine className="w-4 h-4" />
            </a>


            <a
              href="#menu"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#24050a]"
            >
              Tapas, Pizzas & Royal Mains
            </a>
            <a
              href="#events"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#24050a] flex items-center justify-between"
            >
              <span>Weekly Events & Happy Hours</span>
              <span className="text-[10px] bg-[#690c1b] px-2 py-0.5 rounded-full text-white">1+1 Offers</span>
            </a>
            <a
              href="#bill-estimator"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#24050a] flex items-center justify-between"
            >
              <span>Party Bill Calculator</span>
              <Calculator className="w-4 h-4 text-[#d4af37]" />
            </a>
            <a
              href="#ambiance"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#24050a]"
            >
              4 Themed Lounges
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 border-b border-[#24050a]"
            >
              Location, Dress Code & FAQ
            </a>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black text-xs font-black tracking-widest uppercase shadow-[0_0_20px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-black" />
              <span>Reserve VIP Table</span>
            </button>
          </div>
        </div>
      )}
    </header>

  );
};
