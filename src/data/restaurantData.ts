import { MenuItem, GoogleAIPrompt, Testimonial, WeeklyEvent, FAQItem } from '../types';

export const MENU_ITEMS: MenuItem[] = [
  // 1. SIGNATURE EXOTIC SANGRIAS (THE CROWN JEWEL)
  {
    id: 's1',
    name: 'El Clásico Spanish Ruby Sangria',
    subtitle: 'Classic Spanish Tempranillo & Citrus Infusion',
    category: 'sangrias',
    price: 595,
    pitcherPrice: 1550,
    towerPrice: 3450,
    description: 'Spanish Tempranillo infused 48 hours with Torres 10 brandy, sliced Valencia oranges, crisp Fuji apples, Ceylon cinnamon stick, and a splash of sparkling soda.',
    tasteNotes: ['Ripe Blackberry', 'Macerated Orange', 'Warm Cinnamon Oak'],
    tags: ['Signature', 'House Special'],
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '13.5% ABV',
    pairing: 'Patatas Bravas & Truffle Jamon Croquettes',
    isPopular: true
  },
  {
    id: 's2',
    name: 'White Peach & Elderflower Sangria',
    subtitle: 'Crisp Sauvignon Blanc & French Botanicals',
    category: 'sangrias',
    price: 645,
    pitcherPrice: 1690,
    towerPrice: 3750,
    description: 'Crisp Marlborough Sauvignon Blanc, French St-Germain elderflower liqueur, sliced white peaches, green grapes, and fresh garden mint leaves.',
    tasteNotes: ['White Nectarine', 'Crisp Lychee Blossom', 'Citrus Zing'],
    tags: ['Signature', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '12.0% ABV',
    pairing: 'Gambas al Ajillo (Garlic Chili Prawns)',
    isPopular: true
  },
  {
    id: 's3',
    name: 'Sparkling Rosé Berry Cava Sangria',
    subtitle: 'Catalan Brut Rosé & Wild Summer Berries',
    category: 'sangrias',
    price: 695,
    pitcherPrice: 1790,
    towerPrice: 3950,
    description: 'Chilled Catalan Brut Rosé Cava, Chambord black raspberry liqueur, muddled organic strawberries, blueberries, and fragrant edible rose petals.',
    tasteNotes: ['Effervescent Wild Berry', 'Crushed Strawberry', 'Floral Rose Finish'],
    tags: ['Chef Special', 'Signature'],
    image: 'https://images.unsplash.com/photo-1560512823-829485b8bf24?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '12.5% ABV',
    pairing: 'Burrata Truffle Margherita & Calamari',
    isPopular: true
  },
  {
    id: 's4',
    name: 'Spiced Blood Orange & Pomegranate Sangria',
    subtitle: 'Vintage Shiraz & Smoked Rosemary Notes',
    category: 'sangrias',
    price: 625,
    pitcherPrice: 1650,
    towerPrice: 3600,
    description: 'Full-bodied Shiraz, dark spiced Caribbean rum, freshly pressed crimson blood orange, Kashmiri pomegranate pearls, torched rosemary sprig.',
    tasteNotes: ['Tart Pomegranate', 'Smoked Rosemary', 'Spiced Plum'],
    tags: ['Smoked', 'House Special'],
    image: 'https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '14.5% ABV',
    pairing: 'Charred Lamb Galouti Kebabs',
    isPopular: false
  },
  {
    id: 's5',
    name: 'Tropical Passionfruit & Starfruit Sangria',
    subtitle: 'Chardonnay, White Rum & Ecuadorian Passionfruit',
    category: 'sangrias',
    price: 615,
    pitcherPrice: 1590,
    towerPrice: 3500,
    description: 'Unwooded Chardonnay, white Cuban rum, exotic Ecuadorian passionfruit pulp, sliced yellow starfruit, fresh pineapple, topped with ginger beer.',
    tasteNotes: ['Vibrant Passionfruit', 'Crisp Starfruit', 'Spicy Ginger Fizz'],
    tags: ['House Special'],
    image: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '11.8% ABV',
    pairing: 'Tapas Platter & Woodfired Truffle Fries',
    isPopular: false
  },
  {
    id: 's6',
    name: 'Royal 24K Gold Saffron Sangria (Imperial Edition)',
    subtitle: 'Rioja Gran Reserva, VSOP Cognac & Pure 24K Gold',
    category: 'sangrias',
    price: 895,
    pitcherPrice: 2450,
    towerPrice: 5200,
    description: 'Reserve Spanish Rioja Gran Reserva, VSOP Cognac, Kashmiri saffron reduction, sweet dates, Madagascar vanilla bean, crowned with shimmering 24K edible gold dust.',
    tasteNotes: ['Saffron Velvet', 'Aged Oak Vanilla', 'Cognac Warmth'],
    tags: ['Royal Heritage', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '16.0% ABV',
    pairing: 'Dum Pukht Jungli Maans Shank',
    isPopular: true
  },
  {
    id: 's7',
    name: 'Virgin Orchard Sangria (Zero-Proof Mocktail)',
    subtitle: 'Cold-Pressed Grape, Hibiscus & Elderflower Soda',
    category: 'sangrias',
    price: 425,
    pitcherPrice: 990,
    towerPrice: 2200,
    description: 'De-alcoholized cold-pressed Concord grape extract, steeped hibiscus tea, macerated summer peaches, blood orange slices, sparkling elderflower soda.',
    tasteNotes: ['Floral Hibiscus', 'Rich Ruby Grape', 'Brisk Citrus Sparkle'],
    tags: ['Vegetarian', 'Gluten-Free'],
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '0.0% ABV',
    pairing: 'Mezze Platter & Cheese Croquettes'
  },

  // 2. EXOTIC TAPAS & SMALL BITES
  {
    id: 't1',
    name: 'Gambas al Ajillo (Sizzling Garlic Chili Prawns)',
    subtitle: 'Sizzling Tiger Prawns in Spanish Garlic EVOO',
    category: 'tapas',
    price: 785,
    description: 'Tiger prawns simmered in Spanish extra virgin olive oil, golden garlic slivers, bird’s eye chili, smoked sea salt, served with grilled sourdough baguette for dipping.',
    tasteNotes: ['Rich Garlic EVOO', 'Sweet Tiger Prawn', 'Smoky Chili Heat'],
    tags: ['Chef Special', 'Non-Vegetarian'],
    image: 'https://images.unsplash.com/photo-1559742811-822873691df8?auto=format&fit=crop&w=800&q=80',
    pairing: 'El Clásico Spanish Ruby Sangria or White Peach Sangria',
    isPopular: true
  },
  {
    id: 't2',
    name: 'Patatas Bravas with Smoked Paprika Aioli',
    subtitle: 'Triple-Cooked Crisp Potatoes with Brava Salsa',
    category: 'tapas',
    price: 495,
    description: 'Crispy hand-cut triple-cooked potato cubes topped with fiery pimentón de la Vera salsa brava and creamy roasted garlic aioli swirl.',
    tasteNotes: ['Crispy Crust', 'Velvety Potato Core', 'Piquant Smoked Paprika'],
    tags: ['Vegetarian', 'Signature'],
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?auto=format&fit=crop&w=800&q=80',
    pairing: 'Ruby Sangria Pitcher',
    isPopular: true
  },
  {
    id: 't3',
    name: 'Truffle & Wild Porcini Mushroom Croquettes',
    subtitle: 'Iberian Bechamel & Shaved Black Truffle',
    category: 'tapas',
    price: 545,
    description: 'Golden panko crusted Iberian bechamel croquettes molten with wild forest porcini, white truffle oil, and shaved parmesan crisp.',
    tasteNotes: ['Earthy Truffle', 'Silky Molten Cream', 'Nutty Aged Cheese'],
    tags: ['Vegetarian', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80',
    pairing: 'Sparkling Rosé Cava Sangria'
  },
  {
    id: 't4',
    name: 'Royal Galouti Kebab on Saffron Sheermal',
    subtitle: '32-Spice Smoked Medallions on Cardamom Flatbread',
    category: 'tapas',
    price: 725,
    description: 'Melt-in-mouth smoked minced lamb medallions infused with 32 secret royal spices, rested on miniature saffron-brushed cardamom sheermal flatbread.',
    tasteNotes: ['Silky Texture', 'Cardamom & Rose Petal', 'Gentle Smoke'],
    tags: ['Royal Heritage', 'Non-Vegetarian', 'Smoked'],
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    pairing: 'Spiced Blood Orange Sangria',
    isPopular: true
  },
  {
    id: 't5',
    name: 'Crispy Calamari Frito with Lime Chimichurri',
    subtitle: 'Semolina Dusted Squid Rings with Herb Dip',
    category: 'tapas',
    price: 675,
    description: 'Tender squid rings dusted in seasoned semolina, flash-fried to golden perfection, served with Argentine herbaceous lime chimichurri and caper dip.',
    tasteNotes: ['Crunchy Crisp', 'Tangy Herbaceous Herb', 'Zesty Sea Lime'],
    tags: ['Non-Vegetarian'],
    image: 'https://images.unsplash.com/photo-1599488615731-7e5c2823ff28?auto=format&fit=crop&w=800&q=80',
    pairing: 'White Peach & Elderflower Sangria'
  },
  {
    id: 't6',
    name: 'Grand Mediterranean Tapas & Mezze Board (For 2-3)',
    subtitle: 'Sharing Board: Truffle Hummus, Mutabal & Pita',
    category: 'tapas',
    price: 1195,
    description: 'A lavish sharing platter: Truffle hummus, smoked aubergine mutabal, falafel bites, kalamata olives, marinated feta, patatas bravas, and warm zaatar pita bread.',
    tasteNotes: ['Creamy Tahini', 'Smoked Eggplant', 'Tangy Feta Herb'],
    tags: ['Vegetarian', 'Signature'],
    image: 'https://images.unsplash.com/photo-1541529086526-db283c563270?auto=format&fit=crop&w=800&q=80',
    pairing: '1-Litre Pitcher of El Clásico Sangria',
    isPopular: true
  },

  // 3. ARTISANAL WOODFIRED PIZZAS
  {
    id: 'p1',
    name: 'Burrata Truffle Margherita Di Bufala',
    subtitle: 'Creamy Artisanal Burrata & Black Truffle Drizzle',
    category: 'pizzas',
    price: 765,
    description: '48-hour fermented sourdough base, San Marzano tomato reduction, whole creamy artisanal burrata ball, fresh basil, and Umbrian black truffle drizzle.',
    tasteNotes: ['Charred Sourdough Crust', 'Creamy Milk Stracciatella', 'Earthy Black Truffle'],
    tags: ['Vegetarian', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=800&q=80',
    pairing: 'El Clásico Spanish Sangria',
    isPopular: true
  },
  {
    id: 'p2',
    name: 'Smoked Prosciutto, Fig & Gorgonzola Pizza',
    subtitle: 'Mission Figs, Cured Prosciutto & Wild Rocket',
    category: 'pizzas',
    price: 895,
    description: 'Woodfired blistered crust with aged fior di latte mozzarella, caramelized black mission figs, cured prosciutto ribbons, gorgonzola crumbs, and wild rocket.',
    tasteNotes: ['Sweet Fig Caramel', 'Salty Cured Meat', 'Bold Pungent Blue Cheese'],
    tags: ['Non-Vegetarian', 'House Special'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=800&q=80',
    pairing: 'Spiced Blood Orange & Pomegranate Sangria'
  },
  {
    id: 'p3',
    name: 'Charcoal Smoked Chicken Tikka & Jalapeño Pizza',
    subtitle: 'Tandoori Chicken, Mozzarella & Pickled Jalapeños',
    category: 'pizzas',
    price: 785,
    description: 'Clay-oven charred chicken chunks, smoked mozzarella, pickled red jalapeños, sweet caramelized onions, fresh coriander chimichurri oil.',
    tasteNotes: ['Clay Oven Smoke', 'Spicy Jalapeño Kick', 'Melted Mozzarella'],
    tags: ['Non-Vegetarian', 'Smoked'],
    image: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?auto=format&fit=crop&w=800&q=80',
    pairing: 'Tropical Passionfruit Sangria'
  },

  // 4. CRAFT COCKTAILS & MOLECULAR MIXOLOGY
  {
    id: 'c1',
    name: 'Smoked Rajputana Negroni',
    subtitle: 'Saffron Campari & Sandalwood Smoke Infusion',
    category: 'cocktails',
    price: 850,
    description: 'Campari infused with Kashmiri saffron, aged botanical gin, sweet vermouth, smoked tableside with Marwar sandalwood chips under a crystal cloche.',
    tasteNotes: ['Smoky Sandalwood', 'Bitter-sweet Orange', 'Saffron Silk'],
    tags: ['Signature', 'Smoked'],
    image: 'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '22% ABV',
    pairing: 'Charred Lamb Galouti Kebabs'
  },
  {
    id: 'c2',
    name: 'The Sangria Velvet Espresso Martini',
    subtitle: 'Single-Origin Coorg Espresso & Ruby Port Reduction',
    category: 'cocktails',
    price: 795,
    description: 'Dark roasted single-origin Coorg espresso, vanilla-infused vodka, Kahlúa, dark chocolate liqueur, topped with a float of ruby port reduction and cacao nibs.',
    tasteNotes: ['Bold Roasted Coffee', 'Dark Cocoa Crema', 'Port Wine Tannin'],
    tags: ['Signature'],
    image: 'https://images.unsplash.com/photo-1545438102-799c3991ffb2?auto=format&fit=crop&w=800&q=80',
    alcoholByVolume: '19% ABV',
    pairing: 'Spanish Churros & Sangria Chocolate Dip'
  },

  // 5. ROYAL MAINS & CHARCOAL SPECIALS
  {
    id: 'm1',
    name: 'Dum Pukht Jungli Maans (Raan-e-Sangariya)',
    subtitle: '14-Hour Pot-Roasted Mathania Chili Lamb Shank',
    category: 'royal_mains',
    price: 1650,
    description: 'Pot-roasted Mathania chili braised lamb shank slow-cooked over charcoal embers for 14 hours in clarified desi ghee with whole pods of black cardamom and garlic cloves.',
    tasteNotes: ['Smoked Fiery Mathania Chili', 'Tender Bone Marrow', 'Pure Desi Ghee Richness'],
    tags: ['Royal Heritage', 'Non-Vegetarian', 'Chef Special'],
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    pairing: 'Royal 24K Gold Saffron Sangria or Full-Bodied Rioja'
  },
  {
    id: 'm2',
    name: 'Dal Sangariya (36-Hour Charcoal Simmered)',
    subtitle: 'Slow-Cooked Black Lentils with Churned Butter',
    category: 'royal_mains',
    price: 695,
    description: 'Black urad lentils and kidney beans slow-simmered over glowing charcoal for 36 hours with churned white butter, vine-ripened tomatoes, and dried fenugreek leaves.',
    tasteNotes: ['Velvety Creaminess', 'Charcoal Smoke', 'Tangy Tomato Butter'],
    tags: ['Royal Heritage', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80',
    pairing: 'Truffle Naan & Red Ruby Sangria'
  },

  // 6. EXOTIC DESSERTS
  {
    id: 'd1',
    name: 'Crispy Spanish Churros with Spiced Sangria Chocolate',
    subtitle: 'Golden Cinnamon Churros & Dark Belgian Ganache',
    category: 'desserts',
    price: 485,
    description: 'Golden piped Spanish churros dusted with cinnamon brown sugar, served with a molten dipping sauce of 70% dark Belgian chocolate spiked with reduced ruby sangria wine.',
    tasteNotes: ['Warm Cinnamon Crunch', 'Deep Bitter Chocolate', 'Spiced Wine Notes'],
    tags: ['Chef Special', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=800&q=80',
    pairing: 'Velvet Espresso Martini',
    isPopular: true
  },
  {
    id: 'd2',
    name: 'Pistachio Baklava Mille-Feuille with Saffron Gelato',
    subtitle: 'Filo Pastry Layers, Turkish Pistachios & Saffron Cream',
    category: 'desserts',
    price: 525,
    description: 'Flaky filo pastry layers filled with crushed Turkish pistachios, orange blossom honey, topped with artisanal churned Kashmiri saffron gelato and edible gold petals.',
    tasteNotes: ['Crisp Buttery Filo', 'Roasted Pistachio', 'Perfumed Honey Blossom'],
    tags: ['Royal Heritage', 'Vegetarian'],
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=800&q=80',
    pairing: 'Sparkling Rosé Cava Sangria'
  }
];

export const WEEKLY_EVENTS: WeeklyEvent[] = [
  {
    day: 'Monday',
    title: 'Sangria & Margarita Pitcher Madness',
    timing: '5:00 PM – 11:30 PM',
    highlight: '1+1 on All 1-Litre Sangria & Margarita Pitchers',
    offer: 'Free Tapas Platter with orders over ₹2,500',
    vibe: 'Chilled After-Work Social',
    genre: 'Lo-Fi Chillhop & Spanish Bossa'
  },
  {
    day: 'Wednesday',
    title: 'Señoritas Ladies Night',
    timing: '7:30 PM – 01:00 AM',
    highlight: 'Complimentary Glass of Sangria on Entry for all Ladies',
    offer: '50% Off on all Sangria Pitchers & Sparkling Cocktails',
    vibe: 'Glamorous & High-Energy',
    genre: 'Retro Pop & Commercial House'
  },
  {
    day: 'Friday',
    title: 'Flamenco & Gypsy Jazz Night',
    timing: '8:30 PM – 11:30 PM',
    highlight: 'Live Spanish Guitar Duo & Cajón Percussionist',
    offer: 'Chef’s Sangria & Tapas Tasting Flight ₹1,499 for 2',
    vibe: 'Romantic, Exotic & Cultured',
    genre: 'Acoustic Flamenco & Gypsy Jazz'
  },
  {
    day: 'Saturday',
    title: 'Sangria Neon Speakeasy & Rooftop DJ',
    timing: '9:00 PM – 01:30 AM',
    highlight: 'Resident DJ Deep House & Melodic Techno Set',
    offer: 'VIP Sangria Tower (3 Litres) with Gourmet Pizza ₹3,999',
    vibe: 'Electric Nightlife & Starlight Dancing',
    genre: 'Deep Afro House & Club Anthems'
  },
  {
    day: 'Sunday',
    title: 'The Great Sangria & Tapas Boozy Brunch',
    timing: '12:30 PM – 04:30 PM',
    highlight: 'Endless Sangria Pitchers + 12 Tapas Buffet & Live Grill',
    offer: 'Brunch Pass: Non-Alcoholic ₹1,499 | Endless Sangria ₹2,299',
    vibe: 'Sun-drenched, Lush & Relaxed',
    genre: 'Acoustic Soul & Reggae Fusion'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'What is the signature specialty of Sangria Restro & Bar?',
    answer: 'We are renowned for our artisanal handcrafted Sangria collection—featuring 48-hour fruit macerated Spanish Tempranillo, crisp white peach elderflower sangria, and sparkling rosé cava sparklers. We serve them by the glass, 1-litre sharing pitchers, and 3-litre grand towers, paired with authentic woodfired tapas and royal charcoal kebabs.',
    category: 'Bar & Drinks'
  },
  {
    question: 'Are there Happy Hour offers available?',
    answer: 'Yes! Our famous "Sangria Sunset Hours" run daily from 4:00 PM to 8:00 PM, featuring 1+1 on all Sangria Pitchers and Craft Cocktails. We also have Señoritas Ladies Night on Wednesdays and Monday Pitcher Madness.',
    category: 'Bar & Drinks'
  },
  {
    question: 'How do I book a table and what seating areas are available?',
    answer: 'You can book directly through our online reservation form on this page or via WhatsApp. You can choose between 4 exotic zones: The Velvet Sangria Lounge (indoor plush velvet), The Starlight Rooftop & Cabana (open air), The Vintage Wine Cellar (private dining), or The Golden Brass Bar.',
    category: 'Reservations'
  },
  {
    question: 'Is there a dress code and is parking available?',
    answer: 'Our dress code is Smart Casual / Elegant Evening (collared shirts, elegant dresses; please avoid beachwear or flip-flops after 7:00 PM). We provide complimentary 100% valet parking for all patrons at the main grand portico.',
    category: 'Dress Code'
  },
  {
    question: 'Do you offer non-alcoholic / vegetarian options?',
    answer: 'Yes! We have an extensive menu of zero-proof virgin sangrias, artisanal mocktails, and over 60% of our tapas and mains are pure vegetarian (including Jain preparation on prior request).',
    category: 'Bar & Drinks'
  },
  {
    question: 'Can we host private parties, birthdays, or corporate celebrations?',
    answer: 'Absolutely. We host private cocktail parties up to 150 guests on our Starlight Rooftop or in the Maharaja Cellar. Custom pre-fixed tapas menus, dedicated mixologists, and personalized live DJ playlists can be arranged.',
    category: 'Events'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote: 'The El Clásico Sangria pitcher is the best I have had outside Barcelona. Paired with the Gambas al Ajillo and woodfired pizza, the atmosphere on the Starlight Rooftop is pure magic.',
    author: 'Chef Ranveer Oberoi',
    role: 'Michelin Star Culinary Critic',
    rating: 5
  },
  {
    id: 't2',
    quote: 'The velvet ambiance, glowing amber bar, and acoustic flamenco duo make Sangria Restro & Bar the most exotic dining destination in town. Absolute 10/10.',
    author: 'Ayesha Kapoor',
    role: 'Condé Nast Traveller India',
    rating: 5
  },
  {
    id: 't3',
    quote: 'Celebrated our anniversary in the Private Wine Cellar. The 24K Saffron Sangria and 14-hour Dum Pukht shank were out of this world. Flawless hospitality!',
    author: 'Vikramaditya Singhania',
    role: 'VIP Cellar Patron',
    rating: 5
  }
];

export const GOOGLE_AI_PROMPTS: GoogleAIPrompt[] = [
  {
    id: 'p1',
    title: 'Complete Sangria Restro & Bar Website Architecture Prompt',
    category: 'Website Development',
    targetAI: 'Google AI Studio / Gemini 1.5 & 2.5 Pro',
    description: 'Use this master prompt inside Google AI Studio to generate or expand complete exotic web features, Sangria calculators, and luxury nightlife landing page modules.',
    promptText: `Act as a world-class luxury web architect and UI designer specializing in Michelin-grade dining and exotic high-premium cocktail lounges.

Create a full-stack, responsive web application for "Sangria Restro & Bar" (Sangariya Restaurant & Bar), an exotic venue blending Spanish sangria craftsmanship, Mediterranean tapas, and royal heritage culinary artistry.

Key Design & Aesthetic Specifications:
1. Palette: Deep Sangria Ruby & Velvet Burgundy (#140205, #420811, #690c1b), Obsidian Noir (#080506), Warm Champagne Gold (#D4AF37, #E5C158), and candlelit amber.
2. Exotic Typography: Pair 'Cinzel Decorative' or 'Italiana' for high-luxury headings with 'Playfair Display' / 'Marcellus' for poetic accents and 'Plus Jakarta Sans' for crisp UI readability.
3. Feature Suite:
   - Sticky Glassmorphism Header with Live Sangria Sunset Happy Hours banner (1+1 on pitchers 4 PM - 8 PM).
   - Immersive Hero section with instant VIP booking, Sangria pitcher spotlight, and gastronomy badges.
   - Comprehensive Sangria Showcase: Red wine, white peach elderflower, rosé cava sparklers, spiced blood orange, and zero-proof options with glass, pitcher (1L), and tower (3L) pricing.
   - Complete Tapas, Pizzas, Charcoal Kebabs & Royal Mains menu with rich tasting notes, ABV, and dietary tags.
   - Weekly Events & Nightlife calendar (Ladies night, Flamenco jazz, Saturday neon rooftop DJ, Sunday boozy brunch).
   - Interactive Live Party Bill Estimator with guest sliders, pitcher selectors, and 1-click table booking.
   - Speakeasy Palate Matcher helping guests choose the ideal Sangria and tapas pairing.
   - 4-Zone Ambiance Photo Tour (Velvet Lounge, Starlight Rooftop, Vintage Cellar, Golden Brass Bar).
   - VIP Reservation Suite with instant digital VIP booking pass generation and WhatsApp confirmation.
   - Restaurant Operating Hours, Google Maps simulation, Dress code, and Detailed FAQs.
4. Execution: Modern React with TypeScript, Tailwind CSS, clean modular architecture, high-contrast accessibility, and zero generic placeholders.`,
    suggestedVariables: ['[CITY_LOCATION]', '[CHEF_NAME]', '[FEATURED_WINE_REGION]']
  },
  {
    id: 'p2',
    title: 'Exotic Sangria & Mixology Menu Engineering Prompt',
    category: 'Menu Engineering',
    targetAI: 'Google AI Studio / Gemini 1.5 & 2.5 Pro',
    description: 'Generates sensory, high-revenue signature Sangria blends, artisanal maceration techniques, and food pairings for your bar menu.',
    promptText: `You are the master beverage director and award-winning sommelier for "Sangria Restro & Bar", an exotic luxury cocktail and dining lounge.

Generate an innovative seasonal collection of 5 signature Sangria recipes and 3 craft cocktails. For each drink provide:
1. Poetic Name (Exotic Spanish/Indian title + English description)
2. Base Wine & Liqueurs (e.g. Spanish Tempranillo, Cava Brut, Grand Marnier, Chambord)
3. Fresh Botanicals & Maceration Formula (e.g. 48-hour steeped blood orange, star anise, macerated white peach)
4. Presentation Format: Glass, 1L Artisanal Clay/Glass Pitcher, and 3L Grand Party Tower
5. Tasting Profile (Top note, body, lingering finish)
6. Ideal Tapas Pairing (e.g. Gambas al Ajillo, Truffle Croquettes, Galouti Kebab)
7. Pricing Strategy in INR for a premium metropolitan lounge`,
    suggestedVariables: ['[SEASON: Summer / Winter / Festive]', '[FRUIT_HARVEST]', '[PRICE_TIER]']
  },
  {
    id: 'p3',
    title: 'High-Status Instagram & VIP WhatsApp Marketing Prompt',
    category: 'Luxury Marketing',
    targetAI: 'Google AI Studio / Gemini 1.5 & 2.5 Pro',
    description: 'Generates hypnotic marketing copy, VIP WhatsApp invitations, and editorial captions for weekly events and happy hours.',
    promptText: `You are the chief brand director for "Sangria Restro & Bar", the city's most talked-about exotic lounge and dining destination.

Write 3 distinct promotional assets:
1. Instagram Reel Caption for "Sangria Sunset Happy Hours (4 PM - 8 PM)": Evocative, sensory prose describing chilled ruby wine swirling over crystal ice, golden hour rooftop breeze, and sizzling garlic prawns. Include 5 high-converting hashtags.
2. VIP Concierge WhatsApp Broadcast for "Friday Flamenco & Sangria Tasting": Written for exclusive patrons, feeling personal, discreet, and refined (not spammy).
3. Saturday Night Party Teaser: High-octane nightlife copy highlighting live guest DJs, illuminated 3L Sangria towers, and velvet booth reservations.`,
    suggestedVariables: ['[PROMO_DATE]', '[GUEST_DJ_NAME]', '[SPECIAL_PERK]']
  },
  {
    id: 'p4',
    title: 'AI Maître d\' & WhatsApp Concierge System Prompt',
    category: 'Customer AI Agent',
    targetAI: 'Google AI Studio / Gemini 1.5 & 2.5 Pro',
    description: 'System instruction prompt to power an automated AI host that greets guests, takes reservations, and recommends Sangrias.',
    promptText: `SYSTEM INSTRUCTIONS:
You are "Don Sangria", the charming, cultured AI Maître d' and Sommelier for "Sangria Restro & Bar".
Your personality is warm, sophisticated, welcoming, and deeply passionate about artisanal wines, sangrias, and culinary craftsmanship.

Responsibilities:
1. Welcome guests warmly with exotic flair.
2. Recommend the perfect Sangria pitcher based on party size, wine preference (red, white, rosé, or zero-proof), and occasion.
3. Suggest tapas and main course pairings with sensory justifications.
4. Seamlessly collect reservation details: Full Name, Phone, Date, Time Slot, Party Size, and Seating Area (Velvet Lounge, Starlight Rooftop, Wine Cellar, or Brass Bar).
5. Explain Happy Hour details (4 PM - 8 PM daily 1+1 on pitchers) and weekend entertainment schedule.
6. Maintain an impeccable 5-star hospitality tone at all times.`,
    suggestedVariables: ['[RESERVATION_DATABASE_LINK]', '[CURRENT_TODAYS_SPECIAL]']
  },
  {
    id: 'p5',
    title: 'Photorealistic Interior & Sangria Visual Prompt for Imagen 3',
    category: 'Visual Prompt',
    targetAI: 'Imagen 3',
    description: 'Generate stunning photorealistic visuals of glowing Sangria pitchers, velvet lounge interiors, and woodfired tapas using Imagen 3.',
    promptText: `A cinematic 8K architectural photograph of the rooftop lounge of "Sangria Restro & Bar" at dusk during golden hour. In the foreground on a dark rustic wood table, an elegant cut-crystal 1-litre pitcher filled with deep ruby Spanish sangria loaded with sliced blood oranges, crisp green apples, and floating blackberries, with condensation beads glinting in the warm sunset light. Beside it, two stemmed wine glasses filled with chilled sangria and a sizzling iron skillet of garlic butter prawns (gambas al ajillo). In the background, stylish guests lounging on deep burgundy velvet sofas under warm fairy lights and wooden pergolas overlooking a glowing city skyline. Chiaroscuro lighting, Leica SL2 50mm f/1.4 lens, rich jewel tones, ultra-detailed, 8K resolution.`,
    suggestedVariables: ['[ASPECT_RATIO: 16:9 or 4:3]', '[FOCAL_SCENE: Rooftop Sunset or Speakeasy Bar]']
  }
];
