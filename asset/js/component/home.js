import content from "../view/appcontent.js";
import Database from "../database.js";

const Home = {
    template: content,
    data() {
        return {
            dulieu: [],
            danhmuccon: [],
            DANHMUCCON: [],
            menugoc: [],
            checkmenu1: 'trang chủ',
            listSP: {},
            checkmenu2: []
        }
    },
    methods: {
        async fetchandint() {
            let datasheet = await Database()
            var menugocsheet = datasheet.map((item, index) => item.c[0].v)
            this.DANHMUCCON = datasheet.filter((value, index, self) => {
                return self.findIndex((t) => t.c[1].v === value.c[1].v) === index;
            });
            this.menugoc = menugocsheet.filter((value, index, self) => self.indexOf(value) === index);
            //lấy tất cả menu con
            var menucategory = datasheet.map((item, index) => item.c[1].v)
            var menucon = menucategory.filter((value, index, self) => self.indexOf(value) === index);
            this.dulieu = datasheet
            this.listSP = datasheet
            this.danhmuccon = this.DANHMUCCON
                .map((value, index) => value.c[1].v)
                .filter((value, index, self) => self.indexOf(value) === index);
        },
        hahaha() {
            console.log(this.hihi);
            console.log(this.danhmuccon);
        },
    },
    mounted() {
        this.fetchandint()
    }

}
export default Home