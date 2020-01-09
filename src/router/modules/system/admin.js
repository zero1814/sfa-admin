import Layout from '@/layout'

const AdminRouter = {
    path: '/admin/',
    component: Layout,
    redirect: '/admin/page',
    name: 'SystemAdmin',
    meta: {
        title: '管理员相关',
        icon: 'Table'
    },
    children: [
        {
            path: 'page',
            component: () => import('@/views/system/admin/page/index'),
            name: 'SystemAdminPage',
            meta: { title: '管理员列表', noCache: true }
        },
        {
            path: 'info',
            component: () => import('@/views/system/admin/info/index'),
            name: 'SystemAdminInfo',
            meta: { title: '管理员详情', noCache: true },
            hidden: true
        }
    ]
}

export default AdminRouter