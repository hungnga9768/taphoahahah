const SP = `<div id="container">
<div class="grid wide">
    <div class="row ">
        <div class="nav-title-wrap l-12">
            <a href="">trang chu</a>
            <span>/</span>
            <a href="">danh muc</a>
        </div>
    </div>
    <div class="ProductDetailPage row">
        <div class=" l-9 col">
            <div class="ProductDetailPage__content-wrap row Product__padding">
                <div class="ProductDetailPage__img l-4 col"><img :src=" product[0].c[4].v" alt="">
                </div>
                <div class="l-8 ">
                    <div class="ProductDetailPage__content">
                        <h1 class="product__title">{{product[0].c[2].v}}</h1>
                        <div class="product__price">{{product[0].c[3].v}}</div>
                        <div class="product__quandity-wrap">
                            <div class="shop__SP__quandity">
                                <div class="shop__SP__quandity__plus  " @click.prevent="product[0].c[5].f >1?product[0].c[5].f=parseInt(product[0].c[5].f) - 1:product[0].c[5].f=1">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <input type="number" class="shop__SP__quandity__number" v-model="product[0].c[5].f"  min="0">
                                <div class="shop__SP__quandity__minus " @click.prevent="product[0].c[5].f=parseInt(product[0].c[5].f)+ 1">
                                    <i class="fa-solid fa-plus" ></i>
                                </div>
                            </div>
                            <button class="btn">them vao gio hang</button>
                        </div>
                        <div class="product__describe-wrap">
                            <div class="product__describe__tilte">Mô tả</div>
                            <div class="product__describe__content">{{product[0].c[6] ? product[0].c[6].v : ''}}</div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-for="(category,categoryIndex) in danhmuccon" :key="categoryIndex"
                class="menu-listSP ">
                <div class="menu-listSP__titel-wrap">
                    <h2 class="menu-listSP__titel">{{category}}</h2>
                    <div class="menu-listSP__link">xem them</div>
                </div>
                <div class="row">
                    <div v-for="(item,index) in listSP" :key="index" v-if="item.c[1].v==category"
                        class="col l-2-4git --version m-3 s-6">
                        <router-link class="shop__SP" :to="'/sanpham/' + item.c[2].v">
                            <div :style="{ backgroundImage: 'url(' + item.c[4].v + ')' }"
                                class="shop__SP__img">
                            </div>
                            <span class="shop__SP__textcontent">{{item.c[2].v}}</span>
                            <div class="shop__SP__wrap-giaca">

                                <span class="shop__SP__wrap-giaca__sale">{{item.c[3].v}}</span>

                            </div>
                            <div class="shop__SP__quandity">
                                <div class="shop__SP__quandity__plus "
                                    @click.prevent="item.c[5].f >1?item.c[5].f=parseInt(item.c[5].f) - 1:item.c[5].f=1">
                                    <i class="fa-solid fa-minus"></i>
                                </div>
                                <input type="number" @click.prevent="a"
                                    class="shop__SP__quandity__number" v-model="item.c[5].f" min="0">
                                <div class="shop__SP__quandity__minus "
                                    @click.prevent="item.c[5].f=parseInt(item.c[5].f)+ 1"><i
                                        class="fa-solid fa-plus"></i>
                                </div>
                            </div>
                            <div class="shop__SP__addcart">
                                <button class="btn">Thêm vào giỏ hàng</button>
                            </div>


                        </router-link>
                    </div>
                </div>
            </div>

        </div>
        <div class=" l-3 col">
            <div class="ProductDetailPage__introduction">
                <ul class="ProductDetailPage__introduction__list">
                    <li class="ProductDetailPage__introduction__item">
                        <i class="fa-solid fa-truck-fast"></i>
                        giao hàng nhanh
                    </li>
                    <li class="ProductDetailPage__introduction__item">
                        <i class="fa-solid fa-arrows-spin"></i>
                        đổi trả miễn phí
                    </li>
                    <li class="ProductDetailPage__introduction__item">
                        <i class="fa-solid fa-money-bill-1-wave">
                        </i>
                        thanh toán kho nhận hàng
                    </li>
                    <li class="ProductDetailPage__introduction__item">
                        <i class="fa-solid fa-phone-volume"></i>
                        liên hệ nhanh
                    </li>

                </ul>
            </div>

        </div>
    </div>
</div>
</div>`
export default SP