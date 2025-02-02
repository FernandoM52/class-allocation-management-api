/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import AllocationsController from '#controllers/allocations_controller'
import ClassesController from '#controllers/classes_controller'
import ProfessorsController from '#controllers/professors_controller'
import StudentsController from '#controllers/students_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => 'Server is up and running!')
router.group(() => {
  router.resource('professors', ProfessorsController).only(['store', 'show', 'update', 'destroy'])
  router.resource('students', StudentsController).only(['store', 'show', 'update', 'destroy'])
  router.get('students/:id/classes', [StudentsController, 'getAllClasses'])
  router.resource('classes', ClassesController).only(['store', 'show', 'update', 'destroy'])
  router.resource('allocations', AllocationsController).only(['store', 'show', 'update', 'destroy'])
})
  .prefix('/api')
