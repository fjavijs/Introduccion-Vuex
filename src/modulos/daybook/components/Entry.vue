<template>
    <div class="entry-container mb-3 pointer p-2"
         @click="$router.push( { name:'entry', params: { id:entry.id } } )"
    >
        <!--Si hago click en este elemento me manda al elemento router con nombre name y parametro params-->

        <div class="entry-title d-flex">
            <span class="text-succes fs-5 fw-bold">{{day}}</span>
            <span class="mx-1 fs-5">{{month}}</span>
            <span class="mx-2 fw-light">{{yearDay}}</span>
        </div>

        <div class="entry-description">
            {{shortText}}
        </div>

    </div>
</template>

<script>
    const months = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado']

export default {

        props: {
            entry: {
                type: Object,
                required:true
            }
        },

        computed: {
            // Propiedad para que los textos aparezcan del mismo tamaño, si el texto tiene mas de 130 caracteres lo corta a 130
            shortText() {
                return (this.entry.text.length > 130) ? this.entry.text.substring(0,130) + '...' : this.entry.text
            },
            day() {
                const date = new Date (this.entry.date)
                return date.getDate()
            },
            month() {
                const date = new Date(this.entry.date)
                return months[date.getMonth()]
            },
            yearDay() {
                const date = new Date(this.entry.date)
                return `${date.getFullYear()}, ${days[date.getDay()]}`
            }

        }

    }

</script>
<style lang="scss" scoped>

    .entry-container {
        border-bottom: 1px solid #2c3e50;
        transition: 0.2s all ease-in;

        &:hover {
            background-color: darkgrey;
            transition: 0.2s all ease-in;
            /*  color .adjust($color, $amount:45)*/
        }
    }

    .entry-description{
        font-size:12px;
    }

</style>