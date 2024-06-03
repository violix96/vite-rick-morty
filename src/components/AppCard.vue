<script>
import { store } from '../store'
export default {
    name: 'AppCard',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="d-flex">
        <div v-for="result in store.results" class="card">
            <img :src="result.image" alt="">
            <h4>{{ result.name }}</h4>
            <div>
                <p>{{ result.status }}</p>
                <p>{{ result.species }}</p>
            </div>
        </div>
    </div>
</template>
<style scoped>

.card {
    width: calc(100% / 4);
    margin-bottom: 30px;
    flex-direction: column;
    align-items: center;
    display: flex;
    
}

.d-flex {
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 50px;
}

img {
    border-radius: 50%;
    margin: 20px 0;
    object-fit: cover;
    height: 250px;
    width: 250px;
}

</style>