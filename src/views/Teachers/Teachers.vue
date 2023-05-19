<script setup>

import { Teachers } from '../../constants/teachers';

localStorage.setItem("title", "Teachers")


</script>


<template>
    <nav class="bg-[#F3F4FF] border-gray-200 px-[50px] py-[35px] ">
        <div style="display:grid; grid-template-columns: 70% 30%;">
            <h1 class="text-[30px] font-bold text-[#303972]">Teachers</h1>
            <ul class="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li class="border rounded-full w-[64px] mr-[-15px] h-[64px] flex justify-center items-center">
                        <lord-icon src="https://cdn.lordicon.com/psnhyobz.json" trigger="hover" colors="primary: #A098AE" state="loop" style="width: 35px; height: 35px"></lord-icon>
                    </li>
                    <li class="border rounded-full w-[64px] h-[64px] flex justify-center items-center">
                        <lord-icon src="https://cdn.lordicon.com/hwuyodym.json" trigger="hover" colors="primary: #A098AE" state="loop" style="width: 35px; height: 35px"></lord-icon>
                    </li>
                    <li>
                        <div class="grid grid-cols-1 text-center items-center h-[64px]">
                            <h1 class="text-[#303972]">Azizxon Muzaffarov</h1>
                            <h1 class="text-[#A098AE]">Admin</h1>
                        </div>
                    </li>
                    <li>
                        <img class="w-[60px] rounded-full" src="../../img/1663148872552.jpg" alt="">
                    </li>
                </ul>
        </div>
    </nav>

    <div class="w-full flex justify-between px-[50px] pb-[40px]">
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class="text-[#4D44B5]"></path>
                </svg>
            </div>
            <input @input="sort()" type="search" v-model="search" id="default-search"
                class="block w-[370px] p-4 pl-10 text-sm text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500"
                placeholder="Qidiruv" required>
        </div>
        <button class="w-[230px] h-[52px] text-3xl text-white rounded-full bg-[#4D44B5] flex justify-center items-center hover:bg-[#F3F4FF] hover:text-[#4D44B5] duration-200"><i class='bx bx-plus' ></i></button>
    </div>

    <div class="grid grid-cols-4 gap-6 px-[50px]">
        <div v-for="el in Teachers"
            class="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div class="flex justify-end px-4 pt-4">
                <button id="dropdownButton" data-dropdown-toggle="dropdown"
                    class="inline-block text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-1.5"
                    type="button">
                    <span class="sr-only">Open dropdown</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z">
                        </path>
                    </svg>
                </button>
                <!-- Dropdown menu -->
                <div id="dropdown" class="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
    <ul class="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
      </li>
      <li>
        <a href="#" class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
      </li>
    </ul>
</div>
            </div>
            <div class="flex flex-col items-center pb-10">
                <img class="w-24 h-24 mb-3 rounded-full shadow-lg" :src="el.img" alt="" />
                <h5 class="mb-1 text-xl font-medium text-gray-900 dark:text-white">{{ el.name }}</h5>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ el.subject }}</span>
                <div class="flex mt-4 space-x-3 md:mt-6">
                    <a href="#"
                        class="bg-[#4D44B5] hover:text-[#4d44b5] hover:bg-white duration-200 text-white rounded-full flex justify-center items-center p-3 text-2xl"><i
                            class='bx bx-phone'></i></a>
                    <a href="#"
                        class="bg-[#4D44B5] hover:text-[#4d44b5] hover:bg-white duration-200 text-white rounded-full flex justify-center items-center p-3 text-2xl"><i
                            class='bx bx-envelope'></i></a>
                </div>
            </div>
        </div>
        
    </div>
    </template>


<style lang="">
    
</style>