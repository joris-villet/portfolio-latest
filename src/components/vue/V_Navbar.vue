<template>
  <div id="nav">
    <a href="/projects/pokemon">Home</a>
    <a href="/projects/pokemon/pokedex">Pokedex</a>
  </div>
</template>


<style lang="scss">
#nav {
  padding: 30px;

  a {
    font-weight: bold;
    font-size: 1.2rem;
    color: rgb(39, 34, 34);
    padding: 0 1.5rem;
    text-decoration: none;
    opacity: 0.6;
    transition: .5s;

    &.router-link-exact-active {
      color: #fff;
      opacity: 1;
      font-size: 1.8rem;
    }
  }
}
</style>