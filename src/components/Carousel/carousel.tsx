// ProductCarousel.jsx
import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import { getProducts } from '../../utils';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../components/Carousel/carousel.scss';

const ProductCarousel = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    appendDots: (dots) => <ul className="custom-dots"> {dots} </ul>,
  };

  return (
    <div className="product-carousel-wrapper">
      <h2 className="carousel-title">Lançamentos</h2>
      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="product-slide">
            <div className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <h3 className="product-name">{product.name}</h3>
              <p className="product-price">R$ {product.price.isDiscount || product.price.amount.toFixed(2)}</p>
              {product.price.isDiscount && (
                <p className="product-price-discount">R$ {product.price.amount.toFixed(2)}</p>
              )}
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ProductCarousel;
