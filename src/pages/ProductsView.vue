<script setup>
import { useRouter } from 'vue-router'
import products from '../products';
import { Icon } from "@iconify/vue"


const router = useRouter();
const moreProduct = (id) => {
    router.push({ name: 'product-details', params: { id: id } })
}

</script>

<template>
    <div class="text-left w-pc mx-auto mt-10 mb-20">
        <h1 class="text-4xl font-semibold mb-8">Tất Cả Sản Phẩm</h1>
        <div class="w-full flex flex-wrap gap-4">
            <div v-for="product in products" :key="product.id">
                <div @click="moreProduct(product.id)"
                    class=" cursor-pointer product-card overflow-hidden relative pb-8 flex flex-col bg-white rounded-sm px-8">
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
                            <Icon icon="emojione-monotone:star" width="1em" height="1em" style="color: #f2f5f8" />
                        </div>
                        <p class="text-sm text-gray-500">{{ product.ratings }}</p>
                    </div>
                    <button class="bg-secondary transition-all text-black hover:bg-black hover:text-white ">Thêm vào giỏ
                        hàng</button>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped>
.product-card:hover .img-product {
    transform: scale(1.1);
    cursor: pointer;
    transition: all .2s linear;

}

.product-card {
    border: 1px solid transparent;
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