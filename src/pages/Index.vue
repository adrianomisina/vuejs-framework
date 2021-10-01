<template>
  <q-page class="flex column justtify-center flex-center bg-dark">
    <img
      alt="Quasar logo"
      src="~assets/vue-logo.png"
      style="width: 20em; height: auto;"
    >
    <div>
      <h4 style="color: #3ab982;">Welcome to Vue JS</h4>
    </div>

    <div>
      <a href="#/doc" class="btn-neon">
        GET STARTED
      <svg height="50" width="180">
        <polyline points="0,0 180,0 180,50 0,50 0,00"></polyline>
      </svg>
      </a>
    </div>
    <q-page-container>
      <router-view />
    </q-page-container>

   <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn round icon="keyboard_arrow_up" color="positive" />
    </q-page-scroller>
  </q-page>
  
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'PageIndex',
  
})
</script>

<style scoped>
  body{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #333;
  }

  h4 {
    color: #3ab982;
  }

  .btn-neon{
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;
    font-size: 24px;
    line-height: 50px;
    color: #c7eadb;
    width: 180px;
    transition: 1s;
    transition-delay: .9s;
    position: relative;
    display: inline-block;
    border-radius: 5px
}

.btn-neon:hover{
    box-shadow: 0 0 10px #3ab982,
                0 0 40px #3ab982,
                0 0 80px #3ab982;
    background-color: #3ab982;
}

.btn-neon:hover polyline{
    stroke-dashoffset: -460;
}

.btn-neon svg{
    position: absolute;
    top:0;
    left:0;
    right:0;
    bottom:0;
    width: 100%;
    height: 100%;
}

.btn-neon svg polyline{
    fill: transparent;
    stroke: #3ab982;
    stroke-width: 2px;
    stroke-dasharray: 40 460;
    stroke-dashoffset: 40;
    transition:  .8s ease-in-out;
}
</style>