import { defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Homepage'
    },
    {
      name: 'hero',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'headline',
          title: 'Headline',
          type: 'string',
          initialValue: 'Crafting World-Class Sports Infrastructure for Champions'
        },
        {
          name: 'subheadline',
          title: 'Subheadline',
          type: 'text',
          initialValue: 'From elite residential townships to national academies, we build the courts, pitches, gyms, and arenas where tomorrow\'s champions are made.'
        }
      ]
    },
    {
      name: 'stats',
      title: 'Statistics',
      type: 'object',
      fields: [
        {
          name: 'projects',
          title: 'Projects Completed',
          type: 'string',
          initialValue: '100+'
        },
        {
          name: 'experience',
          title: 'Years Experience',
          type: 'string',
          initialValue: '15+'
        },
        {
          name: 'developers',
          title: 'Elite Developers',
          type: 'string',
          initialValue: '50+'
        }
      ]
    },
    {
      name: 'about',
      title: 'About Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Built by Athletes, for Athletes'
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'SportsNest is India\'s premier sports infrastructure company, founded by Vijay R Bharadwaj, former India Test cricketer, NCA Level 3 coach, and Star Sports commentator.'
        },
        {
          name: 'bulletPoints',
          title: 'Key Points',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'Deep sporting insight from former international athletes',
            'End-to-end infra: surfaces, lighting, fencing, civil works',
            'Trusted by India\'s top builders — Brigade, Puravankara, Bagmane & more',
            'Decades of executional excellence and global brand partnerships'
          ]
        }
      ]
    },
    {
      name: 'founderQuote',
      title: 'Founder Quote',
      type: 'object',
      fields: [
        {
          name: 'quote',
          title: 'Quote',
          type: 'text',
          initialValue: 'As a former international cricketer, I\'ve played on some of the world\'s best facilities. I started SportsNest to bring that same world-class quality to Indian infrastructure.'
        },
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          initialValue: 'Vijay R Bharadwaj'
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Founder & Former India Cricketer'
        }
      ]
    }
  ],
  preview: {
    select: {
      title: 'title'
    }
  }
})