<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListing from '@/components/JobListing.vue';

</script>
<template>
  <Hero title="Sushan Shrestha" subtitle="this is his domian" />
  <HomeCards />
  <JobListing :limit="3" :showButton="true" />

</template>