<template>
    <div class="notfound center">
        <div class="notfound__content">
            <h1>404</h1>
            <p>We are sorry, but the page you requested was not found</p>
            <router-link to="/">
                <button class="notfound__content__btn">Bake To Home
                        <svg xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 19 17" fill="none">
                            <path d="M2 8.43542L15.7232 8.29857M10.6182 1.91138L17.1412 8.43436L10.4868 15.0887"
                                stroke="#CDA274" stroke-width="2" stroke-linecap="square" stroke-linejoin="round" />
                        </svg>
                    </button>
            </router-link>
        </div>
        <div class="notfound__img">
            <img src="/interno-vue/images/not-found.png" alt="">
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.notfound {
    display: flex;
    gap: 81px;
    align-items: center;
    justify-content: center;
    margin-bottom: 80px;
    &__content {
        h1 {
            color: #CDA274;
            // font-family: DM Serif Display;
            font-size: 250px;
            font-style: normal;
            font-weight: 400;
            line-height: 125%; /* 312.5px */
        }
        p {
            color: #292F36;
            // font-family: DM Serif Display;
            font-size: 35px;
            font-style: normal;
            font-weight: 400;
            line-height: 150%; /* 52.5px */
            letter-spacing: 0.35px;
        }
        &__btn {
        border-radius: 18px;
        background: #292f36;
        box-shadow: 0px 10px 20px 0px rgba(192, 192, 192, 0.35);
        display: flex;
        padding: 26px 49px 26px 48px;
        align-items: center;
        gap: 10px;
        color: #fff;
        text-align: center;
        font-family: Jost;
        font-size: 18px;
        font-style: normal;
        line-height: 125%; /* 22.5px */
        letter-spacing: 0.36px;
        margin-top: 23px;
        }
    }
    &__img {
        position: relative;
        width: 913px;
        height: 1042px;
        img {
            position: absolute;
            
        }
        // background-image: url("../images/not-found.png");
      
        //   background-repeat: no-repeat;
        //   background-origin: content-box;
    }
}
</style>