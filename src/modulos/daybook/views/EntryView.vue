<template>
    <div class="entry-title d-flex justify-content-between p-2">
        <div>
            <span class="text-success fs-3 fw-bold">15</span>
            <span class="mx1 fs-3 ">Julio</span>
            <span class="mx-2 fs-3 fw-bold">2023, martes</span>
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
        <textarea placeholder="¿Qué sucedió hoy?">
        </textarea>
    </div>
    <Fab icon="fa-upload"/>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
        components: {
            Fab: defineAsyncComponent(() => import('../components/Fab.vue'))
                }
        
    }
</script>


<style lang="scss" scoped>

    textarea{
        font-size:20px;
        border:none;
        height:100%;

        &:focus{
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