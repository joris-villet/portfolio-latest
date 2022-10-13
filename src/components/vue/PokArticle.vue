<script>
import axios from 'axios'
import SearchPokemon from './SearchPokemon.vue'

export default {
   name: 'PokArticle',
   components: { SearchPokemon },
   data() {
      return {
         pokemons: [],
         base_url: "http://localhost:7000/api",
         show: false,
         searchKey: ''
      }
   },
   mounted() {
      this.getAllPokemons();
   },
   computed: {
      filteredList() {
         return this.pokemons.filter((pokemon) => {
            return pokemon.nom.toLowerCase().includes(this.searchKey.toLowerCase())
         })
      }
   },
   methods: {
      searchPokemon(value) {
         this.searchKey = value;
      },
      async getAllPokemons() {
         // fetch(`${this.base_url}/lists`)
         // .then((res) => console.log(res.json()))
         try {
            const { data } = await axios.get(`${this.base_url}/lists`);
            console.log("data => ", data)
            // this.pokemons = response.data;
            this.show = true
         }
         catch (error) {
            console.log(error);
         }
      }
   },
}
</script>



<template>
   <div>
      <a href="/projects/pokemon/pokedex/bulbizarre-1">
         test dynamic route
      </a>
      <SearchPokemon @searchKey="searchPokemon" />
      <transition name="fade">
         <div class="container" v-if="show">
            <article v-for="(pokemon, index) in filteredList" :key="index">
               <!-- <router-link :to="{ 
                 name: 'Pokemon', 
                 params: { 
                    pokemonName: pokemon.nom.split(' ').join('-'), 
                    pokemonId: pokemon.id}
              }"> -->

               <a href="/projects/pokemon/pokedex/bulbizarre-1">

                  <h2 class="name"> {{ pokemon.nom }} </h2>
                  <div class="infos">
                     <img :src="require(`../assets/img/${pokemon.numero}.png`)" :alt="pokemon.nom" class="pics">
                     <div class="infos-powers">
                        <p> PV : <span>{{ pokemon.pv }}</span></p>
                        <p> Attaque : <span>{{ pokemon.attaque }}</span> </p>
                        <p> Défense : <span>{{ pokemon.defense }}</span></p>
                        <p> Attaque Spé : <span>{{ pokemon.attaque_spe }}</span></p>
                        <p> Défense Spé : <span>{{ pokemon.defense_spe }}</span> </p>
                        <p> Vitesse : <span>{{ pokemon.vitesse }}</span></p>
                     </div>
                  </div>

               </a>

            </article>
         </div><!-- fin container -->
      </transition>
   </div>
</template>



<style lang="scss" scoped>
.container {
   display: flex;
   flex-wrap: wrap;
   justify-content: space-between;
   max-width: 1000px;
   margin: 0 auto;
}

article {
   margin: 20px auto;
   padding: 0.5rem 0;
   width: calc(100% / 3 - 20px);
   box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
   border-radius: 10px;
   border-left: 5px solid transparent;
   transition: .3s;

   &:hover {
      border-left: 5px solid rgb(39, 34, 34);
      box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.3);
   }

   & a {
      color: rgb(39, 34, 34);
      text-decoration: none;
   }
}

.name {
   margin: 0;
}

.infos {
   display: flex;
   justify-content: space-around;
   font-weight: bold;
   font-size: 0.8rem;
   align-items: center;
   color: rgb(111, 146, 175);
   font-style: italic;

   &-powers {
      text-align: left;
      line-height: 6px;

      & span {
         color: rgb(245, 137, 137);
         font-style: initial;
      }
   }
}

.pics {
   width: 100px;
   height: auto;
}

.fade-enter-active,
.fade-leave-active {
   transition: opacity 2s, transform .8s;

}

.fade-enter,
.fade-leave-to

/* .fade-leave-active below version 2.1.8 */
   {
   opacity: 0;
   transform: translateY(300px);
}
</style>