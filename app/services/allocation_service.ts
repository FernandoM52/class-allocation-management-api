import Allocation from "#models/allocation";
import Class from "#models/class";
import Professor from "#models/professor";
import { createAllocationValidator } from "#validators/allocation";
import { Infer } from "@vinejs/vine/types";

export default class AllocationService {
  static async validatesAllocationCreation({ professorId, studentId, classId }: Infer<typeof createAllocationValidator>) {
    await Professor.findByOrFail('id', professorId)
    const classRoom = await Class.query().where('id', classId).where('professor_id', professorId).first()
    if (!classRoom) return { error: 'O professor não criou essa sala' }
    if(classRoom.availability === false) return {error: 'Sala está cheia'}

    const studentAlreadyAllocated = await Allocation.query().where('student_id', studentId).where('class_id', classId).first()
    if (studentAlreadyAllocated) return { error: 'O aluno já está alocado nesta sala' }
    await classRoom.merge({capacity: classRoom.capacity - 1}).save()
  }
}
