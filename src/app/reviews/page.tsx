'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';

// Define the type for the reviews
interface Review {
  name: string;
  rating: number;
  comment: string;
}

const ReviewSection: React.FC = () => {
  const [reviews, setReviews] = useState<Review[]>([
    {
      name: 'Sarah K.',
      rating: 5,
      comment: 'The chocolate croissants were absolutely amazing! Fresh and flaky every time I order!',
    },
    {
      name: 'John D.',
      rating: 4,
      comment: 'Loved the sourdough bread! The crust was perfect and the inside was soft.',
    },
    {
      name: 'Danish',
      rating: 4,
      comment: 'Absolutely loved the cakes! They were fresh, delicious, and beautifully decorated. I highly recommend this bakery for any special occasion.',
    },
    {
      name: 'Ayesha',
      rating: 5,
      comment: 'The pastries here are out of this world! Everything from the croissants to the cupcakes is baked to perfection.',
    },
    {
      name: 'Aliza',
      rating: 3,
      comment: 'I pre-ordered a cake for my anniversary, and it was ready on time and tasted amazing. Scheduling was super easy.',
    },
    {
      name: 'Ali',
      rating: 4,
      comment: 'Ordered a custom birthday cake, and it turned out better than I imagined!',
    },
  ]);

  const [newReview, setNewReview] = useState<Review>({
    name: '',
    rating: 5,
    comment: '',
  });

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNewReview({
      ...newReview,
      [name]: name === 'rating' ? Number(value) : value,
    });
  };

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    setReviews([...reviews, newReview]);
    setNewReview({ name: '', rating: 5, comment: '' });
  };

  return (
    <div className="bg-light-pink py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-6 text-left text-dark-blue">Customer Reviews</h2>

        {/* Display reviews */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg">
              {/* Remove image */}
              <div>
                <h3 className="text-lg font-bold">{review.name}</h3>
                <div className="flex text-yellow-500">
                  {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                </div>
              </div>
              <p className="mt-4 text-gray-700">{review.comment}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewSection;
