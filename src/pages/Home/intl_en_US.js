import { FORM } from '../../constants/form';

const home = {
  title: 'Create my registration',
  message:
    'To track your credit hiring you will use your email and social security number',
  form: {
    [FORM.EMAIL]: {
      label: 'E-mail',
      placeholder: 'Write your e-mail',
    },
    [FORM.CPF]: {
      label: 'CPF',
    },
    [FORM.BIRTH_DAY]: {
      label: 'Birth day',
    },
    [FORM.PASSWORD]: {
      name: 'Password',
      placeholder: 'create your password',
    },
    visibility: {
      view: 'view password',
      hide: 'hide password',
    },
    policy: {
      phrase: 'I have read and agree to the',
      privacy: 'Privacy Policy',
      and: 'and',
      use: 'Information Use Policy',
    },
    submit: 'Registry',
  },
  submit: {
    ok: {
      message: 'Congratulations',
      description: 'Successful registration',
    },
    error: {
      message: 'Error',
      description: 'Check input fields and policy agreement',
    },
  },
  footer: {
    message: 'I already made my registration',
    link: 'Sign in now',
  },
};

export { home };
