
import { Table, Column, Model } from 'sequelize-typescript';
import { DataType } from 'sequelize-typescript';

@Table
export class addCourse extends Model {
  @Column
  courseName: string;

  @Column
  courseDuration:string;

  @Column
  courseFees: string;
  @Column
  courseInformation:string;
  @Column
  courseDescription:string;
  
}