
import { Table, Column, Model, DataType } from 'sequelize-typescript';
// import { DataType } from 'sequelize-typescript';
@Table
export class addCourse extends Model {
  @Column
  courseName: string;

  @Column
  courseDuration:string;

  @Column
  courseFees: string;

  @Column({
      type: DataType.STRING(5000)
  })
  courseInformation:string;

  @Column({
    type: DataType.STRING(5000)
    })
  courseDescription:string;
  
}