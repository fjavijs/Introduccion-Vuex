<template>
    <div class="entry-container mb-3 pointer p-2"
         @click="$router.push( { name:'entry', params: { id:10 } } )"
    >
        <!--Si hago click en este elemento me manda al elemento router con nombre name y parametro params-->

        <div class="entry-title d-flex">
            <span class="text-succes fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2023, jueves</span>
        </div>

        <div class="entry-description">
            Ipsum gravida vel pretium tellus tincidunt integer eu augue augue nunc elit dolor, luctus placerat scelerisque euismod, iaculis eu lacus nunc mi elit, vehicula ut.
        </div>

    </div>
</template>

<script>
export default {

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