import vine from '@vinejs/vine'

export const createAllocationValidator = vine.compile(
  vine.object({
    studentId: vine.number().positive(),
    classId: vine.number().positive(),
    professorId: vine.number().positive(),
  })
)

export const updateAllocationValidator = vine.compile(
  vine.object({
    studentId: vine.number().positive().optional(),
    classId: vine.number().positive().optional(),
  })
)
