import { AllocationFactory } from '#database/factories/allocation_factory'
import { ClassFactory } from '#database/factories/class_factory'
import { ProfessorFactory } from '#database/factories/professor_factory'
import { StudentFactory } from '#database/factories/student_factory'
import Roles from '#enums/roles'
import Role from '#models/role'
import { BaseSeeder } from '@adonisjs/lucid/seeders'

export default class extends BaseSeeder {
  static environment: ['development', 'testing']

  async run() {
    await Role.createMany([
      {
        id: Roles.PROFESSOR,
        name: 'Professor',
      },
      {
        id: Roles.STUDENT,
        name: 'Student',
      },
    ])
    await ProfessorFactory.createMany(5)
    await StudentFactory.createMany(15)
    await ClassFactory.createMany(5)
    await AllocationFactory.create()
  }
}
