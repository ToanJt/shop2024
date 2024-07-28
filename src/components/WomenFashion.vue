<script setup>
import { Icon } from '@iconify/vue'

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css';
import products from '../products';

const modules = [Navigation]
const onSwiper = (swiper) => {
    console.log("Hello")
}
const onSlideChange = () => {
    console.log("slide change")
}

import { useRouter } from 'vue-router'
const router = useRouter();
const moreProduct = (id) => {
    router.push({ name: 'product-details', params: { id: id } })
}

</script>

<template>
    <div>
        <div class="grid grid-cols-11 w-pc mx-auto gap-6 mb-20">
            <div class=" col-span-3 bg-white text-left p-8">
                <h3 class="text-xl uppercase font-semibold mb-4">Thời trang nữ</h3>
                <ul>
                    <li>Áo Thun Nữ Cao Cấp</li>
                    <li>Áo Sơ Mi Nữ</li>
                    <li>Áo Khoác Nữ</li>
                    <li>Váy Trắng</li>
                    <li>Quần Đùi Nữ</li>
                    <li>Váy Công Chúa</li>
                    <li>Váy Trắng</li>
                    <li>Váy Xếp Ly</li>
                </ul>
                <div class="flex items-center gap-2 cursor-pointer mt-4 font-semibold">
                    <p>Xem tất cả</p>
                    <Icon icon="cil:arrow-right" width="1.2em" height="1.2em"
                        class="arrow transition-all  text-black" />
                </div>
            </div>
            <div class="col-span-8 flex">
                <Swiper :modules="modules" @swiper="onSwiper" @slideChange="onSlideChange" navigation
                    :slides-per-view="3" :space-between="20">
                    <SwiperSlide v-for="product in products" :key="product.id">
                        <div @click="moreProduct(product.id)"
                            class="product-card overflow-hidden relative pb-8 flex flex-col bg-white rounded-sm px-8 max-w-80">
                            <div class=" absolute z-50 cursor-pointer right-6 top-4">
                                <div
                                    class="eye-option1 transition-all hover:bg-secondary bg-none w-8 h-8 flex items-center justify-center rounded-full">
                                    <Icon class="hover:text-black text-gray-500" icon="solar:eye-broken" width="1.4em"
                                        height="1.4em" />
                                </div>
                                <div
                                    class="eye-option2 top-9 transition-all hover:bg-secondary bg-none w-8 h-8 flex items-center justify-center rounded-full">
                                    <Icon class="hover:text-black text-gray-500" icon="solar:heart-broken" width="1.4em"
                                        height="1.4em" />
                                </div>
                            </div>
                            <img class="img-product w-80 h-60 object-cover" :src="product.imageLink" alt="">
                            <div class="flex justify-between mt-4">
                                <p>{{ product.name }}</p>
                                <p>{{ product.price }} vnd</p>
                            </div>
                            <div class="flex items-center mb-4">
                                <div class="flex">
                                    <Icon icon="emojione:star" width="1em" height="1em" />
                                    <Icon icon="emojione:star" width="1em" height="1em" />
                                    <Icon icon="emojione:star" width="1em" height="1em" />
                                    <Icon icon="emojione:star" width="1em" height="1em" />
                                    <Icon icon="emojione-monotone:star" width="1em" height="1em"
                                        style="color: #f2f5f8" />
                                </div>
                                <p class="text-sm text-gray-500">{{ product.ratings }}</p>
                            </div>
                            <button class="bg-secondary transition-all text-black hover:bg-black hover:text-white ">Thêm
                                vào giỏ
                                hàng</button>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
        <div class="w-pc mx-auto mb-20 ">
            <h3 class="text-left text-4xl font-semibold mb-8">Thương Hiệu Hot</h3>
            <div class="bg-white px-20 py-12">
                <Swiper :loop="true" :space-between="80" :slides-per-view="5">
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/levis.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/lotto.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/raymond.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/samsung.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/levis.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/lotto.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/raymond.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/samsung.png" alt="">
                    </SwiperSlide>
                    <SwiperSlide>
                        <img class="h-12" src="https://bazaar.ui-lib.com/assets/images/brands/alibaba.png" alt="">
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    </div>
</template>

<style scoped>
ul li {
    padding: 2px 0;
}

.product-card {
    border: 1px solid transparent;
}

.product-card:hover .img-product {
    transform: scale(1.1);
    cursor: pointer;
    transition: all .2s linear;

}

.product-card:hover {
    border: 1px solid black;
    transition: all .2s linear;
}

.img-product {
    transition: all .2s linear;
}

.product-card:hover .img-product {
    transform: scale(1.1);
    cursor: pointer;
    transition: all .2s linear;

}

.product-card:hover {
    border: 1px solid black;
    transition: all .2s linear;
}

.img-product {
    transition: all .2s linear;
}

.product-card:hover .eye-option1,
.product-card:hover .eye-option2 {
    right: 0px;
    transition: all 0.2s linear;
}

.product-card:hover .eye-option2 {
    transition-delay: .1s;
}

.eye-option1,
.eye-option2 {
    position: absolute;
    right: -60px;
}
</style>