
import { Table, Column, Model } from 'sequelize-typescript';
// import sequelize from 'sequelize';

@Table
export class logintable extends Model {
  @Column
  username: string;
  @Column
  password: string;
  @Column
  fullname: string;
  @Column
  experience:string;
  @Column({
    defaultValue: "user",
  })
  typeofuser:string;

 
 
  

}
