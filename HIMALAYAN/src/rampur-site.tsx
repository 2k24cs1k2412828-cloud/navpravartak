import { useState, useEffect } from 'react'

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

// ─── RAMPUR DATA ─────────────────────────────────────────────────────────────

export const rampur: Destination = {
  id: "rampur",
  slug: "rampur-uttar-pradesh",
  name: "Rampur",
  localName: "रामपुर",
  destinationType: "Royal Heritage & Culinary Capital",
  country: "India",
  state: "Uttar Pradesh",
  district: "Rampur",
  shortDescription: "City of Royal Heritage known for unique Rampuri cuisine, rare Indo-Islamic manuscripts, and historic knife craftsmanship.",
  tags: ["ROYAL HERITAGE", "RAMPURI CUISINE", "RAZA LIBRARY"],
  hero: {
    image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Imambara%2C_Fort_of_Rampur%2C_Uttar_Pradesh%2C_c.1911.jpg",
    poster: "https://upload.wikimedia.org/wikipedia/commons/5/52/Imambara%2C_Fort_of_Rampur%2C_Uttar_Pradesh%2C_c.1911.jpg"
  },
  quickFacts: {
    bestTime: "Oct – Mar",
    duration: "1–2 Days",
    budget: "₹₹",
    destinationType: "Royal Heritage & Culinary City",
    difficulty: "Easy",
    distance: "~320 km from Lucknow"
  },
  discoveryScore: {
    overall: 8.9,
    categories: [
      { name: "Royal Heritage", score: 9.6 },
      { name: "Culinary Richness", score: 9.7 },
      { name: "Rare Manuscripts", score: 9.8 },
      { name: "Craftsmanship & Knife Trade", score: 8.5 },
      { name: "Local Hospitality", score: 8.8 }
    ]
  },
  editorial: {
    why: "Rampur is a treasure trove of princely Rohilla history and legendary culinary innovation. Established as a princely state, Rampur developed a distinct cultural identity famous for the iconic Rampur Raza Library, magnificent palaces, raw papaya tenderized seekh kebabs, and rich aromatic kormas.",
    story: "Founded by Nawab Faizullah Khan under the Rohilla dynasty, Rampur became an island of artistic and literary patronization during the 18th and 19th centuries. When royalty hosted master chefs and calligraphers, Rampur carved out a distinct legacy in architecture, music, and culinary mastery.",
    storyFull: "Today, visitors wander through grand fort campuses, marvel at rare Mughal and Persian manuscripts, explore the centuries-old knife-making bazaars, and feast on rare royal desserts like Adrak ka Halwa and Doodh ki Lauki."
  },
  history: {
    shortIntro: "The seat of Rohilla Nawabs and preserver of rare Mughal-Persian heritage.",
    timeline: [
      { year: "1774", event: "Nawab Faizullah Khan establishes the princely state of Rampur under Rohilla governance", era: "Rohilla Dynasty" },
      { year: "1774-1900s", event: "Establishment of the world-renowned Rampur Raza Library containing invaluable manuscripts", era: "Princely Era" },
      { year: "1905", event: "Construction of Khas Bagh Palace with advanced European-Islamic architectural blend", era: "Late Princely Era" },
      { year: "1949", event: "Nawab Raza Ali Khan merges Rampur State with the Union of India", era: "Post-Independence" },
      { year: "Modern Era", event: "Preservation of Raza Library as an Institute of National Importance under Ministry of Culture", era: "Contemporary" }
    ]
  },
  culture: [
    {
      title: "Rampur Raza Library Heritage",
      description: "One of Asia's prime repositories of Indo-Islamic heritage, holding over 17,000 rare manuscripts and Mughal miniatures.",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      title: "Rampuri Royal Cuisine",
      description: "A distinctive princely culinary tradition relying heavily on spices like vetiver root, bottle gourd, and tenderized meats.",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      title: "Rampuri Knife Craftsmanship",
      description: "Famous nationwide for its signature handcrafted folding knives (Rampuri Churi) engineered with historic precision.",
      image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Imambara%2C_Fort_of_Rampur%2C_Uttar_Pradesh%2C_c.1911.jpg"
    },
    {
      title: "Courtly Music & Ghazals",
      description: "Home to the famous Rampur-Sahaswan gharana of Hindustani classical vocal music.",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    }
  ],
  food: [
    {
      name: "Rampuri Korma (रामपुरी कोरमा)",
      description: "Rich, aromatic mutton curry cooked with browned onions, yogurt, and subtle vetiver root flavor. Distinct from Awadhi korma.",
      category: "Royal Main Course",
      price: "₹180–₹350",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      name: "Seekh Kebab (सीख कबाब)",
      description: "Known for firm texture and robust, peppery spice blend, different from softer Lucknow kebabs.",
      category: "Kebabs & Appetizers",
      price: "₹120–₹250",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      name: "Adrak ka Halwa (अदरक का हलवा)",
      description: "Rare medicinal winter sweet made from ginger, milk, sugar, and ghee. Sharp, sweet, and warming.",
      category: "Royal Dessert",
      price: "₹100–₹200",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      name: "Murgh Musallam (मुर्ग मुसल्लम)",
      description: "Whole chicken marinated, stuffed with eggs and minced meat, and slow-cooked. Celebratory royal dish.",
      category: "Royal Main Course",
      price: "₹350–₹600",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      name: "Kachhe Gosht ki Tikia (कच्चे गोश्त की टिकिया)",
      description: "Pan-fried patties from raw minced meat with raw papaya as tenderizer. Local specialty.",
      category: "Street Food & Kebabs",
      price: "₹100–₹200",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      name: "Doodh ki Lauki (दूध की लौकी)",
      description: "Rich dessert where bottle gourd is slow-cooked in sweetened milk and khoya.",
      category: "Royal Dessert",
      price: "₹80–₹160",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    }
  ],
  attractions: [
    {
      id: "raza-library",
      name: "Raza Library",
      category: "Heritage & Archives",
      description: "Repository of rare manuscripts, printed books, palm leaves, and Islamic art housed within the grand Hamid Manzil.",
      duration: "2 hrs",
      distance: "City centre (Fort Complex)",
      score: 9.8,
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      id: "rampur-raza-fort",
      name: "Rampur Raza Fort",
      category: "Royal Fort Complex",
      description: "Historic fort constructed by Rampur Nawabs, featuring royal palaces, courtyards, and grand archways.",
      duration: "1.5–2 hrs",
      distance: "City centre",
      score: 9.2,
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    },
    {
      id: "jama-masjid-rampur",
      name: "Jama Masjid",
      category: "Historical Religious",
      description: "Beautiful grand mosque built with intricate Islamic architecture, minarets, and sprawling prayer courtyard.",
      duration: "1 hr",
      distance: "1.5 km from fort",
      score: 8.9,
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    }
  ],
  hiddenGems: [
    {
      name: "Khas Bagh",
      why: "Royal garden estate and palace showcasing magnificent European-Islamic hybrid architecture surrounded by heritage greenery.",
      distance: "3 km from city centre",
      duration: "1.5 hrs",
      image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000"
    }
  ],
  thingsToDo: [
    { activity: "Raza Library Manuscript & Mughal Painting Tour", duration: "2 hrs", cost: "Free", difficulty: "Easy", bestTime: "Morning", image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000" },
    { activity: "Rampuri Food Trail (Korma, Kebabs & Adrak Halwa)", duration: "2.5 hrs", cost: "₹300–₹600", difficulty: "Easy", bestTime: "Evening", image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000" },
    { activity: "Heritage Bazaar Knife Craftsmanship Walk", duration: "1.5 hrs", cost: "Free", difficulty: "Easy", bestTime: "Afternoon", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Imambara%2C_Fort_of_Rampur%2C_Uttar_Pradesh%2C_c.1911.jpg" }
  ],
  nearbyPlaces: [
    { name: "Moradabad", distance: "30 km", type: "Brassware Handicrafts City", travelTime: "45 min", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Imambara%2C_Fort_of_Rampur%2C_Uttar_Pradesh%2C_c.1911.jpg" },
    { name: "Bareilly", distance: "65 km", type: "Zari Zardosi & Commercial Hub", travelTime: "1.2 hrs", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Imambara%2C_Fort_of_Rampur%2C_Uttar_Pradesh%2C_c.1911.jpg" },
    { name: "Nainital", distance: "115 km", type: "Himalayan Hill Station", travelTime: "3 hrs", image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Imambara%2C_Fort_of_Rampur%2C_Uttar_Pradesh%2C_c.1911.jpg" }
  ],
  travel: {
    air: { airport: "Bareilly Airport (BEK) / Pantnagar Airport (PGH)", distance: "60 km from Rampur", time: "Connected via domestic routes" },
    rail: { station: "Rampur Junction (RMU)", distance: "City centre", time: "Well connected on Delhi–Moradabad–Lucknow line" },
    road: { highway: "NH-09 & NH-530", distance: "190 km from Delhi", time: "3.5 hrs drive from New Delhi" }
  },
  stay: {
    categories: [
      { type: "Heritage & Guest Houses", range: "₹1,500–₹3,500/night", options: ["Heritage Properties", "Rampur Club Stay", "PWD Heritage Bungalows"] },
      { type: "Mid-Range Hotels", range: "₹2,000–₹4,000/night", options: ["Hotel Delite", "The Golden Oak Rampur", "Hotel Modipur"] }
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
      { tier: "Budget Traveler", perDay: "₹1,000–₹1,800", breakdown: [{ category: "Stay", amount: "₹600–₹1,000" }, { category: "Food", amount: "₹300–₹500" }, { category: "Transport", amount: "₹100–₹300" }] },
      { tier: "Heritage & Comfort", perDay: "₹2,500–₹5,000", breakdown: [{ category: "Stay", amount: "₹1,500–₹3,200" }, { category: "Food", amount: "₹600–₹1,200" }, { category: "Transport", amount: "₹400–₹800" }] }
    ]
  },
  itineraries: {
    '1 Day': [
      {
        day: 1,
        schedule: [
          { time: "9:00 AM", place: "Explore Rampur Raza Library & Fort Rampur", duration: "2.5 hrs", distance: "Fort Area" },
          { time: "11:45 AM", place: "Visit Jama Masjid & surrounding bazaar", duration: "1.5 hrs", distance: "1.5 km" },
          { time: "1:30 PM", place: "Royal Rampuri Culinary Lunch (Rampuri Korma & Seekh Kebabs)", duration: "1.5 hrs", distance: "Old City" },
          { time: "3:30 PM", place: "Khas Bagh Royal Gardens exploration", duration: "1.5 hrs", distance: "3 km" },
          { time: "5:30 PM", place: "Heritage knife markets and local dessert sampling (Doodh ki Lauki)", duration: "1.5 hrs", distance: "Old Bazaar" }
        ]
      }
    ]
  },
  experiences: [
    { title: "Raza Library Manuscript Tour", duration: "2 hrs", price: "Free", category: "History", image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000" },
    { title: "Royal Rampuri Korma & Kebabs Culinary Walk", duration: "2 hrs", price: "₹300–₹600", category: "Culinary", image: "https://drive.google.com/thumbnail?id=PLACEHOLDER_ID&sz=w2000" }
  ],
  aiPrompts: [
    "What makes Rampuri Korma distinct from Awadhi or Mughlai Korma?",
    "What are the public visiting hours for Raza Library in Rampur?",
    "What is the history of the Rampuri knife craft?",
    "How to reach Rampur from Delhi or Lucknow?"
  ],
  reviews: [
    { name: "Tariq Khan", location: "Delhi", text: "Raza Library's architecture and historic collection are second to none. The Rampuri seekh kebabs are an unforgettable food experience.", rating: 5, image: "https://upload.wikimedia.org/wikipedia/commons/5/52/Imambara%2C_Fort_of_Rampur%2C_Uttar_Pradesh%2C_c.1911.jpg", date: "March 2026" }
  ],
  sources: {
    official: ["Uttar Pradesh Tourism (uptourism.gov.in)", "Rampur Raza Library Board", "Rampur District Portal (rampur.nic.in)"],
    historical: ["Tarikh-e-Rampur", "Rampur State Gazetteer"],
    lastVerified: "September 2026"
  }
}

// ─── UI Icons ─────────────────────────────────────────────────────────────────

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

// ─── Sub-Components ──────────────────────────────────────────────────────────

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

function Hero({ destination }: { destination: Destination }) {
  const [saved, setSaved] = useState(false)
  const [muted, setMuted] = useState(true)
  const [playing, setPlaying] = useState(true)
  return (
    <section className="relative w-full bg-d360-dark" style={{ height: '85vh', minHeight: '560px' }}>
      <img src={destination.hero.image} alt={`${destination.name} — ${destination.state}`} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.08) 30%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.75) 100%)' }} />
      <div className="absolute top-20 left-0 right-0 px-6 lg:px-12">
        <p className="text-white/60 text-xs tracking-widest font-medium">
          {destination.country.toUpperCase()} &nbsp;/&nbsp; {destination.state.toUpperCase()} &nbsp;/&nbsp; {destination.name.toUpperCase()}
        </p>
      </div>
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
        <div className="absolute bottom-8 right-6 lg:right-12 flex items-center gap-3">
          <button onClick={() => setMuted(!muted)} className="p-2.5 bg-black/40 text-white/70 hover:text-white hover:bg-black/60 transition-colors border border-white/10" style={{ borderRadius: '2px' }}><IconVolume /></button>
          <button onClick={() => setPlaying(!playing)} className="p-2.5 bg-black/40 text-white/70 hover:text-white hover:bg-black/60 transition-colors border border-white/10" style={{ borderRadius: '2px' }}>{playing ? <IconPause /> : <IconPlay />}</button>
        </div>
      </div>
    </section>
  )
}

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
          </div>
        </div>
      </div>
    </section>
  )
}

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
          <div className="flex flex-col gap-0">
            {shown.map((entry, i) => (
              <div key={i} className="flex gap-8 md:gap-0 group">
                <div className="hidden md:flex items-start pt-6 w-[88px] shrink-0 justify-end pr-8">
                  <span className="font-mono text-sm font-medium text-d360-primary">{entry.year}</span>
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

function FoodSection({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">LOCAL FOOD</p>
            <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Taste of {destination.name}</h2>
            <p className="text-d360-muted mt-2 text-sm">Famous royal dishes and local delights.</p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-sm font-medium text-d360-primary hover:gap-3 transition-all">Explore Local Food <IconArrowRight /></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {destination.food.map((item) => (
            <div key={item.name} className="border border-d360-border bg-white hover:border-d360-muted transition-colors group" style={{ borderRadius: '2px' }}>
              <div className="overflow-hidden" style={{ height: '180px' }}>
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
      </div>
    </section>
  )
}

function AttractionsGrid({ destination }: { destination: Destination }) {
  const [savedIds, setSavedIds] = useState<Set<string>>(new Set())
  return (
    <section className="bg-d360-surface py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">EXPLORE</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight mb-8">Places to Explore</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {destination.attractions.map(place => (
            <PlaceCard key={place.id} place={place} saved={savedIds.has(place.id)} onSave={() => setSavedIds(prev => { const n = new Set(prev); n.has(place.id) ? n.delete(place.id) : n.add(place.id); return n })} />
          ))}
        </div>
      </div>
    </section>
  )
}

function HiddenGems({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-ink py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-12">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">D360 HIDDEN GEMS</p>
          <h2 className="font-display text-3xl md:text-4xl text-white leading-tight">Beyond the Famous</h2>
        </div>
        <div className="grid md:grid-cols-1 gap-px bg-white/10">
          {destination.hiddenGems.map((gem) => (
            <div key={gem.name} className="group bg-d360-ink hover:bg-white/5 transition-colors p-6">
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
          ))}
        </div>
      </div>
    </section>
  )
}

function ThingsToDo({ destination }: { destination: Destination }) {
  return (
    <section className="bg-d360-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-d360-primary text-xs font-mono tracking-widest mb-4">ACTIVITIES</p>
          <h2 className="font-display text-3xl md:text-4xl text-d360-ink leading-tight">Things To Do</h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
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
            <div className="flex flex-col gap-2">
              {destination.aiPrompts.map((prompt, i) => (
                <button key={i} onClick={() => handlePrompt(prompt)} className={`text-left px-4 py-3 text-sm border transition-colors ${selected === prompt ? 'bg-d360-primary border-d360-primary text-white' : 'bg-white/5 border-white/10 text-white/70 hover:border-white/30 hover:text-white'}`} style={{ borderRadius: '2px' }}>
                  "{prompt}"
                </button>
              ))}
            </div>
          </div>
          <div className="border border-white/10 bg-white/5 p-6" style={{ borderRadius: '2px' }}>
            {!answered ? (
              <div className="min-h-[200px] flex items-center justify-center">
                <p className="text-white/30 text-sm text-center">Select a prompt or type your question about {destination.name}.</p>
              </div>
            ) : (
              <div className="min-h-[200px]">
                <div className="bg-d360-primary/20 border border-d360-primary/30 p-4 mb-4" style={{ borderRadius: '2px' }}>
                  <p className="text-white/80 text-sm">"{selected}"</p>
                </div>
                <div className="p-4 bg-white/5 border border-white/10 text-white/75 text-sm leading-relaxed" style={{ borderRadius: '2px' }}>
                  {destination.shortDescription} Explore famous highlights like {destination.attractions.map(a => a.name).join(', ')}.
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

export default function App() {
  const destination: Destination = rampur

  return (
    <div className="min-h-screen bg-d360-bg font-sans text-d360-ink antialiased selection:bg-d360-primary selection:text-white">
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
      <HowToReach destination={destination} />
      <WhereToStay destination={destination} />
      <AskD360 destination={destination} />
      <SourcesTrust destination={destination} />
      <Footer />
    </div>
  )
}