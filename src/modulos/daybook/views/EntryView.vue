<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">{{ day }}</span>
            <span class="mx1 fs-3 ">{{ month }}</span>
            <span class="mx-2 fs-3 fw-bold">{{yearDay}}</span>
        </div>
        <div>
            <button class="btn btn-danger mx-2">
                Borrar
                <i class="fa-solid fa-trash"></i>
                <!--<img src="../Img/basura.svg" alt="basura" />-->
            </button>
        </div>
        <div>
            <button class="btn btn-primary">
                Subir foto
                <i class="fa-solid fa-upload"></i>
                <!--<img src="../Img/subirArchivo.svg" alt="mandar foto" />-->
            </button>
        </div>
    </div>
    <hr>
    <div class="d-flex flex-column px-3 h-75">
        <textarea v-model="entry.text" placeholder="¿Qué sucedió hoy?">
        </textarea>
    </div>
    <Fab icon="fa-upload" />
</template>

<script>
    import { defineAsyncComponent } from "vue";
    import { mapGetters } from "vuex";
    import getDayMonthYear  from '@/modulos/daybook/helpers/getDayMonthYear'

    export default {
        props: {
            id: {
                type: String,
                required:true
            }

        },

        components: {
            Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
        },

        data() {
            return {
                entry:null
            }
        },

        computed: {
            ...mapGetters('journal', ['getEntryById']),

            // Desestructurar objeto
            day() {
                const { day } = getDayMonthYear(this.entry.date)
                console.log(day)
                console.log(this.entry.date)
                return day
            },
            month() {
                const { month } = getDayMonthYear(this.entry.date)
                return month
            },
            yearDay() {
                const { yearDay } = getDayMonthYear(this.entry.date)
                return yearDay
            }
        },

        methods: {

            loadEntry() {
                const entry = this.getEntryById( this.id )
                if (!entry) this.$router.push({ name: 'no-entry' }) // Si no existe mando a esta ruta el id
                this.entry = entry // Si existe ok

            }

        },

        created() {
        //console.log(this.$route.params.id) // Sin crear property

        this.loadEntry()
        
        }

    }
</script>


<style lang="scss" scoped>

    textarea {
        font-size: 20px;
        border: none;
        height: 100%;

        &:focus {
            outline: none;
        }
    }

    .img {
        width: 200px;
        position: fixed;
        bottom: 150px;
        right: 20px;
        box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
</style>