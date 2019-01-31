<template>
    <div >
        <!-- <span>{{todoitem.idx}}</span> -->
        <span v-bind:class="{done: todoitem.done}">{{todoitem.todo}}</span>
        <button @click="toggleHandler">v</button>
        <button @click="deleteHandler">삭제</button>
        
    </div>
</template>

<script>
    export default {
        name: "TodoItem",
        props: ["todoitem"],
        methods: {
            toggleHandler () {
                this.$emit("toggleDone", this.todoitem.idx);
            },
            deleteHandler () {
                this.$emit("deleteTodo", this.todoitem.idx);
            }
        }
    }
</script>

<style scoped>
    .done{
        text-decoration-line: line-through;
    }
</style>