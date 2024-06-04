<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import AppInput from './components/AppInput.vue';
import AppFooter from './components/AppFooter.vue';
import axios from 'axios';
import { store } from './store'
export default {
  name: 'Rick and Morty APP',
  components: {
    AppHeader,
    AppMain,
    AppFooter,
    AppInput,
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    onSearch(inputText) {
      console.log(inputText)
      console.log(store.results)

      const filteredResults = store.results.filter((result) =>
        result.name.toLowerCase().includes(inputText.toLowerCase()) || result.status.toLowerCase().includes(inputText.toLowerCase()))
      console.log(filteredResults)
    }
  },
  created() {
    axios.get(this.store.ApiUrl).then((response) => {
      this.store.results = response.data.results;
      this.store.info = response.data.info;
    });
  }
};

</script>
<template>
  <AppHeader />
  <AppInput @search-event="onSearch" />
  <AppMain />
  <AppFooter />
</template>


<style lang="scss">
@use './assets/scss/main.scss' as *;
</style>
