<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <router-link class="navbar-brand" to="/">TodoList</router-link>
        <!-- <a class="navbar-brand" href="/">Navbar</a> -->
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
                </li>               
                <li class="nav-item active">
                    <router-link class="nav-link" to="SignUp">SignUp <span class="sr-only">(current)</span></router-link>
                </li>               
                <li class="nav-item active">
                    <router-link class="nav-link" to="SignIn">SignIn <span class="sr-only">(current)</span></router-link>
                </li>               
            </ul>
        </div>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "Nav"
    }
</script>

<style scoped>

</style>