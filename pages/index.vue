<template>
  <div class="flex-grow-1">
    <b-row class="h-100">
      <b-col cols="4">
        <h2 class="h4 mb-3">Insertion des données</h2>
        <form-layers/>
        <h2 class="h4 mb-3 mt-4">Liste des données</h2>
        <list-group-layers/>
      </b-col>
      <b-col cols="8">
        <map-layers/>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import ListGroupLayers from '@/components/ListGroupLayers'
import MapLayers from '@/components/MapLayers'
import FormLayers from '@/components/FormLayers'

export default {
  components: { ListGroupLayers, MapLayers, FormLayers }
}
</script>
