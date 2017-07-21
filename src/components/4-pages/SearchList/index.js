import React from 'react';
import { Header } from 'components';
import { ProductListSearch } from 'containers';

const productList = <ProductListSearch searchValue="" />;

const onSubmit = (data) => {
  productList.search({
    searchValue: data.searchValue,
  });
};

const SearchList = () => {
  return (
    <div>
      <Header onSubmit={onSubmit} />
      {productList}
    </div>
  );
};

export default SearchList;
