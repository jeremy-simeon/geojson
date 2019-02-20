<template>
  <div>
    <b-form-textarea v-model="form.text" placeholder="Insérer vos données" rows="5" max-rows="5"/>
    <b-button block class="mt-2" :disabled="$v.form.$invalid" @click="addLayer()">Ajouter</b-button>
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
      form: {
        text: ''
      }
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
