<script setup>
import { ref } from 'vue';
  const projects = [
           {  tag: 'Bedroom',
              head: 'Minimal Bedroom',
              urlImg: '/interno-vue/images/project-bedroom-1.jpg',
            },
            {  tag: 'Bedroom',
              head: 'Minimal Bedroom',
              urlImg: '/interno-vue/images/project-bedroom-2.jpg',
            },
            {  tag: 'Bedroom',
              head: 'Minimal Bedroom',
              urlImg: '/interno-vue/images/project-bedroom-3.jpg',
            },
            {  tag: 'Bedroom',
              head: 'Minimal Bedroom',
              urlImg: '/interno-vue/images/project-bedroom-4.jpg',
            },
            {  tag: 'Bedroom',
              head: 'Minimal Bedroom',
              urlImg: '/interno-vue/images/project-bedroom-5.jpg',
            },
            {  tag: 'Bedroom',
              head: 'Minimal Bedroom',
              urlImg: '/interno-vue/images/project-bedroom-6.jpg',
            },
            {  tag: 'Bedroom',
              head: 'Minimal Bedroom',
              urlImg: '/interno-vue/images/project-bedroom-7.jpg',
            },
            {  tag: 'Bedroom',
              head: 'Minimal Bedroom',
              urlImg: '/interno-vue/images/project-bedroom-8.jpg',
            },
            {  tag: 'Bathroom',
              head: 'Minimal Bathroom',
              urlImg: '/interno-vue/images/project-bedroom-3.jpg',
            },
            {  tag: 'Bathroom',
              head: 'Minimal Bathroom',
              urlImg: '/interno-vue/images/project-bedroom-4.jpg',
            },
            {  tag: 'Bathroom',
              head: 'Minimal Bathroom',
              urlImg: '/interno-vue/images/project-bedroom-1.jpg',
            },
            {  tag: 'Bathroom',
              head: 'Minimal Bathroom',
              urlImg: '/interno-vue/images/project-bedroom-2.jpg',
            },
            {  tag: 'Bathroom',
              head: 'Minimal Bathroom',
              urlImg: '/interno-vue/images/project-bedroom-5.jpg',
            },
            {  tag: 'Bathroom',
              head: 'Minimal Bathroom',
              urlImg: '/interno-vue/images/project-bedroom-6.jpg',
            },
            {  tag: 'Kitchan',
              head: 'Minimal Kitchan',
              urlImg: '/interno-vue/images/project-bedroom-7.jpg',
            },
            {  tag: 'Kitchan',
              head: 'Minimal Kitchan',
              urlImg: '/interno-vue/images/project-bedroom-8.jpg',
            },
            {  tag: 'Living Area',
              head: 'Minimal Living Area',
              urlImg: '/interno-vue/images/project-bedroom-5.jpg',
            },
            {  tag: 'Living Area',
              head: 'Minimal Living Area',
              urlImg: '/interno-vue/images/project-bedroom-6.jpg',
            },
            {  tag: 'Living Area',
              head: 'Minimal Living Area',
              urlImg: '/interno-vue/images/project-bedroom-7.jpg',
            },
            {  tag: 'Living Area',
              head: 'Minimal Living Area',
              urlImg: '/interno-vue/images/project-bedroom-8.jpg',
            },
            {  tag: 'Living Area',
              head: 'Minimal Living Area',
              urlImg: '/interno-vue/images/project-bedroom-1.jpg',
            },
            {  tag: 'Living Area',
              head: 'Minimal Living Area',
              urlImg: '/interno-vue/images/project-bedroom-2.jpg',
            },
            {  tag: 'Living Area',
              head: 'Minimal Living Area',
              urlImg: '/interno-vue/images/project-bedroom-3.jpg',
            },
            {  tag: 'Living Area',
              head: 'Minimal Living Area',
              urlImg: '/interno-vue/images/project-bedroom-4.jpg',
            },
         ];
const currentContents = ref([projects[0]]);
const buttonsTag = ['Bedroom', 'Kitchan', 'Living Area', 'Bathroom'];

const filterArticles = (btnTag) => {
currentContents.value = projects.filter((el) => el.tag === btnTag);
};
</script>

<template>
         <aside class="blog__asaid">
            <button @click="filterArticles(buttonTag)" v-for="buttonTag in buttonsTag" :key="buttonTag">{{ buttonTag }}</button>
        </aside>

        <div class="project__items" >
            <div class="project__item" v-for="project in currentContents" :key="project.tag">
                <img :src="project.urlImg" :alt="project.tag">
                <div class="project__items__content">
                    <div class="project__items__text">
                        <h4 class="project__items__title">{{ project.head }}</h4>
                        <p>Decor / Artchitecture</p>
                    </div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="70" height="70" viewBox="0 0 70 70" fill="none">
                        <circle cx="35" cy="35" r="35" fill="#F4F0EC" />
                        <path d="M32 44L40 35L32 26" stroke="#292F36" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </div>
            </div>
        </div>  
        
        <div class="page">
          <button>01</button>
          <button>02</button>
          <button>03</button>
          <button>></button>
        </div>
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

.blog__asaid {
  border-radius: 18px;
    border: 1px solid #CDA274;
    display: flex;
    width: fit-content;
}
.blog__asaid button {
  border-radius: 18px;
    padding: 26px 66px;
    border: none;
  font: inherit;
  color: inherit;
  background-color: transparent;
}

.blog__asaid button:hover {
    background: #CDA274;
    cursor: pointer;
}
.project__items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
}
.project__items__title {
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.project__items__content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 47px;
}
.project__items__text {
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}

.page {
  display: flex;
  gap: 20px;
}
.page button {
  font: inherit;
  color: inherit;
  background-color: transparent;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  border: 1px solid #CDA274;
}

.page button:hover {
  background-color: #F4F0EC;
  border: none;
}
</style>