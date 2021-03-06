import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import { font, palette } from 'styled-theme';
// import { ifProp } from 'styled-tools';

// const fontSize = ({ height }) => `${height / 35.5555555556}rem`;
// font-family: ${font('primary')};
// font-size: ${fontSize};
// padding: ${ifProp({ type: 'textarea' }, '0.4444444444em', '0 0.4444444444em')};
// height: ${ifProp({ type: 'textarea' }, 'auto', '2.2222222222em')};
// color: ${palette('grayscale', 0)};
// background-color: ${palette('grayscale', 0, true)};
// border: 1px solid ${ifProp('invalid', palette('danger', 2), palette('grayscale', 3))};

const styles = css`
  display: block;
  width: 100%;
  margin: 0;
  box-sizing: border-box;
  border-radius: 2px;
  border: 1px solid #ccc;
  padding: 5px 60px 5px 15px;

  &[type=checkbox], &[type=radio] {
    display: inline-block;
    border: 0;
    border-radius: 0;
    width: auto;
    height: auto;
    margin: 0 0.2rem 0 0;
  }

  &:focus {
    border-color: #303577;
    box-shadow: none;
    outline: none;
  }
`;

const StyledTextarea = styled.textarea`${styles}`;
const StyledSelect = styled.select`${styles}`;
const StyledInput = styled.input`${styles}`;

const Input = ({ ...props }) => {
  if (props.type === 'textarea') {
    return <StyledTextarea {...props} />;
  } else if (props.type === 'select') {
    return <StyledSelect {...props} />;
  }
  return <StyledInput {...props} autoComplete="off" />;
};

Input.propTypes = {
  type: PropTypes.string,
  reverse: PropTypes.bool,
  height: PropTypes.number,
  invalid: PropTypes.bool,
};

Input.defaultProps = {
  type: 'text',
  height: 40,
};

export default Input;
