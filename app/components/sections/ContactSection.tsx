'use client';

import { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from 'react-icons/fa';
import { siteData } from '@/data/siteData';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { cn } from '@/utils/cn';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
  submit?: string;
}

const FORM_FIELDS = [
  { name: 'name', id: 'contact-name' },
  { name: 'email', id: 'contact-email' },
  { name: 'subject', id: 'contact-subject' },
  { name: 'message', id: 'contact-message' },
] as const;

const SOCIAL_ICONS = {
  FaGithub,
  FaLinkedin,
  FaTwitter,
};

const CONTACT_INFO = [
  {
    label: 'Email',
    value: siteData.personal.email,
    href: `mailto:${siteData.personal.email}`,
  },
  {
    label: 'Phone',
    value: siteData.personal.phone || 'Available upon request',
    href: siteData.personal.phone ? `tel:${siteData.personal.phone}` : undefined,
  },
  {
    label: 'Location',
    value: siteData.personal.location,
    href: undefined,
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const validationSummaryRef = useRef<HTMLDivElement>(null);

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters long';
    }

    const hasErrors = Object.keys(newErrors).length > 0;
    setErrors(newErrors);

    if (hasErrors) {
      window.requestAnimationFrame(() => validationSummaryRef.current?.focus());
    }

    return !hasErrors;
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));

    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS environment variables are not configured.');
      setErrors({ submit: 'Configuration error: Unable to send email. Please contact support.' });
      setIsSubmitting(false);
      return;
    }

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(
        serviceId,
        templateId,
        templateParams,
        publicKey
      );

      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setErrors({});

      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      setErrors({ submit: 'Failed to send message. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasValidationErrors = FORM_FIELDS.some(({ name }) => Boolean(errors[name]));

  return (
    <section
      id="contact"
      data-studio-section="contact"
      data-studio-component="contact-panel"
      className="section-padding border-t border-trace bg-canvas"
    >
      <div className="field-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="metadata text-xs font-semibold uppercase text-signal">
              Contact
            </p>
            <h2 className="mt-3 text-4xl leading-none text-ink sm:text-5xl lg:text-6xl">
              Let&apos;s Work Together
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate">
              Ready to bring your next project to life? I&apos;d love to hear from you and discuss how we can create something amazing together.
            </p>

            <div className="mt-12">
              <h3 className="text-2xl text-ink">Get in Touch</h3>
              <p className="mt-4 max-w-xl leading-7 text-slate">
                I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about technology and development. Feel free to reach out through any of the channels below.
              </p>

              <dl className="mt-8 border-t border-trace">
                {CONTACT_INFO.map((info) => (
                  <div
                    key={info.label}
                    className="grid gap-2 border-b border-trace py-5 sm:grid-cols-3"
                  >
                    <dt className="metadata text-xs font-semibold uppercase text-slate">
                      {info.label}
                    </dt>
                    <dd className="break-words font-medium text-ink sm:col-span-2">
                      {info.href ? (
                        <a
                          href={info.href}
                          className="underline decoration-trace transition-colors hover:text-signal hover:decoration-signal"
                        >
                          {info.value}
                        </a>
                      ) : (
                        info.value
                      )}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>

            <div
              data-studio-component="social-links"
              className="mt-10"
              aria-labelledby="contact-social-title"
            >
              <h3
                id="contact-social-title"
                className="metadata text-xs font-semibold uppercase text-slate"
              >
                Follow Me
              </h3>
              <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {siteData.social.map((social) => {
                  const IconComponent = SOCIAL_ICONS[social.icon as keyof typeof SOCIAL_ICONS];
                  return (
                    <li key={social.id}>
                      <a
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 border-b border-trace pb-1 text-sm font-semibold text-ink transition-colors hover:border-signal hover:text-signal"
                        aria-label={social.label}
                      >
                        <IconComponent aria-hidden="true" size={16} />
                        {social.label}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          <div className="border-t border-trace pt-10 lg:col-span-7 lg:border-l lg:border-t-0 lg:pl-16 lg:pt-0">
            <div className="max-w-2xl">
              <p className="metadata text-xs font-semibold uppercase text-signal">
                Direct message
              </p>
              <h3 id="contact-form-title" className="mt-3 text-3xl text-ink sm:text-4xl">
                Send a Message
              </h3>

              {isSubmitted ? (
                <div
                  className="mt-8 border-y border-trace py-12"
                  role="status"
                  aria-live="polite"
                  aria-atomic="true"
                >
                  <p className="metadata text-xs font-semibold uppercase text-signal">
                    Delivered
                  </p>
                  <h4 className="mt-3 text-2xl text-ink">Message Sent!</h4>
                  <p className="mt-3 leading-7 text-slate">
                    Thank you for reaching out. I&apos;ll get back to you as soon as possible.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  noValidate
                  data-studio-component="contact-form"
                  data-qa="contact-form"
                  className="mt-8 space-y-6"
                  aria-labelledby="contact-form-title"
                  aria-busy={isSubmitting}
                >
                  <div
                    className="sr-only"
                    role="status"
                    aria-live="polite"
                    aria-atomic="true"
                  >
                    {isSubmitting ? 'Sending message.' : ''}
                  </div>

                  {hasValidationErrors && (
                    <div
                      ref={validationSummaryRef}
                      tabIndex={-1}
                      role="alert"
                      aria-live="assertive"
                      aria-atomic="true"
                      className="border-l-2 border-safety py-1 pl-4 text-safety"
                    >
                      <p className="font-semibold">Please review the highlighted fields.</p>
                      <ul className="mt-2 list-disc space-y-1 pl-5 text-sm">
                        {FORM_FIELDS.map(({ name, id }) => (
                          errors[name] ? (
                            <li key={name}>
                              <a className="underline" href={`#${id}`}>
                                {errors[name]}
                              </a>
                            </li>
                          ) : null
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="grid gap-6 sm:grid-cols-2">
                    <Input
                      id="contact-name"
                      name="name"
                      label="Name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      error={errors.name}
                      autoComplete="name"
                      required
                    />
                    <Input
                      id="contact-email"
                      name="email"
                      label="Email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      error={errors.email}
                      autoComplete="email"
                      required
                    />
                  </div>

                  <Input
                    id="contact-subject"
                    name="subject"
                    label="Subject"
                    value={formData.subject}
                    onChange={(e) => handleInputChange('subject', e.target.value)}
                    error={errors.subject}
                    required
                  />

                  <div className="space-y-2">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-semibold text-ink"
                    >
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      rows={6}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      className={cn(
                        'w-full resize-none border bg-canvas px-4 py-3 text-base text-ink transition-colors placeholder:text-slate hover:border-slate focus-visible:border-safety disabled:cursor-not-allowed disabled:opacity-50',
                        errors.message ? 'border-safety' : 'border-trace'
                      )}
                      required
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="text-sm leading-5 text-safety">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {errors.submit && (
                    <p
                      id="contact-submit-error"
                      className="border-l-2 border-safety py-1 pl-4 text-sm text-safety"
                      role="alert"
                      aria-live="assertive"
                    >
                      {errors.submit}
                    </p>
                  )}

                  <Button
                    type="submit"
                    loading={isSubmitting}
                    className="w-full"
                    size="lg"
                    aria-describedby={errors.submit ? 'contact-submit-error' : undefined}
                  >
                    {isSubmitting ? 'Sending...' : (
                      <>
                        <FaPaperPlane className="mr-2" size={16} aria-hidden="true" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}