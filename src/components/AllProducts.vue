<script setup>
import { Icon } from '@iconify/vue'
import ProductCard from "../components/ProductCard.vue"
import products from '../products'
import { useRouter } from 'vue-router'

const router = useRouter();
const moreProduct = (id) => {
    router.push({ name: 'product-details', params: { id: id } })
}
</script>

<template>
    <div class="container mx-auto sm:px-0 px-8">
        <div class="text-left flex justify-between">
            <h1 class="md:text-4xl text-2xl mb-8 font-semibold">Tất Cả Sản Phẩm</h1>
            <div class="flex sm:items-center items-start gap-2 cursor-pointer font-semibold">
                <p class="sm:text-base text-sm">Xem thêm</p>
                <Icon icon="cil:arrow-right" width="1.2em" height="1.2em" class="arrow transition-all  text-black" />
            </div>
        </div>
        <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            <div v-for="product in products" :key="product.id">
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
                    <div class="flex xl:flex-row flex-col justify-between mt-4">
                        <p>{{ product.name }}</p>
                        <p>{{ product.price }} vnd</p>
                    </div>
                    <div class="flex xl:justify-start justify-center items-center mb-4">
                        <div class="flex">
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione:star" width="1em" height="1em" />
                            <Icon icon="emojione-monotone:star" width="1em" height="1em" style="color: #f2f5f8" />
                        </div>
                        <p class="text-sm text-gray-500">{{ product.ratings }}</p>
                    </div>
                    <button class="bg-secondary transition-all text-black hover:bg-black hover:text-white ">Thêm
                        vào giỏ
                        hàng</button>
                </div>
            </div>
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