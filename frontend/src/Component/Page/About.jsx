import React from "react";
import {
  Quote,
  Coffee,
  MapPin,
  Phone,
  Mail,
  Twitter,
  Facebook,
  Instagram,
  Calendar,
  User,
  MessageSquare,
} from "lucide-react";

// ✅ Page 1 — Hero Section
function AboutHero() {
  return (
    <section
      className="relative h-[80vh] bg-cover bg-center flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 uppercase">
          About Us
        </h1>
        <p className="text-lg max-w-2xl mx-auto text-gray-200">
          Discover the story behind our passion for coffee, crafted moments, and
          warm experiences that bring people together.
        </p>
      </div>
    </section>
  );
}

// ✅ Page 2 — Our Story Section
function AboutStory() {
  return (
    <section className="w-full flex flex-col md:flex-row">
      <div className="md:w-1/2 w-full h-[70vh]">
        <img
          src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
          alt="Coffee shop interior"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="md:w-1/2 w-full bg-black text-white flex items-center">
        <div className="bg-black/80 p-10 md:p-16">
          <h3 className="text-[#c6975c] text-2xl italic font-serif mb-2">
            Discover
          </h3>
          <h2 className="text-4xl md:text-5xl font-bold uppercase mb-6">
            Our Story
          </h2>
          <p className="text-gray-300 leading-relaxed text-[15px]">
            On her way she met a copy. The copy warned the Little Blind Text
            that where it came from it would have been rewritten a thousand
            times, and everything that was left from its origin would be the
            word “and.” But nothing the copy said could convince her, and so she
            didn’t take long until a few insidious Copy Writers ambushed her and
            dragged her into their agency.
          </p>
        </div>
      </div>
    </section>
  );
}

