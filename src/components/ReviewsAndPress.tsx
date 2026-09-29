import React, { useState } from 'react';
import { Star, Award, CheckCircle2, Send, Wine } from 'lucide-react';
import { TESTIMONIALS } from '../data/restaurantData';

export const ReviewsAndPress: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
    }
  };

  return (
    <section id="reviews" className="py-24 bg-[#080506] relative border-t border-[#420811]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#8c1426] bg-[#24050a] text-[#dfc571] text-xs font-semibold uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(105,12,27,0.4)]">
            <Award className="w-3.5 h-3.5 text-[#d4af37]" />
            <span>Critical Acclaim & Guest Reviews</span>
          </div>

          <h2 className="font-exotic text-3xl sm:text-5xl font-bold tracking-wide text-[#fbf8eb] mb-3">
            PRAISE & GUEST REPUTATION
          </h2>

          <p className="font-italiana text-xl text-[#dfc571]">
            Celebrated by Michelin-Grade Critics & Esteemed Connoisseurs
          </p>
        </div>

        {/* Testimonials 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {TESTIMONIALS.map((review) => (
            <div
              key={review.id}
              className="p-8 rounded-3xl bg-gradient-to-b from-[#140205] to-[#080506] border border-[#420811] hover:border-[#d4af37]/60 transition-all flex flex-col justify-between shadow-xl group hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center gap-1 text-[#d4af37] mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#d4af37]" />
                  ))}
                </div>
                <p className="font-playfair italic text-sm sm:text-base text-[#ded7c8] leading-relaxed mb-6">
                  "{review.quote}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#24050a]">
                <div className="font-playfair text-base font-bold text-white group-hover:text-[#dfc571] transition-colors">
                  {review.author}
                </div>
                <div className="text-xs text-[#a89f91] mt-0.5">
                  {review.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* VIP Club & Secret Speakeasy Access */}
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#24050a] via-[#420811] to-[#24050a] border border-[#d4af37]/70 relative overflow-hidden shadow-2xl">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#dfc571] font-bold block mb-2">
              The Sangria Patrons Club
            </span>
            <h3 className="font-exotic text-2xl sm:text-4xl font-bold text-white mb-3">
              JOIN THE SANGRIA VIP CIRCLE
            </h3>
            <p className="text-xs sm:text-sm text-[#f5eed0]/85 mb-8 leading-relaxed">
              Receive exclusive invites to monthly private wine cellar tastings, secret Sangria releases, and VIP table privileges on high-demand weekends.
            </p>

            {subscribed ? (
              <div className="inline-flex items-center gap-2 p-4 rounded-2xl bg-emerald-950/80 border border-emerald-500/60 text-emerald-300 text-sm">
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>You are on the VIP guest list! We will send your personal welcome pass.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your VIP email address"
                  className="w-full bg-[#080506] border border-[#8c1426] rounded-full px-5 py-3.5 text-xs sm:text-sm text-[#f5eed0] focus:outline-none focus:border-[#d4af37]"
                  required
                />
                <button
                  type="submit"
                  className="w-full sm:w-auto px-7 py-3.5 rounded-full bg-gradient-to-r from-[#d4af37] to-[#b89324] text-black font-bold text-xs uppercase tracking-wider hover:brightness-110 shrink-0 flex items-center justify-center gap-2 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Request Pass</span>
                </button>
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
};
