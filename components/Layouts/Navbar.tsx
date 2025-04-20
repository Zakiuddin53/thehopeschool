'use client';

import Image from 'next/image'; // Added import for Next.js Image component
import { Burger, Container, Group } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './HeaderMenu.module.css'; // Consider renaming this CSS module file as well if desired
import Link from 'next/link';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about-us', label: 'About Us' },
  { link: '/school', label: 'School' },
  { link: '/gallery', label: 'Gallery' },
  { link: '/contact-us', label: 'Contact Us' },
];

export function Navbar() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link
      key={link.label}
      href={link.link}
      className={classes.link}
    >
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <Container size="md">
        <div className={classes.inner}>
          <Image src="/logos/school-logo.png" alt="The Hope School Logo" width={100} height={100} />
          <Group gap={5} visibleFrom="sm">
            {items}
          </Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
        </div>
      </Container>
    </header>
  );
}
