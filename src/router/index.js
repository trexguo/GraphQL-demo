import { graphiqlKoa, graphqlKoa } from 'graphql-server-koa'
import { fetchInfo, saveInfo } from '../controllers/info'
import { fetchStudent, fetchStudentDetail, saveStudent } from '../controllers/student'
import { fetchCourse, saveCourse } from '../controllers/course'

import schema from '../graphql/schema'

const router = require('koa-router')()

router.post('/saveinfo', saveInfo)
    .get('/info', fetchInfo)
    .post('/savestudent', saveStudent)
    .get('/student', fetchStudent)
    .get('/studentDetail', fetchStudentDetail)
    .post('/savescourse', saveCourse)
    .get('/course', fetchCourse)

router.post('/graphql', async (ctx, next) => {
  await graphqlKoa({ schema: schema })(ctx, next)
})
    .get('/graphql', async (ctx, next) => {
      await graphqlKoa({ schema: schema })(ctx, next)
    })
    .get('/graphiql', async (ctx, next) => {
      await graphiqlKoa({ endpointURL: '/graphql' })(ctx, next)
    })

module.exports = router
