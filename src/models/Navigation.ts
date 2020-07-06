import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table({
  tableName: 'navigations'
})
export default class Navigation extends Model<Navigation> {
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
  url: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
  icon: string
}

export class CreateNavigationDto {
  name: string;
  url: string;
  icon: string;
}
