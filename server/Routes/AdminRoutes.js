import express from 'express';
import jwt from 'jsonwebtoken';
import con from '../utils/db.js'; // Adjust the path based on your actual file structure
import multer from 'multer';
import path from 'path';
// import cb from 'some-module';



const router = express.Router();

router.post('/adminlogin', (req, res) => {
  console.log('Request Body:', req.body);

  const sql = 'SELECT * FROM admin WHERE BINARY email = ? AND BINARY password = ?';
  con.query(sql, [req.body.email, req.body.password], (err, result) => {
    if (err) {
      console.error('Query error:', err);
      return res.json({ loginStatus: false, Error: 'Query error' });
    }

    console.log('Query Result:', result);

    if (result.length > 0) {
      const email = result[0].email;
      const token = jwt.sign({ role: 'admin', email: email }, 'jwt_secret_key', { expiresIn: '1d' });
      res.cookie('token', token);
      return res.json({ loginStatus: true });
    } else {
      console.log('No matching user found.');
      return res.json({ loginStatus: false, Error: 'Wrong email or password' });
    }
  });
});


router.post('/add_category', (req,res) => {
  const sql = "INSERT INTO category (`name`) VALUES (?) "
con.query(sql, [req.body.category], (err,result) => {
  if(err) return res.json({Status: true})
})


})

// Image upload

const storage = multer.diskStorage({
  destination: (req,file,cb) => {
    cb(null, 'Public/Images')
  },
  filename: (req,file,cb) => {
    cb(null,file.filename +"_" + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer ({
  storage: storage
})

// Image upload


router.post('/add_employee',upload.single('image'), (req, res) => {
  const sql =
    "INSERT INTO employee (`name`, `email`, `password`, `address`, `salary`, `category_id`, `image`) VALUES (?, ?, ?, ?, ?, ?, ?)";

  const values = [
    req.body.name,
    req.body.email,
    req.body.password,
    req.body.address,
    req.body.salary,
    req.body.category_id,
    req.file.filename,
  ];

  con.query(sql, values, (err, result) => {
    if (err) return res.json({ Status: false, Error: "Query Error" });
    return res.json({ Status: true });
  });
});



router.get('/category', (req, res) => {
  const sql = "SELECT * FROM category";

  con.query(sql, (err, result) => {
    if (err) {
      console.error("Query Error:", err);
      return res.status(500).json({ status: false, error: "Query Error", details: err });
    }

    // Check if there is data in the result
    if (result.length === 0) {
      return res.status(200).json({ status: true, data: [] });
    }

    // Assuming 'result' contains the rows retrieved from the database
    return res.status(200).json({ status: true, data: result });
  });
});



router.get('/employee', (req, res) => {
  const sql = "SELECT * FROM employee";

  con.query(sql, (err, result) => {
    if (err) {
      console.error("Query Error:", err);
      return res.status(500).json({ status: false, error: "Query Error", details: err });
    }

    // Check if there is data in the result
    if (result.length === 0) {
      return res.status(200).json({ status: true, data: [] });
    }

    // Assuming 'result' contains the rows retrieved from the database
    return res.status(200).json({ status: true, data: result });
  });
});

router.get('/employee/:id', (req, res) => {
  const id = req.params.id;
  const sql = "SELECT * FROM employee WHERE id = ?";

  con.query(sql, [id], (err, result) => {
    if (err) {
      console.error("Query Error:", err);
      return res.status(500).json({ status: false, error: "Query Error", details: err });
    }

    // Check if the result array is not empty
    if (result.length > 0) {
      // Send the first (and presumably only) result back to the client
      return res.json({ status: true, data: result[0] });
    } else {
      // If no record is found with the specified ID, send a 404 status
      return res.status(404).json({ status: false, error: "Employee not found" });
    }
  });
});





export { router as adminRouter };
