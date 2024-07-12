import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Class from './class.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'

export default class Professor extends BaseModel {
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

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Class, {
    foreignKey: 'professorId',
  })
  declare class: HasMany<typeof Class>
}
