import React from 'react';
import PropTypes from 'prop-types';

const Figure = ({ logo, title, ...props }) => (<figure>
  <img src={logo} {...props} alt={title} />
  <figcaption>{title}</figcaption>
</figure>);

Figure.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  legend: PropTypes.bool,
};

export default Figure;
