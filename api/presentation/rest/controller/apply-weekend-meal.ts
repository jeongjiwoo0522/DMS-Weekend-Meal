import { MealApplyRepositoryAdapter } from "../../../data/db/typeorm/adapter/repository/meal-apply-repository-adapter";
import { QueryGetStudentApplyStatusUseCase } from "../../../core/usecase/query-get-student-apply-status";
import { CustomHandler } from "../../../presentation/rest/handler";
import { DownStuentApplyStatus } from "../../../core/usecase/download-student-apply-status";

export class ApplyWeekenMealController {
    
    private queryGetStudentApplyStatusUseCase: QueryGetStudentApplyStatusUseCase 
        = new QueryGetStudentApplyStatusUseCase(new MealApplyRepositoryAdapter());

    private downloadStudentApplyStatus: DownStuentApplyStatus 
        = new DownStuentApplyStatus(new MealApplyRepositoryAdapter());

    public get: CustomHandler = async (req, res) => {
        res.json(await this.queryGetStudentApplyStatusUseCase.excute(req.query));
    }

    public getDownload: CustomHandler = async (req, res) => {
        const response = await this.downloadStudentApplyStatus.excute(req.query);
        return res.redirect(response.redirect);
    }
}