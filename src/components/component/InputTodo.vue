<template>
    <div>
        <input type="text" v-model="inputValue" v-on:keyPress="pressEnter">
        <button v-on:click="addHandler()">추가</button>
    </div>
</template>

<script>
    export default {
        name: "InputTodo",
        data() {
            return{
                inputValue: ""
            }
        },
        methods: {
            addHandler(e) {
                this.$emit('addTodo', this.inputValue);
                this.inputValue = "";
            },
            pressEnter(e){
                if(e.target.value === "Enter"){
                    this.addHandler();
                }
            }
        }
    }
</script>

<style scoped>

</style>