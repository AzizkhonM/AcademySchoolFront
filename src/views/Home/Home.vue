<script setup>

import { groups } from "../../constants/groups"
import { messages } from "../../constants/messages";

const newMess = messages

for(let i of newMess){
    i.message = i.message.slice(0, 18) + ""
}

let studentsNum = JSON.parse(localStorage.getItem("students")).length
let teachersNum = JSON.parse(localStorage.getItem("teachers")).length

localStorage.setItem("title", "Dashboard")

</script>


<template lang="">
    <nav class="bg-[#F3F4FF] border-gray-200 px-[50px] py-[35px]">
        <div style="display:grid; grid-template-columns: 70% 30%;">
            <h1 class="text-[30px] font-bold text-[#303972]">Dashboard</h1>
            <ul class="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0 justify-end">
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

    <div style="display:grid; grid-template-columns: 70% 30%;" class="px-[50px]">
        <div class="flex justify-evenly items-evenly bg-white py-8 rounded-2xl mr-6 h-[200px]">
            <div class="grid grid-cols-2 items-center w-[195px]">
                <div class="rounded-full w-[64px] p-3 bg-[#4D44B5] hover:bg-white hover:text-[#4D44B5] duration-200 text-white flex justify-center items-center">
                    <i class="bx bx-user text-[40px]"></i>
                </div>
                <div>
                    <div class="text-[18px] text-[#A098AE]">
                        O'quvchilar
                    </div>
                    <div class="text-[36px] text-[#303972] font-bold">
                        {{ studentsNum }}
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 items-center w-[195px]">
                <div class="rounded-full w-[64px] p-3 bg-[#FB7D5B] hover:bg-white hover:text-[#FB7D5B] duration-200 text-white flex justify-center items-center">
                    <i class="bx bx-user-circle text-[40px]"></i>
                </div>
                <div>
                    <div class="text-[18px] text-[#A098AE]">
                        O'qituvchilar
                    </div>
                    <div class="text-[36px] text-[#303972] font-bold">
                        {{ teachersNum }}
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 items-center w-[195px]">
                <div class="rounded-full w-[64px] p-3 bg-[#FCC43E] hover:bg-white hover:text-[#FCC43E] duration-200 text-white flex justify-center items-center">
                    <i class="bx bx-calendar-alt text-[40px]"></i>
                </div>
                <div>
                    <div class="text-[18px] text-[#A098AE]">
                        Guruhlar
                    </div>
                    <div class="text-[36px] text-[#303972] font-bold">
                        40
                    </div>
                </div>
            </div>
            <div class="grid grid-cols-2 items-center w-[195px]">
                <div class="rounded-full w-[64px] p-3 bg-[#303972] hover:bg-white hover:text-[#303972] duration-200 text-white flex justify-center items-center">
                    <i class="bx bx-math text-[40px]"></i>
                </div>
                <div>
                    <div class="text-[18px] text-[#A098AE]">
                        Fanlar
                    </div>
                    <div class="text-[36px] text-[#303972] font-bold">
                        16
                    </div>
                </div>
            </div>
        </div>
        <div class="py-8 px-8 bg-white rounded-2xl">
            <div class="flex justify-between items-center pb-12">
                <h1 class="text-[24px] font-bold text-[#303972]">Guruhlar</h1>
                <button class="bg-[#4d44b5] w-[50px] h-[50px] flex items-center justify-center rounded-full"><lord-icon src="https://cdn.lordicon.com/mecwbjnp.json" trigger="hover" colors="primary:#4d44b5,secondary:#ffffff" stroke="50" style="width:50px;height:50px"></lord-icon></button>
            </div>
            <ul v-for="el in groups">
                <li class="flex justify-between items-center mb-6 p-3 hover:bg-slate-50">
                    <img class="w-[70px] rounded-full" :src="el.img" alt="">
                    <div class="grid grid-cols-1 items-center ml-[-40px]">
                        <h1 class="text-[18px] text-[#303972]">{{ el.title }}</h1>
                        <h2 class="text-[18px] text-[#A098AE]">{{ el.sub }}</h2>
                    </div>
                    <button class="w-[65px] h-[65px] border-[#A098AE] border-2 hover:border-[#4D44B5] text-[#A098AE] hover:bg-[#4D44B5] hover:text-white duration-200 rounded-full flex justify-center items-center">
                        <i class='text-[30px]' :class="el.icon"></i>
                    </button>
                </li>
            </ul>
            <button class="w-full bg-[#eeedf8] text-[#4D44B5] hover:text-[#eeedf8] hover:bg-[#4D44B5] duration-200 font-bold rounded-full text-[20px] py-[23px]">Barchasi</button>

            <div class="flex justify-between items-center pb-12 mt-[60px]">
                <h1 class="text-[24px] font-bold text-[#303972]">Xabarlar</h1>
            </div>
            <ul v-for="el in messages">
                <li class="flex justify-between items-center mb-6 p-3 hover:bg-slate-50">
                    <img class="w-[70px] rounded-full" :src="el.img" alt="">
                    <div class="grid grid-cols-1 items-center ml-[-40px]">
                        <h1 class="text-[18px] text-[#303972]">{{ el.user }}</h1>
                        <h2 class="text-[18px] text-[#A098AE]">{{ el.message }}</h2>
                    </div>
                    <div class="flex align-bottom text-[#A098AE]"><h1>{{ el.time }}</h1></div>
                </li>
            </ul>
            <button class="w-full bg-[#eeedf8] text-[#4D44B5] hover:text-[#eeedf8] hover:bg-[#4D44B5] duration-200 font-bold rounded-full text-[20px] py-[23px]">Barchasi</button>
        </div>
        
    </div>
</template>


<style lang="">
    
</style>