<script setup>
import { Icon } from '@iconify/vue';

</script>

<template>
    <div class="">
        <div class="w-pc mx-auto grid grid-cols-4 ">
            <div class=" col-span-3 flex items-center gap-4">
                <div class=" flex flex-col items-center ">
                    <h1 class="font-black">Linhle</h1>
                    <h3 class="ml-3 tracking-[12px] font-black text-xl">Fashion</h3>
                </div>
                <div class="flex w-full">
                    <input placeholder="Nhập tên sản phẩm..."
                        class="outline-none px-4 text-md w-full h-10 bg-secondary rounded-tl-sm rounded-bl-sm"
                        type="text">
                    <div class="bg-black w-20 flex justify-center items-center rounded-tr-sm rounded-br-sm">
                        <Icon icon="ic:baseline-search" width="2em" height="2em" style="color: white" />
                    </div>
                </div>
            </div>
            <div class="flex items-center gap-6 justify-end">
                <Icon icon="solar:heart-broken" width="2em" height="2em" style="color: black" />
                <Icon icon="lets-icons:bag-light" width="2.4em" height="2.4em" style="color: black" />
                <Icon icon="solar:user-broken" width="2em" height="2em" style="color: black" />
            </div>
        </div>
        <div class="bg-black w-screen h-20  ">
            <div class="w-pc h-full mx-auto text-white flex items-center gap-12">
                <p>Danh mục sản phẩm</p>
                <p>Trang chủ</p>
                <p>Giới thiệu</p>
                <p>Sản phẩm</p>
                <p>Tin tức</p>
                <p>Liên hệ</p>
            </div>
        </div>
    </div>
</template>