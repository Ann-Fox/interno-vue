<script setup>
import { ref } from 'vue';
  const detailes = [
           {  tag: 'Kitchen',
              head: 'Let`s Get Solution for Building Construction Work',
              urlOne: '/images/blog-datails-kitchen-1.jpg',
              date: '26 December,2022',
              heading: 'Let`s Get Solution For Building Construction Work',
              pOne: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable.',
              pTwo: 'Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
              subHeading: 'Design sprints are great',
              urlTwo: '/images/blog-datails-kitchen-2.jpg',
              pLast: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
              tag: 'Bedroom',
              head: 'Let`s Get Solution for Building Construction Work Bedroom',
              urlOne: '/images/blog-datails-kitchen-1.jpg',
              date: '27 December,2022',
              heading: 'Let`s Get Solution For Building Construction Work Bedroom',
              pOne: 'Bedroom dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable.',
              pTwo: 'Bedroom hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
              subHeading: 'Design sprints are great Bedroom',
              urlTwo: '/images/blog-datails-kitchen-2.jpg',
              pLast: 'Bedroom dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
              tag: 'Building',
              head: 'Let`s Get Solution for Building Construction Work Building',
              urlOne: '/images/blog-datails-kitchen-1.jpg',
              date: '27 December,2022',
              heading: 'Let`s Get Solution For Building Construction Work Building',
              pOne: 'Building dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable.',
              pTwo: 'Building hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
              subHeading: 'Design sprints are great Building',
              urlTwo: '/images/blog-datails-kitchen-2.jpg',
              pLast: 'Building dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
              tag: 'Architecture',
              head: 'Let`s Get Solution for Building Construction Work Architecture',
              urlOne: '/images/blog-datails-kitchen-1.jpg',
              date: '27 December,2022',
              heading: 'Let`s Get Solution For Building Construction Work Architecture',
              pOne: 'Architecture dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable.',
              pTwo: 'Architecture hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
              subHeading: 'Design sprints are great Architecture',
              urlTwo: '/images/blog-datails-kitchen-2.jpg',
              pLast: 'Architecture dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
              tag: 'Kitchen Planning',
              head: 'Let`s Get Solution for Kitchen Planning',
              urlOne: '/images/blog-datails-kitchen-1.jpg',
              date: '27 December,2022',
              heading: 'Let`s Get Solution For Building Kitchen Planning',
              pOne: 'Kitchen Planning, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable.',
              pTwo: 'Kitchen Planning in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
              subHeading: 'Design sprints are Kitchen Planning',
              urlTwo: '/images/blog-datails-kitchen-2.jpg',
              pLast: 'Kitchen Planning sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
            {
              tag: 'Bathroom',
              head: 'Let`s Get Solution for Bathroom',
              urlOne: '/images/blog-datails-kitchen-1.jpg',
              date: '27 December,2022',
              heading: 'Let`s Get Solution For Building Bathroom',
              pOne: 'Bathroom, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don`t look even slightly believable.',
              pTwo: 'Bathroom in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.',
              subHeading: 'Design sprints are Bathroom',
              urlTwo: '/images/blog-datails-kitchen-2.jpg',
              pLast: 'Bathroom sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.',
            },
         ];
const currentContents = ref([detailes[0]]);
const buttonsTag = ['Kitchen', 'Bedroom', 'Building', 'Architecture', 'Kitchen Planning', 'Bathroom'];

const filterArticles = (btnTag) => {
currentContents.value = detailes.filter((el) => el.tag === btnTag);
};
</script>

<template>
       <div class="blog__news">
            
            <div class="blog__news__item" v-for="detaile in currentContents" :key="detaile.tag">
                <h1>{{ detaile.head }}</h1>
                <img :src="detaile.urlOne" :alt="detaile.tag">
                <div class="blog__item__date">
                    <p>{{ detaile.date }}</p>
                    <ul>
                        <li><a href="#">Interior</a></li>
                        <li><a href="">Home</a></li>
                        <li><a href="#">Decore</a></li>
                    </ul>
                </div>
                <p>{{ detaile.pOne }}</p>
                <p>{{ detaile.pTwo }}</p>

                <div>
                <img src="/images/blog-datails-quotes.png" alt="quotes">
                <h3>The details are not the details. They make the design.</h3>
            </div>

            <div class="blog__news__item">
                <h1>{{ detaile.subHeading }}</h1>
                <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to
                    popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have
                    suffered. </p>
                <ul>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                    <li>Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.</li>
                </ul>
                <img :src="detaile.urlTwo" :alt="detaile.tag">


                <p>{{ detaile.pLast }}</p>
            </div>
            </div>
        </div>

        <aside class="blog__asaid">
            <h3>Tags</h3>
            <button @click="filterArticles(buttonTag)" v-for="buttonTag in buttonsTag" :key="buttonTag">{{ buttonTag }}</button>
        </aside>
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
.blog__item__date ul{
  display: flex;
  justify-content: space-between;
  gap: 10px;
}
.blog__item__date li{
 list-style-type: none;
}
</style>