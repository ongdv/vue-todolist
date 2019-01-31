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
            <button type="submit" class="btn btn-success">SignIn</button>
        </form>
    </div>
</template>

<script>
    export default {
        name: "SignIn"
    }
</script>

<style scoped>

</style>