import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Menu, 
  X, 
  ChevronRight, 
  Star, 
  Clock, 
  MapPin, 
  Phone, 
  Instagram, 
  Facebook, 
  Wine, 
  Utensils, 
  Users, 
  Calendar,
  Send,
  ArrowRight
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Menu', href: '#menu' },
    { name: 'Gallery', href: '#gallery' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-dark/90 backdrop-blur-md py-4 border-b border-gold/20' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center space-x-2">
          <div className="w-10 h-10 border-2 border-gold flex items-center justify-center rotate-45">
            <span className="text-gold font-serif -rotate-45 font-bold text-xl">V</span>
          </div>
          <span className="text-2xl font-serif font-bold tracking-widest text-gold uppercase hidden sm:block">Visawa</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm uppercase tracking-widest hover:text-gold transition-colors font-medium opacity-80 hover:opacity-100"
            >
              {link.name}
            </a>
          ))}
          <button 
            onClick={onOpenBooking}
            className="bg-gold text-dark px-6 py-2.5 rounded-none text-xs uppercase tracking-[0.2em] font-bold hover:bg-light-gold transition-all shadow-gold transform hover:-translate-y-1 cursor-pointer"
          >
            Book a Table
          </button>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-gold" 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          id="mobile-menu-toggle"
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-dark border-b border-gold/20 py-8 px-6 flex flex-col space-y-6 md:hidden z-40"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-xl font-serif text-cream hover:text-gold transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="bg-gold text-dark px-8 py-4 rounded-none text-center font-bold tracking-widest uppercase text-sm w-full"
            >
              Reserve Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = ({ onOpenBooking }: { onOpenBooking: () => void }) => {
  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-dark via-dark/40 to-transparent z-10" />
        <div className="absolute inset-0 bg-dark/20 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80" 
          alt="Luxury Interior" 
          className="w-full h-full object-cover scale-110"
          referrerPolicy="no-referrer"
        />
      </div>

      <div className="container mx-auto px-6 z-20 relative pt-20">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl"
        >
          <span className="text-gold uppercase tracking-[0.4em] font-medium text-sm mb-6 block">Family Restaurant & Bar • Pune</span>
          <h1 className="text-6xl md:text-8xl font-serif font-bold leading-tight mb-8">
            The Art of <br />
            <span className="text-stroke-gold">Hospitality</span>
          </h1>
          <p className="text-lg md:text-xl text-cream/70 mb-10 max-w-lg font-light leading-relaxed">
            Experience Pune's most sophisticated blend of artisanal culinary creations and a curated bar experience at Visawa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button 
              onClick={onOpenBooking}
              className="bg-gold text-dark px-10 py-5 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-light-gold transition-all shadow-gold inline-flex items-center group cursor-pointer"
            >
              Reserve a Table
              <ArrowRight className="ml-3 group-hover:translate-x-2 transition-transform" />
            </button>
            <a href="#menu" className="border border-gold text-gold px-10 py-5 rounded-none font-bold uppercase tracking-widest text-sm hover:bg-gold/10 transition-all inline-flex items-center">
              Explore Our Menu
            </a>
          </div>
        </motion.div>
      </div>

      {/* Side Label */}
      <div className="absolute right-10 bottom-24 hidden lg:block rotate-90 transform origin-right">
        <span className="text-gold/30 uppercase tracking-[0.8em] text-[10px] whitespace-nowrap">Est. 2025 • Baner, Pune • Maharashtra</span>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 bg-dark relative overflow-hidden">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -top-6 -left-6 w-32 h-32 border-t-2 border-l-2 border-gold z-10" />
          <img 
            src="https://picsum.photos/seed/visawa-story/800/1000" 
            alt="Our Story" 
            className="w-full aspect-[4/5] object-cover rounded-none"
            referrerPolicy="no-referrer"
          />
          <div className="absolute -bottom-10 -right-10 bg-gold p-8 hidden lg:block">
            <h3 className="text-dark text-4xl font-serif font-bold italic line-height-none">365 Days</h3>
            <p className="text-dark uppercase tracking-widest text-xs font-bold mt-2">of Excellence</p>
          </div>
        </motion.div>

        <div className="space-y-8">
          <span className="text-gold uppercase tracking-widest text-sm font-semibold">Our Journey</span>
          <h2 className="text-5xl font-serif leading-tight">Celebrating A Year of <br /><span className="italic text-light-gold">Golden Moments</span></h2>
          <p className="text-cream/70 leading-relaxed text-lg">
            Since our doors opened in 2025 in the heart of Baner, Pune, Visawa Family Restaurant & Bar has sought to redefine the family dining experience. What started as a vision to blend high-end hospitality with a warm, inclusive atmosphere has blossomed into Pune's favorite premium destination.
          </p>
          <p className="text-cream/70 leading-relaxed">
            Our bar program celebrates Pune's vibrant culture with locally inspired cocktails, while our kitchen pushes the boundaries of modern Indian fusion and global favorites. At Visawa, we don't just serve food; we curate memories.
          </p>
          <div className="grid grid-cols-2 gap-8 pt-6">
            <div>
              <p className="text-4xl font-serif text-gold font-bold">12k+</p>
              <p className="text-xs uppercase tracking-widest text-cream/50 mt-1">Guests Hosted</p>
            </div>
            <div>
              <p className="text-4xl font-serif text-gold font-bold">50+</p>
              <p className="text-xs uppercase tracking-widest text-cream/50 mt-1">Signature Cocktails</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


const ExperienceCard = ({ icon: Icon, title, description, image }) => (
  <motion.div 
    whileHover={{ y: -10 }}
    className="group relative overflow-hidden h-[500px]"
  >
    <img src={image} alt={title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" referrerPolicy="no-referrer" />
    <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/20 to-transparent" />
    <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
      <div className="w-12 h-12 bg-gold/90 flex items-center justify-center mb-4 rounded-none group-hover:scale-110 transition-transform">
        <Icon className="text-dark" size={24} />
      </div>
      <h3 className="text-2xl font-serif mb-2">{title}</h3>
      <p className="text-sm text-cream/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        {description}
      </p>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      icon: Utensils,
      title: "Signature Dining",
      description: "A meticulously crafted menu featuring fusion wonders and time-honored classics, served in a refined yet cozy setup.",
      image: "https://picsum.photos/seed/visawa-dining/600/800"
    },
    {
      icon: Wine,
      title: "Curated Mixology",
      description: "Our bar team crafts liquid poetry using premium spirits and house-made infusions inspired by world flavors.",
      image: "https://picsum.photos/seed/visawa-bar/600/800"
    },
    {
      icon: Users,
      title: "Family First",
      description: "Dedicated spaces and menu options designed to make every family member feel special and comfortable.",
      image: "https://picsum.photos/seed/visawa-family/600/800"
    },
    {
      icon: Calendar,
      title: "Bespoke Events",
      description: "From intimate birthdays to grand anniversaries, our private dining rooms provide the perfect backdrop for your celebrations.",
      image: "https://picsum.photos/seed/visawa-events/600/800"
    }
  ];

  return (
    <section id="experience" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-[0.4em] text-sm font-semibold mb-4 block">The Experience</span>
          <h2 className="text-5xl font-serif">More Than Just a Meal</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((exp, i) => (
            <ExperienceCard key={i} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
};

const MenuPreview = () => {
  const [activeTab, setActiveTab] = useState('mains');

  const categories = [
    { id: 'starters', name: 'Starters' },
    { id: 'mains', name: 'Main Course' },
    { id: 'cocktails', name: 'Mixology' },
  ];

  const menuItems = {
    starters: [
      { name: "Tandoori Brie Wedges", price: "485", desc: "Smoked brie encased in a spicy tandoor crust, served with fig chutney." },
      { name: "Pune Chili Calamari", price: "525", desc: "Crispy calamari tossed with local Thecha-inspired garlic chili mix." },
      { name: "Visawa Truffle Kebabs", price: "450", desc: "Traditional dahi ke kebab with a luxurious truffle oil infusion." }
    ],
    mains: [
      { name: "Wild Mushroom Risotto", price: "675", desc: "Creamy arborio rice with porcini, shiitake, and locally foraged portobello." },
      { name: "Braised Lamb Shank", price: "890", desc: "Slow-cooked for 12 hours with rosemary jus and silky potato mash." },
      { name: "Sea Bass Malvani", price: "750", desc: "Pan-seared sea bass in a sophisticated coastal turmeric and coconut reduction." }
    ],
    cocktails: [
      { name: "The Baner Boulevard", price: "650", desc: "A twist on the classic with barrel-aged gin and citrus-infused vermouth." },
      { name: "Saffron Gold Fashioned", price: "750", desc: "Premium bourbon, hand-picked Kashmiri saffron, and gold dust garnish." },
      { name: "Pune Mist", price: "550", desc: "Vodka, fresh litchi, elderflower, and an aromatic dry ice presentation." }
    ]
  };

  return (
    <section id="menu" className="py-24 bg-dark/50 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="lg:w-1/3">
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Exquisite Tastes</span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">Chef's Signature Selection</h2>
            <p className="text-cream/60 mb-8 italic">"Every dish tells a story of tradition meeting innovation. We don't compromise; neither should you."</p>
            <div className="flex flex-col space-y-4">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveTab(cat.id)}
                  className={`text-left py-4 px-6 border-l-2 uppercase tracking-widest text-sm font-bold transition-all ${activeTab === cat.id ? 'border-gold text-gold bg-gold/5' : 'border-gold/10 text-cream/40 hover:text-cream/70'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
            <a href="#" className="mt-12 inline-flex items-center text-gold font-bold uppercase tracking-widest text-xs hover:tracking-[0.2em] transition-all group">
              Download Full Menu <ChevronRight className="ml-2 group-hover:translate-x-1" />
            </a>
          </div>

          <div className="lg:w-2/3">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid gap-10"
              >
                {menuItems[activeTab].map((item, i) => (
                  <div key={i} className="group cursor-default">
                    <div className="flex justify-between items-baseline mb-2">
                      <h4 className="text-2xl font-serif group-hover:text-gold transition-colors">{item.name}</h4>
                      <div className="flex-grow border-b border-gold/10 mx-4 opacity-50" />
                      <span className="text-gold font-serif">₹{item.price}</span>
                    </div>
                    <p className="text-cream/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
                <div className="mt-6">
                  <img src="https://picsum.photos/seed/menu-item-visual/800/400" alt="Menu Item" className="w-full h-48 object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-500" referrerPolicy="no-referrer" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
};

const GalleryGrid = () => {
  const images = [
    { src: "https://picsum.photos/seed/visawa-g1/800/800", size: "col-span-1 row-span-1" },
    { src: "https://picsum.photos/seed/visawa-g2/800/800", size: "col-span-1 row-span-1" },
    { src: "https://picsum.photos/seed/visawa-g3/800/800", size: "md:col-span-2 md:row-span-2" },
    { src: "https://picsum.photos/seed/visawa-g4/800/800", size: "col-span-1 row-span-1" },
    { src: "https://picsum.photos/seed/visawa-g5/800/800", size: "col-span-1 row-span-1" },
  ];

  return (
    <section id="gallery" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-gold uppercase tracking-widest text-sm mb-4 block">Visual Diary</span>
          <h2 className="text-5xl font-serif">Frames of Artistry</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-4 h-[600px] md:h-[800px]">
          {images.map((img, i) => (
            <motion.div 
              key={i} 
              whileHover={{ scale: 0.98 }}
              className={`${img.size} overflow-hidden`}
            >
              <img src={img.src} alt="Gallery" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" referrerPolicy="no-referrer" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  const testimonials = [
    { name: "Arjun Mehta", role: "Food Critic", text: "Finally, a place in Pune that understands that family dining can be sophisticated. The Visawa Truffle Kebabs are otherworldly." },
    { name: "Priya S.", role: "Regular Resident", text: "The bar experience here is arguably the best in Baner. Every visit feels like a celebration of good taste." },
    { name: "Rohan & Sneha", role: "Families of Visawa", text: "Our anniversary was made perfect by the staff's attention to detail. Elegant, warm, and highly professional." }
  ];

  return (
    <section className="py-24 bg-dark/80 relative">
      <div className="container mx-auto px-6 text-center">
        <Star className="text-gold mx-auto mb-8 animate-pulse" size={40} />
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="space-y-8"
            >
              <p className="text-3xl md:text-4xl font-serif italic leading-relaxed">
                "{testimonials[0].text}"
              </p>
              <div>
                <h4 className="text-gold font-bold uppercase tracking-[0.3em] text-sm">{testimonials[0].name}</h4>
                <p className="text-cream/40 text-xs mt-1 uppercase">{testimonials[0].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const ReservationForm = () => {
  return (
    <section id="reserve" className="py-24 bg-dark relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 border-r border-t border-gold/10 -mr-48 -mt-48 rotate-45" />

      <div className="container mx-auto px-6 max-w-5xl">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <span className="text-gold uppercase tracking-widest text-sm font-semibold mb-4 block">Reservations</span>
            <h2 className="text-5xl font-serif mb-8 leading-tight">Secure Your <br />Experience</h2>
            <p className="text-cream/60 mb-10 leading-relaxed">
              Planning a special evening? We recommend booking at least 48 hours in advance for weekend dining. For groups larger than 10, please contact us directly via phone.
            </p>
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold">
                  <Phone size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-cream/40">Inquiries</p>
                  <p className="text-lg font-serif">+91 20 4582 9102</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 border border-gold/30 rounded-full flex items-center justify-center text-gold">
                  <Clock size={18} />
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-cream/40">Service Hours</p>
                  <p className="text-lg font-serif">12:30 PM – 12:00 AM</p>
                </div>
              </div>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white/5 backdrop-blur-sm p-10 border border-gold/20 relative"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gold mb-2 block">Full Name</label>
                  <input type="text" className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-cream" placeholder="Enter your name" />
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gold mb-2 block">Guests</label>
                  <select className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-cream appearance-none">
                    <option className="bg-dark">2 Guests</option>
                    <option className="bg-dark">4 Guests</option>
                    <option className="bg-dark">6+ Guests</option>
                  </select>
                </div>
                <div>
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gold mb-2 block">Time</label>
                  <input type="time" className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-cream invert" />
                </div>
                <div className="col-span-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-gold mb-2 block">Occasion</label>
                  <input type="text" className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-cream" placeholder="Birthday, Anniversary, etc." />
                </div>
              </div>
              <button className="w-full bg-gold text-dark py-5 px-8 flex items-center justify-center uppercase font-bold tracking-widest text-sm hover:bg-light-gold transition-all shadow-gold mt-6 group">
                Request Table <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-dark">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 bg-gold/5 p-1 lg:p-0">
          <div className="lg:w-1/2 p-12">
            <h2 className="text-4xl font-serif mb-12">Find Us</h2>
            <div className="space-y-10">
              <div className="flex items-start space-x-6">
                <MapPin className="text-gold shrink-0 mt-1" />
                <div>
                  <h4 className="text-gold font-bold uppercase tracking-widest text-xs mb-2">Location</h4>
                  <p className="text-xl font-serif">S.No. 45/1A, Baner - Mahabaleshwar Hwy, <br />Baner, Pune, Maharashtra 411045</p>
                </div>
              </div>
              <div className="flex space-x-8 pt-4">
                <a href="#" className="w-12 h-12 border border-gold/20 flex items-center justify-center hover:bg-gold transition-all hover:text-dark">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 border border-gold/20 flex items-center justify-center hover:bg-gold transition-all hover:text-dark">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 h-[400px] lg:h-auto grayscale contrast-125 opacity-70">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.83478952019!2d73.7820626!3d18.5539521!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf376ad6789b%3A0x6e9f2255bc293d0a!2sBaner%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1714856402000!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Restaurant Map Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-dark pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <a href="#" className="flex items-center space-x-2">
              <div className="w-8 h-8 border border-gold flex items-center justify-center rotate-45">
                <span className="text-gold font-serif -rotate-45 font-bold text-sm">V</span>
              </div>
              <span className="text-xl font-serif font-bold tracking-widest text-gold uppercase">Visawa</span>
            </a>
            <p className="text-cream/40 text-sm leading-relaxed">
              Elevating the culinary scene of Pune since 2025. A testament to luxury, family, and extraordinary mixology.
            </p>
          </div>
          <div>
            <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Navigation</h5>
            <div className="flex flex-col space-y-4 text-sm text-cream/70">
              <a href="#about" className="hover:text-gold">Our Story</a>
              <a href="#menu" className="hover:text-gold">Menu Selection</a>
              <a href="#experience" className="hover:text-gold">Experience</a>
              <a href="#gallery" className="hover:text-gold">Gallery</a>
            </div>
          </div>
          <div>
            <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Connect</h5>
            <div className="flex flex-col space-y-4 text-sm text-cream/70">
              <p>Baner Main Rd, Pune</p>
              <p>reservations@visawa.com</p>
              <p>+91 20 4582 9102</p>
            </div>
          </div>
          <div>
            <h5 className="text-gold font-bold uppercase tracking-widest text-xs mb-8">Newsletter</h5>
            <div className="relative">
              <input type="email" placeholder="Email address" className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors" />
              <button className="absolute right-0 top-3 text-gold hover:translate-x-1 transition-transform">
                <ChevronRight />
              </button>
            </div>
            <p className="text-[10px] text-cream/30 mt-4 uppercase tracking-[0.1em]">Join for exclusive event invitations</p>
          </div>
        </div>
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-[10px] uppercase tracking-[0.3em] text-cream/20 font-bold">
          <p>© 2026 Visawa Family Restaurant & Bar Pune</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gold">Privacy Policy</a>
            <a href="#" className="hover:text-gold">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const BookingModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      onClose();
      setIsSubmitted(false);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-dark/95 backdrop-blur-md"
          />
          
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-xl bg-dark border border-gold/30 p-8 md:p-12 shadow-[0_0_50px_rgba(212,175,55,0.1)]"
          >
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 text-gold/50 hover:text-gold transition-colors"
            >
              <X size={24} />
            </button>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 border-2 border-gold rounded-full flex items-center justify-center mx-auto mb-6">
                  <Star className="text-gold" size={32} />
                </div>
                <h3 className="text-3xl font-serif mb-4">Request Received</h3>
                <p className="text-cream/60">We will contact you shortly to confirm your reservation.</p>
              </motion.div>
            ) : (
              <div>
                <span className="text-gold uppercase tracking-[0.3em] text-xs font-bold mb-4 block text-center">Reservations</span>
                <h2 className="text-4xl font-serif text-center mb-8">Gather at Visawa</h2>
                
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-gold/50 mb-2 block">Full Name</label>
                      <input 
                        required
                        type="text" 
                        className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-cream text-lg" 
                        placeholder="John Doe" 
                      />
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-widest text-gold/50 mb-2 block">Guests</label>
                      <select className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-cream appearance-none cursor-pointer">
                        <option className="bg-dark">2 Guests</option>
                        <option className="bg-dark">3 Guests</option>
                        <option className="bg-dark">4 Guests</option>
                        <option className="bg-dark">5 Guests</option>
                        <option className="bg-dark">6+ Guests</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-[10px] uppercase font-bold tracking-widest text-gold/50 mb-2 block">Preferred Time</label>
                      <div className="relative">
                        <input 
                          required
                          type="time" 
                          className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-cream text-lg invert" 
                        />
                      </div>
                    </div>
                    <div className="md:col-span-2">
                      <label className="text-[10px] uppercase font-bold tracking-widest text-gold/50 mb-2 block">Contact Number</label>
                      <input 
                        required
                        type="tel" 
                        className="w-full bg-transparent border-b border-gold/20 py-3 focus:border-gold outline-none transition-colors text-cream text-lg" 
                        placeholder="+91 00000 00000" 
                      />
                    </div>
                  </div>
                  
                  <button className="w-full bg-gold text-dark py-5 px-8 flex items-center justify-center uppercase font-bold tracking-widest text-sm hover:bg-light-gold transition-all shadow-gold mt-8 group cursor-pointer">
                    Confirm Reservation <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </button>
                  <p className="text-[10px] text-center text-cream/30 uppercase tracking-widest mt-6">
                    A wait of up to 15 minutes may apply during peak hours
                  </p>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

// --- App Root ---

export default function App() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  const openBooking = () => setIsBookingModalOpen(true);
  const closeBooking = () => setIsBookingModalOpen(false);

  return (
    <div className="bg-dark text-cream selection:bg-gold selection:text-dark font-sans scroll-smooth">
      <Navbar onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <About />
        <Experience />
        <MenuPreview />
        <GalleryGrid />
        <Testimonials />
        <ReservationForm />
        <Contact />
      </main>
      <Footer />
      
      <BookingModal isOpen={isBookingModalOpen} onClose={closeBooking} />
      
      {/* Global animations or scroll progress can be added here if needed */}
      <motion.div 
        className="fixed bottom-0 left-0 h-1 bg-gold z-[100]" 
        style={{ scaleX: 0 }} // Placeholder for actual scroll progress logic
      />
    </div>
  );
}
