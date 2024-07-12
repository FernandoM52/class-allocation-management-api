import Allocation from '#models/allocation'
import Student from '#models/student'
import { createStudentValidator, updateStudentValidator } from '#validators/student'
import type { HttpContext } from '@adonisjs/core/http'

export default class StudentsController {
  async store({request, response}: HttpContext) {
    const data = request.body()
    const validatedData = await createStudentValidator.validate(data)
    const student = await Student.create(validatedData)
    response.created(student)
  }

  async show({ params, response }: HttpContext) {
    const student = await Student.findByOrFail('id', params.id)
    response.ok(student)
  }

  async update({ params, request, response }: HttpContext) {
    const student = await Student.findByOrFail('id', params.id)
    const uptatedStudent = await request.validateUsing(updateStudentValidator)
    await student.merge(uptatedStudent).save()
    response.ok(student)
  }

  async destroy({ params, response }: HttpContext) {
    const student = await Student.findByOrFail('id', params.id)
    await student.delete()
    response.ok(student)
  }

  async getAllClasses({ params, response }: HttpContext) {
    const allocations = await Allocation.query().where('student_id', params.id).preload('class')
    const classes = allocations.map(allocation => allocation.class)
    return response.ok(classes)
  }
}
