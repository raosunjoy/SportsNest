// Sanity document types

export interface HomepageData {
  title?: string
  hero: {
    headline: string
    subheadline: string
  }
  stats: {
    projects: string
    experience: string
    developers: string
  }
  about: {
    title: string
    description: string
    bulletPoints: string[]
  }
  founderQuote: {
    quote: string
    name: string
    title: string
  }
}

export interface ContactData {
  title?: string
  companyInfo: {
    companyName: string
    phone: string
    email: string
    address: {
      street: string
      area: string
      city: string
      pincode: string
      state: string
      country: string
    }
  }
  businessHours: {
    weekdays: string
    saturday: string
  }
  hero: {
    title: string
    subtitle: string
  }
}

export interface AboutData {
  title?: string
  founder: {
    name: string
    title: string
    bio: string
    profileImage?: {
      asset: {
        _id: string
        url: string
      }
    }
  }
  company: {
    description: string
    mission: string
    values: string[]
  }
}

export interface ProjectData {
  _id: string
  title: string
  client: string
  location: string
  sportType: string
  description: string
  images: Array<{
    asset: {
      _id: string
      url: string
    }
    alt?: string
    caption?: string
  }>
  featured: boolean
  completionDate: string
  tags: string[]
}