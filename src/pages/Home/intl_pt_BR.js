import { FORM } from '../../constants/form';

const home = {
  title: 'Criar meu cadastro',
  message:
    'Para acompanhar sua contratação de crédito você utilizará seu e-mail e CPF',
  form: {
    [FORM.EMAIL]: {
      label: 'E-mail',
      placeholder: 'Digite seu email',
    },
    [FORM.CPF]: {
      label: 'CPF',
    },
    [FORM.BIRTH_DAY]: {
      label: 'Data de nascimento',
    },
    [FORM.PASSWORD]: {
      label: 'Senha',
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
  submit: {
    ok: {
      message: 'Parabéns',
      description: 'Cadastro realizado com sucesso',
    },
    error: {
      message: 'Erro',
      description: 'Verifique os campos de input e acordo de políticas',
    },
  },
  footer: {
    message: 'Já fiz meu cadastro',
    link: 'Entrar agora',
  },
};

export { home };
