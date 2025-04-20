'use client';

import { ActionIcon, Group } from '@mantine/core';
import { IconBrandFacebook, IconBrandInstagram, IconBrandLinkedin } from '@tabler/icons-react';

export function SocialIcons() {
  return (
    <Group mt="xl">
      <ActionIcon
        size="lg"
        variant="subtle"
        component="a"
        href="https://facebook.com"
        target="_blank"
      >
        <IconBrandFacebook style={{ width: 18, height: 18 }} />
      </ActionIcon>
      <ActionIcon
        size="lg"
        variant="subtle"
        component="a"
        href="https://instagram.com"
        target="_blank"
      >
        <IconBrandInstagram style={{ width: 18, height: 18 }} />
      </ActionIcon>
      <ActionIcon
        size="lg"
        variant="subtle"
        component="a"
        href="https://linkedin.com"
        target="_blank"
      >
        <IconBrandLinkedin style={{ width: 18, height: 18 }} />
      </ActionIcon>
    </Group>
  );
}