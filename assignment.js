const express = require("express");
const app = express();
const PORT = 9000;

// Middleware to parse form data
app.use(express.urlencoded({ extended: true }));

// Serve signup form
app.get("/", (req, res) => {
  res.send(`
    <h2>Sign Up Form</h2>
    <form method="POST" action="/signup">
      Name: <input type="text" name="name" /><br/><br/>
      Email: <input type="email" name="email" /><br/><br/>
      Password: <input type="password" name="password" /><br/><br/>
    <button type="submit">Sign Up</button>
    </form>
  `);
});

// Handle form submission
app.post("/signup", (req, res) => {
  const { name, email, password } = req.body;

  // ✅ Print in console
  console.log("Form Data:");
  console.log("Name:", name);
  console.log("Email:", email);
  console.log("Password:", password);

  // ✅ Send data to another page
  res.send(`
    <h2>Signup Successful</h2>
    <p>Name: ${name}</p>
    <p>Email: ${email}</p>
    <p>Password: ${password}</p>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


// const express = require("express");
// const app = express();
// const PORT = 3000;

// // Home page with form (GET method)
// app.get("/", (req, res) => {
//   res.send(`
//     <h2>Sign Up Form (GET Method)</h2>
//     <form method="GET" action="/welcome">
//       Name: <input type="text" name="name" /><br/><br/>
//       Email: <input type="email" name="email" /><br/><br/>
//       <button type="submit">Submit</button>
//     </form>
//   `);
// });

// // GET route to receive form data
// app.get("/welcome", (req, res) => {

//   // ✅ Get data from query
//   const { name, email } = req.query;

//   // ✅ Print in console
//   console.log("Received Data:");
//   console.log("Name:", name);
//   console.log("Email:", email);

//   // ✅ Show on another page
//   res.send(`
//     <h2>Welcome Page</h2>
//     <p>Name: ${name}</p>
//     <p>Email: ${email}</p>
//   `);
// });

// app.listen(PORT, () => {
//   console.log(`Server running at http://localhost:${PORT}`);
// });