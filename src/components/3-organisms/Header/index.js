import styled from 'styled-components';
import React from 'react';
import { Figure, Form, Input, Button } from 'components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  background-color: #fff059;
  background-image: none;
  border-bottom: 1px solid #d9d9d9;
  box-sizing: border-box;
  color: #333;
  display: flex;
  flex-flow: column wrap;
  height: 54px;
  padding: 0 20px;
  width: 100%;
  justify-content: center;

  figure {
    padding: 0;
    margin: 0;
  }

  figcaption {
    display: none;
  }

  form {
    display: flex;
    margin-left: 10px;
    width: calc(100% - 50px);
  }

  button {
    width: 46px;
    height: 40px;
    border: 1px solid #ccc;
    background-color: #fff;
    background-image: linear-gradient(#fff,#f1f1f1);
    margin-left: -1px;
  }
`;

const data = {
  searchValue: '',
};

const onChange = (event) => {
  data.searchValue = event.target.value;
};

const Header = ({ onSubmit }) => {
  return (
    <StyledHeader>
      <Figure src="https://http2.mlstatic.com/ui/navigation/2.0.8/mercadolibre/logo__small.png" title="Mercado Livre" />
      <Form onSubmit={onSubmit} data={data}>
        <Input name="search" onChange={onChange} placeholder="Nunca dejes de buscar" />
        <Button type="submit" value="Submit" />
      </Form>
    </StyledHeader>
  );
};

Header.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Header;
