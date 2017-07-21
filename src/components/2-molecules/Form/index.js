import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, data, ...props }) => {
  const submitForm = (event) => {
    event.preventDefault();
    return onSubmit(data);
  };

  return (
    <form onSubmit={submitForm} {...props} />
  );
};

Form.propTypes = {
  onSubmit: PropTypes.func,
  data: PropTypes.object.isRequired,
};

export default Form;
