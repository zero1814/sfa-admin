import Layout from '@/layout'

const MemberInfoRouter = {
    path: '/member/',
    component: Layout,
    redirect: '/member/page',
    name: 'Member',
    meta: {
        title: '会员相关',
        icon: 'Table'
    },
    children: [
        {
            path: 'page',
            component: () => import('@/views/member/page/index'),
            name: 'MemberPage',
            meta: { title: '会员列表', noCache: true }
        },
        {
            path: 'info',
            component: () => import('@/views/member/info/index'),
            name: 'MemberInfo',
            meta: { title: '会员详情', noCache: true },
            hidden: true
        }
    ]
}