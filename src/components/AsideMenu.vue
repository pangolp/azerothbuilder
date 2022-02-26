<template>
  <div>
    <div class="row">
      <img src="../assets/azerothcore.png" class="img-fluid mt-2 mb-2" alt="AzerothCore">
    </div>
    <ul class="nav flex-column">
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Tables</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <router-link to="/achievement-reward-locale/">Achievement reward locale</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <router-link to="/broadcast-text-locale/">Broadcast text locale</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <router-link to="/creature-template-locale/">Creature template locale</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <router-link to="/creature-text-locale/">Creature text locale</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <router-link to="/gameobject-template-locale/">Gameobject template locale</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Gossip menu option locale</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Item set names locale</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Item template locale</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Npc text locale</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Page text locale</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Points of interest locale</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <router-link to="/quest-offer-reward-locale/">Quest offer reward locale</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <router-link to="/quest-request-items-locale/">Quest request items locale</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">
          <router-link to="/quest-template-locale/">Quest template locale</router-link>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: 'AsideMenu',
}
</script>

<style scoped>

.img-fluid {
  margin: 0 auto;
}

</style>
