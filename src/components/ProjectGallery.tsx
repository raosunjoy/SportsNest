"use client";

import Image from "next/image";
import { useState } from "react";

interface Project {
  id: string;
  title: string;
  type: string;
  client: string;
  image: string;
  description: string;
}

const projects: Project[] = [
  {
    id: "1",
    title: "SJR Palazza Tennis Court",
    type: "Tennis Court",
    client: "SJR Group",
    image: "/projects/SJR Palazaa.jpg",
    description: "Premium tennis court with professional synthetic surface"
  },
  {
    id: "2", 
    title: "Synthetic Basketball Court",
    type: "Basketball Court",
    client: "Residential Complex",
    image: "/projects/SYNTHETIC_BASKETBALL.JPG",
    description: "Modern synthetic basketball court with LED lighting"
  },
  {
    id: "3",
    title: "Multi-Sport Complex",
    type: "Multi-Sport",
    client: "Brigade Group",
    image: "/projects/241280941_367757208312491_2870853969926204070_n.jpg",
    description: "Complete multi-sport facility with courts and amenities"
  },
  {
    id: "4",
    title: "Tennis Court Installation",
    type: "Tennis Court", 
    client: "Premium Township",
    image: "/projects/241407738_367757191645826_9187318003532301529_n.jpg",
    description: "Professional tennis court with high-quality surface"
  },
  {
    id: "5",
    title: "Badminton Court",
    type: "Badminton Court",
    client: "Corporate Campus",
    image: "/projects/118488872_153277009760513_8619480307087049036_n.jpg",
    description: "Indoor badminton court with proper ventilation and lighting"
  },
  {
    id: "6",
    title: "Squash Court Construction",
    type: "Squash Court",
    client: "Sports Club",
    image: "/projects/118886344_153276956427185_6399351481695250363_n.jpg",
    description: "Professional squash court with glass walls and premium flooring"
  },
  {
    id: "7",
    title: "Tennis Court Complex",
    type: "Tennis Court",
    client: "Residential Project",
    image: "/projects/DSC_0044.JPG",
    description: "Multiple tennis courts with synthetic surface and fencing"
  },
  {
    id: "8",
    title: "Basketball Court",
    type: "Basketball Court",
    client: "Educational Institution",
    image: "/projects/IMG-20151017-WA0005.jpg",
    description: "Outdoor basketball court with weather-resistant surface"
  }
];

const ProjectGallery = () => {
  const [selectedType, setSelectedType] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const types = ["All", "Tennis Court", "Basketball Court", "Squash Court", "Badminton Court", "Multi-Sport"];

  const filteredProjects = selectedType === "All" 
    ? projects 
    : projects.filter(project => project.type === selectedType);

  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Project Portfolio
          </h2>
          <p className="text-gray-700 text-lg max-w-2xl mx-auto">
            Discover our extensive portfolio of world-class sports infrastructure projects
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setSelectedType(type)}
              className={`px-6 py-2 rounded-full font-medium transition-colors ${
                selectedType === type
                  ? "bg-purple-800 text-white"
                  : "bg-white text-gray-700 hover:bg-purple-100"
              }`}
            >
              {type}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              onClick={() => setSelectedProject(project)}
            >
              <div className="relative h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-3 right-3">
                  <span className="bg-purple-800 text-white text-xs px-2 py-1 rounded-full">
                    {project.type}
                  </span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-900 mb-1">
                  {project.title}
                </h3>
                <p className="text-purple-600 text-sm font-medium mb-2">
                  {project.client}
                </p>
                <p className="text-gray-600 text-sm line-clamp-2">
                  {project.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <button className="bg-purple-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-purple-900 transition-colors">
            Load More Projects
          </button>
        </div>

        {/* Project Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-64 md:h-80">
                <Image
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  fill
                  className="object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white bg-opacity-90 hover:bg-opacity-100 rounded-full w-10 h-10 flex items-center justify-center"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="bg-purple-800 text-white text-sm px-3 py-1 rounded-full">
                    {selectedProject.type}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {selectedProject.title}
                </h3>
                <p className="text-purple-600 font-medium mb-4">
                  Client: {selectedProject.client}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {selectedProject.description}
                </p>
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600">
                    This project showcases our expertise in delivering world-class sports infrastructure 
                    with attention to detail, quality materials, and professional installation standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectGallery;