import { StudentApplyStatus } from "../../../../../core/domain/entity/student-apply-status";
import { MealApplyRepository } from "../../../../../core/domain/repository/meal-apply-repository";
import { TypeOrmMealApplyRepository } from "../../repository/typeorm-meal-apply-repository";
import { getCustomRepository } from "typeorm";

export class MealApplyRepositoryAdapter implements MealApplyRepository {
    
    private typeormMealApplyRepository: TypeOrmMealApplyRepository = getCustomRepository(TypeOrmMealApplyRepository);

    public async findMealApplyStatus(grade: string, cls: string): Promise<StudentApplyStatus[]> {
        return this.typeormMealApplyRepository.findMealApplyStatus(grade, cls);
    }
}