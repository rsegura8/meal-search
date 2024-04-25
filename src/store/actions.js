import useAPI from "@/composables/useAPI";

const { api } = useAPI()

export function searchMeals({ commit }, keyword) {
    api.get(`search.php?s=${keyword}`)
        .then(({ data }) => {
        commit('setSearchedMeals', data.meals)
        })
}

export function searchMealsByLetter({ commit }, letter) {
    api.get(`search.php?f=${letter}`)
        .then(({ data }) => {
        commit('setMealsByLetter', data.meals)
        })
}

export function searchMealsByIngredient({ commit }, ingredient) {
    api.get(`filter.php?i=${ingredient}`)
        .then(({ data }) => {
        commit('setMealsByIngredient', data.meals)
    })
}
// \( 'v')/ put this comment here so i could commit the final 'finished' commit