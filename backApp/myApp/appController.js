import bcrypt from "bcryptjs";
import { validationResult } from "express-validator";
import regUser from "./authUser.js";
import jwt from "jsonwebtoken";
import { DB_URL } from "../config.js";

const generateAccessToken = (id) => {
  const payload = {
    id,
  };
  return jwt.sign(payload, DB_URL, { expiresIn: "1h" });
};

class AppController {
  async registration(req, res) {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ message: "Registration failed", errors });
      }
      const { username, email, password } = req.body;
      const candidate = await regUser.findOne({ username });
      const candidate2 = await regUser.findOne({ email });
      if (candidate || candidate2) {
        return res.status(400).json({ message: "User exist" });
      }
      const hashPassword = bcrypt.hashSync(password, 5);
      const user = new regUser({
        username,
        email,
        password: hashPassword,
      });
      await user.save();
      res.send(user);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "Registration failed" });
    }
  }

  async login(req, res) {
    const { email, password } = req.body;
    const user = await regUser.findOne({ email });
    if (!user) {
      return res
        .status(400)
        .json({ message: `Can't find the email: ${email}` });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return res.status(400).json({ message: `Invalid password` });
    }
    if (email && validPassword === true) {
      return res.send({
        authuser: { user },
        apiKey: generateAccessToken(user._id),
        expiresIn: 30 * 60 * 1000,
      });
    }
    return res.status(401).send("Login failed");
  }

  async addPost(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ message: " User is not authorized1" });
      }
      const decodedData = jwt.verify(token, DB_URL);
      req.regUser = decodedData;

      const { title, description, source, author, date } = req.body;

      const createdPost = await regUser.findOneAndUpdate(
        { _id: `${decodedData.id}` },
        {
          $addToSet: {
            articles: [
              {
                title: `${title}`,
                source: `${source}`,
                author: `${author}`,
                date: `${date}`,
                description: `${description}`,
              },
            ],
          },
        }
      );
      return res.json(createdPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async editPost(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ message: "User is not authorized1" });
      }
      const decodedData = jwt.verify(token, DB_URL);
      req.regUser = decodedData;

      const { id } = req.params;
      // const { post } = req.body;

      const { post } = req.body;

      const postData = await regUser.updateOne(
        {
          _id: `${decodedData.id}`,
          "articles._id": id,
        },
        {
          $set: {
            "articles.$.title": post.title,
            "articles.$.description": post.description,
            "articles.$.source": post.source,
            "articles.$.author": post.author,
            "articles.$.date": post.date,
          },
        },
        { multi: true }
      );
      return res.json(postData);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async deleteArticle(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ message: "User is not authorized1" });
      }
      const decodedData = jwt.verify(token, DB_URL);
      req.regUser = decodedData;

      const { id } = req.params;
      const deletedArticle = await regUser.findOneAndUpdate(
        { _id: `${decodedData.id}` },
        { $pull: { articles: { _id: id } } }
      );
      return res.json(deletedArticle);
    } catch (e) {
      res.status(500).json(e);
    }
  }

  async getUser(req, res) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) {
        return res.status(403).json({ message: "User is not authorized1" });
      }
      const decodedData = jwt.verify(token, DB_URL);
      req.authUser = decodedData;

      const user = await regUser.findById(decodedData.id);

      if (user) {
        return res.json({ user });
      }
      return res.send(user);
    } catch (e) {
      console.log(e);
      res.status(400).json({ message: "User search failed" });
    }
  }
}

export default new AppController();
