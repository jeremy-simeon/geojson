export const state = () => ({
  layers: [],
  bounds: null
})

export const mutations = {
  addLayer (state, { geojson, name }) {
    const bounds = L.geoJson(geojson).getBounds()
    const coordinates = [bounds.getSouthWest(), bounds.getNorthEast()]
    const layer = { geojson, name, bounds: coordinates, display: true }
    state.bounds = bounds
    state.layers.push(layer)
  },
  deleteLayer (state, layer) {
    state.layers.splice(state.layers.indexOf(layer), 1)
  },
  setBounds (state, layer) {
    state.bounds = layer.bounds
  },
  clearBounds (state) {
    state.bounds = null
  },
  toggleDisplay (state, layer) {
    const index = state.layers.indexOf(layer)
    state.layers[index].display = !state.layers[index].display
  }
}
