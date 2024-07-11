import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'allocations'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.integer('student_id').unsigned().references('users.id')
      table.integer('class_id').unsigned().references('classes.id')
      table.timestamp('created_at')
      table.timestamp('updated_at')
      table.unique(['student_id', 'class_id'])
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}
