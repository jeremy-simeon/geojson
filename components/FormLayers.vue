<template>
  <div>
    <button class="btn btn-secondary rounded-circle" @click="modal = true" style="width: 50px; height: 50px" name="button">
      <font-awesome-icon icon="plus" fixed-width/>
    </button>
    <b-modal v-model="modal" title="Ajouter un GeoJSON" cancel-title="Annuler" ok-title="Ajouter" :ok-disabled="$v.form.$invalid" @ok="addLayer()" lazy>
      <b-form-textarea v-model="form.text" placeholder="Insérer vos données" rows="5" max-rows="5"/>
    </b-modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required } from 'vuelidate/lib/validators'
import geojsonValidator from 'geojson-validation'

const isGeojson = (value) => {
  try {
    const json = JSON.parse(value)
    return geojsonValidator.valid(json)
  } catch (e) {
    return false
  }
}

export default {
  mixins: [validationMixin],
  validations: {
    form: {
      text: { required, isGeojson }
    }
  },
  data () {
    return {
      modal: false,
      form: { text: '' }
    }
  },
  methods: {
    addLayer () {
      // Parsing du texte
      const geojson = JSON.parse(this.form.text)
      // Ajout du layer
      this.$store.commit('addLayer', geojson)
      // Suppression du formulaire
      this.form.text = ''
    }
  }
}
</script>
