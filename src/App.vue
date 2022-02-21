<template>
    <MenuTop />
        <div class="container-fluid">
            <div class="row mt-3">
                <div class="col-sm-12 col-md-4">
                    <AsideMenu />
                </div>
                <div class="col-sm-12 col-md-8">
                    <router-view/>
                </div>
            </div>
        </div>
</template>

<script>
import MenuTop from './components/MenuTop.vue';
import AsideMenu from './components/AsideMenu.vue';

export default {
    components: {
        MenuTop,
        AsideMenu
    }
}
</script>

<style>
#app {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
}

#nav {
    padding: 30px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
