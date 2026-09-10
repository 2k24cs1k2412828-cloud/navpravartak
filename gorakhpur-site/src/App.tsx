import { useState, useRef, useEffect } from 'react'

// ─── Types ────────────────────────────────────────────────────────────────────

export interface QuickFact {
  bestTime: string
  duration: string
  budget: string
  destinationType: string
  difficulty: string
  distance: string
}

export interface ScoreCategory {
  name: string
  score: number
}

export interface DiscoveryScore {
  overall: number
  categories: ScoreCategory[]
}

export interface TimelineEntry {
  year: string
  event: string
  era: string
}

export interface CultureCard {
  title: string
  description: string
  image: string
}

export interface FoodItem {
  name: string
  description: string
  category: string
  price: string
  image: string
}

export interface Attraction {
  id: string
  name: string
  category: string
  description: string
  duration: string
  distance: string
  score: number
  image: string
}

export interface HiddenGem {
  name: string
  why: string
  distance: string
  duration: string
  image: string
}

export interface Activity {
  activity: string
  duration: string
  cost: string
  difficulty: string
  bestTime: string
  image: string
}

export interface NearbyPlace {
  name: string
  distance: string
  type: string
  travelTime: string
  image: string
}

export interface TransportOption {
  airport?: string
  station?: string
  highway?: string
  distance: string
  time: string
}

export interface StayCategory {
  type: string
  range: string
  options: string[]
}

export interface MonthStatus {
  month: string
  status: 'ideal' | 'good' | 'avoid'
}

export interface BudgetBreakdown {
  category: string
  amount: string
}

export interface BudgetTier {
  tier: string
  perDay: string
  breakdown: BudgetBreakdown[]
}

export interface ScheduleItem {
  time: string
  place: string
  duration: string
  distance?: string
}

export interface DayPlan {
  day: number
  schedule: ScheduleItem[]
}

export interface Experience {
  title: string
  duration: string
  price: string
  category: string
  image: string
}

export interface Review {
  name: string
  location: string
  text: string
  rating: number
  image: string
  date: string
}

export interface Sources {
  official: string[]
  historical: string[]
  lastVerified: string
}

export interface Destination {
  id: string
  slug: string
  name: string
  localName: string
  destinationType: string
  country: string
  state: string
  district: string
  shortDescription: string
  tags: string[]
  hero: { image: string; poster?: string }
  quickFacts: QuickFact
  discoveryScore: DiscoveryScore
  editorial: { why: string; story: string; storyFull: string }
  history: { timeline: TimelineEntry[]; shortIntro: string }
  culture: CultureCard[]
  food: FoodItem[]
  attractions: Attraction[]
  hiddenGems: HiddenGem[]
  thingsToDo: Activity[]
  nearbyPlaces: NearbyPlace[]
  travel: { air: TransportOption; rail: TransportOption; road: TransportOption }
  stay: { categories: StayCategory[] }
  bestTime: { months: MonthStatus[] }
  budget: { tiers: BudgetTier[] }
  itineraries: Record<string, DayPlan[]>
  experiences: Experience[]
  aiPrompts: string[]
  reviews: Review[]
  sources: Sources
}

// ─── GORAKHPUR DATA ────────────────────────────────────────────────────────

