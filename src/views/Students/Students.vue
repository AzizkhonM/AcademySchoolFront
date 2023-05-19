<script setup>

import { ref, reactive, onMounted } from "vue"
import { studentStore } from "../../stores/students/studentStore";

const students = JSON.parse(localStorage.getItem("students"))

const store = studentStore()

const Createmodal = ref(false)
const toggleModal1 = () => Createmodal.value = !Createmodal.value


const studentInfo = reactive({
    first_name: "",
    second_name: "",
    third_name: "",
    birth_date: "",
    img: "",
    stage: "",
    login: "",
    password: ""
})

const trash = (id) => {
    store.DELETE(id)
    location.reload()
}

const addStudent = () => {

    const newStudent = {
        first_name: studentInfo.first_name,
        second_name: studentInfo.second_name,
        third_name: studentInfo.third_name,
        birth_date: studentInfo.birth_date,
        img: studentInfo.img,
        stage: studentInfo.stage,
        login: studentInfo.login,
        password: studentInfo.password
    }

    store.ADD(newStudent)


    studentInfo.first_name = ""
    studentInfo.second_name = ""
    studentInfo.third_name = ""
    studentInfo.birth_date = ""
    studentInfo.img = ""
    studentInfo.stage = ""
    studentInfo.login =  ""
    studentInfo.password = ""
    location.reload()
    toggleModal1() 

}



</script>


<template lang="">

<div id="defaultModal" tabindex="-1" aria-hidden="true" :class="Createmodal ? 'bg-[rgba(0,0,0,0.4)] overflow-y-auto flex overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-modal md:h-full' : 'hidden'">
    <div class="relative p-4 w-full max-w-2xl h-full md:h-auto">
        <!-- Modal content -->
        <div class="relative p-4 bg-white rounded-lg shadow dark:bg-gray-800 sm:p-5">
            <!-- Modal header -->
            <div class="flex items-center justify-between bg-[#4D44B5] px-5 py-3 mb-4 rounded-2xl border-b sm:mb-5">
                <h3 class="text-lg font-semibold text-white dark:text-white">
                    O'quvchi qo'shish
                </h3>
                <button @click="toggleModal1" type="button" class="text-white bg-transparent hover:bg-gray-200 hover:text-[#4D44B5] rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-toggle="defaultModal">
                    <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                    <span class="sr-only">Close modal</span>
                </button>
            </div>
            <!-- Modal body -->
            <form action="#" @submit.prevent>
                <div class="grid gap-4 mb-4 sm:grid-cols-2">
                    <div>
                        <label for="name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Ism</label>
                        <input v-model="studentInfo.first_name" type="text" name="name" id="name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Ismni kiriting" required="">
                    </div>
                    <div>
                        <label for="brand" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Familiya</label>
                        <input v-model="studentInfo.second_name" type="text" name="brand" id="brand" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Familiyani kiriting" required="">
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Otasining ismi</label>
                        <input v-model="studentInfo.third_name" type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Otasining ismini kiriting" required="">
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Tug'ilgan sana</label>
                        <input v-model="studentInfo.birth_date" type="date" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" required="">
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Avatar linki</label>
                        <input v-model="studentInfo.img" type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="http://" required="">
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Guruh</label>
                        <select v-model="studentInfo.stage" id="category" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                            <option selected="" disabled>Guruhni tanlang</option>
                            <option value="Frilanserlik">Frilanserlik</option>
                            <option value="Ma'lumotlar ombori bilan ishlash">Ma'lumotlar ombori bilan ishlash</option>
                            <option value="Frontend">Frontend</option>
                            <option value="Backend">Backend</option>
                            <option value="Mobil o'yinlar">Mobil o'yinlar</option>
                        </select>
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Login</label>
                        <input v-model="studentInfo.login" type="text" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Loginni kiriting" required="">
                    </div>
                    <div>
                        <label for="price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Parol</label>
                        <input v-model="studentInfo.password" type="password" name="price" id="price" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="●●●●●●●●●●●●" required="">
                    </div>
                </div>
                <div style="text-align: right">
                    <button @click="addStudent()" type="submit" class="mt-4 text-white hover:text-[#4D44B5] duration-200 inline-flex items-center bg-[#4D44B5] hover:bg-white focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-full text-sm px-5 py-2.5 text-center">
                    <svg class="mr-1 -ml-1 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clip-rule="evenodd"></path></svg>
                    QO'SHISH
                </button>
                </div>
            </form>
        </div>
    </div>
</div>


<nav class="bg-[#F3F4FF] border-gray-200 px-[50px] py-[35px]">
        <div style="display:grid; grid-template-columns: 70% 30%;">
            <h1 class="text-[30px] font-bold text-[#303972]">Students</h1>
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

    <div class="w-full flex justify-between px-[50px] pb-[17px]">
        <div class="relative">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" class="text-[#4D44B5]"></path>
                </svg>
            </div>
            <input type="search" v-model="search" id="default-search"
                class="block w-[370px] p-4 pl-10 text-sm text-gray-900 rounded-full focus:ring-blue-500 focus:border-blue-500"
                placeholder="Qidiruv" required>
        </div>
        <button @click="toggleModal1" class="w-[230px] h-[52px] text-3xl text-white rounded-full bg-[#4D44B5] flex justify-center items-center hover:bg-[#F3F4FF] hover:text-[#4D44B5] duration-200"><i class='bx bx-plus'></i></button>
    </div>

    <div class="px-[50px] py-[25px]">
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" class="p-4">
                    <div class="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" class="px-6 py-3">
                    I. F. O.
                </th>
                <th scope="col" class="px-6 py-3">
                    Bosqich
                </th>
                <th scope="col" class="px-6 py-3">
                    Tug'ilgan sanasi
                </th>
                <th scope="col" class="px-6 py-3">
                    ID raqami
                </th>
                <th scope="col" class="px-6 py-3">
                    Amallar
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="el in students" :key="el.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    <div class="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                        <label for="checkbox-table-search-1" class="sr-only">checkbox</label>
                    </div>
                </td>
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    <div class="flex justify-start items-center">
                        <img :src="el.img" class="w-[60px] rounded-full mr-5" alt="">
                        {{ el.first_name }} {{ el.second_name }} {{ el.third_name }}
                    </div>
                </th>
                <td class="px-6 py-4">
                    {{ el.stage }}
                </td>
                <td class="px-6 py-4">
                    {{ el.birth_date }}
                </td>
                <td class="px-6 py-4">
                    {{el.id}}
                </td>
                <td class="px-6 py-4">
                    <div>
                        <i @click="trash(el.id)" class='text-xl bx bx-trash mr-4 hover:text-black'></i>
                        <i class='text-xl bx bx-pencil'></i>
                    </div>
                </td>
            </tr>
        </tbody>
    </table>
    
</div>
    </div>
</template>


<style lang="">
    
</style>