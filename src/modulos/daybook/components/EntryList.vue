<template>
        <div class="entry-list-container">
        <div class="px-2 pt-3 pb-3">
            <input type="text" 
                   class="form-control" 
                   placeholder="Buscar entrada"
                   v-model="term"
            />
        </div> 
        <div class="entry-scrollarea">
          <!--Componente Entry importado-->
            <Entry
                v-for = "entry in getEntriesByTerm"
                :key ="entry.id"
                :entry="entry"
            />
        </div>
    </div>
</template>  

<script>
    import { defineAsyncComponent } from 'vue'
    import { mapGetters } from 'vuex'


    export default {

        //Importo el componente Entry y lo coloca dentro de el elemento EntryList con el v-for lo replicamos x veces.
        components: {
            Entry: defineAsyncComponent(() => import('@/modulos/daybook/components/Entry.vue'))
        },

        // Desestructuro mapGetters del modulo journal y cojo el getters llamado getEntriesByTerm
        computed: {
            ...mapGetters('journal', ['getEntriesByTerm']),
            entriesByTerm() {
                return this.getEntriesByTerm(this.term)
            }
        },
        data() {
            return {
                term: '' // insertar en caja de texto, dato para poder trabajar
            }
        }

    }

</script>


<style lang="scss" scoped>

    input{
        height:45px;
    }

    .entry-list-container {
        border-right: 1px solid #2c3e50;
        height: calc(100vh - 56px);
    }

    .entry-scrollarea {
        height: calc(100vh - 115px);
        overflow: scroll;
    }

</style>