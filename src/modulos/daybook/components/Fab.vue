 <template>
     <button class="buttom btn btn-primary">
         <i class="fa-solid" :class="icon"/>
             <!--Cambiar de icono Tarea-->
     </button>
</template>

<script>
    export default {
        props: {
            icon: {
                type: String,
                default: 'fa-cross'
            }
        }
    }

        //< Fab icon = "fa-upload" /> en template de componente donde se ubica este.

</script>

<style lang="scss" scope>

    .buttom {
         position: fixed;
        bottom: 20px;
        right: 20px;
        width: 40px;
        height: 40px;
/*        border-radius: 100%;
*/    }
   

</style>