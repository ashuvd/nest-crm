import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table({
  tableName: 'courses'
})
export default class Course extends Model<Course> {
  @Column({
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    unique: true
  })
  id: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  name: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  description: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  price: number
}

export class CreateCourseDto {
  name: string;
  description: string;
  price: number;
}
