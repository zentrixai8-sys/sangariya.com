import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem } from '../types';
import { Wine, Sparkles, Check, Flame, ChevronRight, Award, Plus } from 'lucide-react';

interface SangriaBarSpotlightProps {
  onSelectForBooking?: (item: MenuItem, size: 'glass' | 'pitcher' | 'tower') => void;
  onOpenBooking: () => void;
}

export const SangriaBarSpotlight: React.FC<SangriaBarSpotlightProps> = ({ onSelectForBooking, onOpenBooking }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [servingSizes, setServingSizes] = useState<Record<string, 'glass' | 'pitcher' | 'tower'>>({});
  const [tastingFlight, setTastingFlight] = useState<string[]>(['s1', 's2', 's3']);
  const [notification, setNotification] = useState<string | null>(null);

  const sangriaItems = MENU_ITEMS.filter((item) => item.category === 'sangrias');

  const filteredItems = sangriaItems.filter((item) => {
    if (selectedCategory === 'all') return true;
    if (selectedCategory === 'red') return item.id === 's1' || item.id === 's4' || item.id === 's6';
    if (selectedCategory === 'white') return item.id === 's2' || item.id === 's5';
    if (selectedCategory === 'rose') return item.id === 's3';
    if (selectedCategory === 'virgin') return item.id === 's7';
    return true;
  });

  const handleSizeChange = (itemId: string, size: 'glass' | 'pitcher' | 'tower') => {
    setServingSizes((prev) => ({ ...prev, [itemId]: size }));
  };

  const toggleFlightItem = (itemId: string) => {
    if (tastingFlight.includes(itemId)) {
      if (tastingFlight.length > 1) {
        setTastingFlight(tastingFlight.filter((id) => id !== itemId));
      }
    } else {
      if (tastingFlight.length < 3) {
        setTastingFlight([...tastingFlight, itemId]);
      } else {
        // replace first item
        setTastingFlight([...tastingFlight.slice(1), itemId]);
      }
    }
  };

  const handleQuickAdd = (item: MenuItem) => {
    const size = servingSizes[item.id] || 'pitcher';
    if (onSelectForBooking) {
      onSelectForBooking(item, size);
    }
    setNotification(`Added 1x ${item.name} (${size.toUpperCase()}) to Table Booking!`);
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <section id="sangrias" className="relative py-28 bg-[#0d070a] overflow-hidden">
      {/* Background ambient lighting and golden wine auroras */}
      <div className="absolute top-10 left-1/4 w-[500px] h-[500px] bg-[#aa1c36]/20 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute bottom-10 right-10 w-[550px] h-[550px] bg-[#d4af37]/15 rounded-full blur-[150px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Exotic Typography & Luminous Lighting */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ffd76e]/50 bg-gradient-to-r from-[#30060e] via-[#540c1a] to-[#30060e] text-[#faf3d4] text-xs uppercase tracking-[0.28em] font-bold mb-5 shadow-[0_0_25px_rgba(212,175,55,0.3)]">
            <Wine className="w-4 h-4 text-[#ffd76e]" />
            <span>The Exotic Sangria Cellar</span>
          </div>

          <h2 className="font-exotic text-3xl sm:text-5xl lg:text-6xl font-black text-shimmer-gold tracking-wide mb-4 leading-tight glow-text-exotic">
            ARTISANAL SANGRIA CARAFES
          </h2>

          <p className="font-italiana text-2xl sm:text-3xl text-[#faf3d4] mb-4 glow-text-gold">
            Slow Macerated with Sun-Ripened Fruits & Spiced Botanicals
          </p>

          <p className="font-sans text-xs sm:text-sm text-[#ddd2c0] leading-relaxed">
            Every carafe is crafted with hand-selected Spanish & world vintage reserves, macerated for 48 hours with fresh citrus, mountain berries, and aromatic whole spices. Available by the single goblet, 1-litre sharing carafe, or 3-litre illuminated grand party tower.
          </p>
        </motion.div>

        {/* Sangria Categories Filter Tabs with Animated Pill */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-12">
          {[
            { id: 'all', label: 'All Sangrias' },
            { id: 'red', label: 'Tempranillo & Red' },
            { id: 'white', label: 'Sauvignon Blanc & White' },
            { id: 'rose', label: 'Sparkling Rosé Cava' },
            { id: 'virgin', label: 'Zero-Proof Orchard' }
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className="relative px-5 py-2.5 rounded-full text-xs font-semibold tracking-wider transition-all duration-300 overflow-hidden group"
            >
              {selectedCategory === cat.id ? (
                <motion.div
                  layoutId="activeSangriaCategory"
                  className="absolute inset-0 bg-gradient-to-r from-[#821428] via-[#aa1c36] to-[#540c1a] border border-[#ffd76e]/70 shadow-[0_0_25px_rgba(212,175,55,0.35)] rounded-full"
                  transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                />
              ) : (
                <div className="absolute inset-0 bg-[#1a0408]/90 border border-[#540c1a]/70 rounded-full group-hover:border-[#aa1c36] transition-colors" />
              )}
              <span className={`relative z-10 ${selectedCategory === cat.id ? 'text-white font-bold' : 'text-[#c8bfb0] group-hover:text-white'}`}>
                {cat.label}
              </span>
            </button>
          ))}
        </div>

        {/* Notification Toast with Motion */}
        <AnimatePresence>
          {notification && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.9 }}
              transition={{ duration: 0.25 }}
              className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-[#821428] to-[#1a0408] border-2 border-[#ffd76e] text-white px-6 py-3.5 rounded-2xl shadow-[0_0_35px_rgba(212,175,55,0.45)] flex items-center gap-2.5 text-xs font-bold backdrop-blur-xl"
            >
              <Check className="w-4 h-4 text-[#ffd76e]" />
              <span>{notification}</span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Sangria Pitchers Animated Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => {
              const currentSize = servingSizes[item.id] || 'pitcher';
              const displayPrice =
                currentSize === 'glass'
                  ? item.price
                  : currentSize === 'pitcher'
                  ? item.pitcherPrice || item.price * 2.5
                  : item.towerPrice || item.price * 5.5;

              const isFlightSelected = tastingFlight.includes(item.id);

              return (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 30, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.92 }}
                  transition={{ duration: 0.35, delay: idx * 0.04 }}
                  whileHover={{ y: -7, transition: { duration: 0.22 } }}
                  key={item.id}
                  className="group relative rounded-3xl bg-gradient-to-b from-[#24060d]/95 via-[#160408]/95 to-[#0e070a] border border-[#540c1a] hover:border-[#ffd76e]/80 transition-all duration-300 overflow-hidden flex flex-col shadow-2xl hover:shadow-[0_15px_45px_rgba(170,28,54,0.4)]"
                >
                  {/* Shimmer Light Glint Effect */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-20" />

                  {/* Image Container with Badging */}
                  <div className="relative h-60 overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 contrast-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160408] via-[#160408]/40 to-transparent" />
                    
                    {/* Top Tags */}
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#30060e]/95 text-[#faf3d4] border border-[#aa1c36] backdrop-blur-md shadow-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {item.alcoholByVolume && (
                      <div className="absolute top-3 right-3 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-black/80 text-[#faf3d4] border border-[#ffd76e]/40 backdrop-blur-md z-10">
                        {item.alcoholByVolume}
                      </div>
                    )}

                    {/* Flight Selector Pin */}
                    <motion.button
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleFlightItem(item.id)}
                      title={isFlightSelected ? 'Remove from Tasting Flight' : 'Add to 3-Sangria Tasting Flight'}
                      className={`absolute bottom-3 right-3 px-3 py-1 rounded-full text-[11px] font-bold flex items-center gap-1.5 backdrop-blur-md transition-all z-10 ${
                        isFlightSelected
                          ? 'bg-[#ffd76e] text-black shadow-[0_0_15px_rgba(255,215,110,0.6)]'
                          : 'bg-[#1a0408]/90 text-[#faf3d4] border border-[#ffd76e]/50 hover:bg-[#ffd76e]/20'
                      }`}
                    >
                      {isFlightSelected ? <Check className="w-3.5 h-3.5 stroke-[3]" /> : <Plus className="w-3.5 h-3.5" />}
                      <span>Flight</span>
                    </motion.button>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {item.subtitle && (
                        <div className="text-[11px] font-semibold text-[#ffd76e] tracking-wider mb-1 font-marcellus">
                          {item.subtitle}
                        </div>
                      )}
                      
                      <h3 className="font-playfair text-xl font-bold text-[#faf3d4] group-hover:text-[#ffd76e] transition-colors mb-2">
                        {item.name}
                      </h3>

                      <p className="text-xs text-[#c8bfb0] leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Tasting notes */}
                      {item.tasteNotes && (
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {item.tasteNotes.map((note) => (
                            <span
                              key={note}
                              className="px-2 py-0.5 rounded-md bg-[#30060e]/80 border border-[#540c1a] text-[10px] text-[#faf3d4] font-medium"
                            >
                              {note}
                            </span>
                          ))}
                        </div>
                      )}

                      {/* Pairing suggestion */}
                      {item.pairing && (
                        <div className="text-[11px] text-[#faf3d4]/90 mb-5 flex items-start gap-1.5 bg-[#1a0408]/90 p-2.5 rounded-xl border border-[#540c1a]">
                          <Flame className="w-3.5 h-3.5 text-[#ffd76e] shrink-0 mt-0.5" />
                          <span><strong>Best Paired With:</strong> {item.pairing}</span>
                        </div>
                      )}
                    </div>

                    {/* Serving Size Selector & Price */}
                    <div className="pt-4 border-t border-[#540c1a]/80">
                      <div className="flex items-center justify-between mb-3 text-[11px] font-semibold text-[#c8bfb0]">
                        <span>Select Size:</span>
                        <div className="flex items-center gap-1 bg-[#1a0408] p-1 rounded-xl border border-[#540c1a]">
                          <button
                            onClick={() => handleSizeChange(item.id, 'glass')}
                            className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-all ${
                              currentSize === 'glass' ? 'bg-[#821428] text-white shadow-md' : 'text-[#c8bfb0] hover:text-white'
                            }`}
                          >
                            Glass
                          </button>
                          <button
                            onClick={() => handleSizeChange(item.id, 'pitcher')}
                            className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-all ${
                              currentSize === 'pitcher' ? 'bg-[#821428] text-white shadow-md' : 'text-[#c8bfb0] hover:text-white'
                            }`}
                          >
                            Pitcher (1L)
                          </button>
                          {item.towerPrice && (
                            <button
                              onClick={() => handleSizeChange(item.id, 'tower')}
                              className={`px-2 py-0.5 rounded-lg text-[10px] font-semibold transition-all ${
                                currentSize === 'tower' ? 'bg-[#821428] text-white shadow-md' : 'text-[#c8bfb0] hover:text-white'
                              }`}
                            >
                              Tower (3L)
                            </button>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div>
                          <div className="text-[10px] uppercase tracking-wider text-[#c8bfb0]">
                            {currentSize === 'glass' ? 'Per Glass' : currentSize === 'pitcher' ? '1L Sharing Pitcher' : '3L Grand Tower'}
                          </div>
                          <motion.div
                            key={displayPrice}
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-xl font-extrabold text-[#ffd76e] font-serif glow-text-gold"
                          >
                            ₹{displayPrice.toLocaleString()}
                          </motion.div>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => handleQuickAdd(item)}
                          className="px-4 py-2 rounded-xl bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold text-xs uppercase tracking-wider hover:brightness-110 shadow-[0_0_20px_rgba(212,175,55,0.35)] flex items-center gap-1.5 transition-all"
                        >
                          <span>Pre-Order</span>
                          <ChevronRight className="w-3.5 h-3.5" />
                        </motion.button>
                      </div>
                    </div>

                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Interactive 3-Sangria Tasting Flight Banner with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl glass-luxe-glow border border-[#ffd76e]/50 p-6 sm:p-8 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#ffd76e]/15 rounded-full blur-[90px] pointer-events-none" />

          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
            <div className="text-left max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#30060e] text-[#faf3d4] text-[11px] font-bold uppercase tracking-widest border border-[#aa1c36] mb-3 shadow-md">
                <Sparkles className="w-3.5 h-3.5 text-[#ffd76e]" />
                <span>Chef Sommelier Experience</span>
              </div>
              <h3 className="font-exotic text-2xl sm:text-3xl font-black text-shimmer-gold mb-2">
                THE 3-SANGRIA TASTING FLIGHT
              </h3>
              <p className="text-xs sm:text-sm text-[#faf3d4]/90 mb-3 leading-relaxed">
                Can't decide on just one? Experience three 250ml mini-carafes of your favorite handcrafted Sangrias served on an artisanal carved wooden flight board with chilled fruit bowls and olives.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs text-[#faf3d4]">
                <span className="font-semibold text-[#ffd76e]">Selected for your Flight:</span>
                {tastingFlight.map((id) => {
                  const it = sangriaItems.find((s) => s.id === id);
                  return (
                    <span key={id} className="bg-[#1a0408] px-2.5 py-1 rounded-full border border-[#aa1c36] text-[11px] font-medium text-[#faf3d4]">
                      {it?.name}
                    </span>
                  );
                })}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
              <div className="text-center sm:text-right">
                <div className="text-xs text-[#c8bfb0] uppercase tracking-wider font-semibold">Flight Special Price</div>
                <div className="text-3xl font-extrabold text-[#ffd76e] font-serif">₹999 <span className="text-xs line-through text-[#aa1c36] ml-1 font-sans">₹1,500</span></div>
                <div className="text-[10px] text-[#faf3d4]/80">Serves 2-3 Guests</div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={onOpenBooking}
                className="px-7 py-3.5 rounded-full bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.45)] transition-all"
              >
                Reserve Tasting Flight
              </motion.button>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

