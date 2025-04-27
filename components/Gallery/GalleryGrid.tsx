'use client';

import { useState } from 'react';
import { Image, Paper, SimpleGrid, Transition } from '@mantine/core';

interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
}
export function GalleryGrid({ images }: GalleryGridProps) {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
      {images.map((img, idx) => (
        <Transition key={img.src} mounted transition="pop" duration={400} timingFunction="ease">
          {(styles) => (
            <Paper
              style={{
                ...styles,
                overflow: 'hidden',
                borderRadius: 18,
                boxShadow:
                  hovered === idx
                    ? '0 8px 32px rgba(34,139,230,0.15)'
                    : '0 2px 8px rgba(0,0,0,0.06)',
                transform: hovered === idx ? 'scale(1.04) rotate(-1deg)' : 'scale(1)',
                transition: 'all 0.3s cubic-bezier(.4,2,.6,1)',
                cursor: 'pointer',
                position: 'relative',
              }}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              shadow="md"
              withBorder
            >
              <Image
                src={img.src}
                alt={img.alt}
                height={240}
                fit="cover"
                style={{
                  filter: hovered === idx ? 'brightness(0.95) blur(0.5px)' : 'brightness(1)',
                  transition: 'filter 0.3s',
                }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '100%',
                  background: hovered === idx ? 'rgba(34,139,230,0.85)' : 'rgba(0,0,0,0.45)',
                  color: '#fff',
                  padding: '12px 16px',
                  fontWeight: 600,
                  fontSize: 18,
                  letterSpacing: 0.5,
                  transition: 'background 0.3s',
                }}
              >
                {img.alt}
              </div>
            </Paper>
          )}
        </Transition>
      ))}
    </SimpleGrid>
  );
}
