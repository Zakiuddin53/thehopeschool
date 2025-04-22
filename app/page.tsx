'use client';

import { useRef } from 'react';
import Autoplay from 'embla-carousel-autoplay';
import { Carousel } from '@mantine/carousel';
import {
  Button,
  Card,
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Text,
  Title,
} from '@mantine/core';

import '@mantine/carousel/styles.css';

import Link from 'next/link';

export default function HomePage() {
  const autoplay = useRef(Autoplay({ delay: 2000 }));
  return (
    <>
      {/* Hero Section */}
      <Carousel
        height={500}
        // loop
        withIndicators
        plugins={[autoplay.current]}
        onMouseEnter={autoplay.current.stop}
        onMouseLeave={autoplay.current.reset}
        slideSize="100%"
        slideGap={0}
        align="start"
      >
        {['/images/school.jpg', '/images/about.jpg', '/images/school.jpg'].map((src, index) => (
          <Carousel.Slide key={index}>
            <Image src={src} alt={`Slide ${index + 1}`} fit="cover" height={500} />
          </Carousel.Slide>
        ))}
      </Carousel>

      {/* Welcome Text */}
      <Container size="lg" py="xl" ta="center">
        <Title order={1} size="3rem" fw={800}>
          Welcome to Bright Future School
        </Title>
        <Text size="lg" mt="md" c="dimmed">
          A nurturing environment for children from Play Group to Class 6.
        </Text>
        <Button mt="xl" size="lg" radius="xl">
          Explore Admissions
        </Button>
      </Container>

      {/* About Us */}
      <Container size="lg" py="xl">
        <Grid>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Image src="/images/about.jpg" alt="About" radius="md" height={300} width={500} />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Title order={2}>About Our School</Title>
            <Text mt="md" c="dimmed">
              Bright Future School is committed to providing quality early education to young minds.
              Our programs are designed to promote curiosity, confidence, and creativity.
            </Text>
          </Grid.Col>
        </Grid>
      </Container>

      {/* CTA */}
      <Container size="lg" py="xl" ta="center">
        <Title order={3}>Ready to Join Us?</Title>
        <Text mt="sm" mb="lg" c="dimmed">
          Enroll your child today and be a part of our joyful learning community!
        </Text>
        <Link href="contact-us">
          <Button size="lg" radius="xl" color="blue">
            Contact Us
          </Button>
        </Link>
      </Container>
    </>
  );
}
