<script setup>
import { Icon } from "@iconify/vue"


</script>

<template>
    <div class="w-pc mx-auto">
        <div class=" my-10 grid grid-cols-2">
            <div class="">
                <h3 class="text-left text-3xl font-semibold mb-6">Liên hệ với chúng tôi</h3>
                <div class="flex flex-col gap-2">
                    <div class="flex items-center gap-2">
                        <div class=" border-dotted border-black border-2 p-1 rounded-full">
                            <Icon icon="mingcute:location-fill" width="1.4em" height="1.4em" style="color: black" />
                        </div>
                        <p>147 Bà Triệu, Xuân Phú, Thành phố Huế, Thừa Thiên Huế, Việt Nam</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class=" border-dotted border-black border-2 p-1 rounded-full">
                            <Icon icon="material-symbols:call" width="1.4em" height="1.4em" style="color: black" />
                        </div>

                        <p>(+84) 0367898686</p>
                    </div>
                    <div class="flex items-center gap-2">
                        <div class=" border-dotted border-black border-2 p-1 rounded-full">
                            <Icon icon="material-symbols:mail" width="1.4em" height="1.4em" style="color: black" />
                        </div>

                        <p>21t1020868@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="text-left">
                <div>
                    <h3 class="text-left text-3xl font-semibold mb-1">Bạn cần hỗ trợ? <span class="text-red-500">Hãy gửi
                            thông
                            tin cho chúng
                            tôi</span></h3>
                    <p class="text-gray-500">Chúng tôi rất sẵn lòng trả lời bất kỳ câu hỏi, thắc mắc nào của bạn.</p>
                    <form @submit.prevent="" class=" max-w-lg mt-4">
                        <div class="flex flex-col mb-4">
                            <label for="name" class="font-semibold">Họ và tên</label>
                            <input placeholder="Vui lòng nhập họ tên của bạn..."
                                class="outline-none text-sm bg-white px-2 py-3 mt-1" type="text" id="name">
                        </div>
                        <div class="flex flex-col">
                            <label for="email" class="font-semibold">Email</label>
                            <input type="email" placeholder="Vui lòng nhập email của bạn..."
                                class="outline-none text-sm bg-white px-2 py-3 mt-1" id="email">
                        </div>
                        <div class="flex flex-col mt-4">
                            <label for="phone" class="font-semibold">Điện thoại</label>
                            <input placeholder="Vui lòng nhập số điện thoại của bạn..."
                                class="outline-none text-sm bg-white px-2 py-3 mt-1" type=" number" id="phone">
                        </div>
                        <div class="flex flex-col mt-4">
                            <label for="content" class="font-semibold">Nội dung</label>
                            <textarea class="outline-none text-sm bg-white px-2 py-3 mt-1" name="" id="content"
                                cols="30" rows="5"></textarea>
                        </div>
                        <button class="mt-8">Gửi đi</button>
                    </form>
                </div>
            </div>
        </div>
        <div class="w-full border-2 border-solid border-black rounded-xl overflow-hidden">
            <iframe class="w-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3826.234474060396!2d107.59782647579769!3d16.46366082875665!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3141a115d62cb7bb%3A0x2217cd91841e147c!2sTr%C3%A0%20Popping!5e0!3m2!1svi!2s!4v1722062351097!5m2!1svi!2s"
                height="680" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </div>
</template>