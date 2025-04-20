import Link from 'next/link';
import { IconClock, IconMail, IconPhone } from '@tabler/icons-react';
import { Container, Group, Stack, Text } from '@mantine/core';
import classes from './TopNav.module.css';

export function TopNav() {
  return (
    <div className={classes.wrapper}>
      <Container size="md">
        <Group justify="center" className={classes.topNav}>
          <Stack gap={8} hiddenFrom="sm" className={classes.mobileStack}>
            <Group gap={8}>
              <IconPhone size={18} />
              <Text size="sm">+91 XXXX-XXXX</Text>
            </Group>
            <Group gap={8}>
              <IconMail size={18} />
              <Link
                href="mailto:info@thehopeinternationalschool.com"
                className={classes.link}
              >
                <Text size="sm">info@thehopeinternationalschool.com</Text>
              </Link>
            </Group>
            <Group gap={8}>
              <IconClock size={18} />
              <Text size="sm">Mon To Sat: 8:00 AM To 4:00 PM</Text>
            </Group>
          </Stack>

          <Group gap={30} visibleFrom="sm">
            <Group gap={8}>
              <IconPhone size={18} />
              <Text size="sm">+91 XXXX-XXXX</Text>
            </Group>
            <Group gap={8}>
              <IconMail size={18} />
              <Link
                href="mailto:info@thehopeinternationalschool.com"
                className={classes.link}
              >
                <Text size="sm">info@thehopeinternationalschool.com</Text>
              </Link>
            </Group>
            <Group gap={8}>
              <IconClock size={18} />
              <Text size="sm">Mon To Sat: 8:00 AM To 4:00 PM</Text>
            </Group>
          </Group>
        </Group>
      </Container>
    </div>
  );
}
