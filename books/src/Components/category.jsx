import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const category = () => {

  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const dummyCategories = [
      { id: 1, name: 'Fiction', image: 'fiction.png', redirect: '/fiction' },
      { id: 2, name: 'Non-Fiction', image: 'non-fiction.png', redirect: '/non-fiction' },
      { id: 3, name: 'Biography and Autobiography', image: 'bio-auto.png', redirect: '/bioauto' },
      { id: 4, name: 'Classics', image: 'classics.png', redirect: '/classics' },
      { id: 5, name: 'Crime', image: 'crime.png', redirect: '/crime' },
      { id: 6, name: 'Poetry', image: 'poetry.png', redirect: '/poetry' },
    ];

    setCategories(dummyCategories);
  }, []);


  return (
    <>
    <div className="header">
        <img src="/logo.jpg" alt="Logo" class="logo" />
        <p className='p1'>Select Category</p>
        <Link to="/" className="link">Back to Home</Link>
      </div>
      <div className="category-list">
        {categories.map(category => (
          <div key={category.id} className="category-item">
            <a href={category.redirect}>
              <img src={category.image} alt={category.name} className='category_img' />
            </a>
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    
    </>

  );
};

export default category;
