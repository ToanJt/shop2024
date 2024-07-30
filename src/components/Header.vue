<script setup>
import { Icon } from '@iconify/vue';
import { ref, onMounted, onUnmounted } from "vue";

const limitPosition = ref(500);
const scrolled = ref(false);
const lastPosition = ref(0);

function handleScroll() {
    if (lastPosition.value < window.scrollY && limitPosition.value < window.scrollY) {
        scrolled.value = true;
        // move up!
    }

    if (lastPosition.value > window.scrollY) {
        scrolled.value = false;
        // move down
    }

    lastPosition.value = window.scrollY;
    // scrolled.value = window.scrollY > 250;
}


onMounted(() => {
    window.addEventListener("scroll", handleScroll);
})
onUnmounted(() => {
    window.removeEventListener("scroll", handleScroll);
})

const isActive = ref(false);

function activeBar() {
    isActive.value = !isActive.value;
}

</script>

<template>
    <div :class="{ 'headroom--unpinned': scrolled }" v-on="handleScroll()"
        class="header headroom fixed left-0 right-0 top-0 z-50">
        <div
            class=" container xl:container md:container mx-auto px-8 md:px-0 relative bg-secondary pt-4 grid grid-cols-4 ">
            <div class=" sm:col-span-3 col-span-2 flex items-center gap-4">
                <div class=" flex flex-col items-center ">
                    <h1 class="font-black sm:text-4xl lg:text-5xl text-2xl">Linhle</h1>
                    <h3 class="ml-3 md:tracking-[12px] tracking-[4px] font-black lg:text-xl text-sm">Fashion</h3>
                </div>
                <div class="w-full md:flex hidden">
                    <input placeholder="Nhập tên sản phẩm..."
                        class="border-[1px] border-black outline-none px-4 text-md w-full h-10 bg-secondary rounded-tl-sm rounded-bl-sm"
                        type="text">
                    <div class="bg-black w-20 flex justify-center items-center rounded-tr-sm rounded-br-sm">
                        <Icon icon="ic:baseline-search" width="2em" height="2em" style="color: white" />
                    </div>
                </div>
            </div>
            <div class="flex items-center md:gap-6 sm:col-span-1 col-span-2 gap-2 justify-end">
                <Icon class="sm:w-[2em] w-6" icon="solar:heart-broken" width="2em" height="2em" style="color: black" />
                <router-link :to="{ path: '/cart' }">
                    <Icon class="sm:w-[2.4em] w-7" icon="lets-icons:bag-light" width="2.4em" height="2.4em"
                        style="color: black" />
                </router-link>
                <router-link :to="{ path: '/auth' }">
                    <Icon class="text-black sm:w-[2em] w-6" icon="solar:user-broken" width="2em" height="2em" />
                </router-link>
            </div>
        </div>
        <div class="bg-black w-full z-[999] md:h-20 ">
            <div @click="activeBar()" class="md:hidden block ml-8 py-4">
                <Icon icon="fe:bar" width="2em" height="2em" style="color: white" />
            </div>
            <div :class="{ 'active-bar': isActive }"
                class="h-screen xl:container md:container md:pb-0 pb-20 sm:pt-0 w-screen md:h-full mx-auto md:text-base md:px-0 px-8 text-2xl text-white md:flex hidden md:flex-row flex-col items-center gap-20 md:gap-12">
                <div class="relative categories md:block hidden">
                    <div class=" cursor-pointer">
                        <p>Danh mục sản phẩm</p>
                    </div>
                    <div class="categories-views absolute z-[999] top-8 w-60 p-4 text-left bg-white text-black">
                        <div
                            class="men-category cursor-pointer flex items-center justify-between border-b-[1px] border-gray-300 py-2">
                            <p>Thời trang nam</p>
                            <Icon icon="mingcute:right-line" width="1.4em" height="1.4em" style="color: black" />
                            <div class="submen-category p-4 absolute -right-44 w-40 top-6 text-black bg-white">
                                <div class="border-b-[1px] border-gray-300 pb-2">
                                    <p>Áo thun nam</p>
                                </div>
                                <div class="border-b-[1px] border-gray-300 py-2">
                                    <p>Quần đùi</p>
                                </div>
                                <div class=" border-gray-300 pt-2">
                                    <p>Áo khoác</p>
                                </div>
                            </div>
                        </div>
                        <div
                            class="women-category cursor-pointer flex items-center justify-between border-b-[1px] border-gray-300 py-2">
                            <p>Thời trang nữ</p>
                            <Icon icon="mingcute:right-line" width="1.4em" height="1.4em" style="color: black" />
                            <div class="subwomen-category p-4 absolute -right-44 w-40 top-6 text-black bg-white">
                                <div class="border-b-[1px] border-gray-300 pb-2">
                                    <p>Áo Croptop</p>
                                </div>
                                <div class="border-b-[1px] border-gray-300 py-2">
                                    <p>Quần giả váy</p>
                                </div>
                                <div class="border-b-[1px] border-gray-300 py-2">
                                    <p>Áo khoác nữ</p>
                                </div>
                                <div class="border-b-[1px] border-gray-300 py-2">
                                    <p>Áo thun sexy</p>
                                </div>
                                <div class="border-b-[1px] border-gray-300 py-2">
                                    <p>Váy công chúa</p>
                                </div>
                                <div class=" pt-2">
                                    <p>Đầm dạ hội</p>
                                </div>
                            </div>
                        </div>
                        <div class="cursor-pointer border-b-[1px] border-gray-300 py-2">
                            <p>Áo khoác</p>
                        </div>
                        <div class="cursor-pointer border-b-[1px] border-gray-300 py-2">
                            <p>Phụ kiện thời trang</p>
                        </div>
                        <div class="cursor-pointer border-b-[1px] border-gray-300 py-2">
                            <p>Áo thun</p>
                        </div>
                        <div class="cursor-pointer  pt-2">
                            <p>Quần dài</p>
                        </div>
                    </div>
                </div>
                <router-link class="router-link" :to="{ name: 'home' }">
                    <p>Trang chủ</p>
                </router-link>
                <router-link class="router-link" :to="{ name: 'about' }">
                    <p>Giới thiệu</p>
                </router-link>
                <router-link class="router-link" :to="{ path: '/products' }">
                    <p>Sản phẩm</p>
                </router-link>
                <router-link class="router-link" :to="{ path: '/news' }">
                    <p>Tin tức</p>
                </router-link>
                <router-link class="router-link" :to="{ name: 'contact' }">
                    <p>Liên hệ</p>
                </router-link>

            </div>
        </div>
    </div>
