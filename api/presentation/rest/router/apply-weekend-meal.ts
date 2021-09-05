import { Router } from "express";
import { ApplyWeekenMealController } from "../../../presentation/rest/controller";

const router = Router();

export const applyWeekendMealRouter = (app: Router) => {
    const applyWeekendMealController: ApplyWeekenMealController = new ApplyWeekenMealController();

    app.use("/apply/weekend-meal", router);

    router.get("/", applyWeekendMealController.get);
    router.get("/download", applyWeekendMealController.getDownload);
}