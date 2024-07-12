import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, hasMany } from '@adonisjs/lucid/orm'
import Allocation from './allocation.js'
import type { BelongsTo, HasMany } from '@adonisjs/lucid/types/relations'
import Professor from './professor.js'

export default class Class extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare classNumber: string

  @column()
  declare capacity: number

  @column()
  declare availability: boolean

  @column()
  declare professorId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Professor, {
    foreignKey: 'professorId'
  })
  declare professor: BelongsTo<typeof Professor>

  @hasMany(() => Allocation, {
    foreignKey: 'classId',
  })
  declare allocations: HasMany<typeof Allocation>
}
