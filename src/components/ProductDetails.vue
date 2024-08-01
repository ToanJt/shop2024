<script setup>
import { defineProps, ref, onMounted } from 'vue';
import products from '../products';
import { Icon } from "@iconify/vue"

const props = defineProps({
    id: String
})

const currentProduct = ref({
    name: String,
    price: String,
    ratings: Number,
    purchases: Number,
    imageLink: String,
    description: String
});

async function renderProduct() {
    products.forEach((product) => {
        if (product.id == props.id) {
            currentProduct.value.name = product.name;
            currentProduct.value.price = product.price;
            currentProduct.value.ratings = product.ratings;
            currentProduct.value.purchases = product.purchases;
            currentProduct.value.description = product.description;
            currentProduct.value.imageLink = product.imageLink;
            return;
        }
    })
}

const onTop = () => {
    window.scrollTo(top)
}

onMounted(() => {
    renderProduct();
    onTop();
})

</script>

<template>
    <div class="grid sm:grid-cols-2 grid-cols-1 sm:px-0 px-8 container mx-auto items-center">
        <div class="grid grid-cols-4 gap-4 mr-8">
            <div class=" col-span-1 flex flex-col gap-4">
                <img class="border-2 w-[600px]" src="../assets/images/products/4.webp" alt="">
                <img class="border-2 w-[600px]" src="../assets/images/products/19.webp" alt="">
                <img class="border-2 w-[600px]" src="../assets/images/products/21.webp" alt="">
            </div>
            <img class="border-2  w-[600px] col-span-3" :src="currentProduct.imageLink" alt="">
        </div>
        <div class="text-left my-20">
            <h3 class="text-3xl font-semibold">{{ currentProduct.name }}</h3>
            <div class="flex items-center mb-4">
                <div class="flex">
                    <Icon icon="emojione:star" width="1.2em" height="1.2em" />
                    <Icon icon="emojione:star" width="1.2em" height="1.2em" />
                    <Icon icon="emojione:star" width="1.2em" height="1.2em" />
                    <Icon icon="emojione:star" width="1.2em" height="1.2em" />
                    <Icon icon="emojione-monotone:star" width="1.2em" height="1.2em" style="color: #ccc" />
                </div>
                <p class="text-sm ml-2">({{ currentProduct.ratings }})</p>
            </div>
            <p class=" ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, aperiam nostrum
                tenetur nemo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsum architecto blanditiis
                consequuntur, reiciendis illum, qui unde veritatis voluptatem amet, corrupti culpa eligendi officiis
                voluptas aut eum tempora laudantium cupiditate!
                suscipit iure sed debitis tempore, consequuntur earum non voluptatem ducimus laborum? Odit mollitia eum
                ducimus dolorum consequuntur.</p>
            <p class="text-2xl font-semibold mt-4">{{ currentProduct.price }} VND</p>
            <div class="flex items-center">
                <p>Số lượng: </p>
                <input class="bg-white ml-4 w-14 p-2" type="number" value="1">
            </div>
            <p class="text-red-500 text-sm">Còn hàng</p>
            <button class="bg-red-500 mt-10">Thêm Vào Giỏ Hàng</button>
        </div>
    </div>
</template>