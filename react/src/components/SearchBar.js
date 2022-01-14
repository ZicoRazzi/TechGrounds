import React, { useState } from 'react';
// import './SearchBar.css';

const SearchBar = (props) => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (event) => {
    setSearchValue(event.target.value);
  };
  const handleClearClick = () => {
    setSearchValue('');
  };

  console.log(
    props.products.map((product) => {
      return product.toUpperCase();
    })
  );
  const shouldDisplayButton = searchValue.length > 0;
  console.log(shouldDisplayButton);

  const filteredProducts = props.products.filter((product) => {
    return product.includes(searchValue);
  });

  return (
    <div>
      <h1>useEffect &amp; API</h1>
      <input type="text" value={searchValue} onChange={handleInputChange} />
      {/* conditional rendering */}
      {shouldDisplayButton && (
        <button class="clear-btn" onClick={handleClearClick}>
          clear
        </button>
      )}

      <ul>
        {filteredProducts.map((product) => {
          return <li>{product.toUpperCase()}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchBar;
