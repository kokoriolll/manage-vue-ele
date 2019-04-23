/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/layout'

const examsRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'Exam',
  meta: {
    title: 'examination',
    icon: 'user'
  },
  children: [
    {
      path: 'adduser',
      component: () => import('@/views/exam/adduser/adduser'),
      name: 'adduser',
      meta: { title: 'Addusers', noCache: true ,view_id: "main-addUser"}
    },
    {
      path: 'userShow',
      component: () => import('@/views/exam/adduser/userShow'),
      name: 'userShow',
      meta: { title: 'userdisplay', noCache: true ,view_id: "main-showUser"}
    }
  ]
}

export default examsRouter
