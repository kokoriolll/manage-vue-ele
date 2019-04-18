/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/examination',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'usermanagement',
    icon: 'form'
  },
  children: [{
      path: 'addmination',
      component: () => import('@/views/exam/examination/addmination'),
      name: 'addmination',
      meta: {
        title: 'thetest',
        noCache: true
      }
    },
    {
      path: 'minationlist',
      component: () => import('@/views/exam/examination/minationlist'),
      name: 'minationlist',
      meta: {
        title: 'testlist',
        noCache: true
      }
    },
    {
      path: 'newExam',
      component: () => import('@/views/exam/examination/newExam'),
      hidden: true
    }
  ]
}

export default examsRouter
