<template>
  <no-ssr>
    <l-map :zoom="zoom" :center="center" :bounds="$store.state.bounds" @move="$store.commit('clearBounds')" :options="options">
      <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
      <l-geo-json v-for="(l, i) in $store.state.layers" :geojson="l.geojson" :key="i"/>
    </l-map>
  </no-ssr>
</template>

<script>
export default {
  data () {
    return {
      zoom: 10,
      bounds: null,
      center: [48.866667, 2.333333],
      options: { zoomControl: false, attributionControl: false }
    }
  }
}
</script>
