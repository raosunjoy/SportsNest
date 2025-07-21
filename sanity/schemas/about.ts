import { defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Us',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Us'
    },
    {
      name: 'founder',
      title: 'Founder Information',
      type: 'object',
      fields: [
        {
          name: 'name',
          title: 'Name',
          type: 'string',
          initialValue: 'Vijay R Bharadwaj'
        },
        {
          name: 'title',
          title: 'Title/Position',
          type: 'string',
          initialValue: 'Former India Test Cricketer, NCA Level 3 Coach, Star Sports Commentator'
        },
        {
          name: 'bio',
          title: 'Biography',
          type: 'text',
          initialValue: 'Vijay R Bharadwaj brings a unique perspective to sports infrastructure, combining his experience as a former international cricketer with technical expertise in facility development.'
        },
        {
          name: 'profileImage',
          title: 'Profile Image',
          type: 'image',
          options: {
            hotspot: true
          }
        }
      ]
    },
    {
      name: 'company',
      title: 'Company Information',
      type: 'object',
      fields: [
        {
          name: 'description',
          title: 'Company Description',
          type: 'text',
          initialValue: 'SportsNest is India\'s premier sports infrastructure company, specializing in world-class sporting facilities for real estate developers, institutions, and academies across India.'
        },
        {
          name: 'mission',
          title: 'Mission Statement',
          type: 'text',
          initialValue: 'To bring world-class sports infrastructure quality to Indian developments, combining deep sporting insight with technical excellence.'
        },
        {
          name: 'values',
          title: 'Core Values',
          type: 'array',
          of: [{type: 'string'}],
          initialValue: [
            'Quality and Excellence',
            'Athletic Insight',
            'Technical Innovation',
            'Customer Partnership'
          ]
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