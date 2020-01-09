import adminRouter from './admin'
const SystemRouter = {
	path: '',
	name: '系统相关',
	component: () => import('@/views/commons/index'),
	meta: {
		title: '系统相关',
		icon: 'table'
	},
	children: [ adminRouter ]
}

export default SystemRouter
