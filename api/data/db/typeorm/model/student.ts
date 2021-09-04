import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("student")
export class StudentModel {
 
    @PrimaryColumn()
    public id: number;

    @Column()
    public name: string;

    @Column()
    public number: string;
}