import Allocation from '#models/allocation'
import AllocationService from '#services/allocation_service'
import { createAllocationValidator } from '#validators/allocation'
import type { HttpContext } from '@adonisjs/core/http'

export default class AllocationsController {
  async store({ request, response }: HttpContext) {
    const data = request.body()
    const validatedData = await createAllocationValidator.validate(data)
    await AllocationService.validatesAllocationCreation(validatedData)
    const allocation = await Allocation.create(validatedData)

    response.created(allocation)
  }

  async show({ params, response }: HttpContext) {
    const allocations = await Allocation.query().where('class_id', params.id).preload('student')
    const students = allocations.map(allocation => allocation.student)
    return response.ok(students)
  }
  async destroy({ params, response }: HttpContext) {
    const allocation = await Allocation.findByOrFail('id', params.id)
    await allocation.delete()
    response.ok(allocation)
  }
}
