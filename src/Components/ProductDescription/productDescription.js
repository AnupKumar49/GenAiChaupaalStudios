import React, { useState } from 'react';
import { Container, Row, Col, Image, Button, Form, Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import StarRating from './../StarRating/starRating';
import './productDescriptions.css'; // Import the external CSS file for styling
import shirt1 from './shirt1.png'; // Import your image files
import shirt2 from './shirt2.png';
import shirt3 from './shirt3.png';
import shirt4 from './shirt4.png';
import shirt5 from './shirt5.png';

const ProductDescription = (props) => {
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [rating, setRating] = useState(0);
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0); // Track the active image index
  const [quantity, setQuantity] = useState(1); 
  const imageUrls = [shirt1, shirt2, shirt3, shirt4, shirt5];

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

 

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleRatingChange = (newRating) => {
    setRating(newRating);
  };

  const handleAddToCart = () => {
    setIsAddedToCart(true);
    props.handlequantity(quantity)
  };

  const handleThumbnailClick = (index) => {
    setActiveIndex(index); // Set the active index when a thumbnail is clicked
  };

  return (
    <div className='product-container'>
      <div>
        <Row>
          {/* Product Images (50% width) */}
          <Col xs={12} md={6}>
            <Carousel
              interval={null}
              onSelect={(index) => setActiveIndex(index)}
              activeIndex={activeIndex}
              prevIcon={<FontAwesomeIcon icon={faChevronLeft} />}
              nextIcon={<FontAwesomeIcon icon={faChevronRight} />}
            >
              {imageUrls.map((imageUrl, index) => (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100 product-image"
                    src={imageUrl}
                    alt={`Product Image ${index + 1}`}
                  />
                </Carousel.Item>
              ))}
            </Carousel>
          </Col>

          {/* Product Details (50% width) */}
          <Col xs={12} md={6}>
            <h1 className="product-title">
              Studio Chaupaal - Half Sleeves - Branded Custom T-Shirt
            </h1>

            {/* Star Rating */}
            <div className="star-rating">
              <StarRating averageRating={4} totalReviews={135} />
            </div>

            {/* Price */}
            <div className="price">
  <p className="discounted-price">Our discounted Price $49.99</p>
  <p className="original-price">Price:$59.99</p>
</div>
            {/* Size Filters */}
            <Form.Group controlId="productSize">
              <Form.Label className="select-size-label">
                Select Size:
              </Form.Label>
              <Form.Control
                as="select"
                onChange={handleSizeChange}
                value={selectedSize}
              >
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </Form.Control>
            </Form.Group>

            {/* Color Filters */}
            <Form.Group controlId="productColor">
              <Form.Label className="select-color-label">
                Select Color:
              </Form.Label>
              <Form.Control
                as="select"
                onChange={handleColorChange}
                value={selectedColor}
              >
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="productQuantity">
  <Form.Label className="select-quantity-label">Select Quantity:</Form.Label>
  <Form.Control
    type="number"
    min="1" // Minimum quantity should be 1
    value={quantity}
    onChange={(e) => setQuantity(parseInt(e.target.value))}
  />
</Form.Group>

            {/* Add to Cart Button */}
            <Button
              variant="primary"
              onClick={() => {
                handleAddToCart();
              }}
              disabled={isAddedToCart}
            >
              {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
            </Button>
            {/* Reset Button */}
 {/* Reset Button */}
 <Button
            variant="secondary"
            onClick={() => {
              setIsAddedToCart(false);
              setQuantity(1);
              props.handlequantity(0) // Reset quantity to 1
            }}
            disabled={!isAddedToCart} // Disable when not added to cart
          >
            Reset
          </Button>

            <Col xs={12} md={12}>
          <div className="thumbnail-images">
            <Row>
              {imageUrls.map((imageUrl, index) => (
                <Col
                  key={index}
                  md={2}
                  xs={2}
                  className="thumbnail-column"
                  onClick={() => handleThumbnailClick(index)} // Handle thumbnail click
                >
                  <img
                    className={`thumbnail ${index === activeIndex ? 'active-thumbnail' : ''}`} // Highlight the active thumbnail
                    src={imageUrl}
                    alt={`Thumbnail ${index + 1}`}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Col>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ProductDescription;
