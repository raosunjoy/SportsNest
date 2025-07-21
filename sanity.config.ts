import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './sanity/schemas'

export default defineConfig({
  name: 'default',
  title: 'SportsNest CMS',
  
  projectId: 'your-project-id', // You'll need to replace this
  dataset: 'production',
  
  plugins: [deskTool(), visionTool()],
  
  schema: {
    types: schemaTypes,
  },
  
  studio: {
    studioHost: 'sportsnest'
  }
})