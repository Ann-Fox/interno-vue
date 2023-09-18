<template>
    <section>
         <div class="banner">
         </div>

         <div class="main center">
             <div class="main__content">
                <h3>Minimal Look Bedrooms</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo. <br><br>
                    In nec sem suscipit, convallis leo vitae, lacinia nibh. Cras amet tellus lectus. Vivamus ipsum nunc, mattis quis nibh id, pellentesque arcu. Donec a pellentesque Cras erat enim, gravida non ante vitae,elequis convallis elit, in viverra felis. Donec ultrices tellus vitae iaculisvd porta. Proin tincidunt ligula id purus porttitor.
                </p>
            </div>
            <div class="main__slider">
                <swiper
                :style="{
                '--swiper-navigation-color': '#fff',
                '--swiper-pagination-color': '#fff',
                }"
                :zoom="true"
                :navigation="true"
                :pagination="{
                clickable: true,
                }"
                :modules="modules"
                class="mySwiper"
            >
                <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="@/assets/images/project-details-slider-1.png" />
                </div> </swiper-slide>
                <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="@/assets/images/project-details-slider-2.png" />
                </div> </swiper-slide>
                <swiper-slide>
                <div class="swiper-zoom-container">
                    <img src="@/assets/images/project-details-slider-3.png" />
                </div> </swiper-slide>
            </swiper>
            </div> 
         </div>
       
    </section>
</template>

<script>
    // Import Swiper Vue.js components
  import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

import 'swiper/css/zoom';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import './style.css';

// import required modules
import { Zoom, Navigation, Pagination } from 'swiper/modules';

export default {
  components: {
    Swiper,
    SwiperSlide,
  },
  setup() {
    return {
      modules: [Zoom, Navigation, Pagination],
    };
  },
};
</script>

<style lang="scss" scoped>
.banner {
    background-image: url('../images/project-details-banner.jpg');
    height: 356px;
}

.main {
    margin-top: 200px;
    margin-bottom: 107px;
    &__content {
        max-width: 658px;
        margin: 0 auto 100px;
         font-style: normal;
         font-weight: 400;
        & h3 {
            color: #292F36;
            font-size: 50px;
            line-height: 125%; /* 62.5px */
            letter-spacing: 1px;
        }
        & p {
            color: #4D5053;
            // font-family: Jost;
            font-size: 22px;
            // font-style: normal;
            // font-weight: 400;
            line-height: 150%; /* 33px */
            letter-spacing: 0.22px;
        }
    }
  
}  
.swiper {
        border-radius: 70px;
        background: #C4C4C4;
    }

    // .swiper-pagination-bullet {
    //     width: var(--swiper-pagination-bullet-width, var(--swiper-pagination-bullet-size, 8px));
    // height: var(--swiper-pagination-bullet-height, var(--swiper-pagination-bullet-size, 8px));
    // }
</style>