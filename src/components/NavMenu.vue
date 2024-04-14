<template>
  <nav>
    <RouterLink :to="{name: 'Home'}">Home</RouterLink>
    <RouterLink :to="{name: 'MealsByName'}">MealsByName</RouterLink>
    <RouterLink :to="{name: 'MealsByLetter'}">MealsByLetter</RouterLink>
    <RouterLink :to="{name: 'MealsByIngredients'}">MealsByIngredients</RouterLink>
  </nav>
</template>

<style lang="postcss" scoped>
nav {
  @apply flex justify-center space-x-4;

  & .router-link-active {
    @apply underline underline-offset-4;
  }
}
</style>
