import type { ImageMetadata } from 'astro';

/**
 * Resolves Ella's portrait, if one has been supplied.
 *
 * Drop the original file in at `src/assets/portrait.jpg` (or .jpeg/.png/.webp
 * /.avif) and it is picked up automatically. Astro's asset pipeline then emits
 * optimised WebP/AVIF derivatives at build time while the original file stays
 * untouched on disk, exactly as the brief requires.
 *
 * A glob that matches nothing returns an empty object rather than failing the
 * build, so the page renders a monogram placeholder until the photo arrives.
 */
const matches = import.meta.glob<{ default: ImageMetadata }>(
  '../assets/portrait.{jpg,jpeg,png,webp,avif}',
  { eager: true }
);

export const portrait: ImageMetadata | undefined = Object.values(matches)[0]?.default;
