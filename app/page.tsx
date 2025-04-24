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

      {/* Programs Section */}
      <Container size="lg" py="xl">
        <Title order={2} ta="center" mb="xl">
          Our Programs
        </Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg">
          {/* Playgroup */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src="/images/playschool.png" height={160} alt="Playgroup" />
            </Card.Section>
            <Title order={4} mt="md">
              Playgroup
            </Title>
            <Text size="sm" c="dimmed" mt="xs">
              Age: 2 - 3 years
            </Text>
            <Text mt="sm">
              Our playgroup program focuses on social, emotional, and physical development through
              fun and engaging activities.
            </Text>
          </Card>

          {/* Nursery */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src="/images/nursery.jpg" height={160} alt="Nursery" />
            </Card.Section>
            <Title order={4} mt="md">
              Nursery
            </Title>
            <Text size="sm" c="dimmed" mt="xs">
              Age: 3 - 4 years
            </Text>
            <Text mt="sm">
              Nursery children develop pre-academic skills in a nurturing environment with a focus
              on exploration and creativity.
            </Text>
          </Card>

          {/* Kindergarten */}
          <Card shadow="sm" padding="lg" radius="md" withBorder>
            <Card.Section>
              <Image src="/images/kindergarten.webp" height={160} alt="Kindergarten" />
            </Card.Section>
            <Title order={4} mt="md">
              Kindergarten
            </Title>
            <Text size="sm" c="dimmed" mt="xs">
              Age: 4 - 5 years
            </Text>
            <Text mt="sm">
              Our kindergarten program lays a strong foundation for academic success through
              structured learning and fun.
            </Text>
          </Card>
        </SimpleGrid>
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

      {/* Map Section */}
      <Container size="lg" py="xl" ta="center">
        <Title order={3} mb="md">
          Find Us on the Map
        </Title>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56416.8677699227!2d78.03824337267469!3d27.90030892426527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a49d192c67cf%3A0xbbd4d88f8dc8fb56!2sHeritage%20International%20School!5e0!3m2!1sen!2sin!4v1745527351279!5m2!1sen!2sin"
          width="100%"
          height="250"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </Container>
    </>
  );
}
