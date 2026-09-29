import React, { useState, useRef } from 'react';
import { Wine, Sparkles, Compass, Flame, Award, Play, Pause, Volume2, VolumeX, Maximize2 } from 'lucide-react';
import { motion } from 'motion/react';

export const HeritageStory: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section id="heritage" className="py-28 bg-[#0a0507] relative border-t border-[#540c1a]/60 overflow-hidden">
      {/* Subtle ruby and gold ambient glows */}
      <div className="absolute top-0 right-0 w-[550px] h-[550px] bg-[#821428]/18 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#d4af37]/12 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Visual Showcase: Embedded Luxury Bar Video */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Luxury Video Player Container with Glowing Gold Border */}
              <div className="rounded-3xl overflow-hidden border-2 border-[#ffd76e]/60 shadow-[0_0_50px_rgba(212,175,55,0.3)] relative group aspect-[4/5] sm:aspect-[4/4.8] bg-black">
                <video
                  ref={videoRef}
                  autoPlay
                  loop
                  muted={isMuted}
                  playsInline
                  poster="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80"
                  className="w-full h-full object-cover brightness-95 contrast-105 group-hover:scale-105 transition-transform duration-700"
                >
                  <source src="/luxury-bar-experience.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>

                {/* Ambient Video Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0507] via-transparent to-black/30 pointer-events-none" />

                {/* Top Badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-2 bg-[#1a0408]/90 backdrop-blur-md border border-[#ffd76e]/50 px-3.5 py-1.5 rounded-full shadow-lg">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ff4d6d] animate-ping" />
                  <span className="text-[10px] uppercase font-black tracking-widest text-[#ffd76e]">
                    Live Luxury Lounge Ambiance
                  </span>
                </div>

                {/* Video Play/Pause & Sound Controls */}
                <div className="absolute top-4 right-4 z-20 flex items-center gap-2 bg-black/70 backdrop-blur-md border border-[#ffd76e]/30 px-2.5 py-1.5 rounded-full shadow-md">
                  <button
                    onClick={togglePlay}
                    className="p-1 text-[#ffd76e] hover:text-white transition-colors"
                    title={isPlaying ? 'Pause Video' : 'Play Video'}
                  >
                    {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  </button>
                  <span className="text-[#ffd76e]/40 text-xs">|</span>
                  <button
                    onClick={toggleMute}
                    className="p-1 text-[#ffd76e] hover:text-white transition-colors"
                    title={isMuted ? 'Unmute Audio' : 'Mute Audio'}
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4 animate-pulse text-[#ffd76e]" />}
                  </button>
                </div>

                {/* Bottom Quote Overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20">
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#ffd76e] font-black block mb-1">
                    Artisanal Maceration & Speakeasy Vibe
                  </span>
                  <p className="font-playfair italic text-base sm:text-lg text-white drop-shadow-md">
                    "48 hours of fruit steeping in Spanish Rioja creates a liquid symphony of citrus, spice, and silk."
                  </p>
                </div>
              </div>

              {/* Offset floating accent card */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="hidden sm:block absolute -bottom-6 -right-6 w-64 p-4 rounded-2xl border-2 border-[#ffd76e]/60 bg-[#160408]/95 backdrop-blur-xl shadow-[0_15px_35px_rgba(0,0,0,0.8)] z-30"
              >
                <div className="flex items-center gap-2 text-[#ffd76e] mb-1 font-bold">
                  <Wine className="w-4 h-4 text-[#ffd76e]" />
                  <span className="text-xs uppercase tracking-wider font-marcellus">Crystal Carafes & Bar Vault</span>
                </div>
                <p className="text-[11px] text-[#ddd2c0] leading-relaxed">
                  Served ice-chilled in custom cut-glass pitchers with fresh orchard fruit and botanical garnishes.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Narrative Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-6"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ffd76e]/50 bg-gradient-to-r from-[#30060e] via-[#540c1a] to-[#30060e] text-[#faf3d4] text-xs font-bold uppercase tracking-[0.2em] mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Compass className="w-4 h-4 text-[#ffd76e]" />
              <span>The Sangria Philosophy</span>
            </div>

            <h2 className="font-exotic text-3xl sm:text-4xl md:text-5xl font-black tracking-wide text-shimmer-gold mb-4 leading-tight glow-text-exotic">
              SPAIN'S ICONIC WINE RITUAL MEETS ROYAL HERITAGE GASTRONOMY
            </h2>

            <p className="font-italiana text-2xl text-[#faf3d4] mb-5 glow-text-gold">
              The Magic of Spanish Sangria Meets the Refinement of Royal Charcoal Dining
            </p>

            <div className="space-y-4 text-xs sm:text-sm text-[#ddd2c0] leading-relaxed mb-8">
              <p>
                At <strong className="text-white font-semibold">Sangría Royale • L'Exotique Restro & Lounge</strong>, we celebrate the vibrant soul of Mediterranean social dining. Our signature Sangria carafes are crafted with unhurried precision—macerating sun-drenched Spanish Tempranillo, crisp Sauvignon Blanc, and sparkling Brut Cava with hand-sliced Valencia oranges, orchard peaches, and exotic cinnamon sticks.
              </p>
              <p>
                To accompany these thirst-quenching pitchers, our kitchen bridges the gap between Spanish tapas (sizzling Gambas al Ajillo, crispy Patatas Bravas, burrata pizzas) and the deeply aromatic 14-hour charcoal embers of royal heritage slow-cooking.
              </p>
            </div>

            {/* Core Values Pillars */}
            <div className="grid grid-cols-2 gap-4 border-t border-[#540c1a] pt-6">
              <div className="p-3.5 rounded-2xl bg-[#160408]/80 border border-[#540c1a]">
                <div className="text-[#ffd76e] font-exotic text-2xl font-black mb-1">48 Hrs</div>
                <div className="text-xs uppercase tracking-wider text-white font-bold">Fruit Maceration</div>
                <p className="text-[11px] text-[#c8bfb0] mt-0.5">Maximum depth of flavor without artificial sweeteners.</p>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#160408]/80 border border-[#540c1a]">
                <div className="text-[#ffd76e] font-exotic text-2xl font-black mb-1">Wood & Clay</div>
                <div className="text-xs uppercase tracking-wider text-white font-bold">Live Fire Hearth</div>
                <p className="text-[11px] text-[#c8bfb0] mt-0.5">Sourdough blistered crusts & charcoal-smoked kebabs.</p>
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

