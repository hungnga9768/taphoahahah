import SP from "../view/productdetails.js";
import Database from "../database.js";
const ProductDetails = {
    template: SP,
    data() {
        return {
            dulieu: [],
            danhmuccon: [],
            DANHMUCCON: [],
            menugoc: [],
            checkmenu1: 'trang chủ',
            listSP: {},
            product: {},
            checkSP: {}
        }
    },
    methods: {
        async fetchandint() {
            let datasheet = await Database()
            this.checkSP = this.$route.params.SP;
            const productInfo = datasheet
                .filter((value) => value.c[2].v === this.checkSP)
            this.product = productInfo
            console.log(productInfo[0].c[1].v);
            this.listSP = datasheet
                .filter((value) => value.c[1].v === productInfo[0].c[1].v)

            console.log(this.listSP);
            this.danhmuccon = this.listSP
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

};
export default ProductDetails