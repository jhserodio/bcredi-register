import { TYPE } from './form.types';

// FORM
const setSubmiting = submiting => ({
  type: TYPE.SET_SUBMITING,
  payload: submiting,
});

// INPUT
const inputSetValue = ({ value, index }) => ({
  type: TYPE.INPUT.SET_VALUE,
  payload: value,
  index,
});

const inputSetValid = ({ valid, index }) => ({
  type: TYPE.INPUT.SET_VALID,
  payload: valid,
  index,
});

const inputSetDirty = ({ dirty, index }) => ({
  type: TYPE.INPUT.SET_DIRTY,
  payload: dirty,
  index,
});

const inputSetType = ({ type, index }) => ({
  type: TYPE.INPUT.SET_TYPE,
  payload: type,
  index,
});

const setPolicy = policy => ({
  type: TYPE.SET_POLICY,
  payload: policy,
});

export {
  setSubmiting,
  inputSetDirty,
  inputSetType,
  inputSetValid,
  inputSetValue,
  setPolicy,
};
