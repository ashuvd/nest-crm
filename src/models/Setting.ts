import { Column, DataType, Model, Table } from 'sequelize-typescript';


@Table({
  tableName: 'settings'
})
export default class Setting extends Model<Setting> {
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
  ip: string

  @Column({
    type: DataType.INTEGER,
    allowNull: false
  })
  port: number
}

export class CreateSettingDto {
  ip: string;
  port: number;
}
