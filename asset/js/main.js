import ProductDetails from "./component/ProductDetails.js";
import routes from "./router.js";


let SHEET_ID = '1hp1ZVZMjlKVP55SFsBrn_VxHWxAapTGb-xlxfzRIkT4'
let SHEET_TITLE = 'Player_Shoes';
let SHEET_RANGE = 'A:G'

let FULL_URL = ('https://docs.google.com/spreadsheets/d/' + SHEET_ID + '/gviz/tq?sheet=' + SHEET_TITLE + '&range=' + SHEET_RANGE);

const router = new VueRouter({

    routes
})

var app = new Vue({
    el: '#app',
    router,
    data: {
        dulieu: [],
        danhmuccon: [],
        DANHMUCCON: [],
        menugoc: [],
        checkmenu1: 'trang chủ',
        listSP: {},
        checkmenu2: []

    },
    methods: {
        fetchandint() {
            let dulieu = {};
            let danhmuconsheet = [];
            fetch(FULL_URL)
                .then(res => res.text())
                .then(rep => {
                    let data = JSON.parse(rep.substr(47).slice(0, -2));
                    let datasheet = data.table.rows
                    console.log(datasheet);
                    //lấy menu cha
                    var menugocsheet = datasheet.map((item, index) => item.c[0].v)
                    this.menugoc = menugocsheet.filter((value, index, self) => self.indexOf(value) === index);
                    //lấy tất cả menu con
                    var menucategory = datasheet.map((item, index) => item.c[1].v)
                    var menucon = menucategory.filter((value, index, self) => self.indexOf(value) === index);
                    this.dulieu = datasheet
                    this.listSP = datasheet
                    this.danhmuccon = menucon
                    this.DANHMUCCON = this.danhmuccon
                    console.log(this.listSP);

                }
                )

        },
        // hahaha() {
        //     console.log(this.hihi);
        //     console.log(this.danhmuccon);

        // },
        // checkmenugoc(value, el) {
        //     if (this.checkmenu1 !== value) {
        //         this.checkmenu1 = value;
        //     }
        //     var menucap1 = this.dulieu
        //         .filter((value) => value.c[0].v === this.checkmenu1)
        //     this.listSP = menucap1
        //     this.danhmuccon = menucap1
        //         .map((value, index) => value.c[1].v)
        //         .filter((value, index, self) => self.indexOf(value) === index);
        //     this.DANHMUCCON = this.danhmuccon
        //     const menuItems = el.target.parentElement.querySelectorAll('.header__nav-item');
        //     menuItems.forEach((menuItem) => {
        //         if (menuItem.innerText === this.checkmenu1) {
        //             menuItem.style.backgroundColor = 'red'; // Thay đổi màu nền của phần tử được click thành màu đỏ
        //         } else {
        //             menuItem.style.backgroundColor = ''; // Đặt màu cho các phần tử khác
        //         }
        //     });
        // },
        // getSP(value, el) {
        //     this.checkmenu2 = value
        //     console.log(typeof this.checkmenu2);
        //     var listsp = this.dulieu
        //         .filter((value) => value.c[1].v === this.checkmenu2)
        //     this.danhmuccon = listsp
        //         .map((value, index) => value.c[1].v)
        //     this.listSP = listsp
        //     console.log(listsp);
        //     const menulistSP = el.target.parentElement.querySelectorAll('.container__left__item');
        //     menulistSP.forEach((menusp) => {
        //         if (menusp.innerText === this.checkmenu2) {
        //             menusp.classList.add("container__left__item-active"); // Thay đổi màu nền của phần tử được click thành màu đỏ
        //         } else {
        //             menusp.classList.remove("container__left__item-active");// Đặt màu cho các phần tử khác
        //         }
        //     });
        // },
    },
    mounted() {
        this.fetchandint()

    }


});


