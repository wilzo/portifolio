// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import vercel from '@astrojs/vercel'; // ✅ Importação atualizada
import tailwindcss from '@tailwindcss/vite';
import { remarkReadingTime } from './src/lib/remark.mjs';

export default defineConfig({
  site: 'https://cv.coderdiaz.com',
  adapter: vercel(), // ✅ Adaptador correto para deploy na Vercel

  markdown: {
    remarkPlugins: [remarkReadingTime],
    shikiConfig: {
      theme: 'gruvbox-dark-medium',
    },
  },

  vite: {
    // @ts-ignore
    plugins: [tailwindcss()],
  },

  integrations: [
    react(),
    sitemap(),
    mdx({
      optimize: true,
      syntaxHighlight: 'shiki',
    }),
  ],

  experimental: {
    fonts: [
      {
        name: 'Inter',
        cssVariable: '--font-inter',
        provider: 'local',
        variants: [
          {
            src: ['./src/assets/fonts/Inter-Regular.woff2'],
            style: 'normal',
            weight: 400,
          },
          {
            src: ['./src/assets/fonts/Inter-Medium.woff2'],
            style: 'normal',
            weight: 500,
          },
          {
            src: ['./src/assets/fonts/Inter-SemiBold.woff2'],
            style: 'normal',
            weight: 600,
          },
          {
            src: ['./src/assets/fonts/Inter-Bold.woff2'],
            style: 'normal',
            weight: 700,
          },
          {
            src: ['./src/assets/fonts/Inter-ExtraBold.woff2'],
            style: 'normal',
            weight: 800,
          },
        ],
      },
      {
        name: 'InterVariable',
        cssVariable: '--font-inter-variable',
        provider: 'local',
        variants: [
          {
            src: ['./src/assets/fonts/InterVariable.woff2'],
            style: 'normal',
            weight: 'variable',
          },
        ],
      },
    ],
  },
});
