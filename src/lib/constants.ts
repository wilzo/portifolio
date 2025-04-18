import type { GetImageResult } from 'astro';
import type { z } from 'astro/zod';
import { getImage } from 'astro:assets';
import MetaDefaultImage from '@/assets/images/meta-default.jpg';
import Avatar from '@/assets/images/avatar.jpeg';
import type { seoSchemaWithoutImage } from '@/content.config';
import astroConfig from 'astro.config.mjs';

const avatar = await getImage({ src: Avatar, width: 92, height: 92 , format: 'png'});

export type AuthorInfo = {
  name: string;
  avatar: GetImageResult;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

export type Seo = z.infer<typeof seoSchemaWithoutImage> & {
  image?: any;
}

type DefaultConfigurationType = {
  baseUrl: string,
  author: AuthorInfo;
  seo: Seo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  baseUrl: astroConfig.site || 'https://getcvfolio.com',
  author: {
    avatar,
    name: 'Javier Diaz Chamorro',
    headline: 'Engineering and Design',
    username: 'coderdiaz',
    location: 'Mexico City',
    pronouns: 'He/Him',
  },
  seo: {
    title: 'CV Folio — An Astro template inspired on Read.cv',
    description: 'Clean and aesthetic portfolio website for developers and designers',
    type: 'website',
    image: MetaDefaultImage,
    twitter: {
      creator: '@cvfolio'
    }
  }
};