export const gorakhpur: Destination = {
  id: "gorakhpur",
  slug: "gorakhpur-uttar-pradesh",
  name: "Gorakhpur",
  localName: "गोरखपुर",
  destinationType: "Spiritual Metropolis & Cultural Capital",
  country: "India",
  state: "Uttar Pradesh",
  district: "Gorakhpur",
  shortDescription: "Seat of Mahayogi Gorakhnath, birthplace of Gita Press, and scenic lakeside city.",
  tags: ["SPIRITUAL CAPITAL", "BUDDHIST CIRCUIT", "HERITAGE"],
  hero: {
    image: "/images/gorakhpur_hero_fullhd.jpg",
    poster: "/images/ramgarh_tal.jpg"
  },
  quickFacts: {
    bestTime: "Oct – Mar",
    duration: "2–3 Days",
    budget: "₹₹",
    destinationType: "Spiritual & Heritage Metropolis",
    difficulty: "Easy",
    distance: '~270 km from Lucknow'
  },
  discoveryScore: {
    overall: 9.1,
    categories: [
      { name: "Spiritual Prominence", score: 9.8 },
      { name: "Historical Significance", score: 9.5 },
      { name: "Cultural Value", score: 9.4 },
      { name: "Infrastructure & Stays", score: 8.9 },
      { name: "Local Experience", score: 9.0 }
    ]
  },
  editorial: {
    why: "Gorakhpur is the vibrant spiritual and cultural powerhouse of northeastern Uttar Pradesh. Named after the revered medieval saint Mahayogi Gorakhnath, the city is globally famous as the headquarters of Gita Press—the world's largest publisher of Hindu sacred literature—and as the gateway to the sacred Buddhist pilgrimage circuit of Kushinagar, Kapilvastu, and Lumbini.",
    story: "From its origins in the yogic teachings of the Nath tradition to its role in India's freedom movement (Chauri Chaura), Gorakhpur has always shaped the spiritual and political destiny of India. The massive 52-acre Gorakhnath Math remains one of India's most respected monastic seats.",
    storyFull: 'Today\'s Gorakhpur seamlessly weaves its deep devotion with modern energy. The sprawling 1,700-acre Ramgarh Taal lake features gleaming waterfront promenades, laser musical fountain spectacles, and luxury boat cruises. In Gita Press\'s Leela Chitra Mandir, thousands stand awestruck before pristine marble walls inscribed with the complete 700 verses of the Bhagavad Gita and original miniature artwork.'
  },
  history: {
    shortIntro: "The eternal abode of Mahayogi Gorakhnath and India's spiritual print renaissance.",
    timeline: [
      { year: "11th-12th Century", event: "Mahayogi Gorakhnath of the Nath Sampradaya establishes his hermitage and holy Akhand Dhuni", era: "Nath Era" },
      { year: "1801", event: "The Nawab of Awadh transfers administrative control of Gorakhpur to the British East India Company", era: "Colonial Era" },
      { year: "1922", event: "Historic Chauri Chaura movement occurs near Gorakhpur, pivotal in Gandhi's freedom struggle", era: "Freedom Struggle" },
      { year: "1923", event: "Jaya Dayal Goyandka and Hanuman Prasad Poddar establish Gita Press, revolutionizing spiritual literature", era: "Spiritual Renaissance" },
      { year: "Modern Era", event: "Development of Ramgarh Taal waterfront, AIIMS, and international Buddhist gateway connectivity", era: "Contemporary" }
    ]
  },
  culture: [
    {
      title: "Nath Monastic Tradition",
      description: "The ancient hatha yoga practices, monastic discipline, and sacred Akhand Dhuni (eternal sacred fire) at Gorakhnath Temple inspire millions.",
      image: '/images/gorakhnath_temple_main.jpg'
    },
    {
      title: "Gita Press Literary Heritage",
      description: "Having published over 410 million sacred books in 15 languages, Gita Press is the undisputed epicenter of Hindu scripture publication.",
      image: '/images/gita_press.jpg'
    },
    {
      title: "Khichdi Mela (Makar Sankranti)",
      description: "Over a million pilgrims gather in January to offer sacred Khichdi (lentils and rice) to Guru Gorakhnath in a month-long vibrant carnival.",
      image: '/images/khichdi.jpg'
    },
    {
      title: "Terracotta Craft (ODOP)",
      description: "The potters of Aurangabad (Gorakhpur) craft world-renowned terracotta horses, elephants, and ornamental bells using natural clays.",
      image: '/images/terracotta_horses.jpg'
    }
  ],
  food: [
    {
      name: "Gorakhnath Maha-Khichdi",
      description: "Sacred consecration dish cooked with country rice, black lentils, ginger, and pure desi ghee, blessed at the historic Gorakhnath Math during the Makar Sankranti Khichdi Mela.",
      category: "Sacred Heritage",
      price: "₹40–₹80",
      image: '/images/khichdi.jpg'
    },
    {
      name: "Rabri Jalebi",
      description: "Piping-hot spiraled saffron jalebis served over a generous ladle of chilled, thick malai rabri—a quintessential Gorakhpur indulgence.",
      category: "Dessert",
      price: "₹50–₹100",
      image: '/images/rabri_jalebi.jpg'
    },
    {
      name: "Lehsun Wale Chhole Samosa",
      description: "Crisp hot samosas topped with spicy, garlic-rich chickpea curry, chopped onions, and zesty coriander-chili chutney.",
      category: "Street Food",
      price: "₹30–₹50",
      image: '/images/samosa_chaat.jpg'
    },
    {
      name: "Galouti Kebab",
      description: "Melt-in-your-mouth spiced minced mutton patties delicately shallow fried and served with hot paper-thin roomali rotis.",
      category: "Mughlai",
      price: "₹150–₹300",
      image: '/images/galouti_kebab.jpg'
    },
    {
      name: "Makuni Roti & Chokha",
      description: "Traditional Purvanchali griddled bread stuffed with seasoned sattu and aromatics, served with mashed potato and brinjal bharta.",
      category: "Traditional",
      price: "₹60–₹120",
      image: '/images/litti_chokha.jpg'
    }
  ],
  attractions: [
    {
      id: "gorakhnath-temple",
      name: "Gorakhnath Temple (Math)",
      category: "Major Spiritual Complex",
      description: "Sprawling 52-acre sacred seat of Mahayogi Gorakhnath featuring the Akhand Dhuni, sanctum sanctorum, Mansarovar lake, and museum.",
      duration: "2.5–3 hrs",
      distance: "City centre (4 km from station)",
      score: 9.9,
      image: '/images/gorakhnath_temple_main.jpg'
    },
    {
      id: "gita-press",
      name: "Gita Press & Leela Chitra Mandir",
      category: "Spiritual Literature Center",
      description: "World's largest Hindu spiritual press founded in 1923; its art gallery displays 684 paintings and the entire Gita carved on marble.",
      duration: "2 hrs",
      distance: "2.5 km from station",
      score: 9.7,
      image: '/images/gita_press.jpg'
    },
    {
      id: "ramgarh-taal",
      name: "Ramgarh Taal Lake & Promenade",
      category: "Waterfront & Recreation",
      description: "Spectacular 1,700-acre natural lake with scenic waterfront walkway, luxury cruise boats, water sports, and musical laser shows.",
      duration: "2–3 hrs",
      distance: "6 km south of station",
      score: 9.3,
      image: '/images/ramgarh_tal.jpg'
    },
    {
      id: "railway-museum",
      name: "Gorakhpur Railway Museum",
      category: "Heritage Museum",
      description: "Celebrates Indian Railways history with vintage steam engines, toy train rides, royal carriages, and interactive exhibits.",
      duration: "1.5 hrs",
      distance: "Near railway station",
      score: 8.8,
      image: 'https://images.unsplash.com/photo-1591018653367-9c01498b3320?w=600&h=420&fit=crop&auto=format'
    },
    {
      id: "geeta-vatika",
      name: "Geeta Vatika",
      category: "Spiritual Sanctuary",
      description: "Devotional campus founded by Hanuman Prasad Poddar featuring the Radha-Krishna temple with continuous 24-hour Radha chanting.",
      duration: "1.5 hrs",
      distance: "3 km from centre",
      score: 8.9,
      image: 'https://images.unsplash.com/photo-1663089551295-cee8e58807a0?w=600&h=420&fit=crop&auto=format'
    }
  ],
  hiddenGems: [
    {
      name: "Kushmi Sal Forest & Vinod Van",
      why: "Dense historic sal tree forest on the city's edge, home to deer parks, rare birds, and serene walking tracks beneath tall timber canopies.",
      distance: "9 km east",
      duration: "2 hrs",
      image: 'https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=800&h=500&fit=crop&auto=format'
    },
    {
      name: "Veer Bahadur Singh Planetarium (Taramandal)",
      why: "Advanced digital sky planetarium offering engaging astronomical presentations about constellations and planetary physics.",
      distance: "Adjacent to Ramgarh Taal",
      duration: "1 hr",
      image: 'https://images.unsplash.com/photo-1591018653367-9c01498b3320?w=800&h=500&fit=crop&auto=format'
    },
    {
      name: "Gorakhpur Imambara",
      why: "Historic 18th-century monument constructed by Nawab Asaf-ud-Daula, notable for its ornate silver Tazia and serene courtyard.",
      distance: "Old city",
      duration: "45 min",
      image: 'https://images.unsplash.com/photo-1524613032530-449a5d94c285?w=800&h=500&fit=crop&auto=format'
    }
  ],
  thingsToDo: [
    { activity: "Evening Laser & Water Fountain Show at Ramgarh Taal", duration: "1 hr", cost: "₹50", difficulty: "Easy", bestTime: "7:00 PM, All year", image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=600&h=400&fit=crop&auto=format" },
    { activity: "Spiritual Tour of Gorakhnath Math", duration: "2.5 hrs", cost: "Free", difficulty: "Easy", bestTime: "Morning 7:00 AM", image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=600&h=400&fit=crop&auto=format" },
    { activity: "Gita Press Rare Manuscript & Painting Walk", duration: "2 hrs", cost: "Free", difficulty: "Easy", bestTime: "10:00 AM – 4:00 PM", image: "https://images.unsplash.com/photo-1524613032530-449a5d94c285?w=600&h=400&fit=crop&auto=format" },
    { activity: "Aurangabad Terracotta Artisan Trail", duration: "3 hrs", cost: "₹300–₹600", difficulty: "Easy", bestTime: "Afternoon", image: "https://images.unsplash.com/photo-1728364283053-b1e2abe71611?w=600&h=400&fit=crop&auto=format" }
  ],
  nearbyPlaces: [
    { name: "Kushinagar", distance: "52 km", type: "Buddha Mahaparinirvana", travelTime: "1 hr", image: "https://images.unsplash.com/photo-1609137144822-491c13d78905?w=500&h=340&fit=crop&auto=format" },
    { name: "Maghar (Kabir Samadhi)", distance: "28 km", type: "Saint Kabir Memorial", travelTime: "35 min", image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=500&h=340&fit=crop&auto=format" },
    { name: "Kapilvastu (Piprahwa)", distance: "85 km", type: "Buddha Childhood Palace", travelTime: "2 hrs", image: "https://images.unsplash.com/photo-1591018653367-9c01498b3320?w=500&h=340&fit=crop&auto=format" },
    { name: "Lumbini (Nepal)", distance: "125 km", type: "Buddha Birthplace", travelTime: "3.5 hrs", image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=500&h=340&fit=crop&auto=format" },
    { name: "Ayodhya", distance: "135 km", type: "Ram Janmabhoomi", travelTime: "2.5 hrs", image: "https://images.unsplash.com/photo-1565193566173-7a0ee3dbe261?w=500&h=340&fit=crop&auto=format" }
  ],
  travel: {
    air: { airport: "Mahayogi Gorakhnath Airport (GOP)", distance: "8 km from station", time: "Direct flights to Delhi, Mumbai, Bengaluru, Hyderabad, Kolkata" },
    rail: { station: "Gorakhpur Junction (GKP)", distance: "City centre", time: "Headquarters of North Eastern Railway; World's second-longest railway platform" },
    road: { highway: "Gorakhpur Link Expressway & NH-27", distance: "270 km from Lucknow", time: "4 hrs via expressway" }
  },
  stay: {
    categories: [
      { type: "Budget", range: "₹800–₹1,600/night", options: ["Hotel Shivoy", "Hotel Ganges", "Station Road Guesthouses"] },
      { type: "Mid-Range", range: "₹2,200–₹4,500/night", options: ["Radisson Blu Gorakhpur", "Hotel Nirvana", "Clarks Grand"] },
      { type: "Luxury Lake View", range: "₹5,000–₹12,000/night", options: ["Ramgarh Taal Waterfront Resorts", "Courtyard by Marriott"] },
      { type: "Dharmashala", range: "₹300–₹800/night", options: ["Gorakhnath Mandir Dharmashala", "Gita Press Pilgrim House"] }
    ]
  },
  bestTime: {
    months: [
      { month: "Jan", status: "ideal" }, { month: "Feb", status: "ideal" }, { month: "Mar", status: "good" },
      { month: "Apr", status: "good" }, { month: "May", status: "avoid" }, { month: "Jun", status: "avoid" },
      { month: "Jul", status: "avoid" }, { month: "Aug", status: "avoid" }, { month: "Sep", status: "good" },
      { month: "Oct", status: "ideal" }, { month: "Nov", status: "ideal" }, { month: "Dec", status: "ideal" }
    ]
  },
  budget: {
    tiers: [
      { tier: "Budget Pilgrim", perDay: "₹1,200–₹2,000", breakdown: [{ category: "Stay", amount: "₹700–₹1,100" }, { category: "Food", amount: "₹300–₹500" }, { category: "Transport", amount: "₹200–₹400" }] },
      { tier: "Comfort", perDay: "₹3,000–₹6,000", breakdown: [{ category: "Stay", amount: "₹2,000–₹3,800" }, { category: "Food", amount: "₹600–₹1,200" }, { category: "Transport", amount: "₹400–₹1,000" }] },
      { tier: "Premium", perDay: "₹7,500+", breakdown: [{ category: "Stay", amount: "₹5,000–₹10,000" }, { category: "Food", amount: "₹1,500–₹2,500" }, { category: "Transport", amount: "₹1,000–₹2,000" }] }
    ]
  },
  itineraries: {
    '1 Day': [
      {
        day: 1,
        schedule: [
          { time: "6:30 AM", place: "Morning Darshan & Aarti at Gorakhnath Temple", duration: "2.5 hrs", distance: "City" },
          { time: "9:30 AM", place: "Breakfast: Rabri Jalebi & Lehsun Chhole Samosa", duration: "45 min", distance: "Golghar" },
          { time: "11:00 AM", place: "Gita Press Leela Chitra Mandir & Book Archives", duration: "2 hrs", distance: "2.5 km" },
          { time: "1:30 PM", place: "Lunch: Authentic Purvanchali Thali & Galouti Kebabs", duration: "1 hr", distance: "City centre" },
          { time: "3:30 PM", place: "Railway Museum & Vintage Steam Engines", duration: "1.5 hrs", distance: "Station area" },
          { time: "5:30 PM", place: "Ramgarh Taal Sunset walk & Musical Laser Fountain Show", duration: "2.5 hrs", distance: "Lakefront" },
          { time: "8:30 PM", place: "Iconic Choudhary Sweets Peda shopping & farewell dinner", duration: "1 hr", distance: "Golghar" }
        ]
      }
    ],
    '2 Days': [
      {
        day: 1,
        schedule: [
          { time: "7:00 AM", place: "Gorakhnath Temple complex & Mansarovar Lake walk", duration: "3 hrs", distance: "Centre" },
          { time: "11:30 AM", place: "Gita Press & Geeta Vatika pilgrimage", duration: "2.5 hrs", distance: "Town" },
          { time: "4:00 PM", place: "Ramgarh Taal cruise boat ride & lakeside promenade", duration: "3 hrs", distance: "Lake" },
          { time: "7:30 PM", place: "Lakeside dining and laser fountain show", duration: "1.5 hrs", distance: "Ramgarh Taal" }
        ]
      },
      {
        day: 2,
        schedule: [
          { time: "8:00 AM", place: "Day trip to Kushinagar (Mahaparinirvana Temple & Ramabhar Stupa)", duration: "5 hrs", distance: "52 km" },
          { time: "2:30 PM", place: "Return to Gorakhpur, lunch at Golghar", duration: "1 hr", distance: "City" },
          { time: "4:00 PM", place: "Aurangabad Terracotta Artisan Village tour", duration: "2 hrs", distance: "12 km" },
          { time: "6:30 PM", place: "Railway Museum & souvenir shopping", duration: "1.5 hrs", distance: "Station area" }
        ]
      }
    ],
    '3 Days': [
      {
        day: 1,
        schedule: [
          { time: "7:00 AM", place: "Gorakhnath Temple & Akhand Dhuni", duration: "3 hrs", distance: "City" },
          { time: "12:00 PM", place: "Gita Press visit & spiritual bookstore", duration: "2 hrs", distance: "Town" },
          { time: "5:00 PM", place: "Ramgarh Taal sunset & evening cruise", duration: "3 hrs", distance: "Lake" }
        ]
      },
      {
        day: 2,
        schedule: [
          { time: "7:30 AM", place: "Full Buddhist Circuit excursion: Kushinagar & Ramabhar", duration: "6 hrs", distance: "52 km" },
          { time: "4:30 PM", place: "Geeta Vatika evening prayer session", duration: "2 hrs", distance: "Gorakhpur" }
        ]
      },
      {
        day: 3,
        schedule: [
          { time: "7:00 AM", place: "Kushmi Sal Forest morning nature walk", duration: "2.5 hrs", distance: "9 km" },
          { time: "11:00 AM", place: "Veer Bahadur Singh Planetarium show", duration: "1.5 hrs", distance: "Lakefront" },
          { time: "2:00 PM", place: "Aurangabad Terracotta pottery workshop", duration: "2 hrs", distance: "12 km" },
          { time: "5:00 PM", place: "Heritage shopping for Choudhary Peda & Terracotta crafts", duration: "2 hrs", distance: "Golghar" }
        ]
      }
    ]
  },
  experiences: [
    { title: "Ramgarh Taal Sunset Cruise & Laser Spectacle", duration: "2 hrs", price: "₹350–₹750", category: "Lakeside", image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=600&h=400&fit=crop&auto=format" },
    { title: "Gita Press Heritage & Rare Manuscript Walk", duration: "2 hrs", price: "Free", category: "Spiritual Literature", image: "https://images.unsplash.com/photo-1524613032530-449a5d94c285?w=600&h=400&fit=crop&auto=format" },
    { title: "Aurangabad Terracotta Potter Experience", duration: "3 hrs", price: "₹400–₹800", category: "ODOP Craft", image: "https://images.unsplash.com/photo-1728364283053-b1e2abe71611?w=600&h=400&fit=crop&auto=format" },
    { title: "Purvanchali Food & Rabri Jalebi Trail", duration: "2 hrs", price: "₹300–₹600", category: "Culinary", image: "https://images.unsplash.com/photo-1728364283053-b1e2abe71611?w=600&h=400&fit=crop&auto=format" }
  ],
  aiPrompts: [
    "How far is Kushinagar from Gorakhpur and how to visit?",
    "What are the timings for the Ramgarh Taal laser show?",
    "What is special about the Akhand Dhuni at Gorakhnath Temple?",
    'Best hotels near Gorakhnath Temple vs Ramgarh Taal?'
  ],
  reviews: [
    { name: "Siddharth Srivastava", location: "Delhi", text: "Gorakhpur has transformed completely. Ramgarh Taal in the evening with the laser show looks like international riverfronts, while Gorakhnath Temple carries sublime serenity.", rating: 5, image: "https://images.unsplash.com/photo-1627894483216-2138af692e32?w=80&h=80&fit=crop&auto=format", date: "February 2026" },
    { name: "Dr. Meenakshi Rai", location: "Lucknow", text: "Gita Press Leela Chitra Mandir is a national treasure. Seeing 700 Gita shlokas carved on pure white marble is a soul-stirring experience.", rating: 5, image: "https://images.unsplash.com/photo-1571536802807-30451e3955d8?w=80&h=80&fit=crop&auto=format", date: "January 2026" }
  ],
  sources: {
    official: ["Uttar Pradesh Tourism (uptourism.gov.in)", "Gorakhpur District Portal (gorakhpur.nic.in)", "Gorakhnath Mandir Trust"],
    historical: ["Nath Sampradaya — Hazari Prasad Dwivedi", "Gita Press: A Cultural History — Akshaya Mukul"],
    lastVerified: 'September 2026'
  }
}

// ─── Components ───────────────────────────────────────────────────────────────

const IconSun = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>
const IconClock = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
const IconMapPin = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
const IconStar = ({ filled = false }: { filled?: boolean }) => <svg width="14" height="14" viewBox="0 0 24 24" fill={filled ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
const IconBookmark = ({ active = false }: { active?: boolean }) => <svg width="18" height="18" viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2"><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
const IconArrowRight = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
const IconChevronDown = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
const IconMic = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/><line x1="8" y1="23" x2="16" y2="23"/></svg>
const IconSearch = () => <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
const IconMenu = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
const IconX = () => <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
const IconPlane = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M17.8 19.2L16 11l3.5-3.5C21 6 21 4 19.5 2.5 18 1 16 1 14.5 2.5L11 6 2.8 4.2 1.4 5.6l6.4 4.5L6 11.5l-1.5.5L3 11l-1.5 1.5 3 3 3 3L9 17l.5-1.5 1-1.5 4.5 6.4 1.4-1.4z"/></svg>
const IconTrain = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="4" y="3" width="16" height="13" rx="2"/><path d="M4 11h16"/><path d="M12 3v8"/><path d="M8 19l-2 3"/><path d="M18 22l-2-3"/><path d="M8 19h8"/></svg>
const IconCar = () => <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v9a2 2 0 0 1-2 2h-2"/><circle cx="7.5" cy="17" r="2.5"/><path d="M15 17H10"/><circle cx="17.5" cy="17" r="2.5"/></svg>
const IconVolume = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>
const IconPlay = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
const IconPause = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="6" y="4" width="4" height="16"/><rect x="14" y="4" width="4" height="16"/></svg>

// ─── Reusable Place Card ──────────────────────────────────────────────────────

function PlaceCard({ place, saved, onSave }: { place: Attraction; saved: boolean; onSave: () => void }) {
  return (
    <div className="group flex flex-col border border-d360-border bg-white hover:border-d360-muted transition-colors duration-200" style={{ borderRadius: '2px' }}>
      <div className="relative overflow-hidden" style={{ height: '200px' }}>
        <img src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        <span className="absolute top-3 left-3 text-xs font-mono font-medium tracking-widest text-white/90 bg-black/50 px-2 py-1">{place.category.toUpperCase()}</span>
        <button onClick={onSave} className={`absolute top-3 right-3 p-1.5 transition-colors ${saved ? 'text-d360-primary' : 'text-white/70 hover:text-white'}`}>
          <IconBookmark active={saved} />
        </button>
        <div className="absolute bottom-3 right-3 flex items-center gap-1 bg-black/60 px-2 py-1">
          <span className="font-mono text-xs font-medium text-white">{place.score}</span>
        </div>
      </div>
      <div className="p-4 flex flex-col gap-2 flex-1">
        <h3 className="font-display text-base font-medium text-d360-ink leading-snug">{place.name}</h3>
        <p className="text-sm text-d360-muted leading-relaxed line-clamp-2">{place.description}</p>
        <div className="flex items-center gap-4 mt-auto pt-2 border-t border-d360-border">
          <span className="flex items-center gap-1 text-xs text-d360-muted"><IconClock />{place.duration}</span>
          <span className="flex items-center gap-1 text-xs text-d360-muted"><IconMapPin />{place.distance}</span>
        </div>
        <button className="mt-2 flex items-center gap-2 text-xs font-medium text-d360-primary hover:gap-3 transition-all">Explore <IconArrowRight /></button>
      </div>
    </div>
  )
}

// ─── Navigation ───────────────────────────────────────────────────────────────

function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-d360-bg/95 backdrop-blur-sm border-b border-d360-border' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-10">
            <span className={`font-display text-xl font-medium tracking-wide transition-colors ${scrolled ? 'text-d360-ink' : 'text-white'}`}>D360</span>
            <div className="hidden md:flex items-center gap-7">
              {['Explore', 'Destinations', 'Hidden Gems', 'Plan a Trip', 'Experiences'].map(item => (
                <a key={item} href="#" className={`text-sm font-medium transition-colors hover:text-d360-primary ${scrolled ? 'text-d360-ink' : 'text-white/90'}`}>{item}</a>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-5">
            <button className={`transition-colors ${scrolled ? 'text-d360-muted hover:text-d360-ink' : 'text-white/80 hover:text-white'}`}><IconSearch /></button>
            <a href="#" className={`text-sm font-medium transition-colors ${scrolled ? 'text-d360-muted hover:text-d360-ink' : 'text-white/80 hover:text-white'}`}>Saved</a>
            <a href="#" className={`text-sm font-medium transition-colors ${scrolled ? 'text-d360-muted hover:text-d360-ink' : 'text-white/80 hover:text-white'}`}>Profile</a>
            <button className="px-4 py-2 bg-d360-primary text-white text-sm font-medium hover:bg-d360-primary/90 transition-colors" style={{ borderRadius: '2px' }}>Explore Places</button>
          </div>
          <div className="flex md:hidden items-center gap-4">
            <button className={scrolled ? 'text-d360-ink' : 'text-white'}><IconSearch /></button>
            <button className={scrolled ? 'text-d360-ink' : 'text-white'} onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <IconX /> : <IconMenu />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-d360-bg border-t border-d360-border px-6 py-4 flex flex-col gap-4">
          {['Explore', 'Destinations', 'Hidden Gems', 'Plan a Trip', 'Experiences', 'Saved', 'Profile'].map(item => (
            <a key={item} href="#" className="text-sm font-medium text-d360-ink py-1 border-b border-d360-border last:border-0">{item}</a>
          ))}
          <button className="mt-2 py-3 bg-d360-primary text-white text-sm font-medium" style={{ borderRadius: '2px' }}>Explore Places</button>
        </div>
      )}
    </nav>
  )
}

// ─── Hero Section ─────────────────────────────────────────────────────────────

function Hero({ destination }: { destination: Destination }) {
  const [saved, setSaved] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  return (
    <section className="relative w-full bg-d360-dark" style={{ height: '85vh', minHeight: '560px' }}>
      <img src={destination.hero.image} alt={`${destination.name} — ${destination.state}`} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.75) 100%)' }} />
      {/* Breadcrumb */}
      <div className="absolute top-20 left-0 right-0 px-6 lg:px-12">
        <p className="text-white/60 text-xs tracking-widest font-medium">
          {destination.country.toUpperCase()} &nbsp;/&nbsp; {destination.state.toUpperCase()} &nbsp;/&nbsp; {destination.name.toUpperCase()}
        </p>
      </div>
      {/* Main content */}
      <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-12 pb-12 lg:pb-16">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            {destination.tags.map(tag => (
              <span key={tag} className="text-xs font-mono tracking-widest text-white/80 border border-white/30 px-3 py-1">{tag}</span>
            ))}
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-medium text-white leading-none tracking-tight mb-2">{destination.name}</h1>
          <p className="text-white/70 text-sm md:text-base font-medium mb-4 tracking-wide">{destination.state}, {destination.country} &nbsp;·&nbsp; <span className="font-mono text-white/50">{destination.localName}</span></p>
          <p className="text-white/85 text-base md:text-lg font-light max-w-xl leading-relaxed mb-8">{destination.shortDescription}</p>
          <div className="flex flex-wrap items-center gap-3">
            <button className="flex items-center gap-2 px-6 py-3 bg-d360-primary text-white text-sm font-medium hover:bg-d360-primary/90 transition-colors" style={{ borderRadius: '2px' }}>Explore {destination.name} <IconArrowRight /></button>
            <button onClick={() => setSaved(!saved)} className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border transition-colors ${saved ? 'bg-white text-d360-primary border-white' : 'bg-transparent text-white border-white/50 hover:border-white'}`} style={{ borderRadius: '2px' }}>
              <IconBookmark active={saved} /> {saved ? 'Saved' : 'Save Place'}
            </button>
            <button className="flex items-center gap-2 px-5 py-3 text-sm font-medium text-white border border-white/50 hover:border-white transition-colors" style={{ borderRadius: '2px' }}>
              Ask D360
            </button>
          </div>
        </div>
        {/* Video controls */}
        <div className="absolute bottom-8 right-6 lg:right-12 flex items-center gap-3">
          <button onClick={() => setMuted(!muted)} className="p-2.5 bg-black/40 text-white/70 hover:text-white hover:bg-black/60 transition-colors border border-white/10" style={{ borderRadius: '2px' }}><IconVolume /></button>
          <button onClick={() => setPlaying(!playing)} className="p-2.5 bg-black/40 text-white/70 hover:text-white hover:bg-black/60 transition-colors border border-white/10" style={{ borderRadius: '2px' }}>{playing ? <IconPause /> : <IconPlay />}</button>
        </div>
        {/* Scroll indicator */}
        <div className="hidden lg:flex items-center gap-2 absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 text-xs tracking-widest">
          <span className="w-px h-8 bg-white/30 block" />
          <span className="rotate-90 whitespace-nowrap text-[10px] tracking-[0.2em]">SCROLL TO EXPLORE</span>
        </div>
      </div>
    </section>
  )
}

// ─── Quick Facts Strip ────────────────────────────────────────────────────────

function QuickFacts({ facts }: { facts: QuickFact }) {
  const items = [
    { label: 'BEST TIME', value: facts.bestTime, icon: <IconSun /> },
    { label: 'IDEAL DURATION', value: facts.duration, icon: <IconClock /> },
    { label: 'BUDGET', value: facts.budget, icon: null },
    { label: 'DESTINATION TYPE', value: facts.destinationType, icon: null },
    { label: 'DIFFICULTY', value: facts.difficulty, icon: null },
    { label: 'DISTANCE', value: facts.distance, icon: <IconMapPin /> }
  ]
  return (
    <section className="bg-d360-ink border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-3 md:grid-cols-6 divide-x divide-white/10">
          {items.map((item) => (
            <div key={item.label} className="px-5 py-5 lg:py-6">
              <p className="text-white/40 text-[10px] font-mono tracking-widest mb-1.5">{item.label}</p>
              <div className="flex items-center gap-1.5 text-white/90">
                {item.icon && <span className="text-d360-primary/80">{item.icon}</span>}
                <span className="font-medium text-sm">{item.value}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Why Visit + Discovery Score ──────────────────────────────────────────────

function WhyVisit({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">WHY VISIT</p>
            <h2 className="font-display text-3xl md:text-4xl text-d360-ink mb-6 leading-tight">Why {destination.name}?</h2>
            <p className="text-d360-muted text-lg leading-relaxed">{destination.editorial.why}</p>
          </div>
          <div className="border border-d360-border p-8" style={{ borderRadius: '2px' }}>
            <div className="flex items-end justify-between mb-8">
              <div>
                <p className="text-d360-muted text-xs font-mono tracking-widest mb-1">D360 DISCOVERY SCORE</p>
                <div className="flex items-end gap-2">
                  <span className="font-display text-5xl font-medium text-d360-ink">{destination.discoveryScore.overall}</span>
                  <span className="text-d360-muted text-lg mb-1.5">/ 10</span>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-d360-muted font-mono">HIGHLY RECOMMENDED</p>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {destination.discoveryScore.categories.map(cat => (
                <div key={cat.name}>
                  <div className="flex justify-between items-center mb-1.5">
                    <span className="text-sm text-d360-ink font-medium">{cat.name}</span>
                    <span className="font-mono text-sm text-d360-muted">{cat.score}</span>
                  </div>
                  <div className="h-1 bg-d360-border">
                    <div className="h-full bg-d360-primary transition-all duration-700" style={{ width: `${(cat.score / 10) * 100}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Destination Story ────────────────────────────────────────────────────────

function DestinationStory({ destination }: { destination: Destination }) {
  const [expanded, setExpanded] = useState(false)
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">DESTINATION STORY</p>
            <h2 className="font-display text-3xl md:text-4xl text-d360-ink mb-6 leading-tight">The Story of {destination.name}</h2>
            <p className="text-d360-ink/80 text-base leading-relaxed mb-4">{destination.editorial.story}</p>
            {expanded && <p className="text-d360-ink/80 text-base leading-relaxed mb-4">{destination.editorial.storyFull}</p>}
            <button onClick={() => setExpanded(!expanded)} className="flex items-center gap-2 text-d360-primary text-sm font-medium hover:gap-3 transition-all">
              {expanded ? 'Show less' : 'Read more'} <span className={`transition-transform ${expanded ? 'rotate-90' : ''}`}><IconArrowRight /></span>
            </button>
          </div>
          <div className="relative">
            <img src={destination.hero.poster || destination.hero.image} alt={`The story of ${destination.name}`} className="w-full object-cover" style={{ height: '420px', borderRadius: '2px' }} />
            <div className="absolute -bottom-4 -left-4 hidden lg:block bg-d360-ink text-white px-6 py-4" style={{ maxWidth: '240px', borderRadius: '2px' }}>
              <p className="font-mono text-xs text-white/50 mb-1">{destination.id === 'ballia' ? 'DISTRICT ESTABLISHED' : destination.id === 'deoria' ? 'DISTRICT ESTABLISHED' : destination.id === 'ghazipur' ? 'CITY FOUNDED' : 'HISTORIC ERA'}</p>
              <p className="font-display text-xl font-medium">{destination.id === 'ballia' ? '1879 AD' : destination.id === 'deoria' ? '1946 AD' : destination.id === 'ghazipur' ? '1330 AD' : '11th Century'}</p>
              <p className="text-xs text-white/60 mt-1">{destination.id === 'ballia' ? 'Sage Bhrigu & 1942 Baghi Ballia' : destination.id === 'deoria' ? 'Devraha Baba Hermitage' : destination.id === 'ghazipur' ? 'Sayyid Masud / Gulab Nagri' : 'Mahayogi Gorakhnath Seat'}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── History Timeline ─────────────────────────────────────────────────────────

function HistoryTimeline({ destination }: { destination: Destination }) {
  const [showAll, setShowAll] = useState(false)
  const shown = showAll ? destination.history.timeline : destination.history.timeline.slice(0, 4)
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">HISTORY & HERITAGE</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">A City Written in History</h2>
          <p className="text-d360-muted mt-4">{destination.history.shortIntro}</p>
        </div>
        <div className="relative">
          <div className="absolute left-[88px] top-0 bottom-0 w-px bg-d360-border hidden md:block" />
          <div className="flex flex-col gap-0">
            {shown.map((entry, i) => (
              <div key={i} className="flex gap-8 md:gap-0 group">
                <div className="hidden md:flex items-start pt-6 w-[88px] shrink-0 justify-end pr-8">
                  <span className="font-mono text-sm font-medium text-d360-primary">{entry.year}</span>
                </div>
                <div className="hidden md:flex items-start pt-7 shrink-0 relative">
                  <div className="w-3 h-3 rounded-full border-2 border-d360-primary bg-d360-bg group-hover:bg-d360-primary transition-colors -translate-x-1.5" />
                </div>
                <div className="flex-1 pb-8 pl-0 md:pl-8 pt-4 md:pt-5 border-b border-d360-border last:border-0">
                  <span className="md:hidden font-mono text-xs text-d360-primary mb-1 block">{entry.year}</span>
                  <span className="inline-block text-[10px] font-mono tracking-widest text-d360-muted border border-d360-border px-2 py-0.5 mb-2">{entry.era.toUpperCase()}</span>
                  <p className="text-d360-ink/85 text-sm leading-relaxed">{entry.event}</p>
                </div>
              </div>
            ))}
          </div>
          {!showAll && destination.history.timeline.length > 4 && (
            <button onClick={() => setShowAll(true)} className="mt-8 flex items-center gap-2 text-d360-primary text-sm font-medium hover:gap-3 transition-all">
              View Full History <IconArrowRight />
            </button>
          )}
        </div>
      </div>
    </section>
  )
}

// ─── Culture Grid ─────────────────────────────────────────────────────────────

function CultureGrid({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">CULTURE & SIGNIFICANCE</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">The Soul of {destination.name}</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-d360-border">
          {destination.culture.map((card) => (
            <div key={card.title} className="group bg-d360-surface hover:bg-d360-bg transition-colors">
              <div className="overflow-hidden" style={{ height: '200px' }}>
                <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg text-d360-ink mb-3">{card.title}</h3>
                <p className="text-sm text-d360-muted leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Food Section ─────────────────────────────────────────────────────────────

function FoodSection({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">LOCAL FOOD</p>
            <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Taste of {destination.name}</h2>
            <p className="text-d360-muted mt-2 text-sm">Don't leave without trying these.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-d360-primary hover:gap-3 transition-all">Explore Local Food <IconArrowRight /></button>
        </div>
        <div className="flex gap-5 overflow-x-auto scrollbar-hide pb-2 -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-3 lg:grid-cols-5">
          {destination.food.map((item) => (
            <div key={item.name} className="shrink-0 w-64 md:w-auto border border-d360-border bg-white hover:border-d360-muted transition-colors group" style={{ borderRadius: '2px' }}>
              <div className="overflow-hidden" style={{ height: '160px' }}>
                <img src={item.image} alt={item.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <span className="text-[10px] font-mono tracking-widest text-d360-primary uppercase">{item.category}</span>
                <h3 className="font-display text-base text-d360-ink mt-1 mb-2">{item.name}</h3>
                <p className="text-xs text-d360-muted leading-relaxed line-clamp-2">{item.description}</p>
                <p className="text-xs font-mono text-d360-muted mt-3 pt-3 border-t border-d360-border">{item.price}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="md:hidden mt-6 flex items-center gap-2 text-sm font-medium text-d360-primary">Explore Local Food <IconArrowRight /></button>
      </div>
    </section>
  )
}

// ─── Attractions Grid ─────────────────────────────────────────────────────────

function AttractionsGrid({ destination }: { destination: Destination }) {
  const tabs = ['All', 'Heritage', 'Hidden Gems', 'Nature', 'Culture', 'Food']
  const [activeTab, setActiveTab] = useState('All')
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set())
  const shown = activeTab === 'All' ? destination.attractions : destination.attractions.filter(a => a.category.toLowerCase().includes(activeTab.toLowerCase()))
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">EXPLORE</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight mb-8">Places to Explore</h2>
          <div className="flex gap-1 overflow-x-auto scrollbar-hide">
            {tabs.map(tab => (
              <button key={tab} onClick={() => setActiveTab(tab)} className={`shrink-0 px-4 py-2 text-xs font-mono tracking-wider border transition-colors ${activeTab === tab ? 'bg-d360-primary text-white border-d360-primary' : 'bg-transparent text-d360-muted border-d360-border hover:text-d360-ink hover:border-d360-ink'}`} style={{ borderRadius: '2px' }}>
                {tab.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {(shown.length > 0 ? shown : destination.attractions).map(place => (
            <PlaceCard key={place.id} place={place} saved={savedIds.has(place.id)} onSave={() => setSavedIds(prev => { const n = new Set(prev); n.has(place.id) ? n.delete(place.id) : n.add(place.id); return n })} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Hidden Gems ─────────────────────────────────────────────────────────────

function HiddenGems({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-ink py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">D360 HIDDEN GEMS</p>
          <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">Beyond the Famous</h2>
          <p className="text-white/50 mt-2 text-sm">Places most visitors miss.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-white/10">
          {destination.hiddenGems.map((gem) => (
            <div key={gem.name} className="group bg-d360-ink hover:bg-white/5 transition-colors">
              <div className="overflow-hidden relative" style={{ height: '260px' }}>
                <img src={gem.image} alt={gem.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 opacity-70 group-hover:opacity-85" />
                <div className="absolute inset-0 bg-gradient-to-t from-d360-ink/80 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-mono tracking-widest text-d360-primary border border-d360-primary/50 px-2 py-1">HIDDEN GEM</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl text-white mb-3">{gem.name}</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-5">{gem.why}</p>
                <div className="flex gap-6">
                  <div>
                    <p className="text-white/30 text-[10px] font-mono tracking-widest mb-1">DISTANCE</p>
                    <p className="text-white/80 text-xs">{gem.distance}</p>
                  </div>
                  <div>
                    <p className="text-white/30 text-[10px] font-mono tracking-widest mb-1">DURATION</p>
                    <p className="text-white/80 text-xs">{gem.duration}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Things To Do ─────────────────────────────────────────────────────────────

function ThingsToDo({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">ACTIVITIES</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Things To Do</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {destination.thingsToDo.map((item) => (
            <div key={item.activity} className="group border border-d360-border bg-white hover:border-d360-muted transition-colors" style={{ borderRadius: '2px' }}>
              <div className="overflow-hidden" style={{ height: '140px' }}>
                <img src={item.image} alt={item.activity} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm text-d360-ink mb-3">{item.activity}</h3>
                <div className="flex flex-col gap-1.5">
                  <div className="flex items-center gap-1.5 text-xs text-d360-muted"><IconClock />{item.duration}</div>
                  <div className="flex items-center gap-1.5 text-xs text-d360-muted"><span className="font-mono">{item.cost}</span></div>
                  <div className="text-xs text-d360-muted">{item.bestTime}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Nearby Places ────────────────────────────────────────────────────────────

function NearbyPlaces({ destination }: { destination: Destination }) {
  const filters = ['5 km', '25 km', '50 km', '100 km', 'All']
  const [filter, setFilter] = useState('All')
  const shown = filter === 'All' ? destination.nearbyPlaces : destination.nearbyPlaces.filter(p => {
    const km = parseInt(p.distance)
    const limit = parseInt(filter)
    return km <= limit
  })
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">NEARBY</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight mb-6">Keep Exploring</h2>
          <div className="flex gap-2 flex-wrap">
            {filters.map(f => (
              <button key={f} onClick={() => setFilter(f)} className={`px-4 py-1.5 text-xs font-mono tracking-wider border transition-colors ${filter === f ? 'bg-d360-primary text-white border-d360-primary' : 'bg-transparent text-d360-muted border-d360-border hover:text-d360-ink'}`} style={{ borderRadius: '2px' }}>{f}</button>
            ))}
          </div>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-5">
          {(shown.length > 0 ? shown : destination.nearbyPlaces).map((place) => (
            <div key={place.name} className="group border border-d360-border bg-white hover:border-d360-muted transition-colors cursor-pointer" style={{ borderRadius: '2px' }}>
              <div className="overflow-hidden relative" style={{ height: '160px' }}>
                <img src={place.image} alt={place.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                <div className="absolute top-2 right-2 bg-black/60 text-white text-xs font-mono px-2 py-1">{place.distance}</div>
              </div>
              <div className="p-4">
                <h3 className="font-display text-sm text-d360-ink mb-1">{place.name}</h3>
                <p className="text-xs text-d360-muted">{place.type}</p>
                <div className="flex items-center gap-1 mt-3 text-xs text-d360-muted"><IconClock />{place.travelTime}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── How To Reach ─────────────────────────────────────────────────────────────

function HowToReach({ destination }: { destination: Destination }) {
  const modes = [
    { label: 'By Air', icon: <IconPlane />, key: 'air', main: destination.travel.air.airport || '', detail: `${destination.travel.air.distance} · ${destination.travel.air.time}` },
    { label: 'By Rail', icon: <IconTrain />, key: 'rail', main: destination.travel.rail.station || '', detail: destination.travel.rail.time },
    { label: 'By Road', icon: <IconCar />, key: 'road', main: destination.travel.road.highway || '', detail: `${destination.travel.road.distance} · ${destination.travel.road.time}` }
  ]
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">TRAVEL</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">How to Reach {destination.name}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {modes.map((mode) => (
            <div key={mode.key} className="border border-d360-border bg-white p-8 hover:border-d360-muted transition-colors" style={{ borderRadius: '2px' }}>
              <div className="w-12 h-12 bg-d360-surface flex items-center justify-center text-d360-primary mb-6" style={{ borderRadius: '2px' }}>{mode.icon}</div>
              <h3 className="font-display text-xl text-d360-ink mb-2">{mode.label}</h3>
              <p className="font-medium text-d360-ink/80 text-sm mb-3">{mode.main}</p>
              <p className="text-sm text-d360-muted leading-relaxed">{mode.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Where To Stay ────────────────────────────────────────────────────────────

function WhereToStay({ destination }: { destination: Destination }) {
  const [activeType, setActiveType] = useState(destination.stay.categories[0].type)
  const active = destination.stay.categories.find(c => c.type === activeType)!
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">ACCOMMODATION</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Where to Stay</h2>
        </div>
        <div className="flex gap-2 flex-wrap mb-8">
          {destination.stay.categories.map(cat => (
            <button key={cat.type} onClick={() => setActiveType(cat.type)} className={`px-4 py-2 text-xs font-mono tracking-wider border transition-colors ${activeType === cat.type ? 'bg-d360-primary text-white border-d360-primary' : 'bg-white text-d360-muted border-d360-border hover:text-d360-ink'}`} style={{ borderRadius: '2px' }}>{cat.type.toUpperCase()}</button>
          ))}
        </div>
        <div className="border border-d360-border bg-white p-8" style={{ borderRadius: '2px' }}>
          <div className="flex items-start justify-between mb-6">
            <div>
              <h3 className="font-display text-2xl text-d360-ink">{active.type}</h3>
              <p className="text-d360-primary font-mono text-sm mt-1">{active.range}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {active.options.map((opt, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-d360-surface border border-d360-border text-sm text-d360-ink" style={{ borderRadius: '2px' }}>
                <span className="w-1.5 h-1.5 bg-d360-primary shrink-0" style={{ borderRadius: '50%' }} />
                {opt}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Best Time Calendar ───────────────────────────────────────────────────────

function BestTime({ destination }: { destination: Destination }) {
  const colorMap = { ideal: 'bg-d360-ideal text-white', good: 'bg-d360-good text-white', avoid: 'bg-d360-avoid text-white' }
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">WHEN TO GO</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Best Time to Visit</h2>
        </div>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-2 mb-6">
          {destination.bestTime.months.map((m) => (
            <div key={m.month} className={`flex flex-col items-center py-3 px-1 ${colorMap[m.status]}`} style={{ borderRadius: '2px' }}>
              <span className="font-mono text-xs font-medium">{m.month}</span>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-6">
          {(['ideal', 'good', 'avoid'] as const).map(status => (
            <div key={status} className="flex items-center gap-2">
              <div className={`w-3 h-3 ${colorMap[status]}`} style={{ borderRadius: '2px' }} />
              <span className="text-xs text-d360-muted capitalize">{status}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Budget Guide ─────────────────────────────────────────────────────────────

function BudgetGuide({ destination }: { destination: Destination }) {
  const [activeTier, setActiveTier] = useState(0)
  const tier = destination.budget.tiers[activeTier]
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">TRIP COST</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Budget Guide</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-3 mb-8">
          {destination.budget.tiers.map((t, i) => (
            <button key={t.tier} onClick={() => setActiveTier(i)} className={`p-6 text-left border transition-colors ${activeTier === i ? 'bg-d360-primary border-d360-primary text-white' : 'bg-white border-d360-border hover:border-d360-muted text-d360-ink'}`} style={{ borderRadius: '2px' }}>
              <p className={`text-xs font-mono tracking-widest mb-2 ${activeTier === i ? 'text-white/70' : 'text-d360-muted'}`}>{t.tier.toUpperCase()}</p>
              <p className="font-display text-xl">{t.perDay}</p>
              <p className={`text-xs mt-1 ${activeTier === i ? 'text-white/60' : 'text-d360-muted'}`}>per day</p>
            </button>
          ))}
        </div>
        <div className="border border-d360-border bg-white p-8" style={{ borderRadius: '2px' }}>
          <h3 className="font-display text-xl text-d360-ink mb-6">Breakdown — {tier.tier}</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {tier.breakdown.map(item => (
              <div key={item.category} className="p-4 bg-d360-surface border border-d360-border" style={{ borderRadius: '2px' }}>
                <p className="text-xs font-mono text-d360-muted mb-1.5">{item.category.toUpperCase()}</p>
                <p className="font-display text-base text-d360-ink">{item.amount}</p>
              </div>
            ))}
          </div>
          <button className="mt-8 flex items-center gap-2 px-6 py-3 bg-d360-primary text-white text-sm font-medium hover:bg-d360-primary/90 transition-colors" style={{ borderRadius: '2px' }}>Plan My Budget <IconArrowRight /></button>
        </div>
      </div>
    </section>
  )
}

// ─── Itineraries ─────────────────────────────────────────────────────────────

function Itineraries({ destination }: { destination: Destination }) {
  const durations = Object.keys(destination.itineraries)
  const [active, setActive] = useState(durations[0])
  const days = destination.itineraries[active]
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">TRIP PLANNING</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight mb-6">Plan Your {destination.name} Trip</h2>
          <div className="flex gap-2">
            {durations.map(d => (
              <button key={d} onClick={() => setActive(d)} className={`px-5 py-2 text-xs font-mono tracking-wider border transition-colors ${active === d ? 'bg-d360-primary text-white border-d360-primary' : 'bg-transparent text-d360-muted border-d360-border hover:text-d360-ink'}`} style={{ borderRadius: '2px' }}>{d.toUpperCase()}</button>
            ))}
          </div>
        </div>
        <div className="grid lg:grid-cols-2 gap-8">
          {days.map((day) => (
            <div key={day.day} className="border border-d360-border bg-white p-6" style={{ borderRadius: '2px' }}>
              <p className="font-mono text-xs tracking-widest text-d360-primary mb-5">DAY {day.day}</p>
              <div className="relative pl-16">
                <div className="absolute left-6 top-0 bottom-0 w-px bg-d360-border" />
                {day.schedule.map((item, i) => (
                  <div key={i} className="relative mb-5 last:mb-0">
                    <div className="absolute -left-10 top-1 w-2 h-2 rounded-full bg-d360-surface border-2 border-d360-primary" />
                    <p className="font-mono text-xs text-d360-muted mb-0.5">{item.time}</p>
                    <p className="font-medium text-d360-ink text-sm">{item.place}</p>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-xs text-d360-muted flex items-center gap-1"><IconClock />{item.duration}</span>
                      {item.distance && <span className="text-xs text-d360-muted flex items-center gap-1"><IconMapPin />{item.distance}</span>}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button className="mt-8 flex items-center gap-2 px-6 py-3 bg-d360-primary text-white text-sm font-medium hover:bg-d360-primary/90 transition-colors" style={{ borderRadius: '2px' }}>Use This Plan <IconArrowRight /></button>
      </div>
    </section>
  )
}

// ─── Local Experiences ────────────────────────────────────────────────────────

function LocalExperiences({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">EXPERIENCES</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Local Experiences</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {destination.experiences.map((exp) => (
            <div key={exp.title} className="group border border-d360-border bg-white hover:border-d360-muted transition-colors" style={{ borderRadius: '2px' }}>
              <div className="overflow-hidden" style={{ height: '180px' }}>
                <img src={exp.image} alt={exp.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <div className="p-5">
                <span className="text-[10px] font-mono tracking-widest text-d360-primary">{exp.category.toUpperCase()}</span>
                <h3 className="font-display text-base text-d360-ink mt-1 mb-4">{exp.title}</h3>
                <div className="flex justify-between items-center text-xs text-d360-muted border-t border-d360-border pt-3">
                  <span className="flex items-center gap-1"><IconClock />{exp.duration}</span>
                  <span className="font-mono text-d360-primary">{exp.price}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Map Section ──────────────────────────────────────────────────────────────

function MapSection({ destination }: { destination: Destination }) {
  const [activeFilter, setActiveFilter] = useState('All')
  const filters = ['All', 'Attractions', 'Food', 'Hidden Gems', 'Stay', 'Experiences']
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">INTERACTIVE MAP</p>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">{destination.name} on the Map</h2>
            <button className="flex items-center gap-2 text-sm font-medium text-d360-primary hover:gap-3 transition-all whitespace-nowrap">View Full Map <IconArrowRight /></button>
          </div>
        </div>
        <div className="flex gap-2 flex-wrap mb-4">
          {filters.map(f => (
            <button key={f} onClick={() => setActiveFilter(f)} className={`px-3 py-1 text-xs font-mono tracking-wider border transition-colors ${activeFilter === f ? 'bg-d360-primary text-white border-d360-primary' : 'bg-white text-d360-muted border-d360-border hover:text-d360-ink'}`} style={{ borderRadius: '2px' }}>{f.toUpperCase()}</button>
          ))}
        </div>
        <div className="relative border border-d360-border bg-d360-surface overflow-hidden" style={{ height: '420px', borderRadius: '2px' }}>
          <img src="https://images.unsplash.com/photo-1663089551295-cee8e58807a0?w=1200&h=600&fit=crop&auto=format" alt={`Map of ${destination.name}`} className="w-full h-full object-cover opacity-40" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="w-16 h-16 bg-d360-primary/10 border border-d360-primary/30 flex items-center justify-center mx-auto mb-3" style={{ borderRadius: '50%' }}>
                <IconMapPin />
              </div>
              <p className="font-display text-xl text-d360-ink">{destination.name}</p>
              <p className="text-sm text-d360-muted mt-1">{destination.state}, {destination.country}</p>
            </div>
          </div>
          {/* Map pins */}
          {destination.attractions.slice(0, 3).map((att, idx) => {
            const positions = [
              { top: '35%', left: '45%' },
              { top: '48%', left: '38%' },
              { top: '28%', left: '55%' }
            ]
            const pos = positions[idx] || positions[0]
            return (
              <div key={att.name} className="absolute group cursor-pointer" style={{ top: pos.top, left: pos.left }}>
                <div className="w-3 h-3 bg-d360-primary border-2 border-white shadow-md" style={{ borderRadius: '50%' }} />
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 bg-d360-ink text-white text-xs px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity" style={{ borderRadius: '2px' }}>{att.name}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Ask D360 ─────────────────────────────────────────────────────────────────

function AskD360({ destination }: { destination: Destination }) {
  const [input, setInput] = useState('')
  const [selected, setSelected] = useState<string | null>(null)
  const [answered, setAnswered] = useState(false)
  const handlePrompt = (prompt: string) => { setSelected(prompt); setInput(prompt); setTimeout(() => setAnswered(true), 600) }
  return (
    <section className="bg-d360-ink py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">AI TRAVEL ASSISTANT</p>
            <h2 className="font-display text-3xl md:text-4xl text-white leading-tight mb-4">Ask D360</h2>
            <p className="text-white/50 text-sm leading-relaxed mb-8">Your intelligent guide to {destination.name}. Ask anything about history, food, hidden gems, travel planning or local experiences.</p>
            <div className="flex flex-col gap-2">
              {destination.aiPrompts.map((prompt, i) => (
                <button key={i} onClick={() => handlePrompt(prompt)} className={`text-left px-4 py-3 text-sm border transition-colors ${selected === prompt ? 'bg-d360-primary border-d360-primary text-white' : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30 hover:text-white'}`} style={{ borderRadius: '2px' }}>
                  "{prompt}"
                </button>
              ))}
              <button className="flex items-center gap-2 mt-2 text-white/40 text-xs font-medium hover:text-white/70 transition-colors">
                <IconMic /> Ask in Hindi
              </button>
            </div>
          </div>
          <div className="border border-white/10 bg-white/5 p-6" style={{ borderRadius: '2px' }}>
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-white/10">
              <div className="w-8 h-8 bg-d360-primary flex items-center justify-center text-white text-xs font-display" style={{ borderRadius: '50%' }}>D</div>
              <div>
                <p className="font-medium text-white text-sm">D360 Travel Guide</p>
                <p className="text-white/40 text-xs">Always available</p>
              </div>
            </div>
            {!answered ? (
              <div className="min-h-[200px] flex items-center justify-center">
                <p className="text-white/30 text-sm text-center">Select a prompt or type your question to begin your {destination.name} discovery.</p>
              </div>
            ) : (
              <div className="min-h-[200px]">
                <div className="bg-d360-primary/20 border border-d360-primary/30 p-4 mb-4" style={{ borderRadius: '2px' }}>
                  <p className="text-white/80 text-sm">"{selected}"</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 text-white/75 text-sm leading-relaxed" style={{ borderRadius: '2px' }}>
                  {selected?.includes('1 day') && `In one day in ${destination.name}, I recommend starting with sunrise at ${destination.attractions[0]?.name || 'the sacred riverfront'}, visiting ${destination.attractions[1]?.name || 'the heritage sites'} mid-morning, and enjoying sunset at ${destination.attractions[2]?.name || 'the scenic spots'}. Start early for the most peaceful experience.`}
                  {selected?.includes('food') && `${destination.name}'s must-try culinary delights include: ${destination.food.map(f => f.name).join(', ')}. Don't miss sampling these authentic Purvanchali flavors at local heritage sweet-makers and bazaar food stalls.`}
                  {selected?.includes('history') && `${destination.name}'s heritage spans centuries: ${destination.history.shortIntro} Key historical milestones include ${destination.history.timeline[0]?.year} (${destination.history.timeline[0]?.event}) and ${destination.history.timeline[destination.history.timeline.length - 1]?.year} (${destination.history.timeline[destination.history.timeline.length - 1]?.event}).`}
                  {selected?.includes('hidden') && `Hidden gems most visitors miss in ${destination.name}: ${destination.hiddenGems.map(g => `${g.name} (${g.why})`).join(' · ')}.`}
                  {selected?.includes('budget') && `Budget travel in ${destination.name}: Typical daily budget is ${destination.budget.tiers[0]?.perDay || '₹800–₹1,500/day'}. Budget stays range from ${destination.stay.categories[0]?.range || '₹500–₹1,200/night'}, local meals are ₹50–₹150, and shared e-rickshaws cost ₹20–₹50 per ride.`}
                  {selected?.includes('khaas') && `${destination.name} (${destination.localName}) ${destination.shortDescription} प्रमुख दर्शनीय स्थल: ${destination.attractions.slice(0, 3).map(a => a.name).join(', ')}।`}
                  {!selected?.includes('1 day') && !selected?.includes('food') && !selected?.includes('history') && !selected?.includes('hidden') && !selected?.includes('budget') && !selected?.includes('khaas') && `${destination.name} offers incredible cultural richness: explore ${destination.attractions[0]?.name}, enjoy local ${destination.food[0]?.name}, and discover the serene heritage of ${destination.district}.`}
                </div>
              </div>
            )}
            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
              <input value={input} onChange={e => setInput(e.target.value)} placeholder={`Ask about ${destination.name}...`} className="flex-1 bg-transparent text-white/70 text-sm outline-none placeholder-white/30" />
              <button onClick={() => { if(input) handlePrompt(input) }} className="p-2 bg-d360-primary text-white text-xs hover:bg-d360-primary/80 transition-colors" style={{ borderRadius: '2px' }}><IconArrowRight /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Community Stories ────────────────────────────────────────────────────────

function CommunityStories({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">COMMUNITY</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Travelers of D360</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {destination.reviews.map((review, i) => (
            <div key={i} className="border border-d360-border bg-white p-6 hover:border-d360-muted transition-colors" style={{ borderRadius: '2px' }}>
              <div className="flex items-center gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span key={j} className={j < review.rating ? 'text-d360-amber' : 'text-d360-border'}><IconStar filled={j < review.rating} /></span>
                ))}
              </div>
              <p className="text-d360-ink/80 text-sm leading-relaxed mb-6">{review.text}</p>
              <div className="flex items-center gap-3 pt-4 border-t border-d360-border">
                <div className="w-9 h-9 rounded-full overflow-hidden bg-d360-surface shrink-0">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <p className="font-medium text-d360-ink text-sm">{review.name}</p>
                  <p className="text-xs text-d360-muted">{review.location} · {review.date}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Practical Info ───────────────────────────────────────────────────────────

function PracticalInfo({ destination }: { destination: Destination }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const items = [
    { title: 'Safety', content: `${destination.name} is a welcoming and peaceful destination in eastern Uttar Pradesh. Keep valuables secure during busy melas and markets. Modest clothing is recommended when visiting sacred temples, ashrams, and ghats.` },
    { title: 'Local Transport', content: `E-rickshaws, shared autos, and cycle-rickshaws are the primary ways to navigate ${destination.name}. For excursions to outskirts like ${destination.attractions[2]?.name || 'scenic spots'}, private auto or taxi rentals are readily available.` },
    { title: 'Photography Rules', content: `Photography is permitted across most outdoor riverfronts, ghats, and monuments. Respect signboards inside inner temple sanctums where mobile phones or cameras may be restricted.` },
    { title: 'Dress & Etiquette', content: `Modest dress is respected at all religious shrines and ghats. Remove footwear outside temples and ashrams. Taking holy dips at dawn and participating respectfully in evening aarti is warmly welcomed.` },
    { title: 'Emergency Information', content: `Police: 112 · Ambulance: 108 · UP Tourism Helpline: 1800-180-1414. Major medical healthcare is accessible via the District Hospital and Regional Medical Colleges.` },
    { title: 'Travel Tips', content: `Visit ghats and sanctuaries early in the morning for pristine sunrise views and serene ambiance. The best months to explore are October to March when the weather is pleasantly cool.` }
  ]
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">PRACTICAL</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Before You Go</h2>
        </div>
        <div className="max-w-2xl border border-d360-border divide-y divide-d360-border" style={{ borderRadius: '2px' }}>
          {items.map((item, i) => (
            <div key={i} className="bg-white">
              <button onClick={() => setOpenIndex(openIndex === i ? null : i)} className="w-full flex items-center justify-between px-6 py-5 text-left hover:bg-d360-surface/50 transition-colors">
                <span className="font-medium text-d360-ink text-sm">{item.title}</span>
                <span className={`text-d360-muted transition-transform ${openIndex === i ? 'rotate-180' : ''}`}><IconChevronDown /></span>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-5">
                  <p className="text-sm text-d360-muted leading-relaxed">{item.content}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Sources & Trust ──────────────────────────────────────────────────────────

function SourcesTrust({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-bg py-12 border-t border-d360-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-d360-muted text-[10px] font-mono tracking-widest mb-3">OFFICIAL SOURCES</p>
            {destination.sources.official.map((s, i) => <p key={i} className="text-xs text-d360-muted mb-1.5">{s}</p>)}
          </div>
          <div>
            <p className="text-d360-muted text-[10px] font-mono tracking-widest mb-3">HISTORICAL REFERENCES</p>
            {destination.sources.historical.map((s, i) => <p key={i} className="text-xs text-d360-muted mb-1.5 italic">{s}</p>)}
          </div>
          <div>
            <p className="text-d360-muted text-[10px] font-mono tracking-widest mb-3">VERIFICATION</p>
            <p className="text-xs text-d360-muted">Last verified: <span className="text-d360-ink font-medium">{destination.sources.lastVerified}</span></p>
            <p className="text-xs text-d360-muted mt-2">All information is cross-referenced with official tourism and archaeological sources.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const links = {
    Explore: ['Destinations', 'Hidden Gems', 'Heritage Sites', 'Natural Places'],
    Plan: ['Trip Planner', 'Itineraries', 'Budget Guide', 'Ask D360'],
    Experiences: ['Local Tours', 'Food Trails', 'Craft Workshops', 'Heritage Walks'],
    Company: ['About D360', 'EduFutura Technologies', 'Contact', 'Careers']
  }
  return (
    <footer className="bg-d360-ink text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 pb-12">
        <div className="grid md:grid-cols-5 gap-10 mb-16">
          <div className="md:col-span-1">
            <p className="font-display text-2xl mb-2">D360</p>
            <p className="text-white/40 text-sm leading-relaxed">Discover Beyond the Usual.</p>
            <p className="text-white/25 text-xs mt-4 font-mono">An EduFutura Technologies product</p>
          </div>
          {Object.entries(links).map(([section, items]) => (
            <div key={section}>
              <p className="text-white/40 text-[10px] font-mono tracking-widest mb-4">{section.toUpperCase()}</p>
              {items.map(item => <a key={item} href="#" className="block text-sm text-white/60 hover:text-white transition-colors mb-2">{item}</a>)}
            </div>
          ))}
        </div>
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
          <p className="text-white/30 text-xs">© 2026 EduFutura Technologies Pvt Ltd. All rights reserved.</p>
          <div className="flex gap-6">
            {['Privacy', 'Terms', 'Cookies'].map(l => <a key={l} href="#" className="text-white/30 text-xs hover:text-white/60 transition-colors">{l}</a>)}
          </div>
        </div>
      </div>
    </footer>
  )
}

// ─── Main App ─────────────────────────────────────────────────────────────────

// ─── Main App ─────────────────────────────────────────────────────────────────

// ─── Main App ─────────────────────────────────────────────────────────────────

export default function App() {
  const destination: Destination = gorakhpur

  return (
    <div className="bg-d360-bg font-sans">
      <Nav />
      <Hero destination={destination} />
      <QuickFacts facts={destination.quickFacts} />
      <WhyVisit destination={destination} />
      <DestinationStory destination={destination} />
      <HistoryTimeline destination={destination} />
      <CultureGrid destination={destination} />
      <FoodSection destination={destination} />
      <AttractionsGrid destination={destination} />
      <HiddenGems destination={destination} />
      <ThingsToDo destination={destination} />
      <NearbyPlaces destination={destination} />
      <HowToReach destination={destination} />
      <WhereToStay destination={destination} />
      <BestTime destination={destination} />
      <BudgetGuide destination={destination} />
      <Itineraries destination={destination} />
      <LocalExperiences destination={destination} />
      <MapSection destination={destination} />
      <AskD360 destination={destination} />
      <CommunityStories destination={destination} />
      <PracticalInfo destination={destination} />
      <SourcesTrust destination={destination} />
      <Footer />
    </div>
  )
}
