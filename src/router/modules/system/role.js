import Layout from '@/layout'

const RoleRouter = {
    path: '/role/',
    component: Layout,
    redirect: '/role/page',
    name: 'SystemAdmin',
    meta: {
        title: '管理员相关',
        icon: 'Table'
    },
    children: [
        {
            path: 'page',
            component: () => import('@/views/system/role/page/index'),
            name: 'SystemAdminPage',
            meta: { title: '管理员列表', noCache: true }
        },
        {
            path: 'info',
            component: () => import('@/views/system/role/info/index'),
            name: 'SystemAdminInfo',
            meta: { title: '管理员详情', noCache: true },
            hidden: true
        }
    ]
}

export default AdminInfoRouter