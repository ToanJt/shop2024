<script type="module" setup>
import { computed, onMounted, ref, watch } from "vue"
import { useRouter } from "vue-router";
import { Icon } from "@iconify/vue"

const router = useRouter();
const quantity = ref(0);
const subtotalProduct = computed(() => {
    return quantity.value * 550;
})

function returnHome() {
    router.push({ path: '/' })
}

function onTop() {
    window.scrollTo(top);
}

onMounted(() => {
    onTop();
})


</script>

<template>
    <section class="container mx-auto lg:px-0 px-8 text-black mb-35 mt-20">
        <div class="text-left">
            <p class=" text-3xl font-semibold"><span class="text-red-500">Giỏ hàng</span> của bạn</p>
        </div>
        <table class="w-full table-auto border-spacing-y-10 border-separate text-black">
            <thead class=" box-shadow ">
                <tr class="text-left h-17 font-normal">
                    <th class="pl-8 ">Sản phẩm</th>
                    <th>Giá</th>
                    <th>Số lượng</th>
                    <th>Tổng cộng</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(item, index) in products" :key="index" class="box-shadow text-left h-24">
                    <td class="pl-8">
                        <div class="flex items-center">
                            <img class="w-20 mr-4" :src="(item.img)" alt="">
                            <p>{{ item.name }}</p>
                        </div>
                    </td>
                    <td>$550</td>
                    <td>
                        <input v-model="quantity"
                            class="border-1 border-solid border-secondary outline-none w-20 px-4 py-2 rounded-md bg-white text-black"
                            value="1" type="number" name="" id="">
                    </td>
                    <td>{{ subtotalProduct }}</td>
                </tr>
            </tbody>
        </table>
        <div class=" justify-between -mt-5 mb-20 sm:flex hidden">
            <button @click="returnHome()" class="return-home">Quay về shop</button>
            <button>Cập nhật giỏ hàng</button>
        </div>
        <div class="grid lg:grid-cols-2 grid-cols-1 xl:gap-44 gap-30 text-left">
            <div class="flex sm:flex-row flex-col gap-4 h-14 lg:mb-0 mb-20">
                <input
                    class="bg-white sm:py-0 py-3 rounded-md px-6 text-black border-1 border-solid border-secondary outline-none"
                    placeholder="Nhập mã giảm giá của bạn" type="text">
                <button>Thêm mã giảm giá</button>
            </div>
            <div class="border-2 border-solid border-black rounded px-4 py-6">
                <h3 class="font-medium text-xl mb-6">Tổng tiền của giỏ hàng</h3>
                <ul>
                    <li class="flex justify-between border-b-1 border-solid border-secondary pb-2 mb-3">
                        <p>Tổng cộng:</p>
                        <p>1.760.000 VND</p>
                    </li>
                    <li class="flex justify-between border-b-1 border-solid border-secondary pb-2 mb-3">
                        <p>Vận chuyển:</p>
                        <p>Miễn phí</p>
                    </li>
                    <li class="flex justify-between pb-2 mb-3">
                        <p>Thành tiền:</p>
                        <p>1.760.000 VND</p>
                    </li>

                    <li class="flex justify-between pb-2 mb-3">
                        <p>Phương thức thanh toán:</p>
                        <div class="flex gap-4">
                            <Icon icon="logos:visa" width="2em" height="2em" />
                            <Icon icon="logos:mastercard" width="2em" height="2em" />
                            <Icon icon="arcticons:zalopay" width="2em" height="2em" style="color: black" />
                            <Icon icon="arcticons:momo" width="2em" height="2em" style="color: black" />
                        </div>
                    </li>
                </ul>
                <Button class="flex justify-center">Đặt hàng</Button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.box-shadow {
    box-shadow: rgba(0, 0, 0, 0.1) 0px 1px 2px 0px;
}

button {
    background: rgb(239 68 68);
}

.return-home {
    background: black;
}

@media only screen and (max-width: 1024px) {
    button {
        background: red !important;
    }
}
</style>