import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import Link from 'react-router-dom/Link';
// import { font, palette } from 'styled-theme';
// import { ifProp } from 'styled-tools';

// const fontSize = ({ height }) => `${height / 40}rem`;

// const backgroundColor = ({ transparent, disabled }) =>
//   transparent ? 'transparent' : palette(disabled ? 2 : 1);

// const foregroundColor = ({ transparent, disabled }) =>
//   transparent ? palette(disabled ? 2 : 1) : palette('grayscale', 0, true);

// const hoverBackgroundColor = ({ disabled, transparent }) => !disabled && !transparent && palette(0);
// const hoverForegroundColor = ({ disabled, transparent }) => !disabled && transparent && palette(0);

// font-family: ${font('primary')};
// font-size: ${fontSize};
// border: 0.0625em solid ${ifProp('transparent', 'currentcolor', 'transparent')};

// background-color: ${hoverBackgroundColor};
// color: ${hoverForegroundColor};

// background-color: ${backgroundColor};
// color: ${foregroundColor};

const styles = css`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  height: 2.5em;
  justify-content: center;
  text-decoration: none;
  cursor: default;
  appearance: none;
  padding: 0 1em;
  border-radius: 0.125em;
  box-sizing: border-box;  
  transition: background-color 250ms ease-out, color 250ms ease-out, border-color 250ms ease-out;

  &:disabled, [disabled] {
    cursor: disabled;
    pointer-events: none;
  }

  &:hover, &:focus, &:active {
    cursor: pointer;
    pointer-events: auto;
  }

  &:focus {
    outline: none
  }
`;

const StyledLink = styled(({ disabled, transparent, reverse, palette, height, theme, ...props }) =>
  <Link {...props} />
)`${styles}`;
const Anchor = styled.a`${styles}`;
const StyledButton = styled.button`${styles}`;

const Button = ({ type, ...props }) => {
  if (props.to) {
    return <StyledLink {...props} />;
  } else if (props.href) {
    return <Anchor {...props} />;
  }

  return <StyledButton {...props} type={type} />;
};

Button.propTypes = {
  disabled: PropTypes.bool,
  palette: PropTypes.string,
  transparent: PropTypes.bool,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  type: PropTypes.string,
  to: PropTypes.string,
  href: PropTypes.string,
};

Button.defaultProps = {
  palette: 'primary',
  type: 'button',
  height: 40,
};

export default Button;
