<template>
  <v-row justify="center" align="center"  style="height: 80vh;">
    <v-col cols="12" sm="8" md="6">
      <v-card width="300" class="mx-auto d-flex justify-center">
        <v-card-text>
       <div class="que">{{ que }}</div>
       <v-btn block @click="sendMessage">Next</v-btn>
      </v-card-text>
      </v-card>
      <v-card width="300" class="mx-auto mt-2 d-flex justify-center">
        <v-card-text>
          Latest Que: {{ latestque }}
        </v-card-text>
      </v-card>

    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      message: '',
      reply: '',
      latestque: 0,
      que: 0,
    }
  },
  methods: {
    sendMessage() {
      this.que = this.latestque + 1;
      this.$socket.emit('message', this.que);
      this.latestque = this.que
    }
  },

  mounted() {
    this.$socket.on('message', (msg) => {
      console.log('New message: ', msg)
      this.latestque = msg;
    })
  }
}
</script>
<style scoped>
.que {
  text-align: center;
  font-size: 30px;
  padding: 20px 0;
}
</style>
