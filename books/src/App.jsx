import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { Router } from 'react-router'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from "react-router-dom";
import Login from './Components/Login'
import Home from './Components/Home'
import Category from './Components/category';
import Fiction from './category/fiction';
import NonFiction from './category/non-fiction';
import BioAuto from './category/bioauto';
import Classics from './category/classics';
import Crime from './category/crime';
import Poetry from './category/poetry';
import Fictionbook from './category/Fictionbookdetails';
import Search from './Components/books';
import Poetrybook from './category/Poetrybookdetails';
import NonFictionbook from './category/Nonfiction';
import Bioautobooks from './category/Bioautobookdetails';
import Classicsbook from './category/Classicsbookdetails';
import Crimebook from './category/Crimebookdetails';
import Register from './Components/Register';
import SearchBookDetails from './category/bookDetails';


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/Login' element={<Login />}></Route>
          <Route path='/Register' element={<Register />}></Route>
          <Route path="/category" element={<Category />} />
          <Route path="/fiction" element={<Fiction />} />
          <Route path="/non-fiction" element={<NonFiction />} />
          <Route path="/bioauto" element={<BioAuto />} />
          <Route path="/classics" element={<Classics />} />
          <Route path="/crime" element={<Crime/>} />
          <Route path="/poetry" element={<Poetry/>} />
          <Route path="/books" element={<Search/>} />
          <Route path="/fiction/:title" element={<Fictionbook />} />
          <Route path="/poetry/:title" element={<Poetrybook />} />
          <Route path="/non-fiction/:title" element={<NonFictionbook />} />
          <Route path="/bioauto/:title" element={<Bioautobooks />} />
          <Route path="/classics/:title" element={<Classicsbook />} />
          <Route path="/crime/:title" element={<Crimebook />} />
          <Route path="/books/:title" element={<SearchBookDetails />} />

        </Routes>
    </>
  )
}

export default App
