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
          <Box
            style={{
              position: 'absolute',
              zIndex: 1,
              top: 0,
              right: 0,
              width: '45%',
              height: '100%',
              background:
                'linear-gradient(90deg, rgba(248,235,226,0.9) 0%, rgba(248,235,226,0.3) 60%, rgba(248,235,226,0) 100%)',
              pointerEvents: 'none',
            }}
          />
          <Image
            src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="School students"
            radius={0}
            style={{
              position: 'absolute',
              zIndex: 0,
              top: 0,
              right: 0,
              width: '45%',
              height: '100%',
              objectFit: 'cover',
              opacity: 0.65,
            }}
          />
          <Container size="xl" py={rem(64)} style={{ position: 'relative', zIndex: 2 }}>
            <Grid align="center" style={{ minHeight: '420px' }}>
              <Grid.Col
                span={{ base: 12, md: 7 }}
                style={{
                  maxWidth: 600,
                  marginLeft: 0,
                  paddingRight: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  height: '100%',
                }}
              >
                <Text size="xs" tt="uppercase" fw={700} mb={rem(8)} style={{ letterSpacing: 1.5 }}>
                  Welcome to The Hope International School
                </Text>
                <Divider size="xs" mb={rem(24)} style={{ maxWidth: 220 }} />
                <Title order={1} size={48} fw={900} mb={rem(20)} lh={1.1}>
                  Modern Education with Traditional Values
                </Title>
                <Text size="lg" mb={rem(28)} style={{ maxWidth: 520, lineHeight: 1.7 }}>
                  Located in Mehrauli, New Delhi, we offer a safe, caring, and joyful learning space
                  for children. Our English and Arabic medium curriculum provides a strong academic
                  foundation while nurturing moral and spiritual growth. With small class sizes,
                  experienced teachers, and activity-based learning, we focus on developing smart,
                  kind, and confident children ready to succeed in life.
                </Text>
                <Button
                  size="lg"
                  radius="xl"
                  variant="gradient"
                  gradient={{ from: 'blue', to: 'cyan' }}
                  mt={rem(8)}
                  style={{ alignSelf: 'flex-start' }}
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
