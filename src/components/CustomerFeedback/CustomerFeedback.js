import React from 'react';
import './CustomerFeedback.css';

const CustomerFeedback = () => {
  const feedbacks = [
    {
      name: "Sarah Johnson",
      feedback: "HMT Groupe provided exceptional service in supplying our textile machinery. The delivery was prompt, and the equipment exceeded our expectations in quality and performance.",
      image: "/images/customer1.jpg",
      rating: 5
    },
    {
      name: "Michael Brown",
      feedback: "We had a large order for textile machinery, and HMT Groupe handled it with the utmost professionalism. The machines arrived on time and were exactly what we needed.",
      image: "/images/customer2.jpg",
      rating: 5
    },
    {
      name: "Emily Davis",
      feedback: "The embroidery machines from HMT Groupe transformed our production line. The setup was seamless, and the support provided was outstanding. Highly recommend their services!",
      image: "/images/customer3.jpg",
      rating: 5
    },
  ];

  const renderStars = (rating) => {
    return Array(rating).fill(0).map((_, index) => (
      <span key={index} className="star">★</span>
    ));
  };

  return (
    <div className="customer-feedback-container">
      <h2 className="customer-feedback-heading">Customer Feedback</h2>
      <div className="feedback-list">
        {feedbacks.map((item, index) => (
          <div className="feedback-item" key={index}>
            <h3 className="feedback-name">{item.name}</h3>
            <div className="feedback-rating">
              {renderStars(item.rating)}
            </div>
            <p className="feedback-text">"{item.feedback}"</p>
          </div>
        ))}
      </div>
      <button className="submit-feedback-button">Submit Your Feedback</button>
    </div>
  );
};

export default CustomerFeedback;
