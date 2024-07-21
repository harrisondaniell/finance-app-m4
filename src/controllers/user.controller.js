import bcrypt from "bcrypt";
import { createUser, getAll, getByID } from "../repositorys/user.repository.js";

export const create = async (req, res) => {
  try {
    const hashPassword = await bcrypt.hash(req.body.password, 10);
    req.body.password = hashPassword;
    console.log(hashPassword);
    const user = await createUser(req.body);
    console.log(user);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const get = async (req, res) => {
  try {
    const users = await getAll();
    res.status(200).send(users);
  } catch (error) {
    res.status(400).send(error);
  }
};

export const getId = async (req, res) => {
  try {
    const user = await getByID(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    res.status(400).send(error);
  }
};
