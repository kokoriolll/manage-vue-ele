/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/Additem',
  component: Layout,
  redirect: '/Additem/add',
  name: 'Exam',
  meta: {
    title: 'Additem',
    icon: 'clipboard'
  },
  children: [
    {
      path: 'add',
      component: () => import('@/views/exam/questions/add'),
      name: 'add',
      meta: { title: 'testquestions', noCache: true }
    },
    {
      path: 'classify',
      component: () => import('@/views/exam/questions/classify'),
      name: 'classify',
      meta: { title: 'classification', noCache: true }
    },
    {
      path: 'examin',
      component: () => import('@/views/exam/questions/examin'),
      name: 'examin',
      meta: { title: 'Checktheitem', noCache: true }
    }
  ]
}

export default examsRouter
