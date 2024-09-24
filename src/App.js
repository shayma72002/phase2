import React, { useState } from 'react';
import ProductList from './ProductList';
import './App.css';

const App = () => {
    // Product Data (State)
    const [products] = useState([
        { name: "Smartphone", category: "Electronics", price: 599 },
        { name: "Laptop", category: "Electronics", price: 899 },
        { name: "T-Shirt", category: "Clothing", price: 29 },
        { name: "Jeans", category: "Clothing", price: 49 },
        { name: "Novel", category: "Books", price: 15 },
        { name: "Textbook", category: "Books", price: 99 }
    ]);

    // Active Filter (State)
    const [activeFilter, setActiveFilter] = useState('All');

    // Filtered Products based on active filter
    const filteredProducts = activeFilter === 'All'
        ? products
        : products.filter(product => product.category === activeFilter);

    // Event handler to update the active filter
    const handleFilterChange = (category) => {
        setActiveFilter(category);
    };

    return (
        <div className="app">
            <header>
                <h1>Product List</h1>
            </header>

            <section className="filter-section">
                <button className="filter-btn" onClick={() => handleFilterChange('All')}>All</button>
                <button className="filter-btn" onClick={() => handleFilterChange('Electronics')}>Electronics</button>
                <button className="filter-btn" onClick={() => handleFilterChange('Clothing')}>Clothing</button>
                <button className="filter-btn" onClick={() => handleFilterChange('Books')}>Books</button>
            </section>

            {/* Pass filtered products as props to ProductList */}
            <ProductList products={filteredProducts} />
        </div>
    );
};

export default App;
