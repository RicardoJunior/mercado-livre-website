import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const styles = css`
  padding: 0;
  margin: 0;
  display: block;

  img {
    display: block;
    vertical-align: top;
  }
`;

const StyledFigure = styled.figure`${styles}`;

const Figure = ({ logo, title, ...props }) => (<StyledFigure>
  <img src={logo} {...props} alt={title} />
  <figcaption>{title}</figcaption>
</StyledFigure>);

Figure.propTypes = {
  logo: PropTypes.string,
  title: PropTypes.string,
  legend: PropTypes.bool,
};

export default Figure;
