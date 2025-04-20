import Image from 'next/image';
import { IconBrandInstagram, IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';
import { ActionIcon, Container, Group, Text } from '@mantine/core';
import classes from './FooterLinks.module.css';

const data = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', link: '/' },
      { label: 'About Us', link: '/about-us' },
      { label: 'School', link: '/school' },
      { label: 'Gallery', link: '/gallery' },
      { label: 'Contact Us', link: '/contact-us' },
    ],
  },
  {
    title: 'Information',
    links: [
      { label: 'Admission Process', link: '#' },
      { label: 'Academic Calendar', link: '#' },
      { label: 'School Timings', link: '#' },
      { label: 'Fee Structure', link: '#' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { label: 'Phone: +91 XXX XXX XXXX', link: 'tel:+91XXXXXXXXXX' },
      { label: 'Email: info@thehopeschool.com', link: 'mailto:info@thehopeschool.com' },
      { label: 'Address: Your School Address', link: '#' },
    ],
  },
];

export function Footer() {
  const groups = data.map((group) => {
    const links = group.links.map((link, index) => (
      <Text<'a'> key={index} className={classes.link} component="a" href={link.link}>
        {link.label}
      </Text>
    ));

    return (
      <div className={classes.wrapper} key={group.title}>
        <Text className={classes.title}>{group.title}</Text>
        {links}
      </div>
    );
  });

  return (
    <footer className={classes.footer}>
      <Container className={classes.inner}>
        <div className={classes.logo}>
          <Image src="/logos/school-logo.png" alt="The Hope School Logo" width={150} height={150} />
          <Text size="xs" c="dimmed" className={classes.description}>
            Nurturing Minds, Building Futures
          </Text>
        </div>
        <div className={classes.groups}>{groups}</div>
      </Container>
      <Container className={classes.afterFooter}>
        <Text c="dimmed" size="sm">
          © {new Date().getFullYear()} The Hope School. All rights reserved.
        </Text>

        <Group gap={0} className={classes.social} justify="flex-end" wrap="nowrap">
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="#"
            target="_blank"
          >
            <IconBrandTwitter size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="#"
            target="_blank"
          >
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          <ActionIcon
            size="lg"
            color="gray"
            variant="subtle"
            component="a"
            href="#"
            target="_blank"
          >
            <IconBrandInstagram size={18} stroke={1.5} />
          </ActionIcon>
        </Group>
      </Container>
    </footer>
  );
}
