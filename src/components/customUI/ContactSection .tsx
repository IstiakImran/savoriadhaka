"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Phone,
  Mail,
  Car,
  CalendarDays,
  ExternalLink,
} from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-1 gap-12">
          {/* Left Column - Contact Info & Map */}
          <div className="space-y-8">
            {/* Contact Information Grid */}
            <div className="grid grid-cols-2 gap-6">
              {/* Address */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <MapPin className="text-fuchsia-600 h-8 w-8" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Location
                    </h3>
                    <p className="text-gray-600">123 Link Road</p>
                    <p className="text-gray-600">Badda, Dhaka-1212</p>
                  </div>
                </div>
              </Card>

              {/* Phone */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Phone className="text-fuchsia-600 h-8 w-8" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Phone</h3>
                    <p className="text-gray-600">(+880) 123-4567</p>
                  </div>
                </div>
              </Card>

              {/* Email */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Mail className="text-fuchsia-600 h-8 w-8" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">Email</h3>
                    <p className="text-gray-600">hello@savoriadhaka.com</p>
                  </div>
                </div>
              </Card>

              {/* Parking */}
              <Card className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex flex-col items-center text-center space-y-4">
                  <Car className="text-fuchsia-600 h-8 w-8" />
                  <div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      Parking
                    </h3>
                    <p className="text-gray-600">Complimentary valet parking</p>
                    <p className="text-gray-600">Public garage nearby</p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Map */}
            {/* <div className="rounded-xl overflow-hidden shadow-lg h-64">
              <Image
                width={400}
                height={300}
                src="/api/placeholder/600/400"
                alt="Location map"
                className="w-full h-full object-cover"
              />
            </div> */}
          </div>

          {/* Right Column - Contact Form */}
          {/* <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-800">
                Send us a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:outline-none"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="px-4 py-2 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:outline-none"
                  />
                </div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:border-fuchsia-500 focus:outline-none"
                />
                <Button className="w-full bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card> */}
        </div>
      </div>
    </section>
  );
};

const ReservationSection = () => {
  // Replace with your actual Google Form URL
  const googleFormUrl = "https://forms.google.com/your-reservation-form";

  return (
    <section className="py-20 bg-gradient-to-r from-violet-50 to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-fuchsia-600 to-violet-600 text-transparent bg-clip-text">
          Make a Reservation
        </h2>

        <div className="max-w-2xl mx-auto">
          <Card className="p-8">
            <div className="space-y-6">
              <CalendarDays className="h-16 w-16 text-fuchsia-600 mx-auto" />
              <CardTitle className="text-2xl">Book Your Table</CardTitle>
              <p className="text-gray-600">
                Reserve your table quickly and easily through our online booking
                system. Click below to access our reservation form.
              </p>
              <Button
                className="bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white px-8 py-6 text-lg"
                onClick={() => window.open(googleFormUrl, "_blank")}
              >
                Book Now
                <ExternalLink className="ml-2 h-5 w-5" />
              </Button>
              <p className="text-sm text-gray-500">
                For special arrangements or groups larger than 8, please contact
                us directly.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default function ContactAndReservations() {
  return (
    <>
      <ContactSection />
      <ReservationSection />
    </>
  );
}
