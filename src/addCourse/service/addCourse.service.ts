import { Injectable, Inject, ConsoleLogger } from '@nestjs/common';
import { addCourse } from '../entity/addCourse.entity';
import { Op } from 'sequelize';
// import { Op } from 'sequelize';
// import { Op } from 'sequelize/types';
@Injectable()
export class addCourseService {
  constructor(
    @Inject('CATS_REPOSITORY')
    private addcourse: typeof addCourse
  ) {}

  async addCourse(  courseName,  courseDuration,courseFees,courseInformation,courseDescription): Promise<any> {
    return this.addcourse.create({courseName:courseName,courseDuration:courseDuration,courseFees:courseFees,courseInformation:courseInformation,courseDescription:courseDescription});
  }
  async listingoFCourse():Promise<any>{
    return this.addcourse.findAll()
  }
  async updatingOfCourse(courseName,courseDuration,courseFees,courseInformation,courseDescription,id):Promise<any>{
    return this.addcourse.update({courseName:courseName,courseDuration:courseDuration,courseFees:courseFees,courseInformation:courseInformation,courseDescription:courseDescription},{where:{id:id}})
  }
  async deletingOfCourse(id){
    return this.addcourse.destroy({where:{id:id}})
  }
////from here just experimenting

async listingExperiment(limit,offset){
  if(limit)
  {

  }
  if(limit==""&&offset=="")
  {
return this.addcourse.findAll({limit:2,offset:0})
  }
  if(offset==""){
        return this.addcourse.findAll({limit:limit,offset:0})
  }
  if(limit=="")
  {
  return this.addcourse.findAll({limit:2,offset:2*(offset-1)})
  }
  return this.addcourse.findAll({limit:limit,offset:2*(offset-1)})
}





async listingexperimentnewone(perpage,page,orderByColumn,orderBy){
 
let order = [];

const { _limit, _offset } = this.getPagination(perpage,page);

const sort = [orderByColumn ?orderByColumn : 'createdAt',orderBy ? orderBy : 'DESC'];

 order.push(sort);

return await this.addcourse.findAll<addCourse>(

{

// where: { archived: 'false' },

offset: _offset,

limit: _limit,

order:  order,
// [["courseName", "DESC"]]

});


}







getPagination = (limit, offset) => {

  const _limit = limit ? +limit : 4;

  const _offset = offset ? offset * _limit : 0;
  
  return { _limit, _offset };
  
  };






  async search(searched,columnName):Promise<any>{

    let search=searched?'%'+searched+'%':"% %"

    return await  this.addcourse.findAll({
      where:{courseName:{[Op.substring]:search }} })
 
  }





// async search(searched,columnName):Promise<any>{
//   let search=searched?'%'+searched+'%':"% %"
//   let nameofcolumn=columnName?columnName:"courseName"
//   return await this.addcourse.findAll({where:{nameofcolumn:{[Op.substring]:search}}})
// }

}