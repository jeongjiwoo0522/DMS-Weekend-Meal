import { MealApplyRepository } from "../domain/repository/meal-apply-repository";
import { StudentApplyStatus } from "../domain/entity/student-apply-status";
import * as UseCase from "./usecase";

export class QueryGetStudentApplyStatusUseCase extends UseCase.default<InputValues, OutputValues> {

    constructor(
        private mealApplyStatusRepository: MealApplyRepository
    ) {
        super();
    }

    public async excute({ grade, cls }: InputValues): Promise<OutputValues> {
        return { 
            status: await this.mealApplyStatusRepository.findMealApplyStatus(grade, cls) 
        };
    }
}

export class InputValues implements UseCase.InputValues {
    grade?: number;
    cls?: number;
}

export class OutputValues implements UseCase.OutputValues {
    status: StudentApplyStatus[];
}