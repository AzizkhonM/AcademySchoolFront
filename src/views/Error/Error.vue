<script setup></script>

<template>
  <section class="bg-white dark:bg-gray-900 ">
    <div class="container min-h-screen px-6 py-12 mx-auto lg:flex lg:items-center lg:gap-12">
        <div class="wf-ull lg:w-1/2">
            <p class="text-sm font-medium text-[#4D44B5]">404 error</p>
            <h1 class="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Sahifa topilmadi</h1>
            <p class="mt-4 text-gray-500 dark:text-gray-400">Kechirasiz, siz qidirayotgan sahifa mavjud emas. Quyida sizga kerakli havola havola:</p>

            <div class="flex items-center mt-6 gap-x-3">
                <router-link to="/">
                <button class="w-1/2  px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-[#4D44B5] rounded-lg shrink-0 sm:w-auto hover:bg-[#3b3481]">
                    Boshqaruv paneliga qaytish
                </button>
                </router-link>
            </div>
        </div>

        <div class="relative w-full mt-12 lg:w-1/2 lg:mt-0">
            <img class="w-full max-w-lg lg:mx-auto" src="https://merakiui.com/images/components/illustration.svg" alt="">
        </div>
    </div>
</section>
</template>

<style>
    img{
        filter: opacity(0.9) drop-shadow(0 0 #4D44B5);
    }
</style>
