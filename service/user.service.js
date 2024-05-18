const connection = require("../helpers/mysql-config");
const jwtMiddleware = require("../middleware/jwt-middleware");

const userService = {
  validateUser: async (email, password) => {
    try {
      const [rows] = await connection.query(
        "SELECT idUser FROM User WHERE email = ? AND password = SHA2(?,224)",
        [email, password]
      );

      if (rows.length > 0) {
        const user = rows[0];

        let token;

        token = jwtMiddleware.generateToken(user.idUsers);

        return {
          token: token,
          message: "Login successful",
          userId: user.idUsers,
        };
      } else {
        throw new Error("Invalid email or password");
      }
    } catch (error) {
      throw error;
    }
  },

  getUsers: async () => {
    try {
      const [rows] = await connection.query("SELECT * FROM User");

      return rows;
    } catch (error) {
      throw error;
    }
  },

  deleteUser: async (idUsers) => {
    try {
      const [rows] = await connection.query(
        "DELETE FROM User WHERE idUser = ?",
        [idUsers]
      );

      return rows;
    } catch (error) {
      throw error;
    }
  },

  getUserById: async (idUsers) => {
    try {
      const [rows] = await connection.query(
        "SELECT * FROM User WHERE idUser = ?",
        [idUsers]
      );

      return rows;
    } catch (error) {
      throw error;
    }
  },

  registerUser: async (
    email,
    password,
    name,
    lastName,
    secondLastName,
    dateOfBirth,
    isFirst,
    Questions_idQuestions
  ) => {
    try {
      // First check if the email already exists
      const [existingUser] = await connection.query(
        "SELECT email FROM User WHERE email = ?",
        [email]
      );

      // If the email is found in the database, throw an error
      if (existingUser.length > 0) {
        throw new Error("Email already in use. Please use a different email.");
      }

      // If the email does not exist, proceed with creating the new user
      const sql =
        "INSERT INTO User (email, password, name, lastName, secondLastName ,dateOfBirth, isFirst, Questions_idQuestions ) VALUES (?, SHA2(?,224), ?, ?, ?, ?, ?, ?)";
      const [rows] = await connection.query(sql, [
        email,
        password,
        name,
        lastName,
        secondLastName,
        dateOfBirth,
        isFirst,
        Questions_idQuestions
      ]);

      return rows;
    } catch (error) {
      throw error;
    }
  },
};

module.exports = userService;
