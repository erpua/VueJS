export const isRequired = (val) => ({
  hasPassed: !!val,
  message: 'Please fill up this field',
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: 'Over limit',
});

export const emailValidation = (val) => ({
  hasPassed: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(val),
  message: 'Wrong email',
});

export const passwordValidation = (val) => ({
  hasPassed: /^(?=.*[A-Za-z])(?=.*[\d]).{7,256}$/.test(val),
  message: 'Password must contain one capture and one symbol',
});
