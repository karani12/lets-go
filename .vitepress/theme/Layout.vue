<script setup lang="ts">
import { useData } from 'vitepress'
import Home from './Home.vue'
import Article from './Article.vue'
import NotFound from './NotFound.vue'

const { page, frontmatter } = useData()
</script>

<template>
  
  <div class="antialiased dark:bg-slate-950 min-h-screen">
    <div class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <nav class="flex justify-between items-center py-10 font-bold">
        <a class="text-xl" href="/" aria-label="Karani's blog">
          <!-- <img
            class="h-32 w-auto"
            src="/logo.svg"
            alt="Karani's blog"
          /> -->
          <!-- logo -->
          <span
            v-if="!frontmatter.index"
            class="hidden md:inline dark:text-white"
            >Karani's blog</span
          >
        </a>
        <div class="text-sm text-gray-500 dark:text-white leading-5">
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://www.linkedin.com/in/makena-kinyua/"
            target="_blank"
            rel="noopener"
            >Linkedin</a
          >
          <span class="mr-2 ml-2">·</span>
<!--          
          <a
            class="hover:text-gray-700 dark:hover:text-gray-200"
            href="https://linkedin.com/in/karani12"
            target="_blank"
            rel="noopener"
            >LinkedIn →</a -->
          <!-- > -->
        </div>
      </nav>
    </div>
    <main class="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0">
      <Home v-if="frontmatter.index" />
      <NotFound v-else-if="page.isNotFound" />
      <Article v-else />
    </main>
  </div>
</template>
