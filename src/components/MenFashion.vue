<script setup>
import { Icon } from '@iconify/vue'
import ProductCard from "./ProductCard.vue"

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css';

const modules = [Navigation]
const onSwiper = (swiper) => {
    console.log("Hello")
}
const onSlideChange = () => {
    console.log("slide change")
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
                    <SwiperSlide>
                        <ProductCard></ProductCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard></ProductCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard></ProductCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <ProductCard></ProductCard>
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
</style>