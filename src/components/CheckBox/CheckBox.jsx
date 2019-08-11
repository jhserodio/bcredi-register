import React from 'react';
import Type from 'prop-types';
import style from './CheckBox.module.css';
import { BtnIcon } from '../Button';
import { IconCheck } from '../Icon';

const CheckBox = ({ value, name, children, onChange }) => (
  <div className={style.CheckBox}>
    <BtnIcon
      onClick={onChange}
      className={`${style.fake} ${value ? style._active : style._inactive}`}>
      <IconCheck className={style.icon} />
    </BtnIcon>
    <input
      name={name}
      type="checkbox"
      className={style.input}
      value={value}
      onChange={onChange}
    />
    <label className={style.label}>{children}</label>
  </div>
);

CheckBox.propTypes = {
  value: Type.bool.isRequired,
  name: Type.string.isRequired,
  onChange: Type.func.isRequired,
  children: Type.arrayOf(Type.oneOfType([Type.element, Type.string]))
    .isRequired,
};

export { CheckBox };
