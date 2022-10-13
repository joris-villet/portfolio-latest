<template>
  <div>
     <label>
         <input @input="$emit('searchKey', $event.target.value)" type="search" placeholder="Rechercher un pokemon.." autocomplete="off" id="search">
      </label>
  </div>
</template>

<script>

export default {
   name: 'SearchPokemon'
}
</script>

<style lang="scss">
   #search {
      color: grey;
      font-style: italic;
      border: 2px solid rgb(255, 174, 144);
      border-radius: 4px;
      padding: 0.5rem 1rem;
      margin: 0.5rem auto;
      transition: .1s ease-in;
      outline: none;
      &:focus, :active  {
         border: 5px solid rgb(255, 174, 144);
      }
   }
</style>