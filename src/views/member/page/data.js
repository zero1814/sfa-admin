import { getData } from "@/api/member/info";

export function data() {
    return {
        data: [],
        loading: true,
        query: {
            realName: "",
            mobile: "",
            email: "",
            level: {
                code: null
            },
            status: {
                code: null
            },
            page: {
                number: 1,
                size: 10,
                total: 10
            }
        },
        levelList: [
            { code: "1", name: "一级会员" },
            { code: "2", name: "二级会员" },
            { code: "3", name: "三级会员" }
        ],
        statusList: [
            { code: "1", name: "正常" },
            { code: "2", name: "注销" },
            { code: "3", name: "冻结" }
        ]
    };
}
export function created() {
    methods.fetchData()
}
export const methods = {
    fetchData() {
        //     getData(this.query)
        //         .then(res => {
        //             if (res.code === 200) {
        //                 this.data = res.data;
        //             } else {
        //                 this.$notify.error({
        //                     title: "错误",
        //                     message: res.message,
        //                     duration: 3
        //                 });
        //             }
        //         })
        //         .catch(err => {
        //             this.$notify.error({
        //                 title: "错误",
        //                 message: err,
        //                 duration: 3
        //             });
        //         });
        //     this.loading = false
    },
    search() {
        this.query.page.number = 1
        this.fetchData()
    },
    showRoles(val) {
        console.log('展示管理员角色列表')
    },
    handleEdit(val) {
        this.$router.push({
            name: 'MemberEdit',
            query: {
                type: val
            }
        })
    },
    handleDelete(val) {
        console.log('code=', val)
    },
    handleSizeChange(val) {
        this.query.page.size = val
        this.fetchData()
    },
    handleCurrentChange(val) {
        this.query.page.number = val
        this.fetchData()
    }
}
