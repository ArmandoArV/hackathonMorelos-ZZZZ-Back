const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const investRouter = require("./routes/invest");
const aforeRoutes = require("./routes/afore");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/", userRouter);
app.use("/", investRouter);
app.use("/", aforeRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
