<template>
    <div>
        <template v-for="item in todolist">
            <TodoItem v-bind:key="item.idx"
                    v-bind:todoitem="item"
                    v-on:toggleDone="toggleDone"
                    v-on:deleteTodo="deleteTodo"/>
        </template>
    </div>
</template>

<script>
    import TodoItem from "./TodoItem.vue";
    export default {
        name: "TodoList",
        components: {
            TodoItem
        },
        props: ["todolist"],
        methods: {
            toggleDone (no) {
                console.log(no)
                this.$emit("toggleDone", no)
            },
            deleteTodo (no){
                this.$emit("deleteTodo", no);
            }
        }
    }
</script>

<style scoped>

</style>