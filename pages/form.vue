<template>
  <v-dialog width="500">
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" text="Open Dialog"> </v-btn>
    </template>

    <template v-slot:default="{ isActive }">
      <v-card title="Edit company information">
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua.
        </v-card-text>

        <v-card-text>
          <v-form>
            <div class="input">
              Legal company name
            </div>
            <v-text-field label="Value"></v-text-field>
            <div>
              Public company name
            </div>
            <v-text-field label="Value"></v-text-field>
            <div>
              Company description
            </div>
            <v-text-field label="Value"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn text="Save changes" @click="isActive.value = false"></v-btn>
        </v-card-actions>
      </v-card>
    </template>
  </v-dialog>
</template>
<script setup>
</script>
<style scoped>
.input {
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0.5px;
}
</style>

