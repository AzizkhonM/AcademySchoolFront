<script setup>

import Sidebar from "../components/Sidebar/Sidebar.vue"
import Header from "../components/Header/Header.vue";
import Dashboard from "./Dashboard/Dashboard.vue"

</script>

<template>
  <main>
    <section class="w-full ">
      <Sidebar />
      <div class="p-4 ml-[320px] bg-[#F3F4FF]">
          <Header />
          <Dashboard />
          <router-view></router-view>
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