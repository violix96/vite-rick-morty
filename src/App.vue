<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import {store} from './store'
export default{
  name: 'Rick and Morty APP',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
  },
  data(){
    return{
      store,
    }
  },
  created(){
    axios.get(this.store.ApiUrl).then((response) => {
      this.store.results = response.data.results;
      this.store.info = response.data.info;
    });
  }
};

</script>
<template>
  <AppHeader />
  <AppMain />
  <AppFooter />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
