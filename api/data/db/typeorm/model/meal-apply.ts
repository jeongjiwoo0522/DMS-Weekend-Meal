import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("meal_apply_status")
export class MealApplyModel {

    @Column()
    public name: string;

    @Column()
    public value: string;

    @Column()
    public reason?: string;

    @PrimaryColumn()
    public grade: string;

    @PrimaryColumn()
    public cls: string;

    @PrimaryColumn()
    public number: string;
}