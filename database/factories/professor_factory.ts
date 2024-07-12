import factory from '@adonisjs/lucid/factories'
import Professor from '#models/professor'
import { ClassFactory } from './class_factory.js'

export const ProfessorFactory = factory
  .define(Professor, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      enrollment: faker.string.uuid(),
      birth: faker.date.birthdate(),
    }
  })
  .relation('class', () => ClassFactory)
  .build()
