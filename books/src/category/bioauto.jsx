import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


const BioAuto = () => {
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = categories.slice(indexOfFirstItem, indexOfLastItem);

  useEffect(() => {
    axios.get('http://localhost:4000/bioauto')
      .then(response => {
        setCategories(response.data);
        console.log("success");
      })
      .catch(error => {
        console.error('Error fetching categories:', error);
      });
  }, []);

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div className="header">
        <img src="/logo.jpg" alt="Logo" className="logo" />
        <p className="p1">Biography & Auto-Biography</p>
        <Link to="/category" className="link">
          Back to Category
        </Link>
      </div>
      <div className="books-list">
        {currentItems.map(category => (
          <div key={category._id} className="books-item">
            <Link to={`/bioauto/${category._id}`}>
              <img src={category.thumbnail} alt={category.title} className="books_img" />
            </Link>
            <div className='books_details'>
              <h3>Title : {category.title} </h3>
              <h3>Author : {category.authors} </h3>
              <h3>Rating : {category.average_rating} / 5</h3>
            </div>
          </div>
        ))}
      </div>
      <footer>
      <div className="pagination">
        <button className='Pvs_btn'onClick={prevPage} disabled={currentPage === 1}>Previous</button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button className='nxt_but' onClick={nextPage} disabled={currentPage === totalPages}>Next</button>
      </div>

      </footer>
      
    </>
  );
};

export default BioAuto;