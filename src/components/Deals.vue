<script setup>
import { Icon } from "@iconify/vue"


import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css';

// import ProductCard from "../components/ProductCard.vue"
import products from "../products"
console.log(products)

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
    <div class="container  sm:mx-auto px-8 mt-16 ">
        <div class="flex justify-between md:items-center items-start">
            <h1 class="text-left md:text-4xl text-xl font-bold mb-8 ">Ưu đãi hôm nay</h1>
            <div class="flex items-center gap-2 cursor-pointer font-semibold">
                <p class="sm:text-base text-sm">Xem thêm</p>
                <Icon icon="cil:arrow-right" width="1.2em" height="1.2em" class="arrow transition-all  text-black" />
            </div>
        </div>
        <div class="sm:hidden block">
            <Swiper :modules="modules" @slideChange="onSlideChange" @swiper="onSwiper" navigation :slides-per-view="1.5"
                :space-between="20" class="sm:!hidden !flex gap-4 deals-slide">
                <SwiperSlide class="block" v-for="product in products" :key="product.id">
                    <div @click="moreProduct(product.id)"
                        class="product-card overflow-hidden relative pb-8 flex flex-col bg-white rounded-sm lg:px-8 px-2 max-w-80">
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
                        <img class="img-product lg:w-80 lg:h-60 w-50 h-30 object-cover" :src="product.imageLink" alt="">
                        <div class="lg:flex block justify-between mt-4 lg:text-base text-sm">
                            <p>{{ product.name }}</p>
                            <p>{{ product.price }} vnd</p>
                        </div>
                        <div class="flex items-center lg:justify-start justify-center mb-4">
                            <div class="flex">
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione-monotone:star" width="1em" height="1em" style="color: #f2f5f8" />
                            </div>
                            <p class="text-sm text-gray-500">{{ product.ratings }}</p>
                        </div>
                        <button
                            class="lg:text-base text-sm lg:px-4 px-2 bg-secondary transition-all text-black hover:bg-black hover:text-white ">Thêm
                            vào giỏ
                            hàng</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
        <div class="sm:block hidden">
            <Swiper :modules="modules" @slideChange="onSlideChange" @swiper="onSwiper" navigation :slides-per-view="2"
                :space-between="20" class="md:!hidden !flex gap-4 deals-slide">
                <SwiperSlide class="block" v-for="product in products" :key="product.id">
                    <div @click="moreProduct(product.id)"
                        class="product-card overflow-hidden relative pb-8 flex flex-col bg-white rounded-sm lg:px-8 px-2 max-w-80">
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
                        <img class="img-product lg:w-80 lg:h-60 w-50 h-30 object-cover" :src="product.imageLink" alt="">
                        <div class="lg:flex block justify-between mt-4 lg:text-base text-sm">
                            <p>{{ product.name }}</p>
                            <p>{{ product.price }} vnd</p>
                        </div>
                        <div class="flex items-center lg:justify-start justify-center mb-4">
                            <div class="flex">
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione-monotone:star" width="1em" height="1em" style="color: #f2f5f8" />
                            </div>
                            <p class="text-sm text-gray-500">{{ product.ratings }}</p>
                        </div>
                        <button
                            class="lg:text-base text-sm lg:px-4 px-2 bg-secondary transition-all text-black hover:bg-black hover:text-white ">Thêm
                            vào giỏ
                            hàng</button>
                    </div>
                </SwiperSlide>
            </Swiper>
            <Swiper :modules="modules" @slideChange="onSlideChange" @swiper="onSwiper" navigation :slides-per-view="4"
                :space-between="20" class="md:!flex !hidden gap-4 deals-slide">
                <SwiperSlide class="block" v-for="product in products" :key="product.id">
                    <div @click="moreProduct(product.id)"
                        class="product-card overflow-hidden relative pb-8 flex flex-col bg-white rounded-sm lg:px-8 px-2 max-w-80">
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
                        <img class="img-product lg:w-80 lg:h-60 w-50 h-30 object-cover" :src="product.imageLink" alt="">
                        <div class="lg:flex block justify-between mt-4 lg:text-base text-sm">
                            <p>{{ product.name }}</p>
                            <p>{{ product.price }} vnd</p>
                        </div>
                        <div class="flex items-center lg:justify-start justify-center mb-4">
                            <div class="flex">
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione:star" width="1em" height="1em" />
                                <Icon icon="emojione-monotone:star" width="1em" height="1em" style="color: #f2f5f8" />
                            </div>
                            <p class="text-sm text-gray-500">{{ product.ratings }}</p>
                        </div>
                        <button
                            class="lg:text-base text-sm lg:px-4 px-2 bg-secondary transition-all text-black hover:bg-black hover:text-white ">Thêm
                            vào giỏ
                            hàng</button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    </div>
</template>

<style scoped>
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