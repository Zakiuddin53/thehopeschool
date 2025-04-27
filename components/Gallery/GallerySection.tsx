'use client';

import { useState } from 'react';
import { Box, Container, Title } from '@mantine/core';
import { GalleryCategoryTabs } from './GalleryCategoryTabs';
import { GalleryGrid } from './GalleryGrid';

const images = [
  { src: '/images/event1.jpg', alt: 'Annual Day', category: 'Events' },
  { src: '/images/event2.jpg', alt: 'Sports Day', category: 'Sports' },
  { src: '/images/event3.jpg', alt: 'Science Fair', category: 'Academics' },
  { src: '/images/event4.jpg', alt: 'Art Exhibition', category: 'Arts' },
  { src: '/images/event5.jpg', alt: 'Independence Day', category: 'Events' },
  { src: '/images/event6.jpg', alt: 'Football Match', category: 'Sports' },
  { src: '/images/event7.jpg', alt: 'Math Olympiad', category: 'Academics' },
  { src: '/images/event8.jpg', alt: 'Music Fest', category: 'Arts' },
];

const categories = ['All', ...Array.from(new Set(images.map((img) => img.category)))];

export function GallerySection() {
  const [selected, setSelected] = useState('All');
  const filtered = selected === 'All' ? images : images.filter((img) => img.category === selected);

  return (
    <Box py="xl" style={{ background: '#f8ebe2', minHeight: '80vh' }}>
      <Container size="lg">
        <Title order={2} ta="center" fw={900} mb="xl">
          School Gallery
        </Title>
        <GalleryCategoryTabs categories={categories} selected={selected} onSelect={setSelected} />
        <GalleryGrid images={filtered} />
      </Container>
    </Box>
  );
}
