import { StudentApplyStatus } from "../entity/student-apply-status";

export interface MealApplyRepository {

    findMealApplyStatus(grade: number, cls: number): Promise<StudentApplyStatus[]>;
}