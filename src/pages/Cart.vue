<script type="module" setup>
import { computed, ref, watch } from "vue"

const quantity = ref(0);
const subtotalProduct = computed(() => {
    return quantity.value * 550;
})

</script>

<template>
    <section class="w-pc mx-auto text-black mb-35 mt-20">
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
        <div class="flex justify-between -mt-5 mb-20">
            <button class="return-home">Quay về shop</button>
            <button>Cập nhật giỏ hàng</button>
        </div>
        <div class="grid grid-cols-2 gap-44 text-left">
            <div class="flex gap-4 h-14">
                <input class="bg-white rounded-md px-6 text-black border-1 border-solid border-secondary outline-none"
                    placeholder="Nhập mã giảm giá của bạn" type="text">
                <Button>Thêm mã giảm giá</Button>
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
</style>