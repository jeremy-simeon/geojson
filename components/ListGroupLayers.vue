<template>
  <div>
    <b-list-group v-if="$store.state.layers">
      <b-list-group-item v-for="(l, i) in $store.state.layers" :key="i" class="d-flex justify-content-between align-items-center">
        <div>
          {{ l.geojson.type }}
        </div>
        <div>
          <b-button variant="primary" @click="$store.commit('setBounds', l.bounds)">
            <font-awesome-icon icon="map-pin" fixed-width/>
          </b-button>
          <b-button variant="success" @click="editLayer(i)">
            <font-awesome-icon icon="edit" fixed-width/>
          </b-button>
          <b-button variant="danger" @click="$store.commit('deleteLayer', l)">
            <font-awesome-icon icon="trash-alt" fixed-width/>
          </b-button>
        </div>
      </b-list-group-item>
    </b-list-group>
    <b-modal ref="modal" title="Modification du GeoJSON" cancel-title="Annuler" lazy>
      <p>
        <pre>{{ form.layer }}</pre>
      </p>
    </b-modal>
  </div>
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
  },
  methods: {
    editLayer (index) {
      // Récupération du layer
      this.form = { index, layer: { ...this.$store.state.layers[index] } }
      // Affichage de la modal
      this.$refs.modal.show()
    }
  }
}
</script>
