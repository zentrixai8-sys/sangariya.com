import React from 'react';
import { motion } from 'motion/react';
import { WEEKLY_EVENTS } from '../data/restaurantData';
import { Calendar, Clock, Flame, Music, Sparkles, Tag, Wine, Users, ArrowRight } from 'lucide-react';

interface WeeklyEventsProps {
  onOpenBooking: () => void;
}

export const WeeklyEvents: React.FC<WeeklyEventsProps> = ({ onOpenBooking }) => {
  return (
    <section id="events" className="py-28 bg-[#0a0507] relative overflow-hidden">
      {/* Dynamic ambient lighting glows */}
      <div className="absolute top-1/3 -right-20 w-[500px] h-[500px] bg-[#821428]/20 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute bottom-10 left-10 w-[450px] h-[450px] bg-[#d4af37]/12 rounded-full blur-[140px] pointer-events-none animate-ambient-pulse" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ffd76e]/50 bg-gradient-to-r from-[#30060e] via-[#540c1a] to-[#30060e] text-[#faf3d4] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Flame className="w-4 h-4 text-[#ffd76e] animate-pulse" />
            <span>Weekly Nightlife & Offers</span>
          </div>

          <h2 className="font-exotic text-3xl sm:text-5xl font-black tracking-wide text-shimmer-gold mb-3 glow-text-exotic">
            SANGRIA NIGHTS & LIVE ENTERTAINMENT
          </h2>

          <p className="font-italiana text-2xl sm:text-3xl text-[#faf3d4] mb-3 glow-text-gold">
            Every Evening Has Its Own Hypnotic Frequency & Celebration
          </p>

          <p className="text-xs sm:text-sm text-[#ddd2c0] leading-relaxed">
            From chilled Monday pitcher specials and Wednesday Señoritas night to Friday live Spanish Flamenco and Sunday boozy brunches.
          </p>
        </motion.div>

        {/* Happy Hour Hero Callout Card with Motion & Glowing Borders */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.015 }}
          className="rounded-3xl bg-gradient-to-r from-[#30060e] via-[#540c1a] to-[#30060e] border-2 border-[#ffd76e]/70 p-6 sm:p-8 mb-14 shadow-[0_0_40px_rgba(212,175,55,0.25)] flex flex-col md:flex-row items-center justify-between gap-6 relative overflow-hidden group"
        >
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

          <div className="flex items-start gap-5">
            <motion.div
              animate={{ rotate: [0, -8, 8, -4, 4, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="w-16 h-16 rounded-2xl bg-[#1a0408] border border-[#ffd76e] flex items-center justify-center shrink-0 shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            >
              <Wine className="w-8 h-8 text-[#ffd76e]" />
            </motion.div>
            <div>
              <div className="inline-block px-3 py-0.5 rounded-full bg-[#aa1c36] text-white text-[10px] font-black uppercase tracking-widest mb-1.5 shadow-md">
                Everyday Ritual • 4:00 PM – 8:00 PM
              </div>
              <h3 className="font-playfair text-2xl sm:text-3xl font-bold text-white mb-1.5">
                Sangria Sunset Happy Hours
              </h3>
              <p className="text-xs sm:text-sm text-[#f5eed0]/90 max-w-2xl leading-relaxed">
                Buy 1 Get 1 Free on all 1-Litre Sangria Pitchers & Artisanal Craft Cocktails. Complimentary chef's bruschetta board on tables of 4 or more.
              </p>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpenBooking}
            className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.4)] shrink-0 flex items-center gap-2"
          >
            <span>Claim Happy Hour Table</span>
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

        {/* Weekly Event Cards Grid with Stagger & Spring Motion */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {WEEKLY_EVENTS.map((evt, idx) => (
            <motion.div
              key={evt.day}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -8, transition: { duration: 0.22 } }}
              className="rounded-3xl bg-gradient-to-b from-[#24060d]/95 via-[#160408]/95 to-[#0e070a] border border-[#540c1a] hover:border-[#ffd76e]/80 p-6 transition-all duration-300 flex flex-col justify-between shadow-xl hover:shadow-[0_15px_45px_rgba(170,28,54,0.35)] group relative overflow-hidden"
            >
              {/* Shimmer sweep */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />

              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3.5 py-1 rounded-full bg-[#30060e] text-[#ffd76e] border border-[#aa1c36] text-[11px] font-black uppercase tracking-widest font-marcellus shadow-md">
                    {evt.day}
                  </span>
                  <span className="flex items-center gap-1.5 text-[11px] text-[#ddd2c0] font-medium">
                    <Clock className="w-3.5 h-3.5 text-[#ffd76e]" />
                    {evt.timing}
                  </span>
                </div>

                <h3 className="font-playfair text-xl font-bold text-white group-hover:text-[#ffd76e] transition-colors mb-3">
                  {evt.title}
                </h3>

                <div className="p-3.5 rounded-2xl bg-[#1a0408] border border-[#540c1a] mb-4">
                  <div className="text-[11px] font-bold text-[#ffd76e] flex items-center gap-1.5 mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffd76e]" />
                    <span>Special Feature:</span>
                  </div>
                  <div className="text-xs text-[#faf3d4] font-medium leading-relaxed">
                    {evt.highlight}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#ddd2c0] mb-3">
                  <Tag className="w-3.5 h-3.5 text-[#ff8095]" />
                  <span><strong>Offer:</strong> {evt.offer}</span>
                </div>

                <div className="flex items-center gap-2 text-xs text-[#c8bfb0]">
                  <Music className="w-3.5 h-3.5 text-[#ffd76e]" />
                  <span><strong>Music:</strong> {evt.genre}</span>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-[#540c1a] flex items-center justify-between">
                <span className="text-[11px] text-[#9e9485] uppercase tracking-wider font-bold">
                  Vibe: {evt.vibe}
                </span>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={onOpenBooking}
                  className="px-4 py-2 rounded-xl bg-[#30060e] hover:bg-[#aa1c36] border border-[#ffd76e]/50 text-white text-xs font-bold transition-all shadow-md"
                >
                  Book {evt.day}
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

