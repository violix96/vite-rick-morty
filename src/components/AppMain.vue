<script>
import AppCardVue from './AppCard.vue';
export default{
    name: 'AppMain',
    components:{
        AppCardVue
    }
}
</script>

<template>
    <main>
        <div class="container">
            <h1>Ciao sono app-main</h1>
            <AppCardVue />
        </div>
    </main>
   
</template>