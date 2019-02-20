<template>
  <div class="min-vh-100 d-flex flex-column">
    <header>
      <header class="navbar navbar-expand-lg navbar-dark bg-primary">
        <nuxt-link class="navbar-brand" :to="{ name: 'index' }">GeoJSON</nuxt-link>
      </header>
    </header>
    <main class="container-fluid p-3 d-flex flex-grow-1">
      <nuxt/>
    </main>
    <footer class="w-100 bg-light">
      <div class="text-center py-3 container-fluid">
        Développé par <a href="https://jeremy-simeon.fr">Jérémy SIMEON</a>
      </div>
    </footer>
  </div>
</template>
