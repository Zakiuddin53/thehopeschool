'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Box, Burger, Container, Divider, Drawer, Group, ScrollArea } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { TopNav } from './TopNav';
import classes from './HeaderMenu.module.css';

const links = [
  { link: '/', label: 'Home' },
  { link: '/about-us', label: 'About Us' },
  { link: '/school', label: 'School' },
  { link: '/gallery', label: 'Gallery' },
  { link: '/contact-us', label: 'Contact Us' },
];

export function Navbar() {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={classes.link} onClick={() => closeDrawer()}>
      {link.label}
    </Link>
  ));

  return (
    <Box>
      <TopNav />
      <header className={classes.header}>
        <Container size="md">
          <div className={classes.inner}>
            <div className={classes.logoContainer}>
              <Image
                src="/logos/school-logo-1.svg"
                alt="Lotus Valley School Logo"
                width={120}
                height={120}
                className={classes.logoImage}
                priority
              />
            </div>
            <Group gap={20} visibleFrom="sm">
              {items}
            </Group>
            <Burger opened={drawerOpened} onClick={toggleDrawer} size="md" hiddenFrom="sm" />
          </div>
        </Container>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title="Navigation"
        hiddenFrom="sm"
        zIndex={1000000}
      >
        <ScrollArea h="calc(100vh - 80px)" mx="-md">
          <Divider my="sm" />
          <div className={classes.mobileLinks}>{items}</div>
        </ScrollArea>
      </Drawer>
    </Box>
  );
}
