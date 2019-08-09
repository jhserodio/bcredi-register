const home = {
  title: 'Create my registration',
  message:
    'To track your credit hiring you will use your email and social security number.',
  form: {
    name: {
      label: 'Name',
      placeholder: 'Write your full name',
    },
    cpf: {
      label: 'CPF',
    },
    birthDay: {
      label: 'Birth day',
    },
    pass: {
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
  footer: {
    message: 'I already made my registration',
    link: 'Sign in now',
  },
};

export { home };
