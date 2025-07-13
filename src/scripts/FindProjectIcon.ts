import type { ImageMetadata } from 'astro';

export default function FindProjectIcon(title: string, fallback: ImageMetadata) {
    const icons = import.meta.glob<{default: ImageMetadata}>("@/images/projects/*.{jpeg,jpg,png}");
    const icon_location = `/src/images/projects/${title.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, '-')}.png`;

    return icons[icon_location]
        ? icons[icon_location]()
        : fallback;
}