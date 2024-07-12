import Class from '#models/class'
import Professor from '#models/professor'
import { createClassValidator, updateClassValidator } from '#validators/class'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClassesController {
  async store({ request, response }: HttpContext) {
    const data = request.body()
    const validatedData = await createClassValidator.validate(data)
    await Professor.findByOrFail('id', validatedData.professorId)
    const classRoom = await Class.create(validatedData)
    response.created(classRoom)
  }

   async show({ params, response }: HttpContext) {
    const classRoom = await Class.findByOrFail('id', params.id)
    response.ok(classRoom)
   }

   async update({ params, request, response }: HttpContext) {
    const classRoom = await Class.findByOrFail('id', params.id)
    const uptatedClass = await request.validateUsing(updateClassValidator)
    await classRoom.merge(uptatedClass).save()
    response.ok(classRoom)
   }

  async destroy({ params, response }: HttpContext) {
    const classRoom = await Class.findByOrFail('id', params.id)
    await classRoom.delete()
    response.ok(classRoom)
  }
}
