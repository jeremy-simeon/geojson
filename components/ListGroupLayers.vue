<template>
  <div class="mb-2">
    <ul class="list-unstyled">
      <li v-for="(l, i) in layers" :key="i">
        <b-button class="btn-list" variant="danger" @click="$store.commit('deleteLayer', l)">
          <font-awesome-icon icon="trash" fixed-width/>
        </b-button>
        <b-button class="btn-list" variant="primary" @click="$store.commit('setBounds', l)">
          <font-awesome-icon icon="map-pin" fixed-width/>
        </b-button>
        <b-button class="btn-list" :variant="l.display ? 'dark' : 'light'" @click="$store.commit('toggleDisplay', l)">
          <font-awesome-icon :icon="l.display ? 'eye' : 'eye-slash'" fixed-width/>
        </b-button>
        <b-badge variant="secondary">
          {{ l.name }}
        </b-badge>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    computed: {
      layers () {
        const layers = [ ...this.$store.state.layers ]
        return layers.sort((a, b) => a.name.localeCompare(b.name))
      }
    }
  }
</script>

<style>
  .btn-list {
    font-size: 10px;
    padding: 0;
    width: 25px;
    height: 18px;
  }
</style>
