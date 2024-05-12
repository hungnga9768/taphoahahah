import Danhmuc from "./component/product.js";
import Home from "./component/home.js";
import ProductDetails from "./component/ProductDetails.js";

const routes = [
    { path: '/', component: Home },
    { path: '/danhmuc/:mn1/:mn2?', component: Danhmuc },
    { path: '/sanpham/:SP', component: ProductDetails }
];

export default routes;
