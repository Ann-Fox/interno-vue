<script setup>
  const articles = [
           {
              url: '/images/blog-img-1.png',
              tag: 'Kitchan Design',
              heading: 'Let`s Get Solution For Building Construction Work',
              date: '26 December,2022'
            },
            {
              url: '/images/blog-img-2.png',
              tag: 'Living Design',
              heading: 'Low Cost Latest Invented Interior Designing Ideas.',
              date: '22 December,2022'
            },
            {
              url: '/images/blog-img-3.png',
              tag: 'Interior Design',
              heading: 'Best For Any Office & Business Interior Solution',
              date: '25 December,2022'
            },
            {
              url: '/images/blog-img-4.png',
              tag: 'Kitchan Design',
              heading: 'Let`s Get Solution For Building Construction Work',
              date: '26 December,2022'
            },
            {
              url: '/images/blog-img-5.png',
              tag: 'Living Design',
              heading: 'Low Cost Latest Invented Interior Designing Ideas.',
              date: '22 December,2022'
            },
            {
              url: '/images/blog-img-6.png',
              tag: 'Interior Design',
              heading: 'Best For Any Office & Business Interior Solution',
              date: '25 December,2022'
            },
         ];
</script>

<template>
       <div class="blog__items" >
           <div class="blog__item" v-for="article in articles" :key="article.id">
               <div class="blog__item__top">
                   <img :src="article.url" :alt='article.tag'>
                   <div class="blog__item__tag">
                       <p>{{article.tag}}</p>
                   </div>
               </div>

               <div class="blog__item__bottom">
                   <h3 class="blog__item__heading">{{article.heading}}</h3>
                   <div class="blog__item__date">
                       <p>{{article.date}} </p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                           <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                           <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                               stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                   </div>
               </div>
           </div> 
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

.blog__items {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 27px;
  grid-row-gap: 27px;
}
.blog__item {
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  padding: 21px;
}
.blog__item p {
  color: #4d5053;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%; /* 24px */
  letter-spacing: 0.16px;
  text-transform: capitalize;
}
.blog__item__top {
  position: relative;
  margin-bottom: 21px;
}
.blog__item__tag {
  border-radius: 8px 8px 8px 0px;
  background: #fff;
  position: absolute;
  top: 228px;
  left: 20px;
  padding: 7px;
}
.blog__item__bottom {
  display: flex;
  flex-direction: column;
  gap: 30px;
}
.blog__item__heading {
  max-width: 297px;
  color: #292f36;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 31.25px */
  letter-spacing: 0.5px;
}
.blog__item__date {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>