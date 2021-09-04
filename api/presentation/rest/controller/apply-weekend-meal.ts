import { MealApplyRepositoryAdapter } from "../../../data/db/typeorm/adapter/repository/meal-apply-repository-adapter";
import { QueryGetStudentApplyStatusUseCase } from "../../../core/usecase/query-get-student-apply-status";
import { CustomHandler } from "../../../presentation/rest/handler";

export class ApplyWeekenMealController {
    
    private queryGetStudentApplyStatusUseCase: QueryGetStudentApplyStatusUseCase 
        = new QueryGetStudentApplyStatusUseCase(new MealApplyRepositoryAdapter());

    public get: CustomHandler = async (req, res) => {
        res.json(await this.queryGetStudentApplyStatusUseCase.excute(req.body));
    }
}