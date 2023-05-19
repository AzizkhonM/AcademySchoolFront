<script setup>

import Sidebar from "../components/Sidebar/Sidebar.vue"
import Header from "../components/Header/Header.vue";
import Footer from "../components/Footer/Footer.vue";

console.log(window.location.href);

</script>

<template>
  <main>
    <section class="w-full ">
      <Sidebar />
      <div class="p-4 ml-[320px] bg-[#F3F4FF]">
          <Header />
          <router-view></router-view>
          <Footer />
      </div>
    </section>
  </main>
</template>

<style>
  .router-link-active{
    background-color: #F3F4FF;
    color: #4D44B5;
  }
</style>