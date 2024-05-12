let content = `<div id="container">
    <div class="grid wide ">
        <div class="row app-content">
            <div class="col l-2 m-0 s-0">
                <div class="container__left">
                    <h3 class="container__left__header"> <i
                            class="container__left__header--icon fas fa-list"></i>Danh mục</h3>
                    <ul class="container__left__list">

                    <li v-for="(dulieu,index) in DANHMUCCON" :key="index" class="container__left__item "
                   >
                    <router-link class="container__left__item-link" :to="'/danhmuc/'+ dulieu.c[0].v + '/'+ dulieu.c[1].v">{{dulieu.c[1].v}}</router-link></li>
                    </ul>
                </div>
            </div>
            <div class="col l-10 m-12 s-12">
                <div class="container__right__nav__wrap hidden-to-mobile-tablet">


                    <span class="nav__wrap__sapxep">Sắp xếp theo</span>
                    <button class=" btn nav__wrap__btn-popular">Phổ Biến</button>
                    <button @click="hahaha" class=" btn nav__wrap__btn-new">Mới nhất</button>
                    <button class=" btn nav__wrap__btn-trenning">Bán chạy</button>

                    <div class="nav__wrap__search">
                        <span class=" nav__wrap__search__rate">Giá</span>
                        <i class="nav__wrap__search__icon  fas fa-angle-down"></i>
                        <ul class="nav__wrap__search__list">
                            <li class=" nav__wrap__search__item ">Giá: thấp đến cao</li>
                            <li class=" nav__wrap__search__item ">Giá: cao đến thấp </li>
                        </ul>
                    </div>

                    <div class="nav__wrap__wire-oder">
                        <span class="wire-oder__number"><span class="wire-oder__number-first">1</span>/14
                        </span>
                        <a class=" wire-oder__link wire-oder__link__left" href="">
                            <i class="fas fa-angle-left"></i>
                        </a>
                        <a class="wire-oder__link  " href="">
                            <i class="fas fa-angle-right"></i>
                        </a>
                    </div>
                </div>
                <div class="container__right__listSP">
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
                                            class="shop__SP__quandity__number" v-model="item.c[5].f"
                                            min="0">
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
                <div class="pagination hidden-to-mobile">
                    <ul class="pagination__list">
                        <li class="pagination__list__item-number">
                            <a href="" class="pagination__list__item__link"><i
                                    class="fas fa-angle-left"></i></a>
                        </li>
                        <li class="pagination__list__item-number pagination__list__item-number-color"><a
                                href="">1</a></li>
                        <li class="pagination__list__item-number"><a
                                class="pagination__list__item-number__link-color " href="">2</a></li>
                        <li class="pagination__list__item-number"><a href="">3</a></li>
                        <li class="pagination__list__item-number"><a href="">4</a></li>
                        <li class="pagination__list__item-number"><a href="">...</a></li>
                        <li class="pagination__list__item-number"><a href="">14</a></li>
                        <li class="pagination__list__item-number">
                            <a href="" class="pagination__list__item__link"> <i
                                    class="fas fa-angle-right"></i></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    </div>`

export default content