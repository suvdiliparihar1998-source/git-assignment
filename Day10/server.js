// 1.Importing express
const express = require(`express`);

const userRouter = require(`./routes/user`);
const auth = require(`./utils/auth`);

// 2.Create express app
const app = express();

// 4.Middleware
app.use(express.json());
app.use(auth.authUser); //Middleware
app.use("/users", userRouter);

// 3.Run app
app.listen(`3000`, `localhost`, () => {
  console.log(`Server started on port 3000`);
});
