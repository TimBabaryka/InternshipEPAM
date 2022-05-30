import Router from "express";
import appController from "./appController.js";

const appRouter = new Router();

appRouter.post("/registration", appController.registration);
appRouter.post("/login", appController.login);
appRouter.post("/addPost", appController.addPost);

appRouter.post("/editPost/:id", appController.editPost);

appRouter.delete("/deleteArticle/:id", appController.deleteArticle);
appRouter.get("/getUser", appController.getUser);
export default appRouter;
