import { client } from './sanity.client'
import { homepageQuery, contactQuery, aboutQuery, projectsQuery } from './sanity.queries'

// Homepage data
export async function getHomepage() {
  try {
    return await client.fetch(homepageQuery)
  } catch (error) {
    console.warn('Failed to fetch homepage data from Sanity, using fallback:', error)
    return null
  }
}

// Contact data
export async function getContact() {
  try {
    return await client.fetch(contactQuery)
  } catch (error) {
    console.warn('Failed to fetch contact data from Sanity, using fallback:', error)
    return null
  }
}

// About data
export async function getAbout() {
  try {
    return await client.fetch(aboutQuery)
  } catch (error) {
    console.warn('Failed to fetch about data from Sanity, using fallback:', error)
    return null
  }
}

// Projects data
export async function getProjects() {
  try {
    return await client.fetch(projectsQuery)
  } catch (error) {
    console.warn('Failed to fetch projects data from Sanity, using fallback:', error)
    return null
  }
}

// Default fallback data
export const defaultHomepageData = {
  hero: {
    headline: "Crafting World-Class Sports Infrastructure for Champions",
    subheadline: "From elite residential townships to national academies, we build the courts, pitches, gyms, and arenas where tomorrow's champions are made."
  },
  stats: {
    projects: "100+",
    experience: "15+",
    developers: "50+"
  },
  about: {
    title: "Built by Athletes, for Athletes",
    description: "SportsNest is India's premier sports infrastructure company, founded by Vijay R Bharadwaj, former India Test cricketer, NCA Level 3 coach, and Star Sports commentator.",
    bulletPoints: [
      "Deep sporting insight from former international athletes",
      "End-to-end infra: surfaces, lighting, fencing, civil works",
      "Trusted by India's top builders — Brigade, Puravankara, Bagmane & more",
      "Decades of executional excellence and global brand partnerships"
    ]
  },
  founderQuote: {
    quote: "As a former international cricketer, I've played on some of the world's best facilities. I started SportsNest to bring that same world-class quality to Indian infrastructure.",
    name: "Vijay R Bharadwaj",
    title: "Founder & Former India Cricketer"
  }
}

export const defaultContactData = {
  companyInfo: {
    companyName: "Sports Nest Retail India Pvt Ltd.",
    phone: "+91-9900031301",
    email: "chandrag@sportsnest.com",
    address: {
      street: "# 7/D, 4th Cross, Nehru Road",
      area: "Girinagar 1st Phase",
      city: "Bangalore",
      pincode: "560085",
      state: "Karnataka",
      country: "India"
    }
  },
  businessHours: {
    weekdays: "9:00 AM - 6:00 PM",
    saturday: "9:00 AM - 2:00 PM"
  },
  hero: {
    title: "Let's Build Together",
    subtitle: "Ready to create world-class sports infrastructure? Get in touch with our team for a free consultation and custom project quote."
  }
}