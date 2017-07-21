import React from 'react';
import PropTypes from 'prop-types';

import { Product } from 'components';

const ProductList = ({ products }) => {
  return (
    <section>
      {
        products ? (
          products.map((product) => {
            return (<Product key={product.id} {...product} />);
          })
        ) : (
          <div>
            Sem produtos a serem exibidos!
          </div>
        )
      }
    </section>
  );
};

ProductList.propTypes = {
  products: PropTypes.array,
};

export default ProductList;
