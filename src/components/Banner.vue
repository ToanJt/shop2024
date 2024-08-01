<script setup>
import { Icon } from "@iconify/vue"
import { onMounted, ref } from "vue";
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const modules = [Pagination];
const swiperInstance = ref();
function onSwiper(swiper) {
    swiperInstance.value = swiper;
}

const autoNextSlide = () => {
    swiperInstance.value.slideNext();
}

onMounted(() => {
    setInterval(function () {
        autoNextSlide();
    }, 15000)
})

</script>

<template>
    <div>
        <div class="grid grid-cols-7 container mx-auto gap-4 md:mt-8 mt-0 xl:px-0 px-4">

            <Swiper :loop="true" :pagination="{ dynamicBullets: true }" @swiper="onSwiper" :modules="modules"
                slides-per-view="1" :space-between="50"
                class="w-full h-full cursor-pointer col-span-7 md:col-span-5 relative rounded-sm overflow-hidden">
                <SwiperSlide>
                    <div class="py-12 absolute text-left ml-16 flex flex-col h-full justify-center">
                        <p class="lg:text-3xl md:text-xl text-sm uppercase">Phong cách sống</p>
                        <h1 class="lg:text-6xl md:text-4xl text-xl uppercase font-black my-2 tracking-wider">Nam</h1>
                        <p class="uppercase lg:text-3xl md:text-xl text-sm font-semibold">Giảm giá từ <span
                                class="text-red-500">30%</span>
                        </p>
                        <p class="md:text-lg text-sm mb-8">Miễn phí vận chuyển đến 100k</p>
                        <div class="sm:block hidden">
                            <button class="">Mua ngay</button>
                        </div>
                        <div class="sm:hidden block">
                            <button class="!w-28 h-8 text-[12px]">Mua ngay</button>
                        </div>
                    </div>
                    <div class="w-full h-full">
                        <img class="h-full w-full object-cover"
                            src="https://bazaar.ui-lib.com/assets/images/banners/banner-15.jpg" alt="">
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div class="py-12 absolute text-left ml-16 flex flex-col h-full justify-center">
                        <p class="lg:text-3xl md:text-xl text-sm uppercase">Phong cách sống</p>
                        <h1 class="lg:text-6xl md:text-4xl text-xl uppercase font-black my-2 tracking-wider">Nữ</h1>
                        <p class="uppercase lg:text-3xl md:text-xl text-sm  font-semibold">Giảm giá từ <span
                                class="text-red-500">99%</span>
                        </p>
                        <p class="md:text-lg text-sm mb-8">Miễn phí vận chuyển đến 1 tỷ đồng</p>
                        <div class="sm:block hidden">
                            <button class="">Mua ngay</button>
                        </div>
                        <div class="sm:hidden block">
                            <button class="!w-28 h-8 text-[12px]">Mua ngay</button>
                        </div>
                    </div>
                    <div class="w-full h-full">
                        <img class="h-full !w-full object-cover"
                            src="https://bazaar.ui-lib.com/assets/images/banners/banner-25.jpg" alt="">
                    </div>
                </SwiperSlide>
            </Swiper>

            <div class="col-span-2 md:grid hidden overflow-hidden ">
                <div class="relative cursor-pointer hover:scale-[1.1] transition-all h-60 rounded-sm overflow-hidden">
                    <div class="absolute text-white ml-8 flex flex-col justify-center h-full text-left">
                        <p class="text-sm uppercase">Điểm đến mới</p>
                        <p class="text-lg uppercase font-semibold">Mùa hè</p>
                        <p class="uppercase text-lg font-semibold">Giảm giá từ <span class="">20%</span></p>
                        <div class=" animation cursor-pointer flex items-center gap-1 my-2">
                            <p class="text-white cursor-pointer ">Mua ngay</p>
                            <Icon icon="cil:arrow-right" width="1.2em" height="1.2em"
                                class="arrow transition-all  text-white" />
                        </div>
                    </div>
                    <img class="h-full w-full object-cover"
                        src="https://images.pexels.com/photos/3756863/pexels-photo-3756863.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        alt="">
                </div>
                <div class="relative cursor-pointer hover:scale-[1.1] transition-all rounded-sm overflow-hidden ">
                    <div class="absolute ml-8 flex flex-col justify-center h-full text-left">
                        <p class="text-sm uppercase">Thời trang hot</p>
                        <p class="text-lg uppercase font-semibold">Mùa hè</p>
                        <p class="uppercase text-lg font-semibold">& mùa đông</p>
                        <div class="animation cursor-pointer flex items-center gap-1 my-2">
                            <p class="text-black cursor-pointer ">Mua ngay</p>
                            <Icon icon="cil:arrow-right" width="1.2em" height="1.2em"
                                class="arrow transition-all  text-black" />
                        </div>
                    </div>
                    <img class="h-full object-cover"
                        src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="">
                </div>
            </div>

        </div>
        <div class="sm:px-0 px-8">
            <div
                class="  rounded-sm overflow-hidden bg-white mt-8 8 container mx-auto flex md:flex-row flex-col justify-center items-start gap-4 lg:gap-12 py-4 lg:py-6">
                <div
                    class=" flex gap-4 lg:items-center lg:border-r-[1px] lg:border-gray-300 lg:px-12 px-4 lg:pr-0 pr-0">
                    <Icon class="xl:w-[3.2em] xl:h-[3.2em] w-[2.4em] h-[2.4em]" icon="mdi:truck-fast-outline"
                        width="3.2em" height="3.2em" style="color: black" />
                    <div class=" text-left lg:ml-4 ml-0">
                        <p class="font-semibold">Chuyển Phát Nhanh</p>
                        <p class=" text-gray-500 text-sm">Chỉ từ 50k</p>
                    </div>
                </div>
                <div class="flex gap-4 lg:items-center lg:border-r-[1px] lg:border-gray-300 lg:pr-12 px-4">
                    <Icon class="xl:w-[3.2em] xl:h-[3.2em] w-[2.4em] h-[2.4em]" icon="hugeicons:bitcoin-piggy-bank"
                        width="3.2em" height="3.2em" style="color: black" />
                    <div class=" text-left lg:ml-4 ml-0">
                        <p class="font-semibold">Hoàn Tiền</p>
                        <p class=" text-gray-500 text-sm">Trong vòng 7 ngày</p>
                    </div>
                </div>
                <div class="flex gap-4 lg:items-center lg:border-r-[1px] lg:border-gray-300 lg:pr-12 px-4">
                    <Icon class="xl:w-[3.2em] xl:h-[3.2em] w-[2.4em] h-[2.4em]" icon="clarity:clock-line" width="3.2em"
                        height="3.2em" style="color: black" />
                    <div class=" text-left lg:ml-4 ml-0">
                        <p class="font-semibold">365 Ngày</p>
                        <p class=" text-gray-500 text-sm">Đổi trả miễn phí</p>
                    </div>
                </div>
                <div class="flex gap-4 lg:items-center lg:ml-0 ml-5">
                    <Icon class="xl:w-[3.2em] xl:h-[3.2em] w-[2.4em] h-[2.4em]" icon="icomoon-free:credit-card"
                        width="3.2em" height="3.2em" style="color: black" />
                    <div class=" text-left lg:ml-4 ml-0">
                        <p class="font-semibold">Thanh Toán</p>
                        <p class=" text-gray-500 text-sm">An toàn & nhanh chóng</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="xl:flex hidden justify-center">
            <div class=" mt-16 flex gap-4 ">
                <div
                    class=" border-2 border-white p-4 categoriess cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                    <img class="card h-40 mb-8"
                        src="https://www.pngitem.com/pimgs/m/2-27490_plain-black-t-shirt-png-transparent-png.png"
                        alt="">
                    <p class="  w-11/12 py-1 absolute bottom-4 font-semibold">
                        Áo thun</p>
                </div>
                <div
                    class="border-2 border-white p-4 categoriess cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                    <img class="card h-40 mb-8"
                        src="https://www.pngitem.com/pimgs/m/7-70730_blue-jeans-png-transparent-png.png" alt="">
                    <p class=" w-11/12 py-1 absolute bottom-4 font-semibold">Quần Jeans</p>
                </div>
                <div
                    class="border-2 border-white p-4 categoriess cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                    <img class="card  h-40 mb-8"
                        src="https://www.pngitem.com/pimgs/m/136-1369955_yellow-sweater-hd-png-download.png" alt="">
                    <p class=" w-11/12 py-1 absolute bottom-4 font-semibold">Sweater</p>
                </div>
                <div
                    class="border-2 border-white p-4 categoriess cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                    <img class="card h-40 mb-8"
                        src="https://www.pngitem.com/pimgs/m/240-2407316_polo-shirt-kids-hd-png-download.png" alt="">
                    <p class="  w-11/12 py-1 absolute bottom-4 font-semibold">Polo</p>
                </div>
                <div
                    class="border-2 border-white p-4 categoriess cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                    <img class="card h-40 mb-8"
                        src="https://www.pngitem.com/pimgs/m/117-1171397_download-wedding-dress-transparent-png-wedding-dress-transparent.png"
                        alt="">
                    <p class="  w-11/12 py-1 absolute bottom-4 font-semibold">Váy</p>
                </div>
                <div
                    class="border-2 border-white p-4 categoriess cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                    <img class="card h-40 mb-8"
                        src="https://www.pngitem.com/pimgs/m/456-4567450_black-shorts-png-transparent-transparent-background-shorts-outline.png"
                        alt="">
                    <p class="  w-11/12 py-1 absolute bottom-4 font-semibold">Quần Short</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.buttonResize {
    width: 100px;
    height: 30px;
    font-size: 13px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.animation:hover .arrow {
    transform: translateX(5px);
    transition: all .2s linear;
    font-size: 1.2rem;
    color: rgb(239 68 68);
}

.animation:hover p {
    font-weight: 600;
    color: rgb(239 68 68);
}

.categoriess:hover .card {
    transform: scale(1.1);
    transition: all .2s linear;
}

.categoriess:hover p {
    background-color: black;
    color: white;
}

span.swiper-pagination-bullet.swiper-pagination-bullet-active.swiper-pagination-bullet-active-main {
    background: red !important;
    left: 16px;
    width: 14px;
    height: 14px;
    border: 2px solid #b3b3b3;
}

.swiper-pagination-bullet {
    left: 16px;
    background: #b3b3b3;
    height: 14px;
    width: 14px;
    border: 1px solid #b3b3b3;
}
</style>