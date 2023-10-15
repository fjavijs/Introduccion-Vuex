<template>
    <Navbar/>
        <div class="d-flex">
        <div class="col4">
            <EntryList/>
        </div>
        <div class="col">
            <router-view/>
        </div>
    </div>
</template>

<script>
    import { defineAsyncComponent } from 'vue'

    export default {

        components: {
            Navbar: defineAsyncComponent(() => import('@/modulos/daybook/components/Navbar.vue')),
            EntryList: defineAsyncComponent(() => import('@/modulos/daybook/components/EntryList.vue'))
        }

    }
</script>