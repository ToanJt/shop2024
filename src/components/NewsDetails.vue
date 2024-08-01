<script setup>
import { defineProps, onMounted, ref } from "vue"
import Slug from "vietnamese-slug"
import fashionNews1 from "../variable/fashionNews1"
import fashionNews2 from "../variable/fashionNews2"

const props = defineProps({
    id: String
})

const currentNews = ref({
    title: String,
    content: String,
    mainContent: String,
    author: String,
    img: String,
});

async function renderNews() {
    fashionNews1.forEach((news) => {
        if (Slug(news.title) === props.id) {
            currentNews.value.title = news.title;
            currentNews.value.content = news.content;
            currentNews.value.mainContent = news.content2;
            currentNews.value.author = news.author;
            currentNews.value.img = news.img;
            return;
        } else {
            fashionNews2.forEach((news) => {
                if (Slug(news.title) === props.id) {
                    currentNews.value.title = news.title;
                    currentNews.value.content = news.content;
                    currentNews.value.mainContent = news.content2;
                    currentNews.value.author = news.author;
                    currentNews.value.img = news.img;
                    return;
                }
            })
        }
    })
}

function toTop() {
    window.scrollTo(top);
}

onMounted(() => {
    renderNews();
    toTop();
})




</script>

<template>
    <div class="container mx-auto lg:px-0 px-8 text-left grid md:grid-cols-2 grid-cols-1 gap-10 mt-10">

        <div class="text-left">
            <h1 class="text-4xl font-semibold mb-2 ">{{ currentNews.title }}</h1>
            <p class="font-semibold mb-4">Tác giả: {{ currentNews.author }}</p>
            <p class=" text-justify mb-8">{{ currentNews.mainContent }}</p>
            <p>-create by xblacksoul-</p>
        </div>
        <img class=" rounded-md" :src="currentNews.img" alt="">
    </div>
</template>