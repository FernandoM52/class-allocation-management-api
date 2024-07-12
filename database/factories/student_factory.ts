import factory from '@adonisjs/lucid/factories'
import Student from '#models/student'
import { AllocationFactory } from './allocation_factory.js'
import Roles from '#enums/roles'

export const StudentFactory = factory
  .define(Student, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      enrollment: faker.string.uuid(),
      birth: faker.date.birthdate(),
      roleId: Roles.STUDENT
    }
  })
  .relation('allocation', () => AllocationFactory)
  .build()
