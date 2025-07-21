import { defineType } from 'sanity'

export default defineType({
  name: 'contact',
  title: 'Contact Information',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'Contact'
    },
    {
      name: 'companyInfo',
      title: 'Company Information',
      type: 'object',
      fields: [
        {
          name: 'companyName',
          title: 'Company Name',
          type: 'string',
          initialValue: 'Sports Nest Retail India Pvt Ltd.'
        },
        {
          name: 'phone',
          title: 'Phone Number',
          type: 'string',
          initialValue: '+91-9900031301'
        },
        {
          name: 'email',
          title: 'Email Address',
          type: 'string',
          initialValue: 'chandrag@sportsnest.com'
        },
        {
          name: 'address',
          title: 'Office Address',
          type: 'object',
          fields: [
            {
              name: 'street',
              title: 'Street Address',
              type: 'string',
              initialValue: '# 7/D, 4th Cross, Nehru Road'
            },
            {
              name: 'area',
              title: 'Area',
              type: 'string',
              initialValue: 'Girinagar 1st Phase'
            },
            {
              name: 'city',
              title: 'City',
              type: 'string',
              initialValue: 'Bangalore'
            },
            {
              name: 'pincode',
              title: 'Pin Code',
              type: 'string',
              initialValue: '560085'
            },
            {
              name: 'state',
              title: 'State',
              type: 'string',
              initialValue: 'Karnataka'
            },
            {
              name: 'country',
              title: 'Country',
              type: 'string',
              initialValue: 'India'
            }
          ]
        }
      ]
    },
    {
      name: 'businessHours',
      title: 'Business Hours',
      type: 'object',
      fields: [
        {
          name: 'weekdays',
          title: 'Monday - Friday',
          type: 'string',
          initialValue: '9:00 AM - 6:00 PM'
        },
        {
          name: 'saturday',
          title: 'Saturday',
          type: 'string',
          initialValue: '9:00 AM - 2:00 PM'
        }
      ]
    },
    {
      name: 'hero',
      title: 'Contact Page Hero',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Hero Title',
          type: 'string',
          initialValue: 'Let\'s Build Together'
        },
        {
          name: 'subtitle',
          title: 'Hero Subtitle',
          type: 'text',
          initialValue: 'Ready to create world-class sports infrastructure? Get in touch with our team for a free consultation and custom project quote.'
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