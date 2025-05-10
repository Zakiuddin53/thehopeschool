'use client';

import { Box, Container, Divider, Paper, rem, Text, Title } from '@mantine/core';

export function IntroductionSection() {
  return (
    <Box py={rem(64)} style={{ background: '#f8ebe2' }}>
      <Container size="sm">
        <Paper
          p={rem(32)}
          radius="xl"
          shadow="md"
          withBorder
          style={{
            background: '#fff',
            minHeight: 320,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
          }}
        >
          <Title order={2} fw={900} mb={rem(8)} lh={1.1}>
            Welcome to The Hope School
          </Title>
          <Divider size="xs" mb={rem(20)} style={{ maxWidth: 120 }} />
          <Text size="lg" c="dimmed" mb={rem(8)}>
            We believe that every child is special. With small class sizes, experienced teachers,
            and activity-based learning, we focus on overall development — mind, body, and
            character.
          </Text>
          <Text size="md" c="dimmed">
            Our students enjoy a balanced mix of academics, Islamic studies, creative arts, sports,
            and life skills, all in a friendly and modern environment.
          </Text>
        </Paper>
      </Container>
    </Box>
  );
}
