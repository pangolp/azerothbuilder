<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">
        <router-link to="/">Builder SQL for AzerothCore</router-link>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownAzerothCore" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              AzerothCore
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownAzerothCore">
              <a class="dropdown-item" href="https://www.azerothcore.org/" target="_blank">Website</a>
              <a class="dropdown-item" href="https://github.com/AzerothCore/" target="_blank">Repository</a>
              <a class="dropdown-item" href="https://www.azerothcore.org/wiki/" target="_blank">Wiki</a>
            </div>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownWowCMS" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              WoWCMS
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownWowCMS">
              <a class="dropdown-item" href="https://gitlab.com/WoW-CMS" target="_blank">Repository</a>
              <a class="dropdown-item" href="https://wow-cms.com/en/" target="_blank">Website</a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
    name: 'MenuTop',
}
</script>
