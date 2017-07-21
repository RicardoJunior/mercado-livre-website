import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Figure, Heading, Paragraph } from 'components';

const Article = styled.article``;

const Product = ({ id, title, image, value, cityFrom, ...props }) => {
  return (
    <Article {...props} itemscope itemtype="http://schema.org/Product">
      <div className="image">
        <a href="/items/{id}/{title}" title={title} itemProp="url">
          <Figure src={image} title={title} itemProp="image" />
        </a>
      </div>
      <div className="productInfo">
        <div itemScope itemType="http://schema.org/Offer">
          <Paragraph itemProp="price">{value}</Paragraph>
        </div>
        <Heading itemProp="name">{title}</Heading>
      </div>
      <div className="from">
        <div itemScope itemType="http://schema.org/Offer">
          <Paragraph itemProp="availableAtOrFrom">{cityFrom}</Paragraph>
        </div>
      </div>
    </Article>
  );
};

Product.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  cityFrom: PropTypes.string.isRequired,
};

export default Product;
