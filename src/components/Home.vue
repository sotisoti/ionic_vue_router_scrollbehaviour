<template>
  <div class="ion-page">
    <ion-content class="ion-padding">
      <div style="background-color: #f0f0f0; height:1000px;">home page</div>
      <button @click="open_page">Open Page</button>
    </ion-content>
  </div>
</template>

<script>
export default {
  methods: {
    open_page: function() {
      this.$router.push("/test");
    }
  }
};
</script>
