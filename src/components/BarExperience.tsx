import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GlassWater, Sparkles, Flame, Wine, Check, ArrowRight, Heart, Users, Compass, Crown } from 'lucide-react';
import { MENU_ITEMS } from '../data/restaurantData';

interface MoodOption {
  id: string;
  label: string;
  icon: string;
  vibe: string;
  matchedSangriaId: string;
  matchedTapasId: string;
  seatingArea: string;
  reason: string;
}

const MOODS: MoodOption[] = [
  {
    id: 'date',
    label: 'Candlelit Romance',
    icon: '🍷',
    vibe: 'Intimate, floral, and deeply sensorial',
    matchedSangriaId: 's3', // Sparkling Rosé Berry Cava Sangria
    matchedTapasId: 't3', // Truffle & Wild Porcini Mushroom Croquettes
    seatingArea: 'The Velvet Sangria Lounge (Booth 4)',
    reason: 'Effervescent Catalan Rosé Cava with muddled raspberries and edible rose petals sets the most enchanting romantic cadence.'
  },
  {
    id: 'squad',
    label: 'Squad Party & Celebration',
    icon: '🎉',
    vibe: 'High-energy, generous, and laughter-filled',
    matchedSangriaId: 's1', // El Clásico Ruby Sangria
    matchedTapasId: 'p1', // Burrata Truffle Pizza
    seatingArea: 'The Starlight Rooftop Pergola',
    reason: 'A 1-Litre sharing pitcher of Tempranillo Sangria paired with sharing woodfired pizzas fuels unforgettable group celebrations.'
  },
  {
    id: 'chill',
    label: 'Sunset Chill & Unwind',
    icon: '🌅',
    vibe: 'Crisp, refreshing, and calming after-work bliss',
    matchedSangriaId: 's2', // White Peach & Elderflower
    matchedTapasId: 't1', // Gambas al Ajillo
    seatingArea: 'The Golden Brass Bar Counter',
    reason: 'Sauvignon Blanc infused with St-Germain elderflower and white peaches paired with sizzling garlic chili prawns.'
  },
  {
    id: 'royal',
    label: 'Imperial VIP Indulgence',
    icon: '👑',
    vibe: 'Opulent, memorable, and high-status',
    matchedSangriaId: 's6', // 24K Gold Saffron Sangria
    matchedTapasId: 't4', // Royal Galouti Kebab
    seatingArea: 'The Vintage Wine Cellar Vault',
    reason: 'Spanish Rioja Gran Reserva, VSOP Cognac, Kashmiri saffron, and edible 24K gold dust for moments that demand perfection.'
  }
];

