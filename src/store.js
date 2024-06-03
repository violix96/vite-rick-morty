import { reactive } from "vue";

export const store = reactive({
    results: [],
    info:{},
    ApiUrl: 'https://rickandmortyapi.com/api/character',
});