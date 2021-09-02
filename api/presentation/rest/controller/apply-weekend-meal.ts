import { QueryGetStudentApplyStatusUseCase } from "../../../core/usecase/query-get-student-apply-status";
import { CustomHandler } from "../../../presentation/rest/handler";

export class ApplyWeekenMealController {
    
    private queryGetStudentApplyStatusUseCase: QueryGetStudentApplyStatusUseCase = new QueryGetStudentApplyStatusUseCase();

    public get: CustomHandler = (req, res) => {
        res.json(this.queryGetStudentApplyStatusUseCase.excute(req.body));
    }
}