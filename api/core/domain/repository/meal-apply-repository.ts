import { StudentApplyStatus } from "../entity/student-apply-status";

export interface MealApplyRepository {

    findMealApplyStatus(grade: string, cls: string): Promise<StudentApplyStatus[]>;
}