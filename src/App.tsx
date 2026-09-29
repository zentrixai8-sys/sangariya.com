/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { SangriaBarSpotlight } from './components/SangriaBarSpotlight';
import { InteractiveMenu } from './components/InteractiveMenu';
import { WeeklyEvents } from './components/WeeklyEvents';
import { PartyBillEstimator } from './components/PartyBillEstimator';
import { BarExperience } from './components/BarExperience';
import { AmbianceGallery } from './components/AmbianceGallery';
import { HeritageStory } from './components/HeritageStory';
import { ReservationSection } from './components/ReservationSection';
import { RestaurantInfoAndFAQ } from './components/RestaurantInfoAndFAQ';
import { ReviewsAndPress } from './components/ReviewsAndPress';
import { Footer } from './components/Footer';
import { Sparkles, Calendar, Wine } from 'lucide-react';

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [activePlan, setActivePlan] = useState<string>('');
  const [guestCount, setGuestCount] = useState<number>(2);

  const handleBookWithPlan = (planSummary: string, guests: number) => {
    setActivePlan(planSummary);
    setGuestCount(guests);
    setIsBookingModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-[#080506] text-[#e8e4dc] selection:bg-[#8c1426] selection:text-white font-sans antialiased">
      {/* Top Sticky Header */}
      <Navbar
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Main Experience Flow */}
      <main>
        {/* 1. Hero Experience */}
        <Hero
          onOpenBooking={() => setIsBookingModalOpen(true)}
        />


        {/* 2. Signature Sangria Bar Spotlight (Interactive Pitchers, Towers & Carafes) */}
        <SangriaBarSpotlight
          onOpenBooking={() => setIsBookingModalOpen(true)}
          onSelectForBooking={(item, size) => {
            const price = size === 'pitcher' ? (item.pitcherPrice || item.price) : size === 'tower' ? (item.towerPrice || item.price) : item.price;
            handleBookWithPlan(`Pre-selected: 1x ${item.name} (${size.toUpperCase()}, ₹${price})`, 2);
          }}
        />


        {/* 4. Interactive Culinary & Sangria Menus */}
        <InteractiveMenu />

        {/* 5. Weekly Events, Happy Hours & Live Music */}
        <WeeklyEvents onOpenBooking={() => setIsBookingModalOpen(true)} />

        {/* 6. Party Bill & Table Spend Estimator */}
        <PartyBillEstimator onBookWithPlan={handleBookWithPlan} />

        {/* 7. The Speakeasy Mood Matcher (Interactive Cocktail & Tapas pairings) */}
        <BarExperience />

        {/* 8. Architectural Spaces & 4 Exotic Lounges */}
        <AmbianceGallery />

        {/* 9. Brand Heritage & Maceration Story */}
        <HeritageStory />

        {/* 10. VIP Table Reservation Suite */}
        <ReservationSection
          preSelectedPlan={activePlan}
          defaultGuests={guestCount}
        />


        {/* 10. Location, Timings, Map Directions & FAQs */}
        <RestaurantInfoAndFAQ />

        {/* 11. Accolades, Reviews & VIP Club */}
        <ReviewsAndPress />
      </main>

      {/* Footer */}
      <Footer
        onOpenBooking={() => setIsBookingModalOpen(true)}
      />

      {/* Floating Bottom Quick Bar for Mobile / Tablet */}
      <div className="fixed bottom-4 left-4 right-4 z-40 sm:hidden flex items-center">
        <button
          onClick={() => setIsBookingModalOpen(true)}
          className="w-full py-3.5 px-4 rounded-2xl bg-gradient-to-r from-[#ffd76e] via-[#e5c158] to-[#b89324] text-black text-xs font-black uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.5)]"
        >
          <Calendar className="w-4 h-4 text-black" />
          <span>Reserve VIP Table</span>
        </button>
      </div>

      {/* Full-screen VIP Table Reservation Modal */}
      {isBookingModalOpen && (
        <ReservationSection
          isOpenModal={true}
          onCloseModal={() => setIsBookingModalOpen(false)}
          preSelectedPlan={activePlan}
          defaultGuests={guestCount}
        />
      )}
    </div>
  );
}

