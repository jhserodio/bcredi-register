import React from 'react';
import Type from 'prop-types';

import style from './Hint.module.css';

const Hint = ({ messages }) => (
  <ul className={style.hint}>
    {messages
      ? messages.map(
          (message, index) =>
            message ? (
              <li
                key={index}
                className={message.valid ? style._ok : style._fail}>
                {message.content}
              </li>
            ) : (
              <li key={index} className={style._ok} />
            ),
        )
      : ''}
  </ul>
);

Hint.propTypes = {
  messages: Type.arrayOf(
    Type.shape({
      valid: Type.bool.isRequired,
      content: Type.oneOfType([Type.string, Type.element]).isRequired,
    }),
  ).isRequired,
};

export { Hint };
