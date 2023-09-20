<script setup>
import { RouterLink } from 'vue-router'
import IconLogo from './icons/IconLogo.vue';

const links = [
                    {
                        id: 1,
                        title: 'Home',
                        url: '/',
                    },
                    {
                        id: 2,
                        title: 'Project',
                        url: '/project',
                    },
                    {
                        id: 3,
                        title: 'Blog',
                        url: '/blog',
                    },
                    {
                        id: 4,
                        title: 'Details',
                        url: '/details',
                    },
]
</script>

<template>
     <header>
    <header class="header center">
          <RouterLink to="/" class="header__logo">  
            <IconLogo/>
            <h3 class="header__title">Interno</h3>
          </RouterLink>

            <div class="header__nav">
        <RouterLink :to="link.url" v-for="link in links" :key="link.id">{{link.title}}</RouterLink>
    </div>

    </header>
  </header>
</template>

<style scoped>
   * {
  margin: 0;
  padding: 0;
}

body {
  font-family: "DM Serif Display", serif;
}

h2 {
  color: #292f36;
  text-align: center;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
}

a {
  text-decoration: none;
  font-family: "Jost", sans-serif;
}

p {
  color: #4d5053;
  font-family: "Jost", sans-serif;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 33px */
  letter-spacing: 0.22px;
}

.center {
  padding-left: calc(50% - 600px);
  padding-right: calc(50% - 600px);
}

.header {
  padding-top: 53px;
  padding-bottom: 57px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__logo {
  display: flex;
  gap: 10px;
  align-items: center;
}
.header__title {
  color: #292f36;
  font-family: "DM Serif Display", serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 50px */
}
.header__nav {
  display: flex;
  gap: 50px;
}
.header__nav a {
  color: #292f36;
  text-align: center;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 25px */
} 
</style>