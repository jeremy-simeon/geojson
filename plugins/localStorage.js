import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  window.onNuxtReady(() => {
    createPersistedState({
      key: 'data',
      reducer: (state) => {
        return { layers: state.layers }
      }
    })(store)
  })
}
