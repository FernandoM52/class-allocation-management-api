import vine from '@vinejs/vine'

export const createStudentValidator = vine.compile(
  vine.object({
    fullName: vine.string().maxLength(100),
    email: vine.string().email().normalizeEmail().unique(async (db, value, _field) => {
      const result = await db.from('professors').select('id').where('email', value)
      return result.length ? false : true
    }),
    enrollment: vine.string().uuid(),
    birth: vine.date({formats: ['DD-MM-YYYY']}),
  })
)

export const updateStudentValidator = vine.compile(
  vine.object({
    fullName: vine.string().maxLength(100).optional(),
    email: vine.string().email().normalizeEmail().unique(async (db, value, _field) => {
      const result = await db.from('professors').select('id').where('email', value)
      return result.length ? false : true
    }).optional(),
    enrollment: vine.string().uuid().optional(),
    birth: vine.date({formats: ['DD-MM-YYYY']}).optional(),
  })
)
