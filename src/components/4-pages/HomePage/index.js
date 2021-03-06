import React from 'react';
import PropTypes from 'prop-types';
import { Header, ProductList } from 'components';
import axios from 'axios';

export default class HomePage extends React.Component {
  static propTypes = {
    searchValue: PropTypes.string,
    products: PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
      products: [],
      searchValue: '',
      isEmpty: true,
    };

    this.onSubmit = this.onSubmitVirtual.bind(this);
  }

  componentDidMount() {
    if (this.props.location.search) {
      this.setState({
        searchValue: (this.props.location.search).replace('?search=', ''),
      });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.searchValue && this.state.searchValue !== prevState.searchValue) {
      this.setState({
        loading: true,
        isEmpty: false,
      });

      axios.get(`http://localhost:4567/api/items?search=${this.state.searchValue}`)
        .then((response) => {
          if (response.data && response.data.length === 1) {
            this.setState({
              products: response.data[0].items,
              loading: false,
            });
          }
        });
    }
  }

  onSubmitVirtual(data) {
    this.setState({ searchValue: data.searchValue });
  }

  render() {
    return (<div>
      <Header onSubmit={this.onSubmit} />
      <ProductList products={this.state.products} loading={this.state.loading} isEmpty={this.state.isEmpty} />
    </div>);
  }
}
