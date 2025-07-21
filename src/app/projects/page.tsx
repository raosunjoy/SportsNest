"use client";

import ProjectGallery from "@/components/ProjectGallery";
import Navigation from "@/components/Navigation";

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-purple-700 text-white py-20">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h1 className="text-5xl font-bold mb-6">Our Projects</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Explore our extensive portfolio of world-class sports infrastructure projects 
            delivered across India for top developers and institutions.
          </p>
        </div>
      </section>

      {/* Projects Gallery */}
      <ProjectGallery />

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