import type { ImageMetadata } from 'astro';

export interface Logo {
    src: ImageMetadata;
    alt: string;
}

export const logos: Logo[] = [
    // Add your logos here
    // Example:
    // {
    //     src: import('../assets/images/logos/logo1.svg'),
    //     alt: 'Logo 1'
    // }
];
