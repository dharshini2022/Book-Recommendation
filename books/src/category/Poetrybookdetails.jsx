import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Poetrybook = () => {
    const {title} = useParams()
  const [book, setBook] = useState({}); 
  useEffect(() => {
    const fetchBookDetails = async () => {
      try {
        const id = title; 
        var res = await axios.get(`http://localhost:4000/poetry/${id}`)
        console.log(res)
        setBook(res.data);
        
      } catch (error) {
        console.error('Error fetching book details:', error);
      }
    };

fetchBookDetails();
  }, []);

  return (
    <>
    <div className="header">
        <img src="/logo.jpg" alt="Logo" className="logo" />
        <p className="p1">{book.title}</p>
        <Link to="/poetry" className="link">
          Back to Poetry
        </Link>
      </div>
      <div className="indi_container">
        <div className="indi_image-container">
        <img src={book.thumbnail} alt={book.title} className='indi_img'/>
        </div>
        <div className="indi_details-container">
          <h1>{book.title}</h1>
          <p className='p4'><b>Authors:</b> {book.authors}</p>
          <p className='p4'><b>Description:</b> {book.description}</p>
          <p className='p4'><b>Published Year:</b> {book.published_year}</p>
          <p className='p4'><b>Number of Pages:</b> {book.num_pages}</p>
          <p className='p4'><b>Average Rating:</b> {book.average_rating}</p>
          <p className='p4'><b>Ratings Count:</b> {book.ratings_count}</p>
        </div>
    </div>
    </>
    
  );
};

export default Poetrybook;