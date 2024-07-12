import factory from '@adonisjs/lucid/factories'
import Professor from '#models/professor'
import { ClassFactory } from './class_factory.js'
import Roles from '#enums/roles'

export const ProfessorFactory = factory
  .define(Professor, async ({ faker }) => {
    return {
      fullName: faker.person.fullName(),
      email: faker.internet.email(),
      enrollment: faker.string.uuid(),
      birth: faker.date.birthdate(),
      roleId: Roles.PROFESSOR,
    }
  })
  .relation('class', () => ClassFactory)
  .build()
