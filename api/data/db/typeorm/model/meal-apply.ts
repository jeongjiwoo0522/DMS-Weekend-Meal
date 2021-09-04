import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("meal_apply")
export class MealApplyModel {

    @PrimaryColumn()
    public student_id: string;

    @Column()
    public value: number;

    @Column()
    public reason?: string;
}