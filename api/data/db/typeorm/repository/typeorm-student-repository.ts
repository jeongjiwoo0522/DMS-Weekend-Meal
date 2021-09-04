import { EntityRepository, Repository } from "typeorm";
import { StudentModel } from "../model/student";

@EntityRepository(StudentModel)
export class TypeOrmStudentRepository extends Repository<StudentModel> {
    
}