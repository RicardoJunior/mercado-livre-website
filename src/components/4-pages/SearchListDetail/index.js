import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Header, Figure, Paragraph, Button, Heading } from 'components';
import axios from 'axios';
import loader from './loader.svg';

const StyledSection = styled.section`
  max-width: 1220px;
  background-color: #fff;
  margin: 30px auto 0;
  padding: 40px;
  box-sizing: border-box;
  
  .productData {
    max-width: 450px;
  }

  header {
    display: flex;
    justify-content: space-between;
  }

  footer {
    margin-top: 120px;
  }

  figcaption {
    display: none;
  }

  .productName {
    font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
    font-size: 26px;
    font-weight: 600;
  }

  .productPrice {
    font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
    font-size: 44px;
    font-weight: 300;
  }

  button {
    color: #fff;
    background: #3483fa;
    border: 1px solid #fff;
    font-family: Proxima Nova,-apple-system,Helvetica Neue,Helvetica,Roboto,Arial,sans-serif;
    font-size: 18px;
    font-weight: 400;
    padding: 12px 62px;
    width: 100%;
    height: auto;
    border-radius: 4px;
    cursor: pointer;
    margin-top: 20px;
  }

  .loader {
    text-align: center;
  }
`;

export default class HomePage extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
    picture: PropTypes.string,
    value: PropTypes.string,
    cityFrom: PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      author: {
        name: '',
        lastname: '',
      },
      condition: '',
      free_shipping: '',
      item: {
        id: '',
        title: '',
        description: '',
        price: {
          amount: 0,
          currency: '',
          decimals: '',
        },
      },
      picture: '',
      sold_quantity: '',
    };

    this.onSubmit = this.onSubmitVirtual.bind(this);
  }

  componentDidMount() {
    axios.get(`http://localhost:4567/api/items/${this.props.match.params.id}`)
      .then((response) => {
        if (response.data && response.data.length === 1) {
          response.data[0].loading = false;
          this.setState(response.data[0]);
        }
      });
  }

  onSubmitVirtual(data) {
    this.state = {
      author: {
        name: '',
        lastname: '',
      },
      condition: '',
      free_shipping: '',
      item: {
        id: '',
        title: '',
        description: '',
        price: {
          amount: 0,
          currency: '',
          decimals: '',
        },
      },
      picture: '',
      sold_quantity: '',
    };

    this.props.history.push(`/items?search=${data.searchValue}`);
  }

  getContent() {
    if (this.state.loading) {
      return (
        <div className="loader">
          <img alt="Carregando" src={loader} />
        </div>
      );
    }

    return (<article>
      <header>
        <Figure src={this.state.item.picture} title={this.state.item.title} itemProp="image" />
        <div className="productData">
          <div itemScope itemType="http://schema.org/Offer">
            <Paragraph className="productName" itemProp="name">{this.state.item.title}</Paragraph>
            <Paragraph className="productPrice" itemProp="price">{`$ ${this.state.item.price.amount}${(this.state.item.price.decimals ? `.${this.state.item.price.decimals}` : '')}`}</Paragraph>
          </div>
          <Button type="button" value="Comprar">Comprar</Button>
        </div>
      </header>
      <footer>
        <Heading level={2}>Descrípción del producto</Heading>
        <Paragraph itemProp="description" dangerouslySetInnerHTML={{ __html: this.state.item.description }} />
      </footer>
    </article>);
  }

  render() {
    return (<div>
      <Header onSubmit={this.onSubmit} />
      <StyledSection>
        {this.getContent()}
      </StyledSection>
    </div>);
  }
}

