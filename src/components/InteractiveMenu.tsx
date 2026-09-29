import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MENU_ITEMS } from '../data/restaurantData';
import { MenuItem, MenuCategory } from '../types';
import { Wine, Utensils, Sparkles, Flame, Info, X, ChevronRight, Eye } from 'lucide-react';

interface InteractiveMenuProps {
  onSelectItemForBooking?: (item: MenuItem) => void;
}

export const InteractiveMenu: React.FC<InteractiveMenuProps> = ({ onSelectItemForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('tapas');
  const [filterTag, setFilterTag] = useState<string>('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const categories: { id: MenuCategory; label: string; sub: string }[] = [
    { id: 'tapas', label: 'Exotic Tapas', sub: 'Spanish Small Plates' },
    { id: 'pizzas', label: 'Woodfired Pizzas', sub: 'Sourdough Artisanal' },
    { id: 'sangrias', label: 'Sangria Cellar', sub: 'Pitchers & Towers' },
    { id: 'cocktails', label: 'Craft Cocktails', sub: 'Smoked & Molecular' },
    { id: 'royal_mains', label: 'Royal Mains', sub: 'Charcoal Dum Pukht' },
    { id: 'desserts', label: 'Exotic Desserts', sub: 'Churros & Baklava' },
  ];

  const filteredItems = useMemo(() => {
    return MENU_ITEMS.filter((item) => {
      const matchCat = item.category === activeCategory;
      if (!matchCat) return false;
      if (filterTag === 'all') return true;
      if (filterTag === 'vegetarian') return item.tags.includes('Vegetarian');
      if (filterTag === 'non-vegetarian') return item.tags.includes('Non-Vegetarian');
      if (filterTag === 'signature') return item.tags.includes('Signature') || item.tags.includes('Chef Special');
      if (filterTag === 'smoked') return item.tags.includes('Smoked');
      return true;
    });
  }, [activeCategory, filterTag]);

  return (
    <section id="menu" className="py-28 bg-[#0e070a] relative overflow-hidden">
      {/* Background ambient lighting glows */}
      <div className="absolute top-1/3 -right-20 w-[550px] h-[550px] bg-[#821428]/20 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-[#d4af37]/12 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header with Exotic Typography & Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ffd76e]/50 bg-gradient-to-r from-[#30060e] via-[#540c1a] to-[#30060e] text-[#faf3d4] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Utensils className="w-4 h-4 text-[#ffd76e]" />
            <span>Exotic Culinary Repertoire</span>
          </div>

          <h2 className="font-exotic text-3xl sm:text-5xl font-black tracking-wide text-shimmer-gold mb-3 glow-text-exotic">
            TAPAS, WOODFIRED & ROYAL DELICACIES
          </h2>

          <p className="font-italiana text-2xl sm:text-3xl text-[#faf3d4] mb-3 glow-text-gold">
            Sun-Drenched Spanish Flavors Meet Royal Heritage Charcoal Gastronomy
          </p>

          <p className="text-xs sm:text-sm text-[#ddd2c0] leading-relaxed">
            Hand-kneaded 48-hour sourdough pizzas, sizzling gambas, slow-smoked charcoal kebabs, and velvety desserts under ambient golden illumination.
          </p>
        </motion.div>

        {/* Category Navigation Tabs with Animated Pill */}
        <div className="flex items-center justify-start sm:justify-center gap-2.5 sm:gap-3.5 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveCategory(cat.id);
                  setFilterTag('all');
                }}
                className="relative px-5 py-3.5 rounded-2xl text-left transition-all duration-300 shrink-0 overflow-hidden group"
              >
                {isActive ? (
                  <motion.div
                    layoutId="activeMenuCategoryPill"
                    className="absolute inset-0 bg-gradient-to-b from-[#821428] via-[#540c1a] to-[#30060e] border-2 border-[#ffd76e] shadow-[0_0_30px_rgba(212,175,55,0.4)] rounded-2xl"
                    transition={{ type: 'spring', stiffness: 450, damping: 32 }}
                  />
                ) : (
                  <div className="absolute inset-0 bg-[#1a0408]/90 border border-[#540c1a]/70 rounded-2xl group-hover:border-[#aa1c36] transition-colors" />
                )}
                <div className={`relative z-10 text-xs sm:text-sm font-bold tracking-wider uppercase font-marcellus ${isActive ? 'text-white' : 'text-[#c8bfb0] group-hover:text-[#ffd76e]'}`}>
                  {cat.label}
                </div>
                <div className={`relative z-10 text-[10px] tracking-wide mt-0.5 ${isActive ? 'text-[#ffd76e]' : 'text-[#8e8576]'}`}>
                  {cat.sub}
                </div>
              </button>
            );
          })}
        </div>

        {/* Dietary Filter Buttons */}
        <div className="flex items-center justify-center gap-2 mb-10 flex-wrap">
          {['all', 'signature', 'vegetarian', 'non-vegetarian', 'smoked'].map((t) => (
            <motion.button
              whileTap={{ scale: 0.93 }}
              key={t}
              onClick={() => setFilterTag(t)}
              className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all duration-300 ${
                filterTag === t
                  ? 'bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold shadow-[0_0_20px_rgba(212,175,55,0.4)]'
                  : 'bg-[#1a0408]/90 text-[#c8bfb0] border border-[#540c1a] hover:text-[#ffd76e] hover:border-[#ffd76e]/50'
              }`}
            >
              {t === 'all' ? 'All Items' : t.replace('-', ' ')}
            </motion.button>
          ))}
        </div>

        {/* Items Animated Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 25, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.92 }}
                transition={{ duration: 0.35, delay: idx * 0.03 }}
                whileHover={{ y: -8, transition: { duration: 0.22 } }}
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="group cursor-pointer rounded-3xl bg-gradient-to-b from-[#24060d]/95 via-[#160408]/95 to-[#0e070a] border border-[#540c1a] hover:border-[#ffd76e]/80 p-5 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_15px_45px_rgba(170,28,54,0.4)] relative overflow-hidden"
              >
                {/* Light Shimmer Effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none z-20" />

                <div>
                  <div className="relative h-52 rounded-2xl overflow-hidden mb-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-95 contrast-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#160408] via-transparent to-transparent" />
                    
                    {/* Category / Dietary Badge */}
                    <div className="absolute top-2.5 left-2.5 flex flex-wrap gap-1 z-10">
                      {item.tags.slice(0, 2).map((tg) => (
                        <span
                          key={tg}
                          className={`px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider backdrop-blur-md shadow-md ${
                            tg === 'Vegetarian'
                              ? 'bg-emerald-950/90 text-emerald-300 border border-emerald-600'
                              : tg === 'Non-Vegetarian'
                              ? 'bg-red-950/90 text-red-300 border border-red-600'
                              : 'bg-[#30060e]/95 text-[#faf3d4] border border-[#aa1c36]'
                          }`}
                        >
                          {tg}
                        </span>
                      ))}
                    </div>

                    <div className="absolute bottom-2.5 right-2.5 px-3 py-1 rounded-full bg-black/85 text-[#ffd76e] font-serif text-sm font-bold border border-[#ffd76e]/50 backdrop-blur-md shadow-lg z-10">
                      ₹{item.price.toLocaleString()}
                    </div>
                  </div>

                  {item.subtitle && (
                    <div className="text-[11px] text-[#ffd76e] font-semibold tracking-wider mb-1 font-marcellus">
                      {item.subtitle}
                    </div>
                  )}

                  <h3 className="font-playfair text-lg font-bold text-[#faf3d4] group-hover:text-[#ffd76e] transition-colors mb-2 line-clamp-1">
                    {item.name}
                  </h3>

                  <p className="text-xs text-[#c8bfb0] leading-relaxed line-clamp-2 mb-3">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#540c1a]/80 flex items-center justify-between text-xs">
                  <span className="text-[#c8bfb0] flex items-center gap-1.5 group-hover:text-[#ffd76e] transition-colors font-medium">
                    <Eye className="w-3.5 h-3.5 text-[#ffd76e]" />
                    <span>View Pairing & Notes</span>
                  </span>
                  <span className="text-[#ffd76e] font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Explore</span>
                    <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Item Detail Modal with Motion */}
        <AnimatePresence>
          {selectedItem && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-xl">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: 'spring', damping: 28, stiffness: 350 }}
                className="relative w-full max-w-2xl rounded-3xl bg-gradient-to-b from-[#24060d] via-[#160408] to-[#0e070a] border-2 border-[#ffd76e]/70 p-6 sm:p-8 shadow-[0_0_60px_rgba(212,175,55,0.4)] overflow-hidden"
              >
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 p-2 text-[#c8bfb0] hover:text-[#ffd76e] rounded-full bg-[#30060e] border border-[#540c1a] z-20 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="relative h-60 sm:h-full rounded-2xl overflow-hidden border border-[#ffd76e]/30 shadow-lg">
                    <img
                      src={selectedItem.image}
                      alt={selectedItem.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>

                  <div className="flex flex-col justify-between">
                    <div>
                      {selectedItem.subtitle && (
                        <div className="text-xs text-[#ffd76e] font-semibold tracking-wider font-marcellus mb-1">
                          {selectedItem.subtitle}
                        </div>
                      )}
                      <h3 className="font-playfair text-2xl font-bold text-white mb-2">
                        {selectedItem.name}
                      </h3>
                      <div className="text-2xl font-extrabold text-[#ffd76e] font-serif mb-4 glow-text-gold">
                        ₹{selectedItem.price.toLocaleString()}
                      </div>
                      <p className="text-xs text-[#ddd2c0] leading-relaxed mb-4">
                        {selectedItem.description}
                      </p>

                      {selectedItem.tasteNotes && (
                        <div className="mb-4">
                          <div className="text-[11px] uppercase font-bold text-[#ffd76e] mb-1.5">Tasting Notes:</div>
                          <div className="flex flex-wrap gap-1.5">
                            {selectedItem.tasteNotes.map((n) => (
                              <span key={n} className="px-2.5 py-0.5 rounded-full bg-[#30060e] border border-[#540c1a] text-[10px] text-[#faf3d4] font-medium">
                                {n}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      {selectedItem.pairing && (
                        <div className="p-3 rounded-xl bg-[#1a0408] border border-[#aa1c36] text-xs text-[#faf3d4]">
                          <span className="font-bold text-[#ffd76e]">Sommelier Pairing:</span> {selectedItem.pairing}
                        </div>
                      )}
                    </div>

                    <div className="mt-6 pt-4 border-t border-[#540c1a] flex items-center gap-3">
                      <motion.button
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => {
                          if (onSelectItemForBooking) {
                            onSelectItemForBooking(selectedItem);
                          }
                          setSelectedItem(null);
                        }}
                        className="flex-1 py-3 rounded-xl bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold text-xs uppercase tracking-wider text-center hover:brightness-110 shadow-lg"
                      >
                        Pre-Order with Table
                      </motion.button>
                      <button
                        onClick={() => setSelectedItem(null)}
                        className="px-4 py-3 rounded-xl border border-[#540c1a] text-[#c8bfb0] hover:text-white text-xs font-semibold"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};

