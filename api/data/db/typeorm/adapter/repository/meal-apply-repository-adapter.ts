import { StudentApplyStatus } from "../../../../../core/domain/entity/student-apply-status";
import { MealApplyRepository } from "../../../../../core/domain/repository/meal-apply-repository";
import { TypeOrmMealApplyRepository } from "../../repository/typeorm-meal-apply-repository";
import { getCustomRepository } from "typeorm";

export class MealApplyRepositoryAdapter implements MealApplyRepository {
    
    private typeormMealApplyRepository: TypeOrmMealApplyRepository = getCustomRepository(TypeOrmMealApplyRepository);

    public async findMealApplyStatus(grade: number, cls: number): Promise<StudentApplyStatus[]> {
        const status = await this.typeormMealApplyRepository.findMealApplyStatus(1, 1);
        return status.map(s => ({ 
            name: "asd", 
            value: s.value,
            reason: s.reason,
            grade: "3", 
            cls: "df", 
            number: "1222",
        }));
    }
}