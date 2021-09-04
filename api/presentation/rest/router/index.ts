import { Router } from "express";
import { applyWeekendMealRouter } from "./apply-weekend-meal";

export const v1Router = () => {
    const app = Router();
  
    applyWeekendMealRouter(app);
  
    return app;
}