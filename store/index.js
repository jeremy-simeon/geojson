export const state = () => ({
  layers: [],
  bounds: null
})

export const mutations = {
  addLayer (state, geojson) {
    const bounds = L.geoJson(geojson).getBounds()
    const coordinates = [bounds.getSouthWest(), bounds.getNorthEast()]
    const layer = { geojson: geojson, bounds: coordinates }
    state.bounds = bounds
    state.layers.push(layer)
  },
  deleteLayer (state, layer) {
    state.layers.splice(state.layers.indexOf(layer), 1)
  },
  setBounds (state, bounds) {
    state.bounds = bounds
  },
  clearBounds (state) {
    state.bounds = null
  }
}
