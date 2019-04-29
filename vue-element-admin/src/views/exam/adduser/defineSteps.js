const steps = [
    {
      element: '#addUsers',
      popover: {
        title: '添加用户',
        description: '标题',
        position: 'bottom'
      }
    },
    {
      element: '#box',
      popover: {
        title: '填写位置',
        description: '填写需要添加的内容',
        position: 'bottom'
      }
    },
    {
      element: '#userShow',
      popover: {
        title: '用户展示',
        description: '标题',
        position: 'bottom'
      }
    },
    {
      element: '#nav',
      popover: {
        title: 'tab导航切换',
        description: '点击切换不同内容',
        position: 'bottom'
      }
    },
    {
      element: '#tits',
      popover: {
        title: '数据类型',
        description: '根据tab导航切换不同数据类型',
        position: 'bottom'
      }
    },
    {
      element: '#table',
      popover: {
        title: '数据展示',
        description: '根据tab导航切换不同数据内容',
        position: 'bottom'
      },
      padding: 0
    },
    {
      element: '#pagination',
      popover: {
        title: '分页器',
        description: '点击切换页码，页数',
        position: 'top'
      },
      padding: 0
    }
  ]
  
  export default steps
  