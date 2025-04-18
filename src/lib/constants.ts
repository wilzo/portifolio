import Avatar from '@/assets/images/avatar.jpeg';
import type { GetImageResult } from 'astro';
import { getImage } from 'astro:assets';

const avatar = await getImage({ src: Avatar, width: 92, height: 92 , format: 'png'});

export type AuthorInfo = {
  name: string;
  avatar: GetImageResult;
  headline: string;
  username?: string;
  location?: string;
  pronouns?: string;
}

type DefaultConfigurationType = {
  author: AuthorInfo;
}

export const DEFAULT_CONFIGURATION: DefaultConfigurationType = {
  author: {
    avatar,
    name: 'Javier Diaz Chamorro',
    headline: 'Engineering and Design',
    username: 'coderdiaz',
    location: 'Mexico City',
    pronouns: 'He/Him',
  },
};