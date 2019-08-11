import React, { useState } from 'react';
import style from './Input.module.css';
import Type from 'prop-types';
import InputMask from 'react-input-mask';
import { Hint } from '../Hint/Hint';
import { FormattedMessage } from 'react-intl';
import { validateRequired, validateMin } from '../../utils/validates';

const Input = ({
  value,
  mask,
  label,
  valid,
  maxLength,
  onBlur,
  onChange,
  drawer,
  required,
  min,
  name,
  setValid,
  dirty,
  setDirty,
  ...props
}) => {
  const max = maxLength
    ? {
        maxLength,
        max: maxLength,
      }
    : {};

  const [isRequired, setIsRequired] = useState(false);
  const [isMin, setIsMin] = useState(false);

  const handleValidate = value => {
    if (required) {
      setIsRequired(validateRequired(value, name, setValid));
    }

    if (min) {
      setIsMin(validateMin(value, min, name, setValid));
    }
  };

  const handleChange = e => {
    onChange(e);
    handleValidate(e.target.value);
  };

  const handleBlur = e => {
    handleValidate(e.target.value);
    setDirty({ dirty: true, index: name });
    if (onBlur) {
      onBlur(e);
    }
  };

  return (
    <div className={`${style.formBox} ${!valid && dirty ? style._fail : ''}`}>
      {mask ? (
        <InputMask
          mask={mask}
          alwaysShowMask
          className={style.input}
          value={value}
          onChange={handleChange}
          onBlur={handleBlur}
          {...props}
          {...max}
        />
      ) : (
        <div className={style.container}>
          <input
            className={`${style.input} ${drawer ? style._less : ''}`}
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            {...props}
            {...max}
          />
          {drawer ? <span className={style.drawer}>{drawer}</span> : ''}
        </div>
      )}
      <label className={style.label}>{label}</label>
      {(required || min) && dirty ? (
        <Hint
          messages={[
            required
              ? {
                  content: (
                    <FormattedMessage
                      id="input.required"
                      values={{ name: label }}
                    />
                  ),
                  valid: isRequired,
                }
              : null,
            min
              ? {
                  content: (
                    <FormattedMessage id="input.min" values={{ number: min }} />
                  ),
                  valid: isMin,
                }
              : null,
          ]}
        />
      ) : (
        ''
      )}
    </div>
  );
};

Input.defaultProps = {
  type: 'text',
  onFocus: undefined,
  onBlur: undefined,
  placeholder: '',
  disabled: false,
  valid: false,
  maxLength: undefined,
  drawer: undefined,
  mask: undefined,
  min: undefined,
  required: false,
};

Input.propTypes = {
  name: Type.string.isRequired,
  label: Type.string.isRequired,
  value: Type.string.isRequired,
  type: Type.string,
  drawer: Type.element,
  onChange: Type.func.isRequired,
  onFocus: Type.func,
  onBlur: Type.func,
  placeholder: Type.string,
  disabled: Type.bool,
  valid: Type.bool,
  required: Type.bool,
  min: Type.number,
  setValid: Type.func.isRequired,
  setDirty: Type.func.isRequired,
  dirty: Type.bool.isRequired,
  maxLength: Type.number,
  mask: Type.string,
};

export { Input };
