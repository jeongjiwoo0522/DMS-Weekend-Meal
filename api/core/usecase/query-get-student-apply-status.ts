import { StudentApplyStatus } from "../../core/domain/student-apply-status";
import * as UseCase from "../../core/usecase";

export class QueryGetStudentApplyStatusUseCase extends UseCase.default<InputValues, OutputValues> {

    public excute(input: InputValues): OutputValues {
        const res: StudentApplyStatus[] = [
            {
                "name": "강한별",
                "value": 3,
                "reason": "",
                "grade": "1",
                "cls": "1",
                "number": "01"
            },
            {
                "name": "김경호",
                "value": 3,
                "reason": "",
                "grade": "1",
                "cls": "1",
                "number": "02"
            } 
        ];
        return { status: res };
    }
}

export class InputValues implements UseCase.InputValues {
    grade?: number;
    cls?: number;
}

export class OutputValues implements UseCase.OutputValues {
    status: StudentApplyStatus[];
}