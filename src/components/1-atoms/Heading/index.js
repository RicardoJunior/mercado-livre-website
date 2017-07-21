import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import { font, palette } from 'styled-theme';

// const fontSize = ({ level }) => `${0.75 + (1 * (1 / level))}rem`;
// font-size: ${fontSize};
// font-family: ${font('primary')};
// color: ${palette({ grayscale: 0 }, 1)};

const styles = css`
  font-weight: 500;
  margin: 0;
  margin-top: 0.85714em;
  margin-bottom: 0.57142em;
`;

const Heading = styled(({ level, children, reverse, palette, theme, ...props }) =>
  React.createElement(`h${level}`, props, children)
)`${styles}`;

Heading.propTypes = {
  level: PropTypes.number,
  children: PropTypes.node,
  palette: PropTypes.string,
  reverse: PropTypes.bool,
};

Heading.defaultProps = {
  level: 1,
  palette: 'grayscale',
};

export default Heading;