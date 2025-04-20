'use client';

import { useState, useEffect } from 'react';
import {
  Button,
  Card,
  Container,
  Group,
  LoadingOverlay,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
  Title,
} from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { ContactIcons } from './ContactIcons';
import { FAQSection } from './FAQSection';
import { SocialIcons } from './SocialIcons';
import classes from './ContactUs.module.css';
import { useForm, isEmail, hasLength } from '@mantine/form';

export function ContactUs() {
  const [loading, setLoading] = useState(false);
  
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      message: '',
    },
    validate: {
      email: isEmail('Please enter a valid email'),
      message: hasLength({ min: 10 }, 'Message must be at least 10 characters'),
      name: hasLength({ min: 2 }, 'Name must have at least 2 characters'),
    },
  });

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      form.setFieldValue('email', savedEmail);
    }
  }, []);

  const handleSubmit = async (values: typeof form.values) => {
    setLoading(true);
    try {
      const response = await fetch('https://formspree.io/f/xqaprrpg', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error('Failed to send message');
      }

      notifications.show({
        title: 'Success',
        message: 'Your message has been sent successfully!',
        color: 'green',
      });
      form.reset();
      form.setFieldValue('email', values.email); // Keep the email
    } catch (error) {
      notifications.show({
        title: 'Error',
        message: 'Failed to send message. Please try again.',
        color: 'red',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size="xl" className={classes.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing={50}>
        <Card className={classes.infoCard}>
          <Title className={classes.title}>Contact us</Title>
          <Text className={classes.description} mt="sm" mb={30}>
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon
            as possible.
          </Text>

          <ContactIcons />
          <SocialIcons />
        </Card>

        <Card className={classes.form}>
          <LoadingOverlay visible={loading} overlayProps={{ blur: 2 }} />
          <form onSubmit={form.onSubmit(handleSubmit)}>
            <TextInput
              label="Email"
              placeholder="your@email.com"
              required
              {...form.getInputProps('email')}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <TextInput
              label="Name"
              placeholder="John Doe"
              mt="md"
              {...form.getInputProps('name')}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />
            <Textarea
              required
              label="Your message"
              placeholder="I want to know more about..."
              minRows={4}
              mt="md"
              {...form.getInputProps('message')}
              classNames={{ input: classes.input, label: classes.inputLabel }}
            />

            <Group justify="flex-end" mt="md">
              <Button className={classes.control} type="submit" loading={loading}>
                Send message
              </Button>
            </Group>
          </form>
        </Card>
      </SimpleGrid>
      <FAQSection />
    </Container>
  );
}
