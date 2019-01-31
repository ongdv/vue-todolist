<template>
    <div>
        <InputTodo v-on:addTodo="addTodo"/>
        <TodoList v-bind:todolist="todolist"
                 v-on:toggleDone="toggleDone"
                 v-on:deleteTodo="deleteTodo"/>
    </div>
</template>

<script>
    import {
        TodoList,
        InputTodo
    } from '../component';
    export default {
        name: "Main",
        components: {
            TodoList,
            InputTodo
        },
        data () {
            return {
                todolist: []
            }
        },
        methods: {
            addTodo(todo){
                var postData = {
                    mail: "testemail@testemail.com",
                    todo: todo,
                    done: 0
                }
                this.$http.post("http://192.168.64.184:5674/addTodo", postData)
                .then((res) => {
                    console.log("-- addTodo() Active --")
                    this.reqData();
                })
                .catch((err) => {
                    console.log(err);
                })
            },
            toggleDone(idx){
                let no = this.todolist.findIndex((item) => {
                    return item.idx === idx;
                });
                this.$http.get("http://192.168.64.184:5674/doneTodo/" + idx)
                .then((res) => {
                    this.reqData();
                })
                .catch((err) => {
                    console.log(err);
                })
            },
            deleteTodo(idx){
                this.$http.get("http://192.168.64.184:5674/deleteTodo/" + idx)
                .then((res) => {
                    this.reqData();
                })
                .catch((err) => {
                    console.log(err);
                })
            },
            reqData(){
                this.$http.get("http://192.168.64.184:5674/mylist?mail=testemail@testemail.com")
                .then((res) => {
                    console.log("-- reqData() Active --")
                    this.todolist = res.data.data;
                })
                .catch((err) => {
                    console.log(err);
                })
            }
        },
        created(){
            this.reqData();
        }
    }
</script>

<style scoped>

</style>