export const BarExperience: React.FC = () => {
  const [selectedMoodId, setSelectedMoodId] = useState<string>('date');

  const currentMood = MOODS.find((m) => m.id === selectedMoodId) || MOODS[0];
  const matchedSangria = MENU_ITEMS.find((item) => item.id === currentMood.matchedSangriaId);
  const matchedTapas = MENU_ITEMS.find((item) => item.id === currentMood.matchedTapasId);

  return (
    <section id="bar" className="py-28 bg-[#0a0507] relative border-t border-[#540c1a]/60 overflow-hidden">
      {/* Background ambient lighting glow */}
      <div className="absolute -left-20 bottom-1/3 w-[500px] h-[500px] bg-[#821428]/20 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-[#d4af37]/12 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ffd76e]/50 bg-gradient-to-r from-[#30060e] via-[#540c1a] to-[#30060e] text-[#faf3d4] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Wine className="w-4 h-4 text-[#ffd76e]" />
            <span>Interactive Speakeasy Matcher</span>
          </div>

          <h2 className="font-exotic text-3xl sm:text-5xl font-black tracking-wide text-shimmer-gold mb-3 glow-text-exotic">
            FIND YOUR SIGNATURE SANGRIA & VIBE
          </h2>

          <p className="font-italiana text-2xl sm:text-3xl text-[#faf3d4] glow-text-gold">
            Curated by Master Mixologists & Sommeliers for Your Exact Palate
          </p>
        </motion.div>

        {/* 2-Column: Left Mood selector, Right Reveal */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Mood Buttons */}
          <div className="lg:col-span-5 space-y-4">
            <div className="text-xs uppercase tracking-widest text-[#ffd76e] font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Select Your Evening Vibe:</span>
            </div>

            {MOODS.map((mood) => {
              const isSelected = mood.id === selectedMoodId;
              return (
                <motion.button
                  key={mood.id}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedMoodId(mood.id)}
                  className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex items-center justify-between group relative overflow-hidden ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#540c1a] to-[#30060e] border-[#ffd76e] shadow-[0_0_30px_rgba(212,175,55,0.3)]'
                      : 'bg-[#160408]/90 border-[#30060e] hover:border-[#aa1c36] text-[#c8bfb0]'
                  }`}
                >
                  <div className="flex items-center gap-4 relative z-10">
                    <span className="text-3xl p-2 rounded-xl bg-black/40 border border-white/5">{mood.icon}</span>
                    <div>
                      <div className={`font-playfair text-base font-bold transition-colors ${isSelected ? 'text-white' : 'text-[#faf3d4] group-hover:text-[#ffd76e]'}`}>
                        {mood.label}
                      </div>
                      <div className="text-xs text-[#ddd2c0] mt-0.5">
                        {mood.vibe}
                      </div>
                    </div>
                  </div>

                  <div className={`w-7 h-7 rounded-full flex items-center justify-center border relative z-10 ${
                    isSelected ? 'bg-[#ffd76e] border-[#ffd76e] text-black shadow-lg font-bold' : 'border-[#540c1a] text-transparent'
                  }`}>
                    <Check className="w-4 h-4" />
                  </div>
                </motion.button>
              );
            })}
          </div>

          {/* Right: Curated Pairing Result Card with AnimatePresence */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedMoodId}
                initial={{ opacity: 0, x: 20, scale: 0.97 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: -20, scale: 0.97 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
                className="rounded-3xl bg-gradient-to-br from-[#30060e] via-[#1a0408] to-[#0e070a] border-2 border-[#ffd76e]/70 p-6 sm:p-8 shadow-[0_0_40px_rgba(212,175,55,0.25)] relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-60 h-60 bg-[#821428]/25 rounded-full blur-[80px] pointer-events-none" />

                <div className="flex items-center justify-between border-b border-[#540c1a] pb-4 mb-6">
                  <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#ffd76e]">
                    <Sparkles className="w-4 h-4 text-[#ffd76e]" />
                    <span>Sommelier Pairing for: {currentMood.label}</span>
                  </div>
                  <span className="text-xs bg-[#aa1c36] px-3.5 py-1 rounded-full text-white font-bold tracking-wider shadow-md">
                    Perfect Harmony
                  </span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                  {/* Matched Sangria */}
                  {matchedSangria && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-2xl bg-[#160408] border border-[#540c1a] p-5 flex flex-col justify-between shadow-lg group hover:border-[#ffd76e]/60 transition-all"
                    >
                      <div>
                        <div className="text-[10px] uppercase font-black tracking-wider text-[#ffd76e] mb-1">
                          Recommended Sangria Carafe
                        </div>
                        <h4 className="font-playfair text-lg font-bold text-white mb-1.5 group-hover:text-[#ffd76e] transition-colors">
                          {matchedSangria.name}
                        </h4>
                        <p className="text-xs text-[#c8bfb0] line-clamp-2 mb-3">
                          {matchedSangria.description}
                        </p>
                      </div>
                      <div className="text-lg font-bold text-[#ffd76e] font-serif">
                        ₹{(matchedSangria.pitcherPrice || matchedSangria.price).toLocaleString()}
                        <span className="text-[10px] text-[#9e9485] font-sans font-normal ml-1">
                          {matchedSangria.pitcherPrice ? '(1L Pitcher)' : '(Glass)'}
                        </span>
                      </div>
                    </motion.div>
                  )}

                  {/* Matched Tapas */}
                  {matchedTapas && (
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="rounded-2xl bg-[#160408] border border-[#540c1a] p-5 flex flex-col justify-between shadow-lg group hover:border-[#ffd76e]/60 transition-all"
                    >
                      <div>
                        <div className="text-[10px] uppercase font-black tracking-wider text-[#ffd76e] mb-1">
                          Recommended Tapas Pairing
                        </div>
                        <h4 className="font-playfair text-lg font-bold text-white mb-1.5 group-hover:text-[#ffd76e] transition-colors">
                          {matchedTapas.name}
                        </h4>
                        <p className="text-xs text-[#c8bfb0] line-clamp-2 mb-3">
                          {matchedTapas.description}
                        </p>
                      </div>
                      <div className="text-lg font-bold text-[#ffd76e] font-serif">
                        ₹{matchedTapas.price.toLocaleString()}
                      </div>
                    </motion.div>
                  )}
                </div>

                {/* Why it works & Seating recommendation */}
                <div className="p-4 rounded-2xl bg-[#160408] border border-[#aa1c36] mb-6 space-y-2">
                  <div className="text-xs text-[#faf3d4] leading-relaxed">
                    <strong className="text-[#ffd76e]">Why This Works:</strong> {currentMood.reason}
                  </div>
                  <div className="text-xs text-[#ffd76e]">
                    <strong>Best Seating Section:</strong> {currentMood.seatingArea}
                  </div>
                </div>

                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#reservation"
                  className="w-full py-4 rounded-full bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.4)] flex items-center justify-center gap-2 transition-all"
                >
                  <span>Reserve Table for this Vibe</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.a>

              </motion.div>
            </AnimatePresence>
          </div>

        </div>

        {/* Mixologist Live Video Showcase Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 rounded-3xl glass-luxe-glow p-6 sm:p-8 border border-[#ffd76e]/40 shadow-2xl relative overflow-hidden"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30060e] text-[#ffd76e] text-[11px] font-bold uppercase tracking-widest border border-[#aa1c36]">
                <Sparkles className="w-3.5 h-3.5 text-[#ffd76e]" />
                <span>Live Bar Craftsmanship</span>
              </div>
              <h3 className="font-exotic text-2xl sm:text-3xl font-black text-shimmer-gold">
                THE ART OF EXOTIC MIXOLOGY
              </h3>
              <p className="text-xs sm:text-sm text-[#ddd2c0] leading-relaxed">
                Watch our flair bartenders and master mixologists craft slow-macerated Sangrias, smoked cocktail carafes, and flaming rosemary goblets in real time.
              </p>
              <div className="pt-2 flex items-center gap-4 text-xs text-[#faf3d4]">
                <div className="flex items-center gap-1.5">
                  <Wine className="w-4 h-4 text-[#ffd76e]" />
                  <span>Fresh Botanical Infusions</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Flame className="w-4 h-4 text-[#ff8095]" />
                  <span>Smoked Aromatics</span>
                </div>
              </div>
            </div>

            {/* Embedded Live Video Player with Glowing Frame */}
            <div className="lg:col-span-7 relative rounded-2xl overflow-hidden border-2 border-[#ffd76e]/50 shadow-[0_0_35px_rgba(212,175,55,0.3)] group aspect-video bg-black">
              <video
                controls
                autoPlay
                loop
                muted
                playsInline
                poster="https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              >
                <source src="/hero-mixology.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-widest text-[#ffd76e] border border-[#ffd76e]/30 flex items-center gap-1.5 pointer-events-none">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
                <span>Live Mixology Stream</span>
              </div>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};


