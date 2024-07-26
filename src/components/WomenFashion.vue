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
</style>