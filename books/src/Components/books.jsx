import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";

function Book() {

  const [error, setError] = useState(null);
  const [action, setAction] = useState(false);
  const [books, setBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/books")
      .then((response) => {
        setBooks(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  const filteredBooks = books.filter((book) => {
    const titleMatch =
      book.title && book.title.toLowerCase().includes(searchTerm.toLowerCase());
    const authorsMatch =
      book.authors &&
      book.authors.toLowerCase().includes(searchTerm.toLowerCase());
    return titleMatch || authorsMatch;
  });

  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;
  const totalPages = Math.ceil(filteredBooks.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredBooks.slice(indexOfFirstItem, indexOfLastItem);

  

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
            <img src="/logo.jpg" alt="Logo" class="logo" />
            <input type="text" value={searchTerm} onChange={handleInputChange} placeholder="Search for a book title or author" class="search_bar"/>
            <Link to="/" className="link">Back to Home</Link>
            
        </div>
        <div className="books-list">
        {currentItems.map((book) => (
          <div key={book._id} className="books-item">
            <Link to={`/books/${book._id}`}>
              <img src={book.thumbnail} alt={book.title} className="books_img" />
            </Link>
            <div className='books_details'>
              <h3>Title : {book.title} </h3>
              <h3>Author : {book.authors} </h3>
              <h3>Rating : {book.average_rating} / 5</h3>
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
}

export default Book;