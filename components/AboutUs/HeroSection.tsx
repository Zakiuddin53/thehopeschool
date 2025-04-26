'use client';

import { IconBallBasketball, IconBook2, IconPalette, IconUsersGroup } from '@tabler/icons-react';
import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  rem,
  Stack,
  Text,
  Title,
  Transition,
} from '@mantine/core';

export function HeroSection() {
  const mounted = true;

  return (
    <Transition mounted={mounted} transition="fade" duration={600} timingFunction="ease">
      {(styles) => (
        <Box
          style={{
            position: 'relative',
            background: '#f8ebe2',
            overflow: 'hidden',
            ...styles,
          }}
          py={0}
        >
          {' '}
          <Image
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="School students"
            radius={0}
            style={{
              position: 'absolute',
              zIndex: 0,
              top: 0,
              right: 0,
              width: '55%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.58,
            }}
          />
          <Container size="xl" py={rem(64)} style={{ position: 'relative', zIndex: 1 }}>
            <Grid align="center">
              <Grid.Col span={{ base: 12, md: 7 }}>
                <Text
                  size="xs"
                  tt="uppercase"
                  fw={700}
                  c="dimmed"
                  mb={rem(8)}
                  style={{ letterSpacing: 1.5 }}
                >
                  Welcome to The Hope School
                </Text>
                <Divider size="xs" mb={rem(24)} style={{ maxWidth: 220 }} />
                <Title order={1} size={48} fw={900} mb={rem(24)} lh={1.1}>
                  Empowering Young Minds for a Brighter Tomorrow
                </Title>
                <Text size="lg" c="dimmed" mb={rem(24)}>
                  Discover a nurturing environment where students grow academically, creatively, and
                  socially. Join us in building a vibrant school community.
                </Text>
                <Button
                  size="lg"
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mt={rem(16)}
                >
                  Explore Our Programs
                </Button>
              </Grid.Col>
            </Grid>
          </Container>
        </Box>
      )}
    </Transition>
  );
}
