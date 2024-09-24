import React from 'react';

const ProductList = ({ products }) => {
    return (
        <section className="product-list">
            {/* If no products match, display a placeholder */}
            {products.length === 0 ? (
                <p>No products found.</p>
            ) : (
                products.map((product, index) => (
                    <div key={index} className="product-item">
                        <h2>{product.name}</h2>
                        <p>Category: {product.category}</p>
                        <p className="price">${product.price.toFixed(2)}</p>
                    </div>
                ))
            )}
        </section>
    );
};

export default ProductList;
