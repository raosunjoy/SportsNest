import Image from "next/image";
import { Award, Users, Target, Trophy } from "lucide-react";
import Navigation from "@/components/Navigation";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Built by Athletes, for Athletes</h1>
              <p className="text-xl opacity-90 leading-relaxed">
                SportsNest is India's premier sports infrastructure company, founded by 
                former international cricketers who understand what it takes to create 
                world-class sporting facilities.
              </p>
            </div>
            <div className="relative">
              <div className="bg-white/10 backdrop-blur rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6 text-center">
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
                  <div>
                    <div className="text-3xl font-bold text-green-400">25+</div>
                    <div className="text-sm opacity-80">Cities Served</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="bg-gradient-to-br from-purple-100 to-green-100 rounded-2xl p-8">
                <div className="bg-white rounded-xl p-8 shadow-lg">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 bg-purple-800 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">VB</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Vijay R Bharadwaj</h3>
                      <p className="text-purple-600 font-medium">Founder & Chief Sports Officer</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Trophy className="text-green-500" size={20} />
                      <span className="text-gray-700">Former India Test Cricketer</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="text-green-500" size={20} />
                      <span className="text-gray-700">NCA Level 3 Certified Coach</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="text-green-500" size={20} />
                      <span className="text-gray-700">Star Sports Commentator</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="text-green-500" size={20} />
                      <span className="text-gray-700">Host: The Dressing Room Show</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                From Test Cap to Turf Builder
              </h2>
              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  "As a former international cricketer, I've had the privilege of playing on some of 
                  the world's finest sporting facilities. From the hallowed turf of Lord's to the 
                  bouncy pitches of Australia, I understand intimately what separates a good surface 
                  from a great one."
                </p>
                
                <p>
                  "This experience drove me to establish SportsNest - to bring that same world-class 
                  quality and attention to detail to Indian infrastructure. We don't just build courts 
                  and pitches; we craft environments where champions are born."
                </p>
                
                <p>
                  "Today, our work spans from residential townships to corporate campuses, from 
                  educational institutions to professional academies. Each project carries the DNA 
                  of excellence that I learned during my playing days."
                </p>
                
                <blockquote className="border-l-4 border-purple-800 pl-4 italic font-medium text-lg">
                  "Every facility we build is designed with the mindset of an athlete who has 
                  competed at the highest level. That's the SportsNest difference."
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Trophy className="text-purple-800" size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Excellence</h3>
              <p className="text-gray-600">
                Uncompromising commitment to delivering world-class sports infrastructure
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="text-green-600" size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Athlete-First</h3>
              <p className="text-gray-600">
                Every design decision is made with the athlete's performance and safety in mind
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-blue-600" size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600">
                Constantly evolving with new materials, technologies, and construction techniques
              </p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="text-orange-600" size={32} />
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Integrity</h3>
              <p className="text-gray-600">
                Transparent processes, honest communication, and reliable project delivery
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team & Expertise */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Expertise</h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Combining sporting insight with technical excellence
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-purple-800 font-bold text-2xl">🏏</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Sporting Heritage</h3>
              <p className="text-gray-600">
                Led by former international athletes who understand performance requirements at the highest level
              </p>
            </div>

            <div className="text-center">
              <div className="bg-green-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-green-600 font-bold text-2xl">🏗️</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Technical Excellence</h3>
              <p className="text-gray-600">
                Advanced construction techniques, premium materials, and adherence to international standards
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-24 h-24 flex items-center justify-center mx-auto mb-6">
                <span className="text-blue-600 font-bold text-2xl">🤝</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3">Trusted Partnerships</h3>
              <p className="text-gray-600">
                Strong relationships with India's top developers, educational institutions, and corporate houses
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-purple-800 to-purple-900 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Champions?</h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Partner with us to create world-class sports infrastructure that inspires excellence
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-green-500 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-600 transition-colors">
              Start Your Project
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-purple-800 transition-colors">
              View Our Projects
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