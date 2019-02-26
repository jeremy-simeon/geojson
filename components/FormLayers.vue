<template>
  <div>
    <button class="btn btn-secondary rounded-circle" @click="modal = true" style="width: 50px; height: 50px" name="button">
      <font-awesome-icon icon="plus" fixed-width/>
    </button>
    <b-modal v-model="modal" title="Ajouter un GeoJSON" cancel-title="Annuler" ok-title="Ajouter" :ok-disabled="$v.form.$invalid" @ok="submit()">
      <b-form-group id="nameGroup" label="Nom" label-for="nameInput">
        <b-form-input id="nameInput" type="text" placeholder="Insérer un nom" v-model="form.name"/>
      </b-form-group>
      <b-form-group id="textGroup" label="GeoJSON" description="Champ obligatoire" label-for="textInput">
        <b-form-textarea id="textInput" v-model="form.text" placeholder="Insérer vos données" rows="5" max-rows="5"/>
      </b-form-group>
    </b-modal>
  </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, maxLength } from 'vuelidate/lib/validators'
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
      text: { required, isGeojson },
      name: { maxLength: maxLength(100) }
    }
  },
  data () {
    return {
      modal: false,
      form: { name: '', text: '' }
    }
  },
  methods: {
    submit () {
      // Parsing du texte
      const geojson = JSON.parse(this.form.text)
      // Ajout du layer
      this.$store.commit('addLayer', { geojson, name: this.form.name })
      // Suppression du formulaire
      this.form.text = ''
      this.form.name = ''
    }
  }
}
</script>
