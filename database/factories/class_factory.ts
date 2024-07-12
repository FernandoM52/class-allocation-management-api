import factory from '@adonisjs/lucid/factories'
import Class from '#models/class'
import { ProfessorFactory } from './professor_factory.js'

export const ClassFactory = factory
  .define(Class, async ({ faker }) => {
    return {
      classNumber: faker.string.numeric(),
      availability: faker.datatype.boolean(),
      professorId: faker.number.int({min: 1, max: 5})
    }
  })
  .relation('professor', () => ProfessorFactory)
  .build()
