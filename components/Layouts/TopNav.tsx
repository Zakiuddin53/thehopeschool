import Link from 'next/link';
import { IconClock, IconMail, IconPhone } from '@tabler/icons-react';
import { Container, Group, Text } from '@mantine/core';

export function TopNav() {
  return (
    <div style={{ backgroundColor: '#f8f9fa', padding: '8px 0' }}>
      <Container size="md">
        <Group justify="center">
          <Group gap={30}>
            <Group gap={8}>
              <IconPhone size={18} />
              <Text size="md">+91 XXXX-XXXX</Text>
            </Group>
            <Group gap={8}>
              <IconMail size={18} />
              <Link
                href="mailto:info@thehopeinternationalschool.com"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <Text size="md">info@thehopeinternationalschool.com</Text>
              </Link>
            </Group>
            <Group gap={8}>
              <IconClock size={18} />
              <Text size="md">Timings Mon To Sat: 8:00 AM To 4:00 PM</Text>
            </Group>
          </Group>
        </Group>
      </Container>
    </div>
  );
}
