import { CheckCircle, ArrowRight, Wrench, Users, Shield, Clock } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function ServicesPage() {
  const services = [
    {
      category: "Sports Courts",
      icon: "🏸",
      services: [
        "Tennis Courts (Hard Court, Clay Court, Grass Court)",
        "Basketball Courts (Indoor & Outdoor)",
        "Badminton Courts (Professional Standards)",
        "Volleyball Courts (Indoor & Beach Volleyball)",
        "Squash Courts (Glass Back Wall Systems)",
        "Multi-sport Courts (Convertible Surfaces)",
        "Handball & Netball Courts"
      ]
    },
    {
      category: "Synthetic Surfaces",
      icon: "🌱",
      services: [
        "Artificial Grass for Football & Cricket",
        "Synthetic Running Tracks (IAAF Approved)",
        "Multi-Use Games Areas (MUGA)",
        "Classic Clay Surfaces (GrassMan Patented)",
        "Acrylic Surface Systems",
        "Rubber Surface Applications",
        "Landscaping Artificial Grass"
      ]
    },
    {
      category: "Infrastructure",
      icon: "🏗️",
      services: [
        "Asphalt Base Construction & Preparation",
        "Chain Link Fencing & Sports Barriers",
        "High-Mast LED Lighting Systems",
        "Drainage & Water Management",
        "Spectator Seating & Pavilions",
        "Equipment Storage Solutions",
        "Access Control & Security Systems"
      ]
    },
    {
      category: "Specialized Facilities",
      icon: "🏟️",
      services: [
        "Cricket Practice Nets & Pitches",
        "Bowling Green Construction",
        "Golf Practice Areas & Putting Greens",
        "Skating Rinks & Ice Surfaces",
        "Swimming Pool Decks",
        "Gymnasium Flooring",
        "Indoor Air-Supported Structures"
      ]
    }
  ];

  const process = [
    {
      step: "01",
      title: "Consultation & Site Assessment",
      description: "Our experts visit your site to assess requirements, soil conditions, and design possibilities."
    },
    {
      step: "02", 
      title: "Custom Design & Planning",
      description: "We create detailed designs tailored to your space, budget, and specific sporting requirements."
    },
    {
      step: "03",
      title: "Material Procurement",
      description: "We source premium materials from our global partners ensuring quality and durability."
    },
    {
      step: "04",
      title: "Professional Installation",
      description: "Our certified teams handle all construction work with precision and adherence to timelines."
    },
    {
      step: "05",
      title: "Quality Assurance & Handover",
      description: "Comprehensive testing, certification, and maintenance guidelines for long-term performance."
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl font-bold mb-6">Complete Sports Infrastructure Solutions</h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            From concept to completion, we deliver world-class sporting facilities with 
            unmatched expertise, premium materials, and professional craftsmanship.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Service Categories</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Comprehensive solutions for all your sports infrastructure needs
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {services.map((category, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="text-4xl">{category.icon}</div>
                  <h3 className="text-2xl font-bold text-gray-900">{category.category}</h3>
                </div>
                <ul className="space-y-3">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex} className="flex items-start gap-3">
                      <CheckCircle className="text-green-500 mt-1 flex-shrink-0" size={18} />
                      <span className="text-gray-700">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SportsNest?</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              The advantages of partnering with India's premier sports infrastructure company
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-purple-800" size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Expert Team</h3>
              <p className="text-gray-600">
                Led by former international athletes with deep understanding of sporting requirements
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Quality Assured</h3>
              <p className="text-gray-600">
                Premium materials, international standards, and comprehensive quality control processes
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Wrench className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Turnkey Solutions</h3>
              <p className="text-gray-600">
                Complete end-to-end services from design and planning to installation and maintenance
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Timely Delivery</h3>
              <p className="text-gray-600">
                Proven track record of completing projects on time and within budget specifications
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              A systematic approach ensuring perfect execution of your sports infrastructure project
            </p>
          </div>

          <div className="space-y-8">
            {process.map((step, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-start gap-6 bg-white rounded-xl p-8 shadow-lg">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-purple-800 text-white rounded-full flex items-center justify-center">
                    <span className="font-bold text-xl">{step.step}</span>
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-700 text-lg leading-relaxed">{step.description}</p>
                </div>
                {index < process.length - 1 && (
                  <div className="hidden lg:block">
                    <ArrowRight className="text-gray-300" size={24} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Partnerships */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Global Brand Partnerships</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              We partner with world-renowned brands to bring you the finest sports equipment 
              and infrastructure solutions used by athletes globally.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Premium Surfaces</h3>
                <p className="opacity-90">
                  Patented surface technologies including Classic Clay by GrassMan, 
                  used in professional tournaments worldwide.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Fitness Equipment</h3>
                <p className="opacity-90">
                  World-class fitness equipment from leading global manufacturers 
                  for gyms, wellness centers, and private clubs.
                </p>
              </div>
            </div>
            
            <div className="text-center">
              <div className="bg-white/10 backdrop-blur rounded-xl p-6">
                <h3 className="font-bold text-xl mb-3">Lighting Systems</h3>
                <p className="opacity-90">
                  Advanced LED lighting solutions designed specifically for sports 
                  applications with optimal illumination and energy efficiency.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Get a detailed consultation and custom quote for your sports infrastructure requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-purple-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-900 transition-colors">
              Get Free Consultation
            </button>
            <button className="border-2 border-purple-800 text-purple-800 px-8 py-3 rounded-full font-semibold hover:bg-purple-800 hover:text-white transition-colors">
              Download Service Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center">
                <span className="text-purple-800 font-bold">SN</span>
              </div>
              <div>
                <div className="font-bold">SPORTS NEST</div>
                <div className="text-sm opacity-80">Infra for Champions</div>
              </div>
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2025 SportsNest. All rights reserved.</p>
              <p className="text-sm opacity-80">Bangalore, India</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}