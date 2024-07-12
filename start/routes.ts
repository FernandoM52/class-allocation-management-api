/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import ProfessorsController from '#controllers/professors_controller'
import router from '@adonisjs/core/services/router'

router.get('/', async () => 'Server is up and running!')
router.group(() => {
  router.resource('professors', ProfessorsController).only(['store', 'show', 'update', 'destroy'])
  //router.resource('student', ProfessorsController).only()
  //router.resource('student', ProfessorsController).only()
 // router.resource('allocation',ProfessorsController).only()
})
  .prefix('/api')
