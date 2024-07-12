import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column } from '@adonisjs/lucid/orm'
import { BelongsTo } from '@adonisjs/lucid/types/relations'
import User from './user.js'
import Class from './class.js'

export default class Allocation extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare studentId: number

  @column()
  declare classId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => User, {
    foreignKey: 'studentId',
  })
  declare student: BelongsTo<typeof User>

  @belongsTo(() => Class, {
   foreignKey: 'classId',
  })
  declare class: BelongsTo<typeof Class>
}

