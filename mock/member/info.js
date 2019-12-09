import Mock from 'mockjs'

const List = []
const count = 100

const Random = Mock.Random
Random.extend({
    level: function (date) {
        var levels = ['一级会员', '二级会员', '三级会员', '至尊会员']
        return this.pick(levels)
    }
})

Random.extend({
    status: function (date) {
        var statusList = ['正常', '注销', '冻结']
        return this.pick(statusList)
    }
})

for (let i = 0; i < count; i++) {
    List.push(Mock.mock({
        id: '@increment',
        realName: '@cname',
        nickName: '@cname',
        mobile: '',
        eMail: '@email',
        level: {
            name: '@LEVEL'
        },
        status: {
            name: '@STATUS'
        },
        createTime: '@datetime("yyyy-MM-dd HH:mm:ss")',
        updateTime: '@datetime("yyyy-MM-dd HH:mm:ss")'
    }))
}

export default [
    //获取会员列表
    {
        url: '/member/page',
        type: 'post',
        response: config => {
            const { realName, eMail, level, status, number = 1, size = 10 } = config.query
            let mockList = List.filter(item => {
                if (realName && item.realName !== realName) return false
                if (eMail && item.eMail !== eMail) return false
                if (level && item.level.name !== level) return false
                if (status && item.status.name !== status) return false
                return true
            })
            const pageList = mockList.filter((item, index) => index < size * number && index >= size * (number - 1))

            return {
                code: 200,
                data: {
                    total: mockList.length,
                    data: pageList
                }
            }
        }
    },
    //获取会员信息
    {
        url: '/member/info',
        type: 'get',
        response: config => {
            const { id } = config.query
            for (const member of List) {
                if (member.id === +id) {
                    return {
                        code: 200,
                        data: member
                    }
                }
            }
        }
    }
]

