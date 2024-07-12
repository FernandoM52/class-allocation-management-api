import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'classes'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('class_number').notNullable()
      table.integer('capacity').notNullable().defaultTo(35)
      table.boolean('availability').notNullable()
      table.integer('professor_id').unsigned().references('professors.id').notNullable()
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
