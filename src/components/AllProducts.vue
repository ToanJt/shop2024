<script setup>
import { Icon } from '@iconify/vue'
import ProductCard from "../components/ProductCard.vue"

</script>

<template>
    <div class="w-pc mx-auto">
        <div class="text-left flex justify-between">
            <h1 class="text-4xl mb-8 font-semibold">Tất Cả Sản Phẩm</h1>
            <div class="flex items-center gap-2 cursor-pointer font-semibold">
                <p>Xem thêm</p>
                <Icon icon="cil:arrow-right" width="1.2em" height="1.2em" class="arrow transition-all  text-black" />
            </div>
        </div>
        <div class="grid grid-cols-4 gap-6">
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
        </div>
    </div>
</template>