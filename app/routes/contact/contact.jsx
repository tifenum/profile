import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Footer } from '~/components/footer';
import { Heading } from '~/components/heading';
import { Input } from '~/components/input';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { useFormInput } from '~/hooks';
import { baseMeta } from '~/utils/meta';
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import styles from './contact.module.css';

const MAX_EMAIL_LENGTH = 512;
const MAX_MESSAGE_LENGTH = 4096;
const EMAIL_PATTERN = /(.+)@(.+){2,}\.(.+){2,}/;
export const meta = () => {
  return baseMeta({
    title: 'Contact',
    description:
      'Send me a message if you’re interested in discussing a project or if you just want to say hi',
  });
};
export const Contact = () => {
  const errorRef = useRef();
  const email = useFormInput('');
  const message = useFormInput('');
  const initDelay = 0.3; // Adjust delay as needed
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setErrors({});

    // Validate input
    if (!email.value || !EMAIL_PATTERN.test(email.value)) {
      setErrors({ email: 'Please enter a valid email address.' });
      setSending(false);
      return;
    }
    if (!message.value) {
      setErrors({ message: 'Please enter a message.' });
      setSending(false);
      return;
    }
    if (email.value.length > MAX_EMAIL_LENGTH) {
      setErrors({ email: `Email address must be shorter than ${MAX_EMAIL_LENGTH} characters.` });
      setSending(false);
      return;
    }
    if (message.value.length > MAX_MESSAGE_LENGTH) {
      setErrors({ message: `Message must be shorter than ${MAX_MESSAGE_LENGTH} characters.` });
      setSending(false);
      return;
    }

    // Send email using EmailJS
    try {
      await emailjs.send(
        'service_vmijhwk', // Replace with your EmailJS Service ID
        'template_zwdt0vl', // Replace with your EmailJS Template ID
        {
          from_name: email.value,
          message: message.value,
          reply_to: email.value,
        },
        '90ZlLU02xI79IAFn4' // Replace with your EmailJS User ID
      );
      setSuccess(true);
    } catch (error) {
      console.error('Failed to send email:', error);
      setErrors({ email: 'Failed to send email. Please try again later.' });
    }
    setSending(false);
  };

  return (
    <Section className={styles.contact}>
      <Transition unmount in={!success} timeout={1600}>
        {({ status, nodeRef }) => (
          <form className={styles.form} onSubmit={handleSubmit} ref={nodeRef}>
            <Heading
              className={styles.title}
              data-status={status}
              level={3}
              as="h1"
            >
              <DecoderText text="Say hello" start={status !== 'exited'} delay={300} />
            </Heading>
            <Divider className={styles.divider} data-status={status} />

            <Input
              required
              className={styles.input}
              data-status={status}
              autoComplete="email"
              label="Your email"
              type="email"
              name="email"
              maxLength={MAX_EMAIL_LENGTH}
              {...email}
            />
            <Input
              required
              multiline
              className={styles.input}
              data-status={status}
              autoComplete="off"
              label="Message"
              name="message"
              maxLength={MAX_MESSAGE_LENGTH}
              {...message}
            />

            {/* Display errors if any */}
            {errors.email && <div className={styles.error}>{errors.email}</div>}
            {errors.message && <div className={styles.error}>{errors.message}</div>}

            <Button
              className={styles.button}
              data-status={status}
              disabled={sending}
              loading={sending}
              loadingText="Sending..."
              icon="send"
              type="submit"
            >
              Send message
            </Button>
          </form>
        )}
      </Transition>

      <Transition unmount in={success}>
        {({ status, nodeRef }) => (
          <div className={styles.complete} aria-live="polite" ref={nodeRef}>
            <Heading level={3} as="h3" className={styles.completeTitle} data-status={status}>
              Message Sent
            </Heading>
            <Text size="l" as="p" className={styles.completeText} data-status={status}>
              I’ll get back to you within a couple of days, sit tight
            </Text>
            <Button
              secondary
              iconHoverShift
              className={styles.completeButton}
              data-status={status}
              href="/"
              icon="chevron-right"
            >
              Back to homepage
            </Button>
          </div>
        )}
      </Transition>

      <Footer className={styles.footer} />
    </Section>
  );
};
