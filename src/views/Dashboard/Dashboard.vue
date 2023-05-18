<script setup>

localStorage.setItem("title", "Dashboard")

</script>


<template lang="">
    <div style="display:grid; grid-template-columns: 70% 30%;" class="px-[50px] py-[25px]">
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
                        932
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
                        754
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
            <ul>
                <li class="flex justify-between items-center mb-4">
                    <img class="w-[70px] rounded-full" src="https://raw.githubusercontent.com/lbladma/React-Portfolio/master/src/images/vue.png" alt="">
                    <div class="grid grid-cols-1 items-center ml-[-40px]">
                        <h1 class="text-[18px] text-[#303972]">Dasturiy Injiniring</h1>
                        <h2 class="text-[18px] text-[#A098AE]">Class VII A</h2>
                    </div>
                    <button class="w-[65px] h-[65px] border-[#A098AE] border-2 hover:border-[#4D44B5] text-[#A098AE] hover:bg-[#4D44B5] hover:text-white duration-200 rounded-full flex justify-center items-center">
                        <i class='bx bx-envelope text-[30px]'></i>
                    </button>
                </li>
                <li class="flex justify-between items-center mb-4">
                    <img class="w-[70px] rounded-full" src="https://sun6-21.userapi.com/s/v1/if1/pCqQfbw-a2PWEGrMJCpV66w9JwmQJXv6inHwr8Tg-m6pliHQ138KmCxB7oQ0dDodEq1H6m3Y.jpg?size=2156x2156&quality=96&crop=3,0,2156,2156&ava=1" alt="">
                    <div class="grid grid-cols-1 items-center ml-[-40px]">
                        <h1 class="text-[18px] text-[#303972]">Dasturiy Injiniring</h1>
                        <h2 class="text-[18px] text-[#A098AE]">Class VII A</h2>
                    </div>
                    <button class="w-[65px] h-[65px] border-[#A098AE] border-2 hover:border-[#4D44B5] text-[#A098AE] hover:bg-[#4D44B5] hover:text-white duration-200 rounded-full flex justify-center items-center">
                        <i class='bx bx-envelope text-[30px]'></i>
                    </button>
                </li>
                <li class="flex justify-between items-center mb-4">
                    <img class="w-[70px] rounded-full" src="https://sun6-21.userapi.com/s/v1/if1/pCqQfbw-a2PWEGrMJCpV66w9JwmQJXv6inHwr8Tg-m6pliHQ138KmCxB7oQ0dDodEq1H6m3Y.jpg?size=2156x2156&quality=96&crop=3,0,2156,2156&ava=1" alt="">
                    <div class="grid grid-cols-1 items-center ml-[-40px]">
                        <h1 class="text-[18px] text-[#303972]">Dasturiy Injiniring</h1>
                        <h2 class="text-[18px] text-[#A098AE]">Class VII A</h2>
                    </div>
                    <button class="w-[65px] h-[65px] border-[#A098AE] border-2 hover:border-[#4D44B5] text-[#A098AE] hover:bg-[#4D44B5] hover:text-white duration-200 rounded-full flex justify-center items-center">
                        <i class='bx bx-envelope text-[30px]'></i>
                    </button>
                </li>
                <li class="flex justify-between items-center mb-4">
                    <img class="w-[70px] rounded-full" src="https://sun6-21.userapi.com/s/v1/if1/pCqQfbw-a2PWEGrMJCpV66w9JwmQJXv6inHwr8Tg-m6pliHQ138KmCxB7oQ0dDodEq1H6m3Y.jpg?size=2156x2156&quality=96&crop=3,0,2156,2156&ava=1" alt="">
                    <div class="grid grid-cols-1 items-center ml-[-40px]">
                        <h1 class="text-[18px] text-[#303972]">Dasturiy Injiniring</h1>
                        <h2 class="text-[18px] text-[#A098AE]">Class VII A</h2>
                    </div>
                    <button class="w-[65px] h-[65px] border-[#A098AE] border-2 hover:border-[#4D44B5] text-[#A098AE] hover:bg-[#4D44B5] hover:text-white duration-200 rounded-full flex justify-center items-center">
                        <i class='bx bx-envelope text-[30px]'></i>
                    </button>
                </li>
                <li class="flex justify-between items-center mb-4">
                    <img class="w-[70px] rounded-full" src="https://sun6-21.userapi.com/s/v1/if1/pCqQfbw-a2PWEGrMJCpV66w9JwmQJXv6inHwr8Tg-m6pliHQ138KmCxB7oQ0dDodEq1H6m3Y.jpg?size=2156x2156&quality=96&crop=3,0,2156,2156&ava=1" alt="">
                    <div class="grid grid-cols-1 items-center ml-[-40px]">
                        <h1 class="text-[18px] text-[#303972]">Dasturiy Injiniring</h1>
                        <h2 class="text-[18px] text-[#A098AE]">Class VII A</h2>
                    </div>
                    <button class="w-[65px] h-[65px] border-[#A098AE] border-2 hover:border-[#4D44B5] text-[#A098AE] hover:bg-[#4D44B5] hover:text-white duration-200 rounded-full flex justify-center items-center">
                        <i class='bx bx-envelope text-[30px]'></i>
                    </button>
                </li>
            </ul>
        </div>
    </div>
</template>


<style lang="">
    
</style>