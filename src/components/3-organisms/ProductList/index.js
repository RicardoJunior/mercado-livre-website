import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Product } from 'components';
import loader from './loader.svg';

const StyledSection = styled.section`
  box-sizing: border-box;
  padding: 20px;
  width: 100%;
  margin: 0;

  .loader {
    text-align: center;
    padding: 30px;
  }
`;

export default class ProductList extends React.Component {
  static propTypes = {
    products: PropTypes.array,
    loading: PropTypes.bool,
  };

  getContent() {
    if (this.props.loading) {
      return (
        <div className="loader">
          <img alt="Carregando" src={loader} />
        </div>
      );
    }

    return (this.props.products ? (
      this.props.products.map((product) => {
        const value = `$ ${product.price.amount}${(product.price.decimals ? `.${product.price.decimals}` : '')}`;
        return (<Product key={product.id} {...product} value={value} />);
      })
    ) : (
      <div>
        Sua busca não retornou resultados!
      </div>
    ));
  }

  render() {
    return (
      <StyledSection>
        {this.getContent(this.props)}
      </StyledSection>
    );
  }
}
