import { RequestHandler } from "express";
import { Todo } from "../../models/todo/todo";

// place to save todos, imitation of the DB:
let TODOS: Todo[] = [];

export const createTodo: RequestHandler = (req, res, next) => {
  const text = (req.body as Record<"text", string>).text;
  const newTodo = new Todo(Math.random().toString(), text);

  TODOS.push(newTodo);
  res.status(201).json(`New todo: ${newTodo.id}`);
};

export const getTodos: RequestHandler = (req, res, next) => {
  res.status(200).json({ todos: TODOS });
};

export const getTodoById: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoById = TODOS.find((todo) => todo.id === todoId);

  if (!todoById) {
    throw new Error(`Not found: ${todoId}`);
  } else {
    res.status(200).json({ todo: todoById });
  }
};

export const updateTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const updatedText = (req.body as Record<"text", string>).text;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    throw new Error(`Not found: ${todoId}`);
  } else {
    TODOS[todoIndex] = new Todo(TODOS[todoIndex].id, updatedText);
    res
      .status(200)
      .json({ message: `Updated: ${todoId}`, updatedTodo: TODOS[todoIndex] });
  }
};

export const deleteTodo: RequestHandler<{ id: string }> = (req, res, next) => {
  const todoId = req.params.id;
  const todoIndex = TODOS.findIndex((todo) => todo.id === todoId);

  if (todoIndex === -1) {
    throw new Error(`Not found: ${todoId}`);
  } else {
    const newTodos = TODOS.filter((todo) => todo.id !== todoId);
    TODOS = newTodos;
    res.status(200).json({ message: `Deleted: ${todoId}` });
  }
};
