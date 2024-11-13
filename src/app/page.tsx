"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import MenuPage from "@/components/customUI/Menu";
import ContactAndReservations from "@/components/customUI/ContactSection ";

const VibrancyFilter = () => (
  <div className="absolute inset-0 mix-blend-multiply bg-gradient-to-r from-fuchsia-500/30 to-cyan-500/30" />
);

const HomePage = () => {
  // const [activePromo, setActivePromo] = React.useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-b from-violet-50 to-cyan-50">
      {/* Floating Action Button for Reservations */}
      <div className="fixed bottom-8 right-8 z-50">
        <Button className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all">
          Book a Table
        </Button>
      </div>

      {/* Navigation */}
      <nav className="backdrop-blur-md bg-white/70 sticky top-0 z-40 border-b border-violet-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text">
              Savoria Dhaka
            </h1>
            <div className="hidden md:flex space-x-8">
              {["Menu", "Experience", "Events", "About"].map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="text-gray-700 hover:text-fuchsia-600 hover:bg-fuchsia-50"
                >
                  {item}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            width={1200}
            height={500}
            src="/coverphoto.jpg"
            alt="Restaurant ambiance"
            className="w-full h-full object-cover"
          />
          <VibrancyFilter />
        </div>
        <div className="relative z-10 text-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-white">
              Where Every Meal
              <br />
              Tells a Story
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Experience culinary artistry in an atmosphere that celebrates
              life&apos;s vibrant moments
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-white text-fuchsia-600 hover:bg-fuchsia-50 text-lg px-8 py-6"
                size="lg"
              >
                Explore Menu
              </Button>
              <Button
                variant="outline"
                className="border-white  hover:bg-white/10 text-lg px-8 py-6"
                size="lg"
              >
                Watch Our Story
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Current Promotions */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text">
            Current Sensations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Chef's Special",
                description: "A symphony of flavors crafted daily",
                image: "/ChefSpecial.jpg",
              },
              {
                title: "Happy Hour Magic",
                description: "50% off on signature cocktails",
                image: "/50off.jpg",
              },
              {
                title: "Weekend Brunch",
                description: "All-you-can-eat international cuisine",
                image: "/internationalcuisine.jpg",
              },
            ].map((promo, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="group rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative">
                  <Image
                    width={1200}
                    height={500}
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6 bg-white">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <Button
                    variant="ghost"
                    className="text-fuchsia-600 hover:text-fuchsia-700 hover:bg-fuchsia-50 group"
                  >
                    Learn More
                    <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <MenuPage></MenuPage>
      <ContactAndReservations></ContactAndReservations>
      {/* Hours & Location */}
      <section className="py-20 bg-gradient-to-r from-violet-100 to-fuchsia-100">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl font-bold text-gray-800">
                Find Us & Visit
              </h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Clock className="text-fuchsia-600 h-6 w-6" />
                  <div>
                    <h3 className="font-semibold text-gray-800">Hours</h3>
                    <p className="text-gray-600">Mon-Thu: 11AM-10PM</p>
                    <p className="text-gray-600">Fri-Sat: 11AM-12AM</p>
                    <p className="text-gray-600">Sun: 10AM-9PM</p>
                  </div>
                </div>
              </div>
              <Button
                className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white"
                size="lg"
              >
                Get Directions
              </Button>
            </div>
            <div className="rounded-xl overflow-hidden shadow-2xl">
              {/* <Image
                width={1200}
                height={500}
                src="/api/placeholder/600/400"
                alt="Restaurant location"
                className="w-full h-full object-cover"
              /> */}
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4062.3309648934073!2d90.42603956404115!3d23.77967915634402!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sbd!4v1731459248962!5m2!1sen!2sbd"
                width="600"
                height="450"
                style={{ border: "0" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-400 to-violet-400 text-transparent bg-clip-text">
                Savoria Dhaka
              </h3>
              <p className="text-gray-400">Where flavor meets celebration</p>
              <div className="flex space-x-4">
                <Facebook className="h-6 w-6 hover:text-fuchsia-400 cursor-pointer transition-colors" />
                <Instagram className="h-6 w-6 hover:text-fuchsia-400 cursor-pointer transition-colors" />
                <Twitter className="h-6 w-6 hover:text-fuchsia-400 cursor-pointer transition-colors" />
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <div className="flex flex-col space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-2 rounded bg-gray-800 border border-gray-700 focus:border-fuchsia-500 focus:outline-none"
                />
                <Button className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white hover:from-fuchsia-700 hover:to-violet-700">
                  Subscribe
                </Button>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-fuchsia-400 transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
