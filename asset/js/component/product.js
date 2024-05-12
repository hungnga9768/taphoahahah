
import Database from "../database.js";
import content from "../view/appcontent.js";
const Danhmuc = {
    template: content
    , data() {
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
            this.dulieu = datasheet
            this.listSP = datasheet
            this.checkmenu1 = this.$route.params.mn1;
            var menucap1 = this.dulieu
                .filter((value) => value.c[0].v === this.checkmenu1)
            this.listSP = menucap1
            const menu2 = menucap1.filter((value, index, self) => {
                return self.findIndex((t) => t.c[1].v === value.c[1].v) === index;
            });
            this.DANHMUCCON = menu2
            this.danhmuccon = menu2
                .map((value, index) => value.c[1].v)
                .filter((value, index, self) => self.indexOf(value) === index);
            const menu1active = document.querySelectorAll('.header__nav-item a')
            menu1active.forEach((item) => {
                if (item.innerText == this.checkmenu1) {
                    item.classList.add('nav-item-active')
                }

            })
            if (this.$route.params.mn2) {
                this.checkmenu2 = this.$route.params.mn2
                var listsp = this.dulieu
                    .filter((value) => value.c[1].v === this.checkmenu2)
                this.danhmuccon = listsp
                    .map((value, index) => value.c[1].v)
                    .filter((value, index, self) => self.indexOf(value) === index);
                this.listSP = listsp
                const menu2active = document.querySelectorAll('.container__left__item');
                console.log(menu2active);
                menu2active.forEach((menusp) => {
                    if (menusp.children[0].innerText === this.checkmenu2) {
                        console.log(menusp);
                        menusp.classList.add("container__left__item-active"); // Thay đổi màu nền của phần tử được click thành màu đỏ
                    } else {
                        menusp.classList.remove("container__left__item-active");// Đặt màu cho các phần tử khác
                    }
                });
            } else {
                this.checkmenu2 = []
            }
        },
        hahaha() {
            console.log(this.hihi);
            console.log(this.danhmuccon);

        },

    },
    mounted() {
        this.fetchandint()


    },
    watch: {
        '$route'(to, from) {
            this.fetchandint()
        }
    },

};

export default Danhmuc;
