import styled from 'styled-components';
import React from 'react';
import { Figure, Form, Input, Button } from 'components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: inline-flex;
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
      <Figure src="http://placehold.it/200x200" title="Mercado Livre" />
      <Form onSubmit={onSubmit} data={data}>
        <Input name="search" onChange={onChange} placeholder="Nunca dejes de buscar" />
        <Button type="submit" value="Submit" />
      </Form>
    </StyledHeader>
  );
};

Header.propTypes = {
  onSubmit: PropTypes.func,
};

export default Header;
