import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Allocation from './allocation.js'
import Role from './role.js'

export default class Student extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare fullName: string

  @column()
  declare email: string

  @column()
  declare enrollment: string

  @column()
  declare birth: Date

  @column()
  declare roleId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Allocation, {
    foreignKey:'studentId',
  })
  declare allocation: HasMany<typeof Allocation>

   @belongsTo(() => Role, {
   foreignKey: 'roleId',
  })
  declare role: BelongsTo<typeof Role>
}
