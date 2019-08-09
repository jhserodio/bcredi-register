const home = {
  title: 'Criar meu cadastro',
  message:
    'Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF.',
  form: {
    name: {
      label: 'Nome',
      placeholder: 'Escreva seu nome completo',
    },
    cpf: {
      label: 'CPF',
    },
    birthDay: {
      label: 'Data de nascimento',
    },
    pass: {
      name: 'Senha',
      placeholder: 'Cadastre uma senha',
    },
    visibility: {
      view: 'ver senha',
      hide: 'esconder senha',
    },
    policy: {
      phrase: 'Li e estou de acordo com a',
      privacy: 'Política de Privacidade',
      and: 'e a',
      use: 'Política de Uso de Informações',
    },
    submit: 'Cadastrar',
  },
  footer: {
    message: 'Já fiz meu cadastro',
    link: 'Entrar agora',
  },
};

export { home };
