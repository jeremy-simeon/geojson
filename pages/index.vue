<template>
  <div class="flex-grow-1 position-relative">
    <map-layers/>
    <div class="position-absolute" style="top: 10px; left: 20px; z-index: 1000">
      <list-group-layers/>
      <form-layers/>
    </div>
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
