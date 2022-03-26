<template>
  <hr />
  <!-- <main class="map-details"> -->
  <GMapMap
    :center="center"
    :zoom="12"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
        :key="index"
        v-for="(m, index) in markers"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
        :icon="icon"
      />
    </GMapCluster>
  </GMapMap>
  <!-- </main> -->
</template>

<script>
// import GmapCustomMarker from 'vue3-gmap-custom-marker';
export default {
  name: "mapDetails",
  props: {
    stay: {
      type: Object,
    },
  },
  data() {
    return {
      center: {
        lat: this.stay.address.location.lan,
        lng: this.stay.address.location.lat,
      },
      markers: [
        {
          position: {
            lat: this.stay.address.location.lan,
            lng: this.stay.address.location.lat,
          },
          icon: {},
        }, // Along list of clusters
      ],
    };
  },
  created() {
    this.icon = {
      path: "M8.602 1.147l.093.08 7.153 6.914-.696.718L14 7.745V14.5a.5.5 0 0 1-.41.492L13.5 15H10V9.5a.5.5 0 0 0-.41-.492L9.5 9h-3a.5.5 0 0 0-.492.41L6 9.5V15H2.5a.5.5 0 0 1-.492-.41L2 14.5V7.745L.847 8.86l-.696-.718 7.153-6.915a1 1 0 0 1 1.297-.08z",
      fillColor: "#FF0000",
      fillOpacity: 0.6,
      strokeWeight: 0,
      //   size: 1,
      size: { width: 620 + "px", height: 90 + "px" },
      //   scale: 1,

      scaledSize: {
        width: 30 + "px",
        height: 45 + "px",
      },
    };
  },
  methods: {},
};
</script>

<style></style>
