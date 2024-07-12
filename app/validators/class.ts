import vine from '@vinejs/vine'

export const createClassValidator = vine.compile(
  vine.object({
    classNumber: vine.string(),
    capacity: vine.number().positive(),
    availability: vine.boolean(),
    professorId: vine.number().positive(),
  })
)

export const updateClassValidator = vine.compile(
  vine.object({
    classNumber: vine.string().optional(),
    capacity: vine.number().positive().optional(),
    availability: vine.boolean().optional(),
  })
)
