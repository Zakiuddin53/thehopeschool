'use client';

import { Accordion, Title } from '@mantine/core';

export function FAQSection() {
  return (
    <div style={{ marginTop: '3rem' }}>
      <Title order={2} mb="xl">Frequently Asked Questions</Title>
      <Accordion>
        <Accordion.Item value="admissions">
          <Accordion.Control>What are the admission requirements?</Accordion.Control>
          <Accordion.Panel>
            Our admission process includes an entrance test and an interview. We evaluate students based on their academic performance and overall personality.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="timing">
          <Accordion.Control>What are the school timings?</Accordion.Control>
          <Accordion.Panel>
            The school operates Monday through Saturday from 8:00 AM to 4:00 PM. Different grades might have slightly different timings.
          </Accordion.Panel>
        </Accordion.Item>

        <Accordion.Item value="curriculum">
          <Accordion.Control>Which curriculum do you follow?</Accordion.Control>
          <Accordion.Panel>
            We follow the CBSE curriculum with additional focus on practical learning and personality development.
          </Accordion.Panel>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}