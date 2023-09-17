<script setup>
import BlogItems from './BlogItems.vue';

defineProps({
  msg: {
    type: String,
    required: true
  }, 
});
</script>
<template>

  <section class="banner">
       <div class="banner__content">
           <h1 class="banner__title">Articles & News</h1>
           <p class="banner__text">Home / Blog</p>
       </div>
   </section>

   <section class="blog center">
       <div class="blog__news">
           <h1>Latest Post</h1>

           <div class="blog__news__item">

               <div class="blog__img">
                   <img src="@/assets/images/blog-news.png" alt="">
               </div>

               <div class="blog__news__content">
                   <h3 class="blog__item__heading">Low Cost Latest Invented Interior Designing Ideas</h3>
                   <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
                       in.Contrary to popular belief.

                       Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
                   <div class="blog__item__date">
                       <p>26 December,2022 </p>
                       <svg xmlns="http://www.w3.org/2000/svg" width="52" height="53" viewBox="0 0 52 53" fill="none">
                           <circle cx="26" cy="26.267" r="26" fill="#F4F0EC" />
                           <path d="M23.7714 32.9527L29.7143 26.267L23.7714 19.5813" stroke="#292F36" stroke-width="2"
                               stroke-linecap="round" stroke-linejoin="round" />
                       </svg>
                   </div>
               </div>
           </div>
       </div>

       <div class="blog__heading">
           <h2>Articles & News</h2>
           <p>It is a long established fact that a reader will be distracted by the of readable content of a page
               when
               lookings at its layouts the points of using.</p>
       </div>
       <BlogItems/>
          </section>
   
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

.banner {
  /* background-image: url("../images/blog-banner.jpg"); */
  background-image: url("@/assets/images/blog-banner.jpg");
  background-repeat: no-repeat;
  background-origin: content-box;
  height: 356px;
  padding-left: calc(50% - 960px);
  padding-right: calc(50% - 960px);
  display: flex;
  justify-content: center;
  align-items: flex-end;
}
.banner__content {
  text-align: center;
  max-width: 503px;
  padding: 41px 78px;
  background-color: #fff;
  border-radius: 37px 37px 0px 0px;
}
.banner__title {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 81.25px */
  margin-bottom: 18px;
}

.blog {
  margin: 200px auto;
}
.blog__news h1 {
  color: #292f36;
  font-size: 50px;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 62.5px */
  letter-spacing: 1px;
  margin-bottom: 27px;
}
.blog__news__item {
  display: flex;
  flex-direction: row;
  gap: 65px;
  border-radius: 62px;
  border: 1px solid #e7e7e7;
  box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
  padding: 22px;
}
.blog__news__content {
  max-width: 489px;
  margin: 0 auto;
  justify-content: space-around;
  display: flex;
  flex-direction: column;
}
.blog__heading {
  padding-left: calc(50% - 405px);
  padding-right: calc(50% - 405px);
  gap: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 93px;
  margin-top: 150px;
}
.blog__heading p {
  text-align: center;
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