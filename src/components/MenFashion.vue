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
        <div class="grid grid-cols-11 w-pc mx-auto gap-6 mt-28 mb-20">
            <div class=" col-span-3 bg-white text-left p-8">
                <h3 class="text-xl uppercase font-semibold mb-4">Thời trang nam</h3>
                <ul>
                    <li>Áo Blaze</li>
                    <li>Áo Hoodie Nam</li>
                    <li>Áo Khoác Da</li>
                    <li>Áo Sơ Mi</li>
                    <li>Quần Jeans</li>
                    <li>Quần Jogger</li>
                    <li>Quần Kaki</li>
                    <li>Quần Short Nam</li>
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
                    <SwiperSlide @click="moreProduct(product.id)" v-for="product in products" :key="product.id">
                        <div
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
        <div class="w-pc mx-auto relative flex items-center mb-20">
            <img class="" src="https://bazaar.ui-lib.com/assets/images/banners/long-banner.jpg" alt="">
            <div class="absolute w-full grid grid-cols-10 items-center">
                <div class=" col-span-8">
                    <p class="text-4xl font-semibold">Giảm <span class="text-red-500">50%</span> cho thời trang thời
                        thượng</p>
                    <p class="text-lg">Chỉ giới hạn trong tuần này. Nhanh tay lên</p>
                </div>
                <div class="flex w-full col-span-2">
                    <button class="rounded-none">Khám phá ngay</button>
                </div>
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