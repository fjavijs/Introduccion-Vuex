<template>
    <Navbar /> <!--Si esta cargando se muestra esto-->
    <div v-if="isLoading"
         class="row justify-content-md-center">
        <div class="col-3 alert-info text-center mt-5">
            Espere por favor....
            <h3 class="mt-1">
                <i class="fa fa-spin fa-sync"></i>
            </h3>

        </div>
    </div>
    <div v-else class="d-flex">
        <!--Si no esta cargando se muestra esto-->
        <div class="col-4">
            <EntryList />
        </div>
        <div class="col">
            <router-view />
        </div>
    </div>
</template>



<script>
    import { defineAsyncComponent } from 'vue'
    import { mapActions, mapState } from 'vuex'
 
export default {
    components: {
        Navbar: defineAsyncComponent(() => import('../components/Navbar.vue')),
        EntryList: defineAsyncComponent(() => import('../components/EntryList.vue')),
        },

        methods: {
            ...mapActions('journal', ['loadEntries']) // Quiero que me traigas el array de acciones.
        },
        // Cuando necesitamos informacion de getters o state, computadas conseguir informacion y mostrarla en el template
        computed: {
            ...mapState('journal', ['isLoading'])
        },
        created() {
            this.loadEntries()
        }
}
</script>