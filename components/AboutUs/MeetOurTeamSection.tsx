'use client';

import {
  Avatar,
  Box,
  Container,
  Divider,
  Group,
  Stack,
  Text,
  Title,
  Transition,
} from '@mantine/core';

export function MeetOurTeamSection() {
  const team = [
    {
      name: 'R. Singh',
      role: 'Principal',
      img: 'https://res.cloudinary.com/demo/image/upload/v1710000000/team1.jpg',
    },
    {
      name: 'S. Gupta',
      role: 'Vice Principal',
      img: 'https://res.cloudinary.com/demo/image/upload/v1710000000/team2.jpg',
    },
    {
      name: 'A. Verma',
      role: 'Head Teacher',
      img: 'https://res.cloudinary.com/demo/image/upload/v1710000000/team3.jpg',
    },
    {
      name: 'P. Sharma',
      role: 'Sports Coordinator',
      img: 'https://res.cloudinary.com/demo/image/upload/v1710000000/team4.jpg',
    },
    {
      name: 'M. Patel',
      role: 'Arts & Culture',
      img: 'https://res.cloudinary.com/demo/image/upload/v1710000000/team5.jpg',
    },
    {
      name: 'K. Rao',
      role: 'Community Manager',
      img: 'https://res.cloudinary.com/demo/image/upload/v1710000000/team6.jpg',
    },
  ];

  const mounted = true;

  return (
    <Transition mounted={mounted} transition="fade" duration={600} timingFunction="ease">
      {(styles) => (
        <Container size="lg" py="xl" style={styles}>
          <Title order={2} ta="center" mb="xs" fw={900}>
            Leadership Team
          </Title>
          <Text ta="center" size="md" c="dimmed" mb="xl">
            Meet our dedicated team of educators and leaders, committed to nurturing every student’s
            growth and success.
          </Text>
          <Group justify="center" gap="xl" wrap="wrap">
            {team.map((member, idx) => (
              <Stack
                key={member.name}
                align="center"
                gap={0}
                style={{ minWidth: 180, maxWidth: 220 }}
              >
                <Avatar
                  src={member.img}
                  size={100}
                  radius={100}
                  style={{
                    filter: 'grayscale(30%)',
                    boxShadow: '0 4px 24px rgba(0,0,0,0.08)',
                  }}
                />
                <Box w="100%" mt="md" mb={4}>
                  <Divider
                    size="xs"
                    color="gray.3"
                    style={{
                      marginBottom: 8,
                      marginTop: 8,
                    }}
                  />
                  <Text ta="center" fw={700} size="lg" style={{ lineHeight: 1.1 }}>
                    {member.name}
                  </Text>
                </Box>
                <Text ta="center" size="sm" c="dimmed">
                  {member.role}
                </Text>
              </Stack>
            ))}
          </Group>
        </Container>
      )}
    </Transition>
  );
}
