/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/approval',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'Markingmanagement',
    icon: 'excel'
  },
  children: [
    {
      path: 'approvals',
      component: () => import('@/views/exam/approval/approval'),
      name: 'approvals',
      meta: { title: 'approvalclass', noCache: true ,view_id: "main-examPaperClassmate"}
    },
    {
      path: 'type',
      component: () => import('@/views/charts/keyboard'),
      name: 'KeyboardChart',
      meta: { title: '批卷', noCache: true ,view_id: "main-23"}
    }
  ]
}

export default examsRouter
