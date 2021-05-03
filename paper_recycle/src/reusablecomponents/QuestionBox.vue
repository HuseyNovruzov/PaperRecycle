<template>
    <div class="createAccount">
        <p class="mg_left">{{ context }} <router-link :to="route">{{ link }}</router-link></p>
    </div>
</template>


<script>

export default {
    name: '',
    props: ["context", "link", "route"],
}
</script>

<style>

.createAccount{
    margin-top: var(--mg-top);
    border: 1px solid var(--bd-white-color);
    border-radius: 5px;
    text-align: center;
    font-size: var(--normal-font-size);
}
.createAccount a{
    color: var(--blue-scale-color);
}

</style>