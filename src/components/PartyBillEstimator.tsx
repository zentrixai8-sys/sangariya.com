import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Calculator, Users, Wine, Utensils, Tag, Check, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';

interface PartyBillEstimatorProps {
  onBookWithPlan: (planSummary: string, guestCount: number) => void;
}

export const PartyBillEstimator: React.FC<PartyBillEstimatorProps> = ({ onBookWithPlan }) => {
  const [guests, setGuests] = useState<number>(4);
  const [sangriaPitchers, setSangriaPitchers] = useState<number>(2);
  const [tapasPlates, setTapasPlates] = useState<number>(3);
  const [pizzas, setPizzas] = useState<number>(2);
  const [includeDessert, setIncludeDessert] = useState<boolean>(true);
  const [coupon, setCoupon] = useState<string>('SANGRIA15');
  const [couponApplied, setCouponApplied] = useState<boolean>(true);
  const [couponError, setCouponError] = useState<string | null>(null);

  // Pricing constants (averages)
  const PITCHER_PRICE = 1550; // 1-Litre Pitcher
  const TAPAS_PRICE = 595;
  const PIZZA_PRICE = 785;
  const DESSERT_PRICE = 485;

  const rawSubtotal =
    sangriaPitchers * PITCHER_PRICE +
    tapasPlates * TAPAS_PRICE +
    pizzas * PIZZA_PRICE +
    (includeDessert ? guests * DESSERT_PRICE : 0);

  const discountPercent = couponApplied ? 15 : 0;
  const discountAmount = Math.round((rawSubtotal * discountPercent) / 100);
  const afterDiscount = rawSubtotal - discountAmount;
  const taxes = Math.round(afterDiscount * 0.05); // 5% GST
  const serviceCharge = Math.round(afterDiscount * 0.05); // 5% optional service
  const grandTotal = afterDiscount + taxes + serviceCharge;
  const perPerson = Math.round(grandTotal / Math.max(1, guests));

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (coupon.trim().toUpperCase() === 'SANGRIA15' || coupon.trim().toUpperCase() === 'VIPGUEST') {
      setCouponApplied(true);
      setCouponError(null);
    } else {
      setCouponApplied(false);
      setCouponError('Invalid coupon. Try using SANGRIA15 for 15% VIP discount!');
    }
  };

  const handleConfirmPlan = () => {
    const summary = `${guests} Guests | ${sangriaPitchers}x 1L Sangria Pitchers, ${tapasPlates}x Tapas Plates, ${pizzas}x Woodfired Pizzas${includeDessert ? ', Artisanal Desserts' : ''} (Est. Total: ₹${grandTotal.toLocaleString()})`;
    onBookWithPlan(summary, guests);
  };

  return (
    <section id="bill-estimator" className="py-28 bg-[#0d070a] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/3 w-[600px] h-[600px] bg-[#aa1c36]/15 rounded-full blur-[150px] pointer-events-none animate-ambient-pulse" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[450px] bg-[#d4af37]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Motion */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-[#ffd76e]/50 bg-gradient-to-r from-[#30060e] via-[#540c1a] to-[#30060e] text-[#faf3d4] text-xs font-bold uppercase tracking-[0.25em] mb-4 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            <Calculator className="w-4 h-4 text-[#ffd76e]" />
            <span>Party & Table Bill Estimator</span>
          </div>

          <h2 className="font-exotic text-3xl sm:text-5xl font-black tracking-wide text-shimmer-gold mb-3 glow-text-exotic">
            PLAN YOUR NIGHT & ESTIMATE SPEND
          </h2>

          <p className="font-italiana text-2xl sm:text-3xl text-[#faf3d4] mb-3 glow-text-gold">
            Transparent Pricing with VIP Promo Privileges
          </p>

          <p className="text-xs sm:text-sm text-[#ddd2c0] leading-relaxed">
            Calculate your party bill in real-time, apply exclusive online discount codes, and seamlessly book your table with your pre-selected food and pitcher package.
          </p>
        </motion.div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Panel (Left 7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 rounded-3xl glass-luxe-glow border border-[#ffd76e]/40 p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="font-playfair text-xl font-bold text-white mb-6 flex items-center gap-2.5">
              <Users className="w-5 h-5 text-[#ffd76e]" />
              <span>Step 1: Customize Your Gathering</span>
            </h3>

            {/* Guest Count Slider */}
            <div className="mb-6 p-4 rounded-2xl bg-[#1a0408]/90 border border-[#540c1a]">
              <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-[#faf3d4] mb-3">
                <span>Number of Guests:</span>
                <motion.span
                  key={guests}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-lg font-extrabold text-[#ffd76e] font-serif px-3 py-0.5 rounded-lg bg-[#30060e] border border-[#ffd76e]/50"
                >
                  {guests} People
                </motion.span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={guests}
                onChange={(e) => setGuests(parseInt(e.target.value))}
                className="w-full h-2.5 bg-[#30060e] rounded-lg appearance-none cursor-pointer accent-[#ffd76e]"
              />
              <div className="flex justify-between text-[10px] text-[#c8bfb0] mt-2 font-medium">
                <span>1 (Solo/Date)</span>
                <span>4 (Squad)</span>
                <span>10 (Party)</span>
                <span>20 (Grand Gala)</span>
              </div>
            </div>

            {/* Sangria Pitchers Counter */}
            <div className="mb-4 p-4 rounded-2xl bg-[#1a0408]/90 border border-[#540c1a] flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Wine className="w-4 h-4 text-[#ffd76e]" />
                  <span>1-Litre Sangria Pitchers</span>
                </div>
                <div className="text-[11px] text-[#c8bfb0]">Avg. ₹1,550 / pitcher (Serves 3-4 glasses)</div>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setSangriaPitchers(Math.max(0, sangriaPitchers - 1))}
                  className="w-9 h-9 rounded-full bg-[#30060e] border border-[#aa1c36] text-white font-extrabold flex items-center justify-center hover:bg-[#821428] transition-colors"
                >
                  -
                </motion.button>
                <motion.span
                  key={sangriaPitchers}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-base font-extrabold text-[#ffd76e] w-6 text-center"
                >
                  {sangriaPitchers}
                </motion.span>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setSangriaPitchers(sangriaPitchers + 1)}
                  className="w-9 h-9 rounded-full bg-[#30060e] border border-[#aa1c36] text-white font-extrabold flex items-center justify-center hover:bg-[#821428] transition-colors"
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Tapas Plates Counter */}
            <div className="mb-4 p-4 rounded-2xl bg-[#1a0408]/90 border border-[#540c1a] flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#ffd76e]" />
                  <span>Exotic Tapas & Small Bites</span>
                </div>
                <div className="text-[11px] text-[#c8bfb0]">Gambas, Patatas Bravas, Galouti (Avg. ₹595)</div>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setTapasPlates(Math.max(0, tapasPlates - 1))}
                  className="w-9 h-9 rounded-full bg-[#30060e] border border-[#aa1c36] text-white font-extrabold flex items-center justify-center hover:bg-[#821428] transition-colors"
                >
                  -
                </motion.button>
                <motion.span
                  key={tapasPlates}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-base font-extrabold text-[#ffd76e] w-6 text-center"
                >
                  {tapasPlates}
                </motion.span>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setTapasPlates(tapasPlates + 1)}
                  className="w-9 h-9 rounded-full bg-[#30060e] border border-[#aa1c36] text-white font-extrabold flex items-center justify-center hover:bg-[#821428] transition-colors"
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Woodfired Pizzas Counter */}
            <div className="mb-4 p-4 rounded-2xl bg-[#1a0408]/90 border border-[#540c1a] flex items-center justify-between">
              <div>
                <div className="text-sm font-bold text-white flex items-center gap-1.5">
                  <Utensils className="w-4 h-4 text-[#ffd76e]" />
                  <span>Woodfired Sourdough Pizzas</span>
                </div>
                <div className="text-[11px] text-[#c8bfb0]">Burrata Truffle, Prosciutto Fig, Chicken Tikka (Avg. ₹785)</div>
              </div>
              <div className="flex items-center gap-3">
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setPizzas(Math.max(0, pizzas - 1))}
                  className="w-9 h-9 rounded-full bg-[#30060e] border border-[#aa1c36] text-white font-extrabold flex items-center justify-center hover:bg-[#821428] transition-colors"
                >
                  -
                </motion.button>
                <motion.span
                  key={pizzas}
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  className="text-base font-extrabold text-[#ffd76e] w-6 text-center"
                >
                  {pizzas}
                </motion.span>
                <motion.button
                  whileTap={{ scale: 0.85 }}
                  onClick={() => setPizzas(pizzas + 1)}
                  className="w-9 h-9 rounded-full bg-[#30060e] border border-[#aa1c36] text-white font-extrabold flex items-center justify-center hover:bg-[#821428] transition-colors"
                >
                  +
                </motion.button>
              </div>
            </div>

            {/* Dessert Checkbox */}
            <div
              className="p-4 rounded-2xl bg-[#1a0408]/90 border border-[#540c1a] hover:border-[#ffd76e]/60 flex items-center justify-between cursor-pointer transition-colors"
              onClick={() => setIncludeDessert(!includeDessert)}
            >
              <div>
                <div className="text-sm font-bold text-white">Include Artisanal Desserts Course</div>
                <div className="text-[11px] text-[#c8bfb0]">Spanish Churros & Pistachio Baklava (₹485 / guest)</div>
              </div>
              <input
                type="checkbox"
                checked={includeDessert}
                onChange={() => {}}
                className="w-5 h-5 accent-[#ffd76e] cursor-pointer"
              />
            </div>
          </motion.div>

          {/* Bill Summary Receipt (Right 5 Cols) with Motion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-5 rounded-3xl bg-gradient-to-b from-[#24060d] via-[#160408] to-[#0e070a] border-2 border-[#ffd76e]/70 p-6 sm:p-8 shadow-[0_0_40px_rgba(212,175,55,0.3)] relative"
          >
            <div className="flex items-center justify-between border-b border-[#540c1a] pb-4 mb-4">
              <div>
                <div className="font-exotic text-lg font-black text-shimmer-gold">VIP ESTIMATE RECEIPT</div>
                <div className="text-[11px] text-[#ffd76e] font-marcellus">Sangría Royale • L'Exotique Dining</div>
              </div>
              <div className="text-right text-[11px] text-[#c8bfb0]">
                <div>{guests} Guest(s)</div>
                <div className="text-[#ffd76e] font-bold">Live Calculation</div>
              </div>
            </div>

            {/* Line Items */}
            <div className="space-y-2.5 text-xs text-[#c8bfb0] mb-4">
              <div className="flex justify-between">
                <span>{sangriaPitchers}x 1L Sangria Pitchers</span>
                <span className="text-white font-serif font-bold">₹{(sangriaPitchers * PITCHER_PRICE).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>{tapasPlates}x Tapas Small Plates</span>
                <span className="text-white font-serif font-bold">₹{(tapasPlates * TAPAS_PRICE).toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>{pizzas}x Woodfired Pizzas</span>
                <span className="text-white font-serif font-bold">₹{(pizzas * PIZZA_PRICE).toLocaleString()}</span>
              </div>
              {includeDessert && (
                <div className="flex justify-between text-[#ffd76e]">
                  <span>{guests}x Artisanal Desserts</span>
                  <span className="font-serif font-bold">₹{(guests * DESSERT_PRICE).toLocaleString()}</span>
                </div>
              )}
            </div>

            {/* Coupon Code Section */}
            <form onSubmit={handleApplyCoupon} className="mb-4 pt-3 border-t border-[#540c1a]">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  value={coupon}
                  onChange={(e) => setCoupon(e.target.value)}
                  placeholder="Coupon code (e.g. SANGRIA15)"
                  className="flex-1 px-3 py-2 rounded-xl bg-[#1a0408] border border-[#540c1a] text-white text-xs uppercase tracking-wider focus:outline-none focus:border-[#ffd76e]"
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-[#30060e] border border-[#aa1c36] text-[#ffd76e] text-xs font-bold uppercase tracking-wider hover:bg-[#821428] transition-colors"
                >
                  Apply
                </motion.button>
              </div>
              {couponApplied && (
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 mt-1.5 font-semibold">
                  <Check className="w-3.5 h-3.5" />
                  <span>SANGRIA15 applied! (15% VIP discount)</span>
                </div>
              )}
              {couponError && (
                <div className="text-[11px] text-rose-400 mt-1.5 font-medium">
                  {couponError}
                </div>
              )}
            </form>

            {/* Calculation Totals */}
            <div className="space-y-1.5 text-xs border-t border-[#540c1a] pt-3 mb-6">
              <div className="flex justify-between text-[#c8bfb0]">
                <span>Food & Beverage Subtotal</span>
                <span className="font-serif">₹{rawSubtotal.toLocaleString()}</span>
              </div>
              {couponApplied && (
                <div className="flex justify-between text-emerald-400 font-semibold">
                  <span>VIP Online Discount (15%)</span>
                  <span className="font-serif">- ₹{discountAmount.toLocaleString()}</span>
                </div>
              )}
              <div className="flex justify-between text-[#c8bfb0]">
                <span>Taxes & GST (5%)</span>
                <span className="font-serif">₹{taxes.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-[#c8bfb0]">
                <span>Hospitality Service (5%)</span>
                <span className="font-serif">₹{serviceCharge.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-base font-extrabold text-white pt-2 border-t border-[#540c1a]">
                <span className="font-exotic tracking-wide">Estimated Grand Total</span>
                <motion.span
                  key={grandTotal}
                  initial={{ scale: 0.85, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-2xl text-[#ffd76e] font-serif glow-text-gold"
                >
                  ₹{grandTotal.toLocaleString()}
                </motion.span>
              </div>
              <div className="flex justify-between text-xs text-[#ffd76e] pt-1">
                <span>Estimated Cost Per Guest</span>
                <span className="font-bold">~₹{perPerson.toLocaleString()} / person</span>
              </div>
            </div>

            {/* Proceed CTA */}
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleConfirmPlan}
              className="w-full py-4 rounded-full bg-gradient-to-r from-[#ffd76e] via-[#e2be42] to-[#b89324] text-black font-extrabold text-xs uppercase tracking-widest hover:brightness-110 shadow-[0_0_30px_rgba(212,175,55,0.4)] transition-all flex items-center justify-center gap-2"
            >
              <span>Book Table with this Plan</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>

            <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#c8bfb0] mt-3">
              <ShieldCheck className="w-3.5 h-3.5 text-[#ffd76e]" />
              <span>No immediate payment required • Pay after dining at venue</span>
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