// ✅ Page 3 — Customer Testimonials
function CustomerTestimonials() {
  const testimonials = [
    {
      quote:
        "Even the all–powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small.",
      name: "Louise Kelly",
      title: "Illustrator Designer",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      quote:
        "Even the all–powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.",
      name: "Louise Kelly",
      title: "Illustrator Designer",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
    },
    {
      quote:
        "Even the all–powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
      name: "Louise Kelly",
      title: "Illustrator Designer",
      img: "https://randomuser.me/api/portraits/men/70.jpg",
    },
    {
      quote:
        "Even the all–powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name.",
      name: "Louise Kelly",
      title: "Illustrator Designer",
      img: "https://randomuser.me/api/portraits/men/71.jpg",
    },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-7xl mx-auto text-center text-white px-6">
        <h3 className="text-[#c6975c] italic text-2xl font-serif mb-2">
          Testimony
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-4">
          Customers Says
        </h2>
        <p className="text-gray-300 max-w-2xl mx-auto mb-12">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => (
            <div
              key={i}
              className="bg-[#b68d53]/90 text-left p-6 rounded-md flex flex-col justify-between shadow-lg"
            >
              <Quote className="text-white opacity-50 mb-4" />
              <p className="text-white mb-6">{t.quote}</p>
              <div className="flex items-center gap-3">
                <img
                  src={t.img}
                  alt={t.name}
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <div>
                  <h4 className="font-semibold text-white">{t.name}</h4>
                  <p className="text-sm text-gray-200">{t.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ✅ Page 4 — Discover Our Menu
function DiscoverMenu() {
  const menuImages = [
    "https://images.unsplash.com/photo-1511920170033-f8396924c348?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
    "https://images.unsplash.com/photo-1509042239860-f550ce710b93?auto=format&fit=crop&w=800&q=80",
  ];

  return (
    <section className="bg-[#0e0d0d] text-white py-20">
      <div className="max-w-6xl mx-auto text-center px-6">
        <h3 className="text-[#c6975c] italic text-2xl font-serif mb-2">
          Discover
        </h3>
        <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">
          Our Menu
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts. Separated they
          live in Bookmarksgrove right at the coast of the Semantics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10">
          {menuImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Menu item ${index + 1}`}
              className="rounded-lg object-cover w-full h-[250px] hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>

        <button className="border border-[#c6975c] text-[#c6975c] hover:bg-[#c6975c] hover:text-black px-6 py-3 rounded-md font-semibold transition duration-300">
          View Full Menu
        </button>
      </div>
    </section>
  );
}

// ✅ Page 5 — Coffee Stats
function CoffeeStats() {
  const stats = [
    { number: "100", label: "Coffee Branches" },
    { number: "85", label: "Number of Awards" },
    { number: "10,567", label: "Happy Customer" },
    { number: "900", label: "Staff" },
  ];

  return (
    <section
      className="relative py-20 bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1600&q=80')",
      }}
    >
      <div className="absolute inset-0 bg-black/70"></div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 text-center text-white gap-10 px-6">
        {stats.map((item, index) => (
          <div key={index} className="flex flex-col items-center space-y-4">
            <div className="border border-[#c6975c] p-6 rounded-md">
              <Coffee className="text-[#c6975c] w-10 h-10" />
            </div>
            <h3 className="text-[#c6975c] text-3xl font-bold">{item.number}</h3>
            <p className="text-gray-300">{item.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

// ✅ Page 6 — Footer Section
function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="font-semibold text-lg mb-4">ABOUT US</h3>
          <p className="text-gray-400 mb-6">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <div className="flex space-x-4">
            {[Twitter, Facebook, Instagram].map((Icon, i) => (
              <div
                key={i}
                className="bg-gray-800 hover:bg-[#c6975c] p-2 rounded-full transition-colors duration-300"
              >
                <Icon size={20} />
              </div>
            ))}
          </div>
        </div>

        {/* Recent Blog */}
        <div>
          <h3 className="font-semibold text-lg mb-4">RECENT BLOG</h3>
          {[1, 2].map((_, i) => (
            <div key={i} className="flex items-center mb-4">
              <img
                src={
                  i === 0
                    ? "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=150&q=80"
                    : "https://images.unsplash.com/photo-1603133872878-684f208fb84b?auto=format&fit=crop&w=150&q=80"
                }
                alt="blog"
                className="w-16 h-16 rounded object-cover mr-4"
              />
              <div>
                <p className="font-medium">
                  Even the all–powerful Pointing has no control about
                </p>
                <div className="flex text-gray-400 text-sm items-center space-x-3 mt-2">
                  <div className="flex items-center space-x-1">
                    <Calendar size={14} /> <span>Sept 15, 2018</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <User size={14} /> <span>Admin</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MessageSquare size={14} /> <span>19</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-lg mb-4">SERVICES</h3>
          <ul className="space-y-2 text-gray-300">
            <li>Cooked</li>
            <li>Deliver</li>
            <li>Quality Foods</li>
            <li>Mixed</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-semibold text-lg mb-4">HAVE A QUESTION?</h3>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start space-x-2">
              <MapPin className="w-5 text-[#c6975c]" />
              <span>
                Tinkune-32, Kathmandu, Nepal
              </span>
            </li>
            <li className="flex items-center space-x-2">
              <Phone className="w-5 text-[#c6975c]" />
              <span>+977-9824665789</span>
            </li>
            <li className="flex items-center space-x-2">
              <Mail className="w-5 text-[#c6975c]" />
              <span>coffeeblend@gmail.com</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-400 mt-12 border-t border-gray-800 pt-6 text-sm">
        Copyright ©2025 All rights reserved |
      </div>
    </footer>
  );
}

// ✅ Main About Page (All 6 Pages Combined)
export default function AboutPage() {
  return (
    <div className="font-sans">
      <AboutHero />
      <AboutStory />
      <CustomerTestimonials />
      <DiscoverMenu />
      <CoffeeStats />
      <Footer />
    </div>
  );
}