</template>

<style scoped>
.active-bar {
    display: flex !important;
}

.headroom {
    will-change: transform;
    transition: transform 200ms linear;
}

.router-link-active {
    color: rgb(235, 44, 44) !important;
}

.headroom--pinned {
    transform: translateY(0%);
}

.headroom--unpinned {
    transform: translateY(-100%);
}

.header {
    width: 100%;
    height: 100px;
    background: transparent;
    position: fixed;
    z-index: 999;
}

.router-link:hover {
    color: red;
}

.categories-views {
    display: none;
}

.categories:hover .categories-views {
    display: block;
}

.categories::after {
    width: 160px;
    height: 20px;
    content: "";
    background: transparent;
    position: absolute;
    top: 20px;
    left: 0;
}

.submen-category {
    display: none;
}

.men-category:hover .submen-category {
    display: block;
    cursor: pointer;
}

.men-category::after {
    width: 50px;
    height: 56px;
    content: "";
    background: transparent;
    position: absolute;
    right: -30px;
    top: 0px;
}

.subwomen-category {
    display: none;
}

.women-category:hover .subwomen-category {
    display: block;
    cursor: pointer;
}

.women-category::after {
    width: 50px;
    height: 42px;
    content: "";
    background: transparent;
    position: absolute;
    right: -30px;
    top: 56px;
}
</style>