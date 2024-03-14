// const express = require('express')
// const mongoose = require('mongoose')
// const Book = require('./models/fiction.js');

// const app = express()

// app.use(express.json());

// app.get('/', (req,res) => {
//     res.send("Hello from Node API Server Updated");
// });

// app.get('/api/Books',async(req,res) => {
//     try{
//         const total_books=await Book.find({});
//         res.status(200).json(total_books);

//     }catch(error){
//         res.status(500).json({message: error.message});
//     }
// });

// app.get('/api/Books/:title', async (req, res) => {
//     try {
//         const { title } = req.params;
//         const book = await Book.find({ title: title }); // Query the book by its title
//         if (!book) {
//             return res.status(404).json({ message: 'Book not found' });
//         }
//         res.status(200).json(book); // Send the book as a response
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });



// app.post('/api/Books', async(req,res) => {
//     try{
//         const book = await Book.create(req.body);
//         res.status(200).json(book);
//     }catch(error){
//         res.status(500).json({message: error.message });
//     }
// });


// mongoose.connect("mongodb+srv://dharshinikarthik06:Au7CDSJgBwQnM5Tn@backenddb.m1qlqs0.mongodb.net/Books?retryWrites=true&w=majority&appName=BackendDB")
// .then(() => {
//     console.log("Connected to database!");
//     app.listen(3000,() => {
//         console.log("Server is running on port 3000");
//     });
    
// })
// .catch(() => {
//     console.log("Connection failed");
// })

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoose = require("mongoose");
const User_Detail = require("./models/users");
const cors = require("cors");
const Books = require("./models/fiction");


app.use(bodyParser.json()); // for post
app.use(bodyParser.urlencoded({ extended: true }));
const static = express.static("static");
app.use("/", static);
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/bookRecom")
  .then(() => console.log("Db connected"))
  .catch((err) => console.log("Db connection failed"));


    // Route to fetch data based on category and id
app.get('/fiction/:_id', async (req, res) => {
const { _id } = req.params;

try {
  const book = await Books.findOne({ categories: 'Fiction', _id });
  if (!book) {
    return res.status(404).json({ message: 'Book not found' });
  }
  res.json(book);
} catch (error) {
  console.error(error);
  res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/non-fiction/:_id', async (req, res) => {
  const { _id } = req.params;
  
  try {
    const book = await Books.findOne({ categories: 'Juvenile Nonfiction', _id });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/bioauto/:_id', async (req, res) => {
  const { _id } = req.params;
  
  try {
    const book = await Books.findOne({ categories: 'Biography & Autobiography', _id });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/classics/:_id', async (req, res) => {
  const { _id } = req.params;
  
  try {
    const book = await Books.findOne({ categories: 'History', _id });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/crime/:_id', async (req, res) => {
  const { _id } = req.params;
  
  try {
    const book = await Books.findOne({ categories: 'True Crime', _id });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/poetry/:_id', async (req, res) => {
  const { _id } = req.params;
  
  try {
    const book = await Books.findOne({ categories: 'Poetry', _id });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get("/books", async (req, res) => {
  try {
      const books = await Books.find();
      res.json(books);
  } catch (error) {
      console.error("Error fetching books:", error);
      res.status(500).json({ error: "Error fetching books" });
  }
});

app.get('/books/:_id', async (req, res) => {
  const { _id } = req.params;
  
  try {
    const book = await Books.findOne({_id });
    if (!book) {
      return res.status(404).json({ message: 'Book not found' });
    }
    res.json(book);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.get('/fiction', async (req, res) => {
  try {
    const nonfictionBooks = await Books.find({ categories: 'Fiction' });
    res.json(nonfictionBooks);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

      app.get('/non-fiction', async (req, res) => {
        try {
          const nonfictionBooks = await Books.find({ categories: 'Juvenile Nonfiction' });
          res.json(nonfictionBooks);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

      app.get('/bioauto', async (req, res) => {
        try {
          const bioautoBooks = await Books.find({ categories: 'Biography & Autobiography' });
          res.json(bioautoBooks);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

      app.get('/classics', async (req, res) => {
        try {
          const bioautoBooks = await Books.find({
            $or: [
              { categories: 'Classical fiction' },
              { categories: 'History' },
            ]
          });
          res.json(bioautoBooks);
        } catch (error) {
          console.error('Error fetching bioautoBooks:', error);
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

      app.get('/crime', async (req, res) => {
        try {
          const bioautoBooks = await Books.find({ categories: 'True Crime' });
          res.json(bioautoBooks);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

      app.get('/poetry', async (req, res) => {
        try {
          const bioautoBooks = await Books.find({ categories: 'Poetry' });
          res.json(bioautoBooks);
        } catch (error) {
          res.status(500).json({ error: 'Internal Server Error' });
        }
      });

      app.post('/users',(req,res)=>{
        const{username,name,email,phone,password}=req.body;
        const Details=new User_Detail({
            username,
            name,
            email,
            phone,
            password
        });
        Details.save().then((data)=>res.status(200).json(data))
        .catch((error)=> res.json({
            error:error.message,
        }))
    
      })

      app.post('/login', async (req, res) => {
        try {
            const { username, password } = req.body;
            
            
            const user = await User_Detail.userLogin(username, password);
        
            if (user) {
                res.json({ status: true, message: "Login successful" });
            } else {
                res.json({ status: false, message: "Invalid credentials" });
            }
        } catch (err) {
            console.error(err);
            res.status(500).json({ status: false, message: "Server error" });
        }
      });
      


//   app.get("/users", async (req, res) => {
//     const Use_Details = await User_Detail.find({});
//     res.json(Use_Details);
//   });


//   app.post('/users',(req,res)=>{
//     const{username,name,email,phone,password}=req.body;
//     const Details=new User_Detail({
//         username,
//         name,
//         email,
//         phone,
//         password
//     });
//     Details.save().then((data)=>res.status(200).json(data))
//     .catch((error)=> res.json({
//         error:error.message,
//     }))

//   })

  app.listen(4000,()=>{
    console.log("App Started")
  })