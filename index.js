const express = require("express");
const cors = require("cors");
const userRouter = require("./routes/user");
const investRouter = require("./routes/invest");
const aforeRoutes = require("./routes/afore");
const personalInfoRoutes = require("./routes/personalInfo");
const debtRoutes = require("./routes/debt");
const objectiveRoutes = require("./routes/objective");

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.use("/", userRouter);
app.use("/", investRouter);
app.use("/", aforeRoutes);
app.use("/", personalInfoRoutes);
app.use("/", debtRoutes);
app.use("/", objectiveRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
