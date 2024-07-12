import factory from '@adonisjs/lucid/factories'
import Allocation from '#models/allocation'
import { ClassFactory } from './class_factory.js'
import { StudentFactory } from './student_factory.js'

export const AllocationFactory = factory
  .define(Allocation, async ({ }) => {
    return {
      studentId: 1,
      classId: 1
    }
  })
  .relation('student', () => StudentFactory)
  .relation('class', () => ClassFactory)
  .build()
