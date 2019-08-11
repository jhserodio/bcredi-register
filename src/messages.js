import { home as home_ptBR } from './pages/Home/intl_pt_BR';
import { home as home_enUS } from './pages/Home/intl_en_US';

import { header as header_ptBR } from './template/Header/intl_pt_BR';
import { header as header_enUS } from './template/Header/intl_en_US';

import { banner as banner_ptBR } from './template/Banner/intl_pt_BR';
import { banner as banner_enUS } from './template/Banner/intl_en_US';

import { input as input_ptBR } from './components/Input/intl_pt_BR';
import { input as input_enUS } from './components/Input/intl_en_US';

const messages = {
  'en-US': {
    header: header_enUS,
    home: home_enUS,
    banner: banner_enUS,
    input: input_enUS,
  },
  'pt-BR': {
    header: header_ptBR,
    home: home_ptBR,
    banner: banner_ptBR,
    input: input_ptBR,
  },
};

export { messages };
