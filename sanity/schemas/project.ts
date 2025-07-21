import { defineType } from 'sanity'

export default defineType({
  name: 'project',
  title: 'Projects',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Project Title',
      type: 'string'
    },
    {
      name: 'client',
      title: 'Client Name',
      type: 'string'
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string'
    },
    {
      name: 'sportType',
      title: 'Sport Type',
      type: 'string',
      options: {
        list: [
          {title: 'Tennis', value: 'tennis'},
          {title: 'Basketball', value: 'basketball'},
          {title: 'Badminton', value: 'badminton'},
          {title: 'Cricket', value: 'cricket'},
          {title: 'Multi-Sport', value: 'multi-sport'},
          {title: 'Swimming', value: 'swimming'},
          {title: 'Running Track', value: 'running-track'},
          {title: 'Gym', value: 'gym'},
          {title: 'Other', value: 'other'}
        ]
      }
    },
    {
      name: 'description',
      title: 'Project Description',
      type: 'text'
    },
    {
      name: 'images',
      title: 'Project Images',
      type: 'array',
      of: [{
        type: 'image',
        options: {
          hotspot: true
        },
        fields: [
          {
            name: 'alt',
            title: 'Alternative Text',
            type: 'string'
          },
          {
            name: 'caption',
            title: 'Caption',
            type: 'string'
          }
        ]
      }]
    },
    {
      name: 'featured',
      title: 'Featured Project',
      type: 'boolean',
      description: 'Should this project be featured on the homepage?',
      initialValue: false
    },
    {
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date'
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        layout: 'tags'
      }
    }
  ],
  preview: {
    select: {
      title: 'title',
      client: 'client',
      media: 'images.0'
    },
    prepare(selection) {
      const {title, client} = selection
      return {
        title: title,
        subtitle: client
      }
    }
  }
})