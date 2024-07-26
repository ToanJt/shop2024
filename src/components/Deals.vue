<script setup>
import { Icon } from "@iconify/vue"

import { Swiper, SwiperSlide } from 'swiper/vue';
import { Navigation } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css';

import ProductCard from "../components/ProductCard.vue"

const modules = [Navigation]
const onSwiper = (swiper) => {
    console.log("Hello")
}
const onSlideChange = () => {
    console.log("slide change")
}

</script>

<template>
    <div class="w-pc mx-auto mt-16">
        <div class="flex justify-between items-center">
            <h1 class="text-left text-4xl font-bold mb-8">Ưu đãi hôm nay</h1>
            <div class="flex items-center gap-2 cursor-pointer font-semibold">
                <p>Xem thêm</p>
                <Icon icon="cil:arrow-right" width="1.2em" height="1.2em" class="arrow transition-all  text-black" />
            </div>
        </div>
        <Swiper :modules="modules" @slideChange="onSlideChange" @swiper="onSwiper" navigation :slides-per-view="4"
            :space-between="20" class="flex gap-4 deals-slide">
            <SwiperSlide>
                <div class="product-card pb-8 flex flex-col bg-white rounded-sm px-8 max-w-80">
                    <img class="img-product"
                        src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F1.SilverHighNeckSweater.png&w=384&q=75"
                        alt="">
                    <div class="flex justify-between mt-4">
                        <p>Áo Sweater tay dài</p>
                        <p>230.000vnd</p>
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="flex">
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                        </div>
                        <p class="text-sm text-gray-500">(05)</p>
                    </div>
                    <button class="bg-secondary text-black hover:bg-black hover:text-white ">Thêm vào giỏ hàng</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="product-card pb-8 flex flex-col bg-white rounded-sm px-8 max-w-80">
                    <img class="img-product"
                        src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F21.YellowCasualSweater.png&w=384&q=75"
                        alt="">
                    <div class="flex justify-between mt-4">
                        <p>Áo len vàng</p>
                        <p>300.000vnd</p>
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="flex">
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                        </div>
                        <p class="text-sm text-gray-500">(05)</p>
                    </div>
                    <button class="bg-secondary text-black hover:bg-black hover:text-white ">Thêm vào giỏ hàng</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="product-card pb-8 flex flex-col bg-white rounded-sm px-8 max-w-80">
                    <img class="img-product"
                        src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F4.DenimBlueJeans.png&w=384&q=75"
                        alt="">
                    <div class="flex justify-between mt-4">
                        <p>Quần jeans denim</p>
                        <p>260.000vnd</p>
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="flex">
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione-monotone:star" width="1em" height="1em" style="color: #f2f5f8" />
                        </div>
                        <p class="text-sm text-gray-500">(08)</p>
                    </div>
                    <button class="bg-secondary text-black hover:bg-black hover:text-white ">Thêm vào giỏ hàng</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="product-card pb-8 flex flex-col bg-white rounded-sm px-8 max-w-80">
                    <img class="img-product"
                        src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F19.BlackWhiteSweater.png&w=384&q=75"
                        alt="">
                    <div class="flex justify-between mt-4">
                        <p>Áo kẻ caro</p>
                        <p>160.000vnd</p>
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="flex">
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione-monotone:star" width="1em" height="1em" style="color: #f2f5f8" />
                        </div>
                        <p class="text-sm text-gray-500">(02)</p>
                    </div>
                    <button class="bg-secondary text-black hover:bg-black hover:text-white ">Thêm vào giỏ hàng</button>
                </div>
            </SwiperSlide>
            <SwiperSlide>
                <div class="product-card pb-8 flex flex-col bg-white rounded-sm px-8 max-w-80">
                    <img class="img-product"
                        src="https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fproducts%2FFashion%2FClothes%2F19.BlackWhiteSweater.png&w=384&q=75"
                        alt="">
                    <div class="flex justify-between mt-4">
                        <p>Áo kẻ caro</p>
                        <p>160.000vnd</p>
                    </div>
                    <div class="flex items-center mb-4">
                        <div class="flex">
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione-monotone:star" width="1em" height="1em" style="color: #f2f5f8" />
                        </div>
                        <p class="text-sm text-gray-500">(02)</p>
                    </div>
                    <button class="bg-secondary text-black hover:bg-black hover:text-white ">Thêm vào giỏ hàng</button>
                </div>
            </SwiperSlide>

            <SwiperSlide>
                <ProductCard></ProductCard>
            </SwiperSlide>
        </Swiper>
    </div>
</template>

<style scoped>
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
</style>