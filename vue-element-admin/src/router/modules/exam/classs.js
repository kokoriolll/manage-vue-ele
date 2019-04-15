/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/class',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'Testquestion',
    icon: 'list'
  },
  children: [
    {
      path: 'classmanage',
      component: () => import('@/views/exam/class/classmanage'),
      name: 'classmanage',
      meta: { title: 'Testquestions', noCache: true }
    },
    {
      path: 'roommanage',
      component: () => import('@/views/exam/class/roommanage'),
      name: 'roommanage',
      meta: { title: 'Classroom', noCache: true }
    },
    {
      path: 'student',
      component: () => import('@/views/exam/class/student'),
      name: 'student',
      meta: { title: 'syudent', noCache: true }
    }
  ]
}

export default examsRouter
