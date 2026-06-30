import React from "react";
import "./productDetails.css";

import "./oneProductDetails.js";
import { useGetOneProductQuery } from "../../Redux/productsAPI";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams(); //id is the variable we created at Route path in App.jsx
  const { data, error, isLoading } = useGetOneProductQuery(id);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>There is an error...</h1>;
  }
  if (!data) {
    return <h1>No product found.</h1>;
  }
  return (
    <div className="card-wrapper">
      <div className="card">
        {/* card left */}
        <div className="product-imgs">
          <div className="img-display">
            <div className="img-showcase">
              <img src="/T-shirts/1.jpg" alt="T-shirt view 1" />
              <img src="/T-shirts/2.jpg" alt="T-shirt view 2" />
              <img src="/T-shirts/3.jpg" alt="T-shirt view 3" />
              <img src="/T-shirts/4.jpg" alt="T-shirt view 4" />
            </div>
          </div>

          <div className="img-select">
            <div className="img-item">
              <button
                type="button"
                data-id="1"
                aria-label="Show T-shirt view 1"
              >
                <img src="/T-shirts/1.jpg" alt="T-shirt thumbnail 1" />
              </button>
            </div>
            <div className="img-item">
              <button
                type="button"
                data-id="2"
                aria-label="Show T-shirt view 2"
              >
                <img src="/T-shirts/2.jpg" alt="T-shirt thumbnail 2" />
              </button>
            </div>
            <div className="img-item">
              <button
                type="button"
                data-id="3"
                aria-label="Show T-shirt view 3"
              >
                <img src="/T-shirts/3.jpg" alt="T-shirt thumbnail 3" />
              </button>
            </div>
            <div className="img-item">
              <button
                type="button"
                data-id="4"
                aria-label="Show T-shirt view 4"
              >
                <img src="/T-shirts/4.jpg" alt="T-shirt thumbnail 4" />
              </button>
            </div>
          </div>
        </div>

        {/* card right */}
        <div className="product-content">
          <h2 className="product-title">{data?.productName}</h2>
          <a
            href="https://www.nike.com"
            className="product-link"
            target="_blank"
            rel="noreferrer"
          >
            visit nike store
          </a>

          <div className="product-rating">
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star" />
            <i className="fas fa-star-half-alt" />
            <span>4.7(21)</span>
          </div>

          <div className="product-price">
            <p className="last-price">
              Old Price: <span>{data.price}$</span>
            </p>
            <p className="new-price">
              New Price: <span>{data.price}$</span>
            </p>
          </div>

          <div className="product-detail">
            <h2>about this item:</h2>
            <p>{data?.description}</p>

            <ul>
              <li>
                Color: <span>Black</span>
              </li>
              <li>
                Available: <span>in stock</span>
              </li>
              <li>
                Category: <span>Shoes</span>
              </li>
              <li>
                Shipping Area: <span>All over the world</span>
              </li>
              <li>
                Shipping Fee: <span>Free</span>
              </li>
            </ul>
          </div>

          <div className="purchase-info">
            <input type="number" min="0" defaultValue="1" />
            <button type="button" className="btn">
              Add to Cart <i className="fas fa-shopping-cart" />
            </button>
            <button type="button" className="btn">
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
