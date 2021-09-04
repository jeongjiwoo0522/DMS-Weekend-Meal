import { EntityRepository, Repository } from "typeorm";
import { MealApplyModel } from "../model/meal-apply";

@EntityRepository(MealApplyModel)
export class TypeOrmMealApplyRepository extends Repository<MealApplyModel> {
    
    public findMealApplyStatus(grade = 1, cls = 1): Promise<MealApplyModel[]> {
        return this.createQueryBuilder("apply")
        .getMany();
    }
}