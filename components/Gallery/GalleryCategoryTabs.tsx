'use client';

import { Tabs } from '@mantine/core';

interface GalleryCategoryTabsProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}
export function GalleryCategoryTabs({ categories, selected, onSelect }: GalleryCategoryTabsProps) {
  const handleTabChange = (value: string | null) => {
    if (value) {
      onSelect(value);
    }
  };

  return (
    <Tabs
      value={selected}
      onChange={handleTabChange}
      variant="pills"
      radius="xl"
      color="blue"
      mb="xl"
    >
      <Tabs.List>
        {categories.map((cat) => (
          <Tabs.Tab key={cat} value={cat}>
            {cat}
          </Tabs.Tab>
        ))}
      </Tabs.List>
    </Tabs>
  );
}
