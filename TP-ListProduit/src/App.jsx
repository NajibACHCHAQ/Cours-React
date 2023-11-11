import React, { useState } from 'react';
import { Checkbox } from "./components/forms/CheckBox";
import { ProductCategoryRow } from "./products/ProductCategoryRow";
import { ProductRow } from "./products/ProductRow";

const PRODUCTS = [  
  {category: "Fruits", price: "$1", stocked: true, name: "Apple"},  
  {category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit"},  
  {category: "Fruits", price: "$2", stocked: false, name: "Passionfruit"},  
  {category: "Vegetables", price: "$2", stocked: true, name: "Spinach"},  
  {category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin"},  
  {category: "Vegetables", price: "$1", stocked: true, name: "Peas"}  
];

function App() {
  const [showStockedOnly, setShowStockedOnly] = useState(false);
  const [search, setSearch]= useState('');
  const visibleProducts = PRODUCTS.filter(product=>{
    if(showStockedOnly && !product.stocked){
      return false
    }
    if(search && !product.name.includes(search)){
      return false
    }
    return true
  });
  
  return (
    <div className="container">
      <SearchBar 
      search={search}
      onSearchChanged={setSearch}
      showStockedOnly={showStockedOnly} 
      onStockedOnlyChange = {setShowStockedOnly} 
      />
      <ProductTable products={visibleProducts} />
    </div>
  );
}

// Dans le composant SearchBar
function SearchBar({ showStockedOnly, onStockedOnlyChange, search, onSearchChanged }) {
  return (
    <div>
      <div className="search-bar">
        {/* Utilisez la fonction onSearchChanged avec l'événement (e) */}
        <input value={search} onChange={(e) => onSearchChanged(e.target.value)} placeholder="Rechercher..." />
        <Checkbox
          id="stocked"
          checked={showStockedOnly}
          onChange={onStockedOnlyChange}
          label="N'afficher que les produits en stock"
        />
      </div>
    </div>
  );
}


function ProductTable({ products }) { // Ajout de l'objet déstructure pour accéder à la propriété 'products'
  const rows = [];
  let lastCategory = null;

  for (let product of products) {
    if (product.category !== lastCategory) {
      rows.push(<ProductCategoryRow key={product.category} name={product.category} />);
    }
    lastCategory = product.category; // Correction de la typo ici (Product.category -> product.category)
    rows.push(<ProductRow product={product} key={product.name} />);
  }

  return (
    <table className="Table">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Prix</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}

export default App;

