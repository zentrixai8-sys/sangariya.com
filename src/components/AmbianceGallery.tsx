import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, Music, Sparkles, MapPin, Users, Wine, ArrowRight } from 'lucide-react';

interface GallerySpace {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  capacity: string;
  description: string;
  image: string;
  features: string[];
}

const SPACES: GallerySpace[] = [
  {
    id: 's1',
    title: 'The Velvet Sangria Lounge',
    subtitle: 'Signature Velvet Seating & Intimate Dining',
    category: 'Indoor Luxury Lounge',
    capacity: 'Up to 60 Guests',
    description: 'Plush burgundy velvet banquettes, antique brass candle sconces, low acoustic mood lighting, and curated Spanish downtempo lounge beats.',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    features: ['Velvet Booths', 'Table-side Sangria Service', 'Intimate Acoustics']
  },
  {
    id: 's2',
    title: 'The Starlight Rooftop & Cabana',
    subtitle: 'Al Fresco Pergola Under Open Starlight',
    category: 'Al Fresco Sky Deck',
    capacity: 'Up to 75 Guests',
    description: 'Open-air starlight dining with wooden pergolas, flowing sheer drapes, hanging warm fairy lanterns, and panoramic skyline breezes.',
    image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1200&q=80',
    features: ['Skyline Views', 'Fire Pits', 'Live Flamenco & Acoustic Sets']
  },
  {
    id: 's3',
    title: 'The Vintage Oak Wine Cellar',
    subtitle: 'Private Sommelier Degustation Vault',
    category: 'Private Sommelier Vault',
    capacity: '14 Guests Exclusive',
    description: 'Surrounded by aged oak barrels and over 350+ Spanish, French, and New World vintages with private sommelier tastings and customized degustation menus.',
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1200&q=80',
    features: ['Sommelier Guided', 'Temperature Controlled', 'Private Chef Service']
  },
  {
    id: 's4',
    title: 'The Golden Brass Bar & DJ Console',
    subtitle: 'Flair Mixology & High-Energy Nightlife Hub',
    category: 'High-Energy Bar & Nightlife',
    capacity: '40 Bar & High-Top Seats',
    description: 'Gleaming brushed gold brass counter, glowing ruby spirit wall, flair mixologists muddling fresh botanicals, and resident weekend DJ console.',
    image: 'https://images.unsplash.com/photo-1572116469696-31de0f17cc34?auto=format&fit=crop&w=1200&q=80',
    features: ['Flair Mixology', 'Resident DJ Console', 'Happy Hour Hub']
  }
];

export const AmbianceGallery: React.FC = () => {
  const [activeSpace, setActiveSpace] = useState<GallerySpace>(SPACES[0]);

  return (
    <section id="ambiance" className="py-28 bg-[#0a0507] relative overflow-hidden">
      {/* Dynamic ambient lighting glows */}
      <div className="absolute top-1/2 -left-20 w-[500px] h-[500px] bg-[#821428]/20 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#d4af37]/12 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ffd76e]/50 bg-gradient-to-r from-[#30060e] via-[#540c1a] to-[#30060e] text-[#faf3d4] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
              <Camera className="w-4 h-4 text-[#ffd76e]" />
              <span>Architectural Atmosphere</span>
            </div>
            <h2 className="font-exotic text-3xl sm:text-5xl font-black tracking-wide text-shimmer-gold glow-text-exotic">
              FOUR THEMED LOUNGES
            </h2>
            <p className="font-italiana text-2xl text-[#faf3d4] mt-2 glow-text-gold">
              From candlelit velvet corners to breezy starlit rooftop cabanas
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.03 }}
            className="p-5 rounded-2xl border border-[#ffd76e]/40 bg-[#1a0408]/90 flex items-center gap-4 shadow-xl"
          >
            <Music className="w-6 h-6 text-[#ffd76e] shrink-0 animate-pulse" />
            <div className="text-xs text-[#ddd2c0]">
              <span className="text-white font-bold block text-sm">Live Flamenco & DJ Sets</span>
              Wednesdays, Fridays & Saturdays from 8:00 PM
            </div>
          </motion.div>
        </motion.div>

        {/* Space Tab Navigation with Animated Layout Pill */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mb-10">
          {SPACES.map((space) => {
            const isActive = activeSpace.id === space.id;
            return (
              <motion.button
                key={space.id}
                whileTap={{ scale: 0.97 }}
                onClick={() => setActiveSpace(space)}
                className="relative p-5 rounded-2xl text-left transition-all duration-300 overflow-hidden group shadow-lg"
              >
                {isActive ? (
                  <motion.div
                    layoutId="activeAmbianceSpaceTab"
                    className="absolute inset-0 bg-gradient-to-b from-[#821428] via-[#540c1a] to-[#30060e] border-2 border-[#ffd76e] shadow-[0_0_25px_rgba(212,175,55,0.35)] rounded-2xl"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#160408]/90 border border-[#30060e] rounded-2xl group-hover:border-[#aa1c36] transition-colors" />
                )}

                <div className="relative z-10">
                  <span className={`text-[10px] uppercase tracking-wider block font-extrabold mb-1 ${isActive ? 'text-[#ffd76e]' : 'text-[#aa1c36] group-hover:text-[#ffd76e]'}`}>
                    {space.category}
                  </span>
                  <span className={`font-playfair text-sm sm:text-base font-bold block ${isActive ? 'text-white' : 'text-[#faf3d4]'}`}>
                    {space.title}
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Active Space Hero Showcase with Motion & Transition */}
        <div className="relative rounded-3xl overflow-hidden border-2 border-[#ffd76e]/50 shadow-[0_0_45px_rgba(212,175,55,0.25)] bg-[#140205] min-h-[500px] flex flex-col justify-end">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeSpace.id}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.04 }}
              transition={{ duration: 0.6 }}
              src={activeSpace.image}
              alt={activeSpace.title}
              className="absolute inset-0 w-full h-full object-cover brightness-[0.42] contrast-105"
            />
          </AnimatePresence>

          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0507] via-[#0a0507]/65 to-transparent pointer-events-none" />

          {/* Details Overlay with Stagger Motion */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSpace.id + '-details'}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative z-10 p-6 sm:p-12 max-w-3xl"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="px-3.5 py-1 rounded-full bg-[#aa1c36] text-white text-xs font-bold uppercase tracking-wider shadow-md">
                  {activeSpace.category}
                </span>
                <span className="text-xs text-[#ffd76e] flex items-center gap-1.5 font-bold">
                  <Users className="w-4 h-4 text-[#ffd76e]" />
                  {activeSpace.capacity}
                </span>
              </div>

              <div className="text-xs text-[#ffd76e] font-marcellus tracking-widest uppercase mb-1">
                {activeSpace.subtitle}
              </div>

              <h3 className="font-exotic text-2xl sm:text-4xl font-black text-white mb-3 text-shimmer-gold">
                {activeSpace.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#ddd2c0] leading-relaxed mb-6 max-w-2xl">
                {activeSpace.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeSpace.features.map((ft) => (
                  <span key={ft} className="px-3.5 py-1 rounded-xl bg-[#160408]/90 border border-[#aa1c36] text-[11px] text-[#faf3d4] font-medium shadow-md">
                    ✓ {ft}
                  </span>
                ))}
              </div>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#reservation"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.4)]"
              >
                <span>Book Table in {activeSpace.title}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.a>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};

