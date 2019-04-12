/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/approval',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'Markingmanagement',
    icon: 'chart'
  },
  children: [
    {
      path: 'approvals',
      component: () => import('@/views/exam/approval/approval'),
      name: 'approvals',
      meta: { title: 'approvalclass', noCache: true }
    },
    {
      path: 'type',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: '批卷', noCache: true }
    }
  ]
}

export default examsRouter
