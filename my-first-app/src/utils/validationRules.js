export const isRequired = (value) => ({
  hasPassed: !!value,
  message: 'Please fill up this field',
});

export const charLimit = (limit) => (value) => ({
  hasPassed: value.length <= limit,
  message: 'Over limit',
});
