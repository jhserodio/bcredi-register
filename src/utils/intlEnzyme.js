import React from 'react';
import { mount, shallow } from 'enzyme';
import { IntlProvider, intlShape } from 'react-intl';

export const initIntlProvider = (locale = 'pt-BR', messages = {}) => {
  const intlProvider = new IntlProvider({ locale, messages }, {});
  const { intl } = intlProvider.getChildContext();
  return intl;
};

const nodeWithIntlProp = (node, intl) => React.cloneElement(node, { intl }); // shallow() with React Intl context

const shallowWithIntl = (node, intl, { context, ...options } = {}) => {
  return shallow(nodeWithIntlProp(node, intl), {
    ...options,
    context: { ...context, intl },
  });
};

const mountWithIntl = (
  node,
  intl,
  { context, childContextTypes, ...options } = {},
) => {
  return mount(nodeWithIntlProp(node, intl), {
    ...options,
    context: { ...context, intl },
    childContextTypes: {
      intl: intlShape,
      ...childContextTypes,
    },
  });
};

export { shallowWithIntl, mountWithIntl };
