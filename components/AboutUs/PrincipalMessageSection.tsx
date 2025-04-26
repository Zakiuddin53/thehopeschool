'use client';

import { Avatar, Container, Group, Paper, Text, Title, Transition } from '@mantine/core';

export function PrincipalMessageSection() {
  const mounted = true;

  return (
    <Transition mounted={mounted} transition="fade" duration={600} timingFunction="ease">
      {(styles) => (
        <Container size="md" py="xl" style={styles}>
          <Paper radius="md" shadow="lg" p="xl" withBorder>
            <Group align="flex-start" gap="lg">
              <Avatar
                src="https://res.cloudinary.com/demo/image/upload/v1710000000/principal.jpg"
                size={100}
                radius="xl"
                alt="Principal"
              />
              <div>
                <Title order={3} mb="xs">
                  Principal’s Message
                </Title>
                <Text c="dimmed" mb="sm">
                  Dear Students and Parents,
                </Text>
                <Text>
                  At The Hope School, we believe every child is unique and deserves the best
                  opportunities to grow. Our dedicated team strives to create a safe, inclusive, and
                  stimulating environment for all.
                </Text>
                <Text mt="md" fw={700}>
                  – Dr. A. Sharma, Principal
                </Text>
              </div>
            </Group>
          </Paper>
        </Container>
      )}
    </Transition>
  );
}
