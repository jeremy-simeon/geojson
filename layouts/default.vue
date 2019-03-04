<template>
  <div class="min-vh-100 d-flex flex-column">
    <header>
      <b-navbar toggleable="lg" type="dark" variant="dark" fixed>
        <b-navbar-brand :to="{ name: 'index' }">GEOJSON</b-navbar-brand>
        <b-navbar-toggle target="nav_collapse"/>
        <b-collapse is-nav id="nav_collapse">
          <b-navbar-nav>
            <b-nav-item :to="{ name: 'index' }" exact>Accueil</b-nav-item>
            <b-nav-item :to="{ name: 'about' }" exact>À propos</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </header>
    <main class="d-flex flex-grow-1">
      <nuxt/>
    </main>
  </div>
</template>
