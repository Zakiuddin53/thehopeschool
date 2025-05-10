'use client';

import { IconEye, IconTargetArrow } from '@tabler/icons-react';
import {
  Box,
  Container,
  Group,
  List,
  Paper,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
  Transition,
} from '@mantine/core';

export function MissionVisionSection() {
  const mounted = true;

  return (
    <Transition mounted={mounted} transition="fade" duration={600} timingFunction="ease">
      {(styles) => (
        <Box py={rem(64)}>
          <Container size="md">
            <Title order={2} ta="center" fw={900} mb={rem(32)}>
              <span style={{ fontStyle: 'italic' }}>Mission & Vision</span>
            </Title>
            <Stack align="center" gap={0} style={{ position: 'relative' }}>
              <Box
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: rem(48),
                  bottom: rem(48),
                  width: rem(4),
                  background: 'linear-gradient(180deg, #228be6 0%, #15aabf 100%)',
                  transform: 'translateX(-50%)',
                  zIndex: 0,
                  borderRadius: rem(2),
                  opacity: 0.15,
                }}
              />
              <Paper
                shadow="md"
                radius="xl"
                p={rem(32)}
                withBorder
                style={{
                  background: '#f8faff',
                  minWidth: 320,
                  maxWidth: 480,
                  marginBottom: rem(40),
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Group justify="center" mb={rem(12)}>
                  <ThemeIcon size={48} radius="xl" color="blue" variant="light">
                    <IconTargetArrow size={32} />
                  </ThemeIcon>
                </Group>
                <Title order={3} ta="center" mb={rem(8)} c="blue" fw={800}>
                  Mission
                </Title>
                <List
                  spacing="xs"
                  size="md"
                  center
                  icon={<span style={{ color: '#228be6' }}>•</span>}
                >
                  <List.Item>
                    To inspire and support every child to achieve their best — academically,
                    socially, and spiritually.
                  </List.Item>
                  <List.Item>
                    To help students grow into responsible and sincere citizens, guided by strong
                    values and a love for learning.
                  </List.Item>
                </List>
              </Paper>
              <Paper
                shadow="md"
                radius="xl"
                p={rem(32)}
                withBorder
                style={{
                  background: '#f8faff',
                  minWidth: 320,
                  maxWidth: 480,
                  marginTop: rem(40),
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <Group justify="center" mb={rem(12)}>
                  <ThemeIcon size={48} radius="xl" color="cyan" variant="light">
                    <IconEye size={32} />
                  </ThemeIcon>
                </Group>
                <Title order={3} ta="center" mb={rem(8)} c="cyan" fw={800}>
                  Vision
                </Title>
                <List
                  spacing="xs"
                  size="md"
                  center
                  icon={<span style={{ color: '#15aabf' }}>•</span>}
                >
                  <List.Item>
                    To create a safe, happy, and healthy place where children feel loved and
                    respected.
                  </List.Item>
                  <List.Item>
                    To provide holistic education that develops strong communication, creative
                    thinking, and problem-solving skills.
                  </List.Item>
                  <List.Item>
                    To raise successful learners who are kind, confident, and prepared for a bright
                    future.
                  </List.Item>
                </List>
              </Paper>
            </Stack>
          </Container>
        </Box>
      )}
    </Transition>
  );
}
