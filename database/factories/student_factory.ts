import factory from '@adonisjs/lucid/factories'
import Student from '#models/student'
import { AllocationFactory } from './allocation_factory.js'

export const StudentFactory = factory
  .define(Student, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      enrollment: faker.string.uuid(),
      birth: faker.date.birthdate(),
    }
  })
  .relation('allocation', () => AllocationFactory)
  .build()
