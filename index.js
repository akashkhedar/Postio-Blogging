const express = require("express");
const path = require("path");
const connectToMongo = require("./db");
const cookieParser = require("cookie-parser");
const multer = require("multer");
const userAuthenticate = require("./middlewares/userAuthenticate");

connectToMongo();

const app = express();
const PORT = 8000;

app.use(express.urlencoded({ extended: false }));

app.set("view engine", "ejs");
app.set("views", path.resolve("./views"));
app.use(cookieParser());
app.use(userAuthenticate);
app.use(express.static(path.resolve('./public')))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.resolve('./public/uploads'));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.get("/", require("./routes/homeRoute"));
app.get("/login", require("./routes/login"));
app.post("/user/login", require("./routes/userLogin"));
app.get("/signup", require("./routes/signup"));
app.post("/user/signup", require("./routes/userSignup"));
app.get("/logout", require("./routes/logout"));
app.get("/addblog", require("./routes/addBlog"));
app.post("/user/addblog", upload.single('coverImage'), require("./routes/userAddBlog"));
app.post('/user/comment/:id', require('./routes/comment'))

app.listen(PORT, () => {
  console.log(`Server Started at PORT:${PORT}`);
});
