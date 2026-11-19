export const siteConfig = {
  brand: { name: "LensArt Studio", tagline: "Capturing Moments. Crafting Memories.", logo: "📷" },
  hero: {
    headline: "Every Moment Deserves to Be Beautiful",
    subheadline: "Professional photography that tells your unique story — from golden-hour portraits to milestone celebrations.",
    ctaPrimary: { label: "View Gallery", href: "#gallery" },
    ctaSecondary: { label: "Book a Session", href: "#contact" },
    stats: [
      { value: "500+", label: "Happy Clients" },
      { value: "5K+", label: "Photos Delivered" },
      { value: "8+", label: "Years Experience" },
      { value: "50+", label: "Awards Won" }
    ],
    heroImages: [
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=1200&q=85",
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=85",
      "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=1200&q=85",
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&q=85"
    ]
  },
  about: {
    name: "Alex Morgan",
    title: "Lead Photographer & Visual Artist",
    bio: "I believe every person has a story worth telling through light and lens. With over 8 years of experience capturing life's most precious moments, I bring both technical expertise and genuine warmth to every shoot.",
    bio2: "From intimate family sessions to grand celebrations, my goal is simple: make you feel comfortable, have fun, and walk away with images you'll treasure forever.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=600&q=80",
    highlights: [
      { icon: "🏆", label: "Award-Winning Photography" },
      { icon: "🎓", label: "BFA in Visual Arts" },
      { icon: "❤️", label: "Passion-Driven Approach" },
      { icon: "🌍", label: "Available Worldwide" }
    ]
  },
  services: [
    { id: "portraits", icon: "👤", title: "Portrait Sessions", description: "Stunning individual portraits that capture your personality and essence in every frame.", price: "Starting at $150", features: ["1-2 hours session", "2 outfit changes", "30 edited photos", "Online gallery"] },
    { id: "events", icon: "🎉", title: "Events & Celebrations", description: "From graduations to birthdays, we capture every joyful moment of your special day.", price: "Starting at $350", features: ["Full event coverage", "Candid + posed shots", "100+ edited photos", "Same-week delivery"] },
    { id: "family", icon: "👨‍👩‍👧", title: "Family Sessions", description: "Warm, natural family portraits that you'll proudly display for years to come.", price: "Starting at $200", features: ["Up to 6 people", "1 location", "50 edited photos", "Print release"] },
    { id: "weddings", icon: "💍", title: "Wedding Photography", description: "Complete wedding day coverage from getting ready to the last dance.", price: "Starting at $1,200", features: ["8-hour coverage", "2nd shooter included", "400+ edited photos", "Album design"] },
    { id: "commercial", icon: "🏢", title: "Commercial & Brand", description: "Professional imagery that elevates your brand and connects with your audience.", price: "Starting at $500", features: ["Brand strategy session", "Studio or on-location", "50+ edited images", "Commercial license"] },
    { id: "lifestyle", icon: "🌸", title: "Lifestyle Sessions", description: "Empowering, tasteful sessions that celebrate you in your most authentic self.", price: "Starting at $250", features: ["Private studio session", "Styling guidance", "40 edited photos", "Makeup artist optional"] }
  ],
  gallery: {
    categories: ["All", "Portraits", "Events", "Family", "Weddings", "Commercial"],
    items: [
      { id: 1, category: "Portraits", title: "Golden Hour Portrait", image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&q=80" },
      { id: 2, category: "Weddings", title: "Wedding Bliss", image: "https://images.unsplash.com/photo-1519741497674-611481863552?w=600&q=80" },
      { id: 3, category: "Events", title: "Graduation Day", image: "https://images.unsplash.com/photo-1627556704302-624286467c65?w=600&q=80" },
      { id: 4, category: "Family", title: "Family Memories", image: "https://images.unsplash.com/photo-1511895426328-dc8714191011?w=600&q=80" },
      { id: 5, category: "Commercial", title: "Brand Story", image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80" },
      { id: 6, category: "Portraits", title: "Studio Session", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" },
      { id: 7, category: "Weddings", title: "Forever Together", image: "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?w=600&q=80" },
      { id: 8, category: "Events", title: "Birthday Celebration", image: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=600&q=80" },
      { id: 9, category: "Family", title: "Autumn Walk", image: "https://images.unsplash.com/photo-1541532713592-79a0317b6b77?w=600&q=80" },
      { id: 10, category: "Portraits", title: "Natural Light", image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80" },
      { id: 11, category: "Commercial", title: "Product Story", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&q=80" },
      { id: 12, category: "Weddings", title: "Love Story", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?w=600&q=80" }
    ]
  },
  pricing: [
    {
      name: "Essentials",
      price: "$199",
      period: "per session",
      description: "Perfect for individuals and couples wanting beautiful memories.",
      popular: false,
      features: ["2-hour session", "1 location", "30 edited digital photos", "Online gallery (30 days)", "Print release", "1 outfit change"]
    },
    {
      name: "Signature",
      price: "$399",
      period: "per session",
      description: "Our most popular package — perfect for families and events.",
      popular: true,
      features: ["4-hour session", "2 locations", "75 edited digital photos", "Online gallery (90 days)", "Print release", "2 outfit changes", "1 printed 8×10", "Rush delivery available"]
    },
    {
      name: "Premium",
      price: "$799",
      period: "per session",
      description: "Full-day coverage with premium deliverables for weddings & big events.",
      popular: false,
      features: ["8-hour session", "Unlimited locations", "200+ edited photos", "Online gallery (1 year)", "Full print release", "Album design included", "2nd shooter", "Video highlights reel"]
    }
  ],
  process: [
    { step: "01", icon: "💬", title: "Consultation", description: "We start with a free consultation to understand your vision, style preferences, and what moments matter most to you." },
    { step: "02", icon: "📅", title: "Book & Plan", description: "Choose your package, pick your date, and we'll handle all the planning — locations, timing, and shot lists." },
    { step: "03", icon: "📸", title: "The Shoot", description: "Relax and be yourself! We guide you through poses and capture genuine, beautiful moments naturally." },
    { step: "04", icon: "✨", title: "Delivery", description: "Receive your professionally edited gallery within 5–7 days, with sneak peeks delivered within 48 hours!" }
  ],
  testimonials: [
    { name: "Sarah & James", role: "Wedding Clients", avatar: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=100&q=80", rating: 5, text: "Alex made our wedding day absolutely magical. Every photo is stunning, candid and full of emotion. We've printed them all over our home!" },
    { name: "Emily Chen", role: "Graduate Portrait", avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80", rating: 5, text: "I was so nervous for my shoot but Alex made everything so comfortable. My graduation photos turned out beyond what I imagined. Pure perfection!" },
    { name: "The Martinez Family", role: "Family Session", avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&q=80", rating: 5, text: "Capturing our family of 5 is not easy but Alex did it beautifully. Every child was engaged and the final photos are absolutely priceless." },
    { name: "Marcus Williams", role: "Commercial Client", avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80", rating: 5, text: "The brand photos completely transformed our marketing. Professional, creative, and delivered ahead of schedule. Highly recommend!" },
    { name: "Priya Sharma", role: "Portrait Session", avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80", rating: 5, text: "I finally have photos I'm proud to share! Alex has a gift for making you feel seen and beautiful. The results are simply breathtaking." },
    { name: "David & Lisa K.", role: "Engagement Photos", avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=100&q=80", rating: 5, text: "Our engagement session was so fun and the photos tell our love story perfectly. We can't wait for Alex to shoot our wedding!" }
  ],
  faq: [
    { q: "How far in advance should I book?", a: "We recommend booking 4–8 weeks in advance for portraits and 6–12 months for weddings. Popular dates fill up fast, especially in spring and fall." },
    { q: "What should I wear to my session?", a: "Wear something that makes you feel confident and comfortable. We'll send you a full style guide after booking with color palette suggestions and outfit ideas." },
    { q: "How long until I receive my photos?", a: "Portrait and event galleries are delivered within 5–7 business days. Weddings take 3–4 weeks. Sneak peeks are always delivered within 48 hours!" },
    { q: "Do you shoot in bad weather?", a: "We monitor the forecast and always have a backup plan! Overcast days actually make for beautiful, soft light. We'll reschedule at no charge for severe weather." },
    { q: "Can I bring family or friends to my session?", a: "Absolutely! For portrait sessions, a small support crew is welcome. For couples and family sessions, the more the merrier — we love capturing authentic group moments." },
    { q: "Do you offer payment plans?", a: "Yes! We offer flexible payment plans for packages over $400. A 25% deposit secures your date, with the balance due the day of the session." }
  ],
  contact: {
    email: "hello@lensartstudio.com",
    phone: "+1 (555) 234-5678",
    location: "San Francisco, CA & Available Worldwide",
    socials: [
      { name: "Instagram", href: "#", icon: "instagram" },
      { name: "Facebook", href: "#", icon: "facebook" }
    ]
  }
};
