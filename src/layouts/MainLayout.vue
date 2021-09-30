<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
          color="positive"
        />

        <q-toolbar-title style="color: #3ab982">
          Vue JS
        </q-toolbar-title>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show
      class="bg-primary"
      style="color:#3ab982"
    >
      <q-list>
        <q-item-label
          header
          class="text-center"
          style="color: #c7eadb"
        >
        ESSENTIAL MENU:
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Home',
    caption: 'Vue home',
    icon: 'home',
    link: ''
  },

  {
    title: 'Vue Doc',
    caption: 'Get Started',
    icon: 'code',
    link: '#/doc'
  },

  {
    title: 'Reatividade',
    caption: 'Two Way Data Bind :)',
    icon: 'sync_alt',
    link: '#/reativo'
  },

  {
    title: 'Progressivo',
    caption: 'Be Watter My Friend',
    icon: 'wifi_protected_setup',
    link: '#/progressivo'
  },

  {
    title: 'Componentização',
    caption: 'Vue Components',
    icon: 'hotel_class',
    link: '#/componente'
  },
 
];

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style>


</style>