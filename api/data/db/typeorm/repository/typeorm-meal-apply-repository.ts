import { EntityRepository, Repository } from "typeorm";
import { MealApplyModel } from "../model/meal-apply";

@EntityRepository(MealApplyModel)
export class TypeOrmMealApplyRepository extends Repository<MealApplyModel> {
    
    public findMealApplyStatus(grade: string = "1", cls: string = "1"): Promise<MealApplyModel[]> {
        return this.createQueryBuilder("apply")
        .where("apply.grade = :grade", { grade })
        .andWhere("apply.cls = :cls", { cls })
        .getMany();
    }
}