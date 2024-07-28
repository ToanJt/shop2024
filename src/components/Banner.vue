<script setup>
import { Icon } from "@iconify/vue"
</script>

<template>
    <div>
        <div class="grid grid-cols-7 w-pc mx-auto gap-4 mt-8 ">
            <div class=" cursor-pointer col-span-5 relative rounded-sm overflow-hidden">
                <div class="absolute text-left ml-16 flex flex-col h-full justify-center">
                    <p class="text-3xl uppercase">Phong cách sống</p>
                    <h1 class=" uppercase font-black my-2 tracking-wider">Nam</h1>
                    <p class="uppercase text-3xl font-semibold">Giảm giá từ <span class="text-red-500">30%</span></p>
                    <p class="text-lg mb-8">Miễn phí vận chuyển đến 100k</p>
                    <div>
                        <button>Mua ngay</button>
                    </div>
                </div>
                <img src="https://bazaar.ui-lib.com/assets/images/banners/banner-15.jpg" alt="">
            </div>
            <div class="col-span-2 grid overflow-hidden">
                <div
                    class="relative cursor-pointer hover:scale-[1.1] mb-4 transition-all h-60 rounded-sm overflow-hidden">
                    <div class="absolute ml-8 flex flex-col justify-center h-full text-left">
                        <p class="text-sm uppercase">Điểm đến mới</p>
                        <p class="text-lg uppercase font-semibold">Mùa hè</p>
                        <p class="uppercase text-lg font-semibold">Giảm giá từ <span class="">20%</span></p>
                        <div class="animation cursor-pointer flex items-center gap-1 my-2">
                            <p class="text-black cursor-pointer ">Mua ngay</p>
                            <Icon icon="cil:arrow-right" width="1.2em" height="1.2em"
                                class="arrow transition-all  text-black" />
                        </div>
                    </div>
                    <img class=""
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
                    <img class=" object-fill"
                        src="https://images.pexels.com/photos/1536619/pexels-photo-1536619.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                        alt="">
                </div>
            </div>

        </div>
        <div class=" rounded-sm overflow-hidden bg-white mt-8 w-pc mx-auto flex justify-center gap-12 py-6">
            <div class="flex items-center border-r-[1px] border-gray-300 pr-12">
                <Icon icon="mdi:truck-fast-outline" width="3.2em" height="3.2em" style="color: black" />
                <div class=" text-left ml-4">
                    <p class="font-semibold">Chuyển Phát Nhanh</p>
                    <p class=" text-gray-500 text-sm">Chỉ từ 50k</p>
                </div>
            </div>
            <div class="flex items-center border-r-[1px] border-gray-300 pr-12">
                <Icon icon="hugeicons:bitcoin-piggy-bank" width="3.2em" height="3.2em" style="color: black" />
                <div class=" text-left ml-4">
                    <p class="font-semibold">Hoàn Tiền</p>
                    <p class=" text-gray-500 text-sm">Trong vòng 7 ngày</p>
                </div>
            </div>
            <div class="flex items-center border-r-[1px] border-gray-300 pr-12">
                <Icon icon="clarity:clock-line" width="3.2em" height="3.2em" style="color: black" />
                <div class=" text-left ml-4">
                    <p class="font-semibold">365 Ngày</p>
                    <p class=" text-gray-500 text-sm">Đổi trả miễn phí</p>
                </div>
            </div>
            <div class="flex items-center ">
                <Icon icon="icomoon-free:credit-card" width="3.2em" height="3.2em" style="color: black" />
                <div class=" text-left ml-4">
                    <p class="font-semibold">Thanh Toán</p>
                    <p class=" text-gray-500 text-sm">An toàn & nhanh chóng</p>
                </div>
            </div>
        </div>
        <div class=" w-pc mx-auto mt-16 flex gap-4 ">
            <div
                class=" border-2 border-white p-4 categories cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                <img class="card h-44 mb-8"
                    src="https://www.pngitem.com/pimgs/m/2-27490_plain-black-t-shirt-png-transparent-png.png" alt="">
                <p class="  w-11/12 py-1 absolute bottom-4 font-semibold">
                    Áo thun</p>
            </div>
            <div
                class="border-2 border-white p-4 categories cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                <img class="card h-44 mb-8"
                    src="https://www.pngitem.com/pimgs/m/7-70730_blue-jeans-png-transparent-png.png" alt="">
                <p class=" w-11/12 py-1 absolute bottom-4 font-semibold">Quần Jeans</p>
            </div>
            <div
                class="border-2 border-white p-4 categories cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                <img class="card  h-44 mb-8"
                    src="https://www.pngitem.com/pimgs/m/136-1369955_yellow-sweater-hd-png-download.png" alt="">
                <p class=" w-11/12 py-1 absolute bottom-4 font-semibold">Sweater</p>
            </div>
            <div
                class="border-2 border-white p-4 categories cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                <img class="card h-44 mb-8"
                    src="https://www.pngitem.com/pimgs/m/240-2407316_polo-shirt-kids-hd-png-download.png" alt="">
                <p class="  w-11/12 py-1 absolute bottom-4 font-semibold">Polo</p>
            </div>
            <div
                class="border-2 border-white p-4 categories cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                <img class="card h-44 mb-8"
                    src="https://www.pngitem.com/pimgs/m/117-1171397_download-wedding-dress-transparent-png-wedding-dress-transparent.png"
                    alt="">
                <p class="  w-11/12 py-1 absolute bottom-4 font-semibold">Váy</p>
            </div>
            <div
                class="border-2 border-white p-4 categories cursor-pointer bg-secondary relative flex justify-center  rounded-sm overflow-hidden">
                <img class="card h-44 mb-8"
                    src="https://www.pngitem.com/pimgs/m/456-4567450_black-shorts-png-transparent-transparent-background-shorts-outline.png"
                    alt="">
                <p class="  w-11/12 py-1 absolute bottom-4 font-semibold">Quần Short</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
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

.categories:hover .card {
    transform: scale(1.1);
    transition: all .2s linear;
}

.categories:hover p {
    background-color: black;
    color: white;
}
</style>