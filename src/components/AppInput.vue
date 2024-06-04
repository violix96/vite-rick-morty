<script>
export default {
    name: 'AppMain',
    data() {
        return {
            inputText : ""
        }
    },
}
</script>

<template>
    <main>
        <div class="container text-center">
            <input v-model="inputText" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
            <button @click="$emit('searchEvent', inputText)" class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            <button @click="$emit('resetEvent')" class="btn btn-outline-danger my-2 my-sm-0" type="submit">Reset</button>
        </div>
    </main>
</template>

<style></style>