import { Router } from "express";
import { TodosController } from "./controller";


export class TodoRoutes {
  static get routes(): Router {
    const router = Router();
    const todoController = new TodosController();

    router.get("/", todoController.getTodos);
    router.get("/:id", todoController.getTodoByID);

    router.post("/", todoController.getTodos);

    router.put("/:id", todoController.updateTodo);

    router.delete("/:id", todoController.deleteTodo);





    return router;
  }
}
