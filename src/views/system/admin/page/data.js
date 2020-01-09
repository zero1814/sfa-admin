import { getData } from "@/api/system/admin/info";

export function data() {
    return {
        data: [],
        loading: true,
        roles: [],
        query: {
            realName: null,
            mobile: null,
            email: null,
            type: {
                code: null
            },
            status: {
                code: null
            },
            page: {
                number: 1,
                size: 10,
                total: 0
            }
        },
        typeList: [],
        statusList: []
    }
}

export const methods = {
    fetchData(){

    },
    search() {
        this.query.page.number = 1
        this.fetchData()
    },
    handleEdit(val) {
        this.$router.push({
            name: 'SystemAdminEdit',
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

export function created() { 
    methods.fetchData()
}
