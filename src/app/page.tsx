import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import ProjectGallery from "@/components/ProjectGallery";
import Navigation from "@/components/Navigation";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <Navigation />
      
      <div className="bg-gradient-to-br from-purple-900 via-purple-800 to-purple-700">

      {/* Hero Section */}
      <main className="container mx-auto px-6 lg:px-12 pt-16 pb-24">
        <div className="max-w-4xl">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Crafting World-Class Sports Infrastructure for
            <span className="text-green-400"> Champions</span>
          </h1>
          
          <p className="text-xl text-white/80 mb-8 max-w-2xl">
            From elite residential townships to national academies, we build the courts, 
            pitches, gyms, and arenas where tomorrow's champions are made.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-green-500 text-white px-8 py-4 rounded-full font-semibold hover:bg-green-600 transition-colors flex items-center justify-center gap-2">
              View Projects
              <ArrowRight size={20} />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-800 transition-colors">
              Partner With Us
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 text-white">
            <div>
              <div className="text-3xl font-bold text-green-400">100+</div>
              <div className="text-sm opacity-80">Projects Completed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">15+</div>
              <div className="text-sm opacity-80">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400">50+</div>
              <div className="text-sm opacity-80">Elite Developers</div>
            </div>
          </div>
        </div>
      </main>

      {/* About Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Built by Athletes, for Athletes
              </h2>
              <p className="text-gray-700 mb-6 text-lg">
                <strong>SportsNest</strong> is India's premier sports infrastructure company, 
                founded by <strong>Vijay R Bharadwaj</strong>, former India Test cricketer, 
                NCA Level 3 coach, and Star Sports commentator.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Deep sporting insight from former international athletes</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700">End-to-end infra: surfaces, lighting, fencing, civil works</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Trusted by India's top builders — Brigade, Puravankara, Bagmane & more</span>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-3 h-3 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <span className="text-gray-700">Decades of executional excellence and global brand partnerships</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-6 shadow-lg">
                  <h3 className="font-bold text-xl text-gray-900 mb-2">Founder's Note</h3>
                  <blockquote className="text-gray-700 italic mb-4">
                    "As a former international cricketer, I've played on some of the world's best facilities. 
                    I started SportsNest to bring that same world-class quality to Indian infrastructure."
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full overflow-hidden">
                      <Image
                        src="/founder/vijay-bharadwaj-1.jpg"
                        alt="Vijay R Bharadwaj"
                        width={48}
                        height={48}
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Vijay R Bharadwaj</div>
                      <div className="text-sm text-gray-600">Founder & Former India Cricketer</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Sports Infrastructure Solutions</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              We provide turnkey solutions for all your sporting infrastructure needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Sports Courts</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Tennis & Basketball Courts</li>
                <li>• Volleyball & Squash Courts</li>
                <li>• Multi-sport Courts</li>
                <li>• Synthetic Turf & Artificial Grass</li>
                <li>• Custom Clay Surfaces</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Infrastructure</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Asphalt Base Construction</li>
                <li>• Chain-Link Fencing</li>
                <li>• High-Mast LED Lighting</li>
                <li>• Jogging & Running Tracks</li>
                <li>• Skating Rinks</li>
              </ul>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-bold text-xl text-gray-900 mb-4">Premium Equipment</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Residential Gyms</li>
                <li>• Wellness Centers</li>
                <li>• Private Clubs</li>
                <li>• School Facilities</li>
                <li>• Global Brand Partnerships</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <ProjectGallery />

      {/* Video Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-900 py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-white mb-4">From the Dressing Room</h2>
          <p className="text-white/80 mb-8">Watch our Founder on YouTube</p>
          <div className="inline-flex items-center gap-3 bg-white/10 backdrop-blur rounded-full px-6 py-3 text-white">
            <Play size={24} />
            <span>The Dressing Room Show by Vijay Bharadwaj</span>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Let's Build Together</h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Whether you're a real estate developer, school, or corporate campus—we're your 
            single-window partner for premium sports infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-purple-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-900 transition-colors">
              Book a Consultation
            </button>
            <a href="mailto:chandrag@sportsnest.com" className="text-purple-800 font-semibold hover:underline">
              chandrag@sportsnest.com
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <Image
                src="/sportsnest-logo.png"
                alt="SportsNest Logo"
                width={56}
                height={56}
                className="rounded-lg"
              />
            </div>
            <div className="text-center md:text-right">
              <p>&copy; 2025 SportsNest. All rights reserved.</p>
              <p className="text-sm opacity-80">Bangalore, India</p>
            </div>
          </div>
        </div>
      </footer>
      </div>
    </div>
  );
}