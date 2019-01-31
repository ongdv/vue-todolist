<template>
    <div>
        <form class="w-75 text-center m-auto">
            <div class="form-group">
                <label for="mail">Email address</label>
                <input type="email" class="form-control" id="mail" aria-describedby="emailHelp" placeholder="Enter email">
            </div>
            <div class="form-group">
                <label for="password">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Password">
            </div>
            <div class="form-group">
                <label for="userName">Username</label>
                <input type="text" class="form-control" id="userName" placeholder="Username">
            </div>
            <button type="submit" class="btn btn-warning">SignUp</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SignUp",
    }
</script>

<style scoped>

</style>