<script setup>

import { ref } from "vue"
import { navLinks } from "../../constants/navLinks"

</script>


<template>
  
    <aside id="default-sidebar" class="fixed top-0 left-0 z-40 w-80 h-screen transition-transform -translate-x-full sm:translate-x-0" aria-label="Sidebar">
      <div class="h-full py-4 overflow-y-auto bg-[#4D44B5]">
        <a class="flex justify-center items-center mt-6 mb-8">
          <img src="../../img/favicon.png" class="w-12" alt="">
          <h1 class="font-bold text-[30px] ml-3 text-white">Academy</h1>
        </a>
        <div class="pl-3 overflow-y-auto space-y-2 font-medium">
          
            <router-link v-for="link in navLinks" :key="link.id" :to="link.link" class="bg-[#4D44B5] text-[#C1BBEB] hover:text-[#4D44B5] duration-150 flex text-lg items-center py-3 px-5 rounded-l-full dark:text-white hover:bg-[#F3F4FF] dark:hover:bg-gray-700">
              <i :class="link.icon" class="text-[35px]"></i>
              <span class="ml-3">{{ link.title }}</span>
            </router-link>
          </div>
      </div>
    </aside>
  </template>


<style scoped>
    
</style>