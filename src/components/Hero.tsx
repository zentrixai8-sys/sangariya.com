import React, { useState, useRef } from 'react';
import { Calendar, Sparkles, Wine, Clock, Award, ArrowRight, Flame, Percent, Crown, Play, X, Volume2, VolumeX, Pause, Film } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroProps {
  onOpenBooking: () => void;
}

interface VideoTrack {

  id: string;
  title: string;
  subtitle: string;
  src: string;
}

const VIDEO_TRACKS: VideoTrack[] = [
  {
    id: 'mixology',
    title: 'Master Mixologist Reel',
    subtitle: 'Flaming Rosemary & Botanical Carafes',
    src: '/hero-mixology.mp4'
  },
  {
    id: 'luxury-bar',
    title: 'Luxury Lounge & Atmosphere',
    subtitle: 'Golden Brass Bar & Speakeasy Vibe',
    src: '/luxury-bar-experience.mp4'
  }
];

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [selectedVideoTrack, setSelectedVideoTrack] = useState<VideoTrack>(VIDEO_TRACKS[0]);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);
  const bgVideoRef = useRef<HTMLVideoElement | null>(null);

  const toggleBgVideoPlay = () => {
    if (bgVideoRef.current) {
      if (isPlaying) {
        bgVideoRef.current.pause();
        setIsPlaying(false);
      } else {
        bgVideoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleBgVideoMute = () => {
    if (bgVideoRef.current) {
      bgVideoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="hero-section" className="relative min-h-[95vh] flex items-center justify-center pt-36 pb-24 overflow-hidden">
      {/* Dynamic Ambient Lighting & Cinematic Video Backdrop */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Live Auto-Playing Mixology Video */}
        <video
          ref={bgVideoRef}
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=2200&q=85"
          className="w-full h-full object-cover object-center brightness-[0.38] contrast-[1.2] scale-105 transition-opacity duration-1000"
        >
          <source src="/hero-mixology.mp4" type="video/mp4" />
        </video>
        
        {/* Radiant Lighting Mesh Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#14060b]/90 via-[#0e070a]/65 to-[#0e070a]" />

        {/* Golden Central Chandelier / Sunburst Light Beam */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-[#ffd76e]/25 via-[#d4af37]/15 to-transparent rounded-full blur-[120px] animate-ambient-pulse pointer-events-none" />
        
        {/* Ruby Sangria Ambient Glow Orbs */}
        <div className="absolute top-1/3 -left-20 w-[550px] h-[550px] bg-[#aa1c36]/25 rounded-full blur-[140px] animate-ambient-pulse pointer-events-none" />
        <div className="absolute top-1/2 -right-20 w-[600px] h-[600px] bg-[#d32847]/20 rounded-full blur-[150px] animate-ambient-pulse pointer-events-none" />
        <div className="absolute bottom-10 left-1/3 w-[450px] h-[350px] bg-[#e2be42]/15 rounded-full blur-[110px] pointer-events-none" />

        {/* Subtle Decorative Light Rays */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-400/10 via-transparent to-transparent pointer-events-none" />

        {/* Floating Hero Video Controls on Corner */}
        <div className="absolute bottom-6 right-6 z-20 hidden md:flex items-center gap-2 bg-[#14060b]/80 backdrop-blur-md border border-[#ffd76e]/30 px-3 py-1.5 rounded-full shadow-lg">
          <button
            onClick={toggleBgVideoPlay}
            title={isPlaying ? 'Pause Background Video' : 'Play Video'}
            className="text-[#ffd76e] hover:text-white p-1 transition-colors"
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
          <span className="text-[#ffd76e]/40 text-xs">|</span>
          <button
            onClick={toggleBgVideoMute}
            title={isMuted ? 'Unmute Audio' : 'Mute Video Audio'}
            className="text-[#ffd76e] hover:text-white p-1 transition-colors flex items-center gap-1.5"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5" />
                <span className="text-[10px] uppercase font-bold tracking-wider">Muted</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-[#ffd76e]" />
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#ffd76e]">Live Sound</span>
              </>
            )}
          </button>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        
        {/* Top Floating Exotic Crest Badge with Lighting */}
        <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full border border-[#ffd76e]/50 bg-gradient-to-r from-[#30060e]/95 via-[#540c1a]/90 to-[#30060e]/95 backdrop-blur-md mb-6 glow-box-gold transition-all duration-500 hover:scale-105">
          <Crown className="w-4 h-4 text-[#ffd76e] animate-bounce" />
          <span className="text-xs uppercase tracking-[0.3em] text-[#faf3d4] font-bold">
            Sangría Royale • L'Exotique Dining & Starlight Lounge
          </span>
          <span className="w-2 h-2 rounded-full bg-[#ffd76e] animate-ping" />
        </div>

        {/* Exotic Main Headline with Golden Shimmer & Radiant Glow */}
        <div className="relative mb-2">
          <div className="absolute -inset-x-20 -top-8 -bottom-4 bg-gradient-to-r from-transparent via-[#ffd76e]/15 to-transparent blur-2xl pointer-events-none" />
          <h1 className="font-exotic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-[0.1em] text-shimmer-gold drop-shadow-[0_10px_45px_rgba(212,175,55,0.4)] leading-tight select-none">
            SANGRÍA
          </h1>
        </div>

        <div className="font-italiana text-2xl sm:text-4xl md:text-5xl text-[#faf3d4] font-medium tracking-[0.18em] mb-4 glow-text-gold">
          L'Exotique Restro, Bar & Terrace
        </div>

        {/* Sub-narrative with exotic tone */}
        <p className="font-playfair italic text-lg sm:text-2xl text-[#faf3d4] font-normal tracking-wide mb-6 max-w-3xl leading-relaxed drop-shadow-[0_2px_15px_rgba(0,0,0,0.8)]">
          "Where Mediterranean vineyard artistry and chilled botanical Sangria towers illuminate royal culinary indulgence."
        </p>

        <p className="font-sans text-xs sm:text-sm text-[#e0d6c5] max-w-2xl leading-relaxed mb-8 font-normal">
          Indulge in 48-hour slow-macerated crimson & gold Sangria carafes, sizzling Spanish Tapas, artisanal woodfired sourdough pizzas, and royal charcoal dum pukht delicacies under illuminated starlight pergolas.
        </p>

        {/* Watch Live Videos Cinema Button Group */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => {
              setSelectedVideoTrack(VIDEO_TRACKS[0]);
              setIsVideoModalOpen(true);
            }}
            className="group relative inline-flex items-center gap-3 px-6 py-2.5 rounded-full border border-[#ffd76e]/60 bg-[#1a0408]/90 text-[#faf3d4] hover:bg-[#30060e] hover:border-[#ffd76e] text-xs font-bold uppercase tracking-[0.18em] shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all duration-300"
          >
            <div className="w-6 h-6 rounded-full bg-gradient-to-r from-[#ffd76e] to-[#d4af37] text-black flex items-center justify-center group-hover:scale-110 transition-transform">
              <Play className="w-3 h-3 fill-black text-black ml-0.5" />
            </div>
            <span>Watch Live Mixology Reel</span>
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ff4d6d] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#d32847]"></span>
            </span>
          </button>

          <button
            onClick={() => {
              setSelectedVideoTrack(VIDEO_TRACKS[1]);
              setIsVideoModalOpen(true);
            }}
            className="group relative inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-[#aa1c36] bg-[#24060d]/90 text-[#ffd76e] hover:bg-[#540c1a] hover:border-[#ffd76e] text-xs font-bold uppercase tracking-[0.18em] shadow-lg transition-all duration-300"
          >
            <Film className="w-4 h-4 text-[#ffd76e]" />
            <span>Luxury Bar Cinema Reel</span>
          </button>
        </div>

        {/* Action CTAs with radiant glows */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-14">
          <button
            id="hero-reserve-btn"
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 rounded-full bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-[#0e070a] font-extrabold text-xs uppercase tracking-[0.24em] hover:brightness-110 shadow-[0_0_40px_rgba(255,215,110,0.55)] transition-all duration-300 flex items-center justify-center gap-3 group transform hover:-translate-y-0.5"
          >
            <Calendar className="w-4 h-4 text-[#0e070a] group-hover:scale-110 transition-transform" />
            <span>Book VIP Table</span>
            <ArrowRight className="w-4 h-4 text-[#0e070a] group-hover:translate-x-1 transition-transform" />
          </button>

          <a
            href="#sangrias"
            className="w-full sm:w-auto px-7 py-4 rounded-full border border-[#aa1c36] bg-[#30060e]/90 text-[#fdfbf2] hover:bg-[#540c1a] hover:border-[#ffd76e] font-bold text-xs uppercase tracking-[0.2em] transition-all duration-300 flex items-center justify-center gap-2.5 backdrop-blur-md shadow-[0_0_20px_rgba(170,28,54,0.35)]"
          >
            <Wine className="w-4 h-4 text-[#ffd76e]" />
            <span>Exotic Sangrias</span>
          </a>

          <a
            href="#bill-estimator"
            className="w-full sm:w-auto px-6 py-4 rounded-full border border-[#d4af37]/40 bg-[#1a0408]/85 text-[#faf3d4] hover:text-white hover:border-[#ffd76e] text-xs font-bold tracking-wider transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <Percent className="w-4 h-4 text-[#ffd76e]" />
            <span>Party Estimator</span>
          </a>
        </div>


        {/* Highlight Cards Grid with Luminous Glass Styling */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5 sm:gap-6 w-full max-w-5xl">
          {/* Card 1: Sunset Happy Hours */}
          <div className="glass-luxe-glow p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] hover:border-[#ffd76e]/70">
            <div className="flex items-center gap-2 text-[#ffd76e] mb-1.5">
              <Clock className="w-4 h-4 text-[#ffd76e]" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Sunset Hours</span>
            </div>
            <div className="text-base font-extrabold text-white">4:00 PM – 8:00 PM</div>
            <div className="text-[11px] text-[#faf3d4]/85 mt-1 font-medium">1+1 on All Sangria Pitchers Daily</div>
          </div>

          {/* Card 2: Signature Pitchers */}
          <div className="glass-luxe-glow p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] hover:border-[#ffd76e]/70">
            <div className="flex items-center gap-2 text-[#ffd76e] mb-1.5">
              <Wine className="w-4 h-4 text-[#ffd76e]" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Sangria Carafes</span>
            </div>
            <div className="text-base font-extrabold text-white">18+ Bespoke Blends</div>
            <div className="text-[11px] text-[#faf3d4]/85 mt-1 font-medium">Crimson, White, Rosé & 3L Towers</div>
          </div>

          {/* Card 3: Gastronomy */}
          <div className="glass-luxe-glow p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] hover:border-[#ffd76e]/70">
            <div className="flex items-center gap-2 text-[#ffd76e] mb-1.5">
              <Flame className="w-4 h-4 text-[#ff8095]" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Woodfired Kitchen</span>
            </div>
            <div className="text-base font-extrabold text-white">Spanish & Royal Tandoor</div>
            <div className="text-[11px] text-[#faf3d4]/85 mt-1 font-medium">Artisanal Tapas & Dum Pukht</div>
          </div>

          {/* Card 4: Prestige Rating */}
          <div className="glass-luxe-glow p-4 sm:p-5 rounded-2xl text-left transition-all duration-300 hover:scale-[1.02] hover:border-[#ffd76e]/70">
            <div className="flex items-center gap-2 text-[#ffd76e] mb-1.5">
              <Award className="w-4 h-4 text-[#ffd76e]" />
              <span className="text-[11px] font-bold uppercase tracking-wider">Prestige Rating</span>
            </div>
            <div className="text-base font-extrabold text-white">4.9 ★ Luxe Rating</div>
            <div className="text-[11px] text-[#faf3d4]/85 mt-1 font-medium">3,400+ Verified Elite Patrons</div>
          </div>
        </div>

      </div>

      {/* Full-Screen Cinema Video Lightbox Modal with Multi-Video Selector */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
          <div className="relative w-full max-w-4xl bg-[#14060b] rounded-3xl border-2 border-[#ffd76e]/60 shadow-[0_0_60px_rgba(212,175,55,0.4)] overflow-hidden">
            {/* Header with Video Tabs */}
            <div className="p-4 sm:p-6 border-b border-[#ffd76e]/20 bg-[#1a0408]/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-[#d4af37]/20 border border-[#d4af37] flex items-center justify-center text-[#ffd76e]">
                  <Wine className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-exotic text-base sm:text-lg font-bold text-[#faf3d4]">
                    {selectedVideoTrack.title}
                  </h3>
                  <p className="text-[11px] text-[#ffd76e]/80">
                    {selectedVideoTrack.subtitle}
                  </p>
                </div>
              </div>

              {/* Video Switcher Tabs */}
              <div className="flex items-center gap-2">
                {VIDEO_TRACKS.map((track) => (
                  <button
                    key={track.id}
                    onClick={() => setSelectedVideoTrack(track)}
                    className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                      selectedVideoTrack.id === track.id
                        ? 'bg-gradient-to-r from-[#ffd76e] to-[#d4af37] text-black shadow-md'
                        : 'bg-[#30060e] text-[#ddd2c0] hover:text-[#ffd76e] border border-[#540c1a]'
                    }`}
                  >
                    {track.id === 'mixology' ? '🍸 Mixology Reel' : '👑 Luxury Lounge'}
                  </button>
                ))}
                
                <button
                  onClick={() => setIsVideoModalOpen(false)}
                  className="p-2 rounded-full bg-[#30060e] text-[#ffd76e] hover:text-white hover:bg-[#540c1a] transition-all ml-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Video Player */}
            <div className="relative aspect-video bg-black flex items-center justify-center">
              <video
                key={selectedVideoTrack.src}
                controls
                autoPlay
                className="w-full h-full object-contain"
              >
                <source src={selectedVideoTrack.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>

            {/* Modal Bottom CTA */}
            <div className="p-4 sm:p-5 bg-gradient-to-r from-[#1a0408] via-[#30060e] to-[#1a0408] border-t border-[#ffd76e]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs text-[#faf3d4] text-center sm:text-left">
                Experience the magic in person. Reserve your front-row seat at the Golden Brass Bar.
              </p>
              <button
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onOpenBooking();
                }}
                className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#ffd76e] to-[#b89324] text-black font-bold text-xs uppercase tracking-widest hover:brightness-110 shadow-lg shrink-0"
              >
                Book VIP Bar Seat
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};


