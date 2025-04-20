'use client';

import { Text, Box, Stack, rem } from '@mantine/core';
import { IconSun, IconPhone, IconMapPin, IconAt } from '@tabler/icons-react';
import classes from './ContactIcons.module.css';

interface ContactIconProps {
  icon: typeof IconSun;
  title: string;
  description: string;
}

function ContactIcon({ icon: Icon, title, description }: ContactIconProps) {
  return (
    <div className={classes.wrapper}>
      <Box mr="md">
        <Icon style={{ width: rem(24), height: rem(24) }} />
      </Box>

      <div>
        <Text size="xs" className={classes.title}>
          {title}
        </Text>
        <Text className={classes.description}>{description}</Text>
      </div>
    </div>
  );
}

const MOCKDATA = [
  { title: 'Email', description: 'lotusvalley33@gmail.com', icon: IconAt },
  { title: 'Phone', description: '+91 7302-112542', icon: IconPhone },
  { title: 'Address', description: 'Your School Address Here', icon: IconMapPin },
  { title: 'Working hours', description: 'Mon To Sat: 8:00 AM To 4:00 PM', icon: IconSun },
];

export function ContactIcons() {
  const items = MOCKDATA.map((item, index) => <ContactIcon key={index} {...item} />);
  return <Stack>{items}</Stack>;
}