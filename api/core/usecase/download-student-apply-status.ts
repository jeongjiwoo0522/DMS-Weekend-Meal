import { excelHook } from "../util/excel";
import { StudentApplyStatus } from "../domain/entity/student-apply-status";
import { MealApplyRepository } from "../domain/repository/meal-apply-repository";
import * as UseCase from "./usecase";
import { Workbook } from "exceljs";

export class DownStuentApplyStatus extends UseCase.default<InputValues, OutputValues> {

    constructor(
        private mealApplyStatusRepository: MealApplyRepository
    ) {
        super();
    }

    public async excute({ grade, cls }: InputValues): Promise<OutputValues> {
        try {
            const status: StudentApplyStatus[] = await this.mealApplyStatusRepository.findMealApplyStatus(grade, cls);
            const fileName: string = await excelHook(grade, cls, status);
            return { redirect: `/static/${fileName}` };
        } catch(err) {
            throw err;
        }
    }
} 

export class InputValues implements UseCase.InputValues {
    grade?: string;
    cls?: string;
}

export class OutputValues implements UseCase.OutputValues {
    redirect: string;
}