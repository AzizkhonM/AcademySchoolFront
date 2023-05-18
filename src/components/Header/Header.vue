<script setup>

    const header = localStorage.getItem("title")

</script>


<template lang="">
    <nav class="bg-[#F3F4FF] border-gray-200 px-[50px] py-[25px] ">
        <div style="display:grid; grid-template-columns: 70% 30%;">
            <h1 class="text-[30px] font-bold text-[#303972]">{{ header }}</h1>
            <ul class="flex flex-col font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li class="border rounded-full w-[64px] h-[64px] flex justify-center items-center">
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
</template>


<style lang="">
    
</style>