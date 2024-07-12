import factory from '@adonisjs/lucid/factories'
import Allocation from '#models/allocation'
import { ClassFactory } from './class_factory.js'
import { StudentFactory } from './student_factory.js'

export const AllocationFactory = factory
  .define(Allocation, async ({ faker }) => {
    return {
      studentId: faker.number.int({min: 1, max: 15}),
      classId: faker.number.int({ min: 1, max: 5 }),
      professorId: faker.number.int({min: 1, max: 5})
    }
  })
  .relation('student', () => StudentFactory)
  .relation('class', () => ClassFactory)
  .build()
