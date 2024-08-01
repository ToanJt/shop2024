<script setup>
import { useRouter } from 'vue-router'
import Slug from 'vietnamese-slug'
import fashionNews1 from "../variable/fashionNews1.js"
import fashionNews2 from "../variable/fashionNews2.js"
import { onMounted } from 'vue';


const router = useRouter();
const toDetails = (params) => {
    const slugParams = Slug(params)
    router.push({ name: "news-details", params: { id: slugParams } });
}

function onTop() {
    window.scrollTo(top)
}

onMounted(() => {
    onTop();
})

</script>

<template>
    <div class="sm:container mx-auto mt-20">
        <div class="flex row">
            <div class="column">
                <div @click="toDetails(news.title)" v-for="(news, index) in fashionNews1" :key="index" class="relative">
                    <img class="" :src="news.img" alt="">
                    <div
                        class="absolute flex-col sm:px-10 md:px-14 px-6 bg-white opacity-0 hover:opacity-80 transition-all duration-300 cursor-pointer top-0 bottom-0 left-0 right-0 flex justify-center">
                        <h3 class=" mb-2 text-left lg:text-3xl sm:text-xl text-md font-semibold">{{ news.title }}</h3>
                        <p class="text-left mb-2 lg:text-base text-sm md:block hidden">{{ news.content }}</p>
                        <p class="text-left lg:text-base text-sm sm:block hidden">Tác giả: {{ news.author }}</p>
                    </div>
                </div>
            </div>
            <div class="column">
                <div @click="toDetails(news.title)" v-for="(news, index) in fashionNews2" :key="index" class="relative">
                    <img class="w-full " :src="news.img" alt="">
                    <div
                        class=" flex-col sm:px-10 md:px-14 px-6 bg-white opacity-0 hover:opacity-80 transition-all duration-300 cursor-pointer absolute top-0 bottom-0 left-0 right-0 flex justify-center">
                        <h3 class=" mb-2 text-left lg:text-3xl sm:text-xl text-md font-semibold">{{ news.title }}</h3>
                        <p class="text-left mb-2 lg:text-base text-sm md:block hidden">{{ news.content }}</p>
                        <p class="text-left lg:text-base text-sm sm:block hidden">Tác giả: {{ news.author }}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.row {
    display: -ms-flexbox;
    /* IE10 */
    display: flex;
    -ms-flex-wrap: wrap;
    /* IE10 */
    flex-wrap: wrap;
    padding: 0 4px;
}

/* Create four equal columns that sits next to each other */
.column {
    -ms-flex: 50%;
    /* IE10 */
    flex: 25%;
    max-width: 50%;
    padding: 0 4px;
}

.column img {
    margin-top: 8px;
    vertical-align: middle;
    width: 100%;
}
</style>