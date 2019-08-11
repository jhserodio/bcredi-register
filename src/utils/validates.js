const validateRequired = (value, name, validate) => {
  const valid = !(value === '' || value === undefined);

  validate({ valid, index: name });

  return valid;
};

const validateMin = (value, min, name, validate) => {
  const valid = value.length >= min;

  validate({ valid, index: name });

  return valid;
};

export { validateRequired, validateMin };
