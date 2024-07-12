import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import Professor from './professor.js'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Student from './student.js'

export default class Role extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(() => Professor)
  declare professor: HasMany<typeof Professor>

  @hasMany(() => Student)
  declare student: HasMany<typeof Student>
}
