import { home as home_ptBR } from './pages/Home/intl_pt_BR';
import { home as home_enUS } from './pages/Home/intl_en_US';

import { header as header_ptBR } from './template/Header/intl_pt_BR';
import { header as header_enUS } from './template/Header/intl_en_US';

const messages = {
  'en-US': {
    header: header_enUS,
    home: home_enUS,
  },
  'pt-BR': {
    header: header_ptBR,
    home: home_ptBR,
  },
};

export { messages };
