import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './simillarItem.css';

const SimilarItem = ({ similarProducts }) => {
  return (
    <div className="similar-item">
      <h2 className='similar-item-title'>Frequently Bought</h2>
      <Row>
        {similarProducts.map((product, index) => (
          <Col key={index} xs={12} sm={6} md={4} lg={3}>
            <Card className="mb-4">
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ width: '150px', height: '150px' }}
              />
              <Card.Body style={{ height: '100px' }}>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default SimilarItem;
