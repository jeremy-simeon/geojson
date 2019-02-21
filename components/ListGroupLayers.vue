<template>
  <ul class="list-unstyled mb-0 mt-2">
    <li v-for="(l, i) in $store.state.layers" :key="i">
      <b-badge variant="secondary">
        {{ l.geojson.type }}
      </b-badge>
      <b-button class="btn-list" variant="primary" @click="$store.commit('setBounds', l)">
        <font-awesome-icon icon="map-pin" fixed-width/>
      </b-button>
      <b-button class="btn-list" variant="danger" @click="$store.commit('deleteLayer', l)">
        <font-awesome-icon icon="trash" fixed-width/>
      </b-button>
    </li>
  </ul>
</template>

<script>
export default {
  data () {
    return {
      form: {
        index: null,
        layer: null
      }
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
