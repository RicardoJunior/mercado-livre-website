import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Figure, Heading, Paragraph } from 'components';

const Article = styled.article`
  background-color: #fff;
  border-radius: 3px;
  margin: 0 auto;
  padding 20px;
  max-width: 1220px;
  border-bottom: 1px solid #eee;
  display: flex;

  .image {
    width: 200px;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  figcaption {
    display: none;
  }

  .productInfo a {
    text-decoration: none;
    cursor: pointer;
    color: #333;
    font-size: 20px;
    font-family: "Proxima Nova",Helvetica,Arial,sans-serif;
  }

  .productInfo p {
    color: #000;
    font-size: 24px;
    font-family: "Proxima Nova",Helvetica,Arial,sans-serif;
  }

  @media screen and (max-width: 768px) {
    .image {
      width: 30%;
      max-width: 90px;
      margin-right: 20px;
    }

    .productInfo p {
      font-size: 20px;
      margin-top: 5px;
    }

    .productInfo a {
      font-size: 16px;
    }
  }
`;

const Product = ({ id, title, picture, value, cityFrom, ...props }) => {
  return (
    <Article {...props} itemscope itemtype="http://schema.org/Product">
      <div className="image">
        <a href={'/items/' + id + '/' + title} title={title} itemProp="url">
          <Figure src={picture} title={title} itemProp="image" />
        </a>
      </div>
      <div className="productInfo">
        <div itemScope itemType="http://schema.org/Offer">
          <Paragraph itemProp="price">{value}</Paragraph>
        </div>
        <a href={'/items/' + id + '/' + title} title={title} itemProp="url">
          {title}
        </a>
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
  picture: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  cityFrom: PropTypes.string,
};

export default Product;
