import { Repository } from "typeorm";
import { StudentModel } from "../model/student";

export class TypeOrmStudentRepository extends Repository<StudentModel> {
    
}