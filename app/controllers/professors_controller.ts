 import Professor from '#models/professor'
import { createProfessorValidator, updateProfessorValidator } from '#validators/professor'
import type { HttpContext } from '@adonisjs/core/http'

export default class ProfessorsController {
  async store({request, response}: HttpContext) {
    const data = request.body()
    const validatedData = await createProfessorValidator.validate(data)
    const professor = await Professor.create(validatedData)
    response.created(professor)
  }

  async show({ params, response }: HttpContext) {
    const professor = await Professor.findByOrFail('id', params.id)
    response.ok(professor)
  }

  async update({ params, request, response }: HttpContext) {
    const professor = await Professor.findByOrFail('id', params.id)
    const uptatedProfessor = await request.validateUsing(updateProfessorValidator)
    await professor.merge(uptatedProfessor).save()
    response.ok(professor)
  }

  async destroy({ params, response }: HttpContext) {
    const professor = await Professor.findByOrFail('id', params.id)
    await professor.delete()
    response.ok(professor)
  }
}
