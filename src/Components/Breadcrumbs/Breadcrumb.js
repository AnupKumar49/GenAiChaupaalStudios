import React from 'react';
import './Breadcrumb.css'; // Import the external CSS file

function Breadcrumb({ items }) {
    return (
      <div className="breadcrumb-container">
        {items.map((item, index) => (
          <React.Fragment key={item.id}>
            <span className="breadcrumb-item">{item.label}</span>
            {index < items.length - 1 && (
              <span className="breadcrumb-separator">›</span>
            )}
          </React.Fragment>
        ))}
      </div>
    );
  }
  
  export default Breadcrumb;
  