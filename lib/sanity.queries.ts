import { groq } from 'next-sanity'

export const homepageQuery = groq`
  *[_type == "homepage"][0]{
    title,
    hero,
    stats,
    about,
    founderQuote
  }
`

export const contactQuery = groq`
  *[_type == "contact"][0]{
    title,
    companyInfo,
    businessHours,
    hero
  }
`

export const aboutQuery = groq`
  *[_type == "about"][0]{
    title,
    founder{
      name,
      title,
      bio,
      profileImage{
        asset->{
          _id,
          url
        }
      }
    },
    company
  }
`

export const projectsQuery = groq`
  *[_type == "project"] | order(completionDate desc){
    _id,
    title,
    client,
    location,
    sportType,
    description,
    images[]{
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    featured,
    completionDate,
    tags
  }
`

export const featuredProjectsQuery = groq`
  *[_type == "project" && featured == true] | order(completionDate desc){
    _id,
    title,
    client,
    location,
    sportType,
    description,
    images[0]{
      asset->{
        _id,
        url
      },
      alt,
      caption
    },
    completionDate
  }
`