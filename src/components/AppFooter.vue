<script>
import { store } from '../store'
export default {
    name: 'AppFooter',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <footer>
        <div class="container">
            <h2><strong><span>  {{ store.results.length }}</span></strong></h2>
        </div>
    </footer>
</template>

<style>
h2{
    text-align: center;


}

</style>