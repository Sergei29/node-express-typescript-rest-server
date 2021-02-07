import { Router } from "express";
import {
  createTodo,
  getTodos,
  getTodoById,
  updateTodo,
  deleteTodo,
} from "../controllers/todos/todos";

const router = Router();

// create new todo route:
router.post("/", createTodo);

// get all todos:
router.get("/", getTodos);

// get all todo by id:
router.get("/:id", getTodoById);

// update todo:
router.patch("/:id", updateTodo);

// delete todo:
router.delete("/:id", deleteTodo);

export default router;
