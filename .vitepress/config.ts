import { defineConfig } from 'vitepress'
import { genFeed } from './genFeed.js'

export default defineConfig({
  title: "Karani's Blog",
  description: 'Welcome to my blog!',
  cleanUrls: true,
  
  head: [
    ['meta', { name: 'twitter:site', content: 'karani' }],
    ['meta', { name: 'twitter:card', content: 'summary' }],
    [
      'meta',
      {
        name: 'twitter:image',
        content: ''
      }
    ],
    [
      'link',
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
  
  ],
  buildEnd: genFeed
})
