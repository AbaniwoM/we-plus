const router = require("express").Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const cookieParser = require("cookie-parser");

// const salt = 10;

// Register
// router.post('/signup', (req, res) => {
//     const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
//     bcrypt.hash(req.body.password.toString(), salt, (err, hash) => {
//        if(err) return res.json({Error: "Error for hashing password"});
//        const values = [
//         req.body.name,
//         req.body.email,
//         hash
//        ]
//        db.query(sql, [values], (err, data) => {
//         if(err) {
//           return res.json({Error: "Inserting data error in server"});
//         }
//         return res.json(data);
//        });
//     });
    
// });
 

//Login
// router.post('/login', (req, res) => {
//    const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
//    db.query(sql, [req.body.email, req.body.password], (err, data) => {
//       if(err) return res.json({Error: "Login error in server"});
//       if(data.length > 0) {
//         bcrypt.compare(req.body.password.toString(), data[0].password, (err, response) => {
//            if(err) return res.json({Error: "Password compare error"});
//            if(response) {
//                 return res.json({Status: "Success"});
//            } else {
//                 return res.json({Error: "Password not matched"});
//            }
//         })  
//       } else {
//         return res.json({Error: "No email existed"});
//       }
//    });
// });

let db = {}

router.post('/signup', (req, res) => {
   const sql = "INSERT INTO login (`name`,`email`,`password`) VALUES (?)";
   const values = [
      req.body.name,
      req.body.email,
      req.body.password
   ]
   db.query(sql, [values], (err, data) => {
      if(err) {
        return res.json("Error");
      }
      return res.json(data);
   });
});

router.post('/login', (req, res) => {
  const sql = "SELECT * FROM login WHERE `email` = ? AND `password` = ?";
  db.query(sql, [req.body.email, req.body.password], (err, data) => {
     if(err) {
       return res.json("Error");
     }
     if(data.length > 0) {
       return res.json("Success");
     } else {
       return res.json("Failed");
     }
  });
});


module.exports = router;