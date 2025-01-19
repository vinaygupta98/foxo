import { FormField } from '@lib/validateForm';

export const defaultForm: FormField[] = [
  {
    id: 'name',
    type: 'text',
    label: 'Full Name',
    placeholder: 'Enter your full name',
    required: true,
  },
  {
    id: 'email',
    type: 'text',
    label: 'Email Address',
    placeholder: 'Enter your email',
    required: true,
  },
  {
    id: 'terms',
    type: 'checkbox',
    label: 'Agree to Terms and Conditions',
    required: true,
  },
  {
    id: 'terms2',
    type: 'switch',
    label: 'Agree to Terms and Conditions',
    required: true,
  },
  {
    id: 'message',
    type: 'textarea',
    label: 'Message',
    placeholder: 'Enter your message here',
    required: false,
  },
];
