<template>

    <v-container>
        <v-btn @click="click">Click</v-btn>
    </v-container>

</template>

<script>

    export default {

        name: 'TestingVue',

        methods : {
            click() {
                console.log("click");
                setTimeout(() => {
                    console.log("click sectime");
                }, 2000);
                console.log("click 3 time");
            }
        }

    }

</script>