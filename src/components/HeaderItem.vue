<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
     <header>
    <header class="header center">
        <a class="header__logo" href="index.html">
            <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                <path
                    d="M0 34.0003H13.4588V24.499C13.4588 22.4853 15.0898 20.8543 17.1035 20.8543C19.1172 20.8543 20.7482 22.4853 20.7482 24.499V34.0003H33.9975V0C15.2211 0 0 15.2211 0 34.0003Z"
                    fill="#CDA274" />
            </svg>
            <h3 class="header__title">Interno</h3>
          </a>
        <div class="header__nav">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/project">Project</RouterLink>
            <RouterLink to="/blog">Blog</RouterLink> 
            <RouterLink to="/details">News</RouterLink>
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