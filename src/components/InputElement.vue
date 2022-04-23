<template>
  <v-form>
    <v-card
        class="pa-2"
        outlined
        tile
        elevation="3"
    >
      <v-row>
        <v-col
            cols="9"
        >
          <v-text-field
              :label="type"
              :suffix="suffix"
              v-model="value"
              type="number"
              @input="emitter"
          ></v-text-field>

        </v-col>
        <v-col
            cols="3"
            class="updatedCalculation"
        >
          <span v-if="foodType === 'Food' || foodType === 'Cheese'"> {{ calculatedItemFood }}/</span>
          <span v-else> {{ calculatedItemLiquid }}/</span>
          <span v-if="type === 'extras' || type === 'fibres' || type === 'proteins'">5</span>
          <span v-else>10</span>
        </v-col>
      </v-row>
    </v-card>
  </v-form>
</template>

<script>
export default {
  name: "InputElement",
  components: {},


  data() {
    return {
      value: null
    }
  },

  props: {
    type: String,
    suffix: String,
    foodType: String,
  },

  methods: {
    emitter() {
      this.$emit('calculatedItem', this.calculatedItemFood);
    }
  },

  computed: {
    // used for both food and cheese
    calculatedItemFood() {
      let saltValue = (this.value / 2.5) * 1000
      switch (this.type) {
        case 'kj':
          if (this.value > 3350) {
            return 10;
          } else if (this.value > 3015) {
            return 9;
          } else if (this.value > 2680) {
            return 8;
          } else if (this.value > 2345) {
            return 7;
          } else if (this.value > 2010) {
            return 6;
          } else if (this.value > 1675) {
            return 5;
          } else if (this.value > 1340) {
            return 4;
          } else if (this.value > 1005) {
            return 3;
          } else if (this.value > 670) {
            return 2;
          } else if (this.value > 335) {
            return 1;
          } else if (this.value <= 335) {
            return 0;
          }
          break;
        case 'fat':
          if (this.value > 10) {
            return 10;
          } else if (this.value > 9) {
            return 9;
          } else if (this.value > 8) {
            return 8;
          } else if (this.value > 7) {
            return 7;
          } else if (this.value > 6) {
            return 6;
          } else if (this.value > 5) {
            return 5;
          } else if (this.value > 4) {
            return 4;
          } else if (this.value > 3) {
            return 3;
          } else if (this.value > 2) {
            return 2;
          } else if (this.value > 1) {
            return 1;
          } else if (this.value <= 1) {
            return 0;
          }
          break;
        case 'sugar':
          if (this.value > 45) {
            return 10;
          } else if (this.value > 40) {
            return 9;
          } else if (this.value > 36) {
            return 8;
          } else if (this.value > 31) {
            return 7;
          } else if (this.value > 27) {
            return 6;
          } else if (this.value > 22.5) {
            return 5;
          } else if (this.value > 18) {
            return 4;
          } else if (this.value > 13.5) {
            return 3;
          } else if (this.value > 9) {
            return 2;
          } else if (this.value > 4.5) {
            return 1;
          } else if (this.value <= 4.5) {
            return 0;
          }
          break;
        case 'salt':
          if (saltValue > 900) {
            return 10;
          } else if (saltValue > 810) {
            return 9;
          } else if (saltValue > 720) {
            return 8;
          } else if (saltValue > 630) {
            return 7;
          } else if (saltValue > 540) {
            return 6;
          } else if (saltValue > 450) {
            return 5;
          } else if (saltValue > 360) {
            return 4;
          } else if (saltValue > 270) {
            return 3;
          } else if (saltValue > 180) {
            return 2;
          } else if (saltValue > 90) {
            return 1;
          } else if (saltValue <= 90) {
            return 0;
          }
          break;
          // ----------------
        case 'extras':
          if (this.value > 80) {
            return 5;
          }
          if (this.value > 60) {
            return 2;
          }
          if (this.value > 40) {
            return 1;
          }
          if (this.value <= 40) {
            return 0;
          }
          break;
        case 'fibres':
          if (this.value > 7.4) {
            return 5;
          } else if (this.value > 3.7) {
            return 4;
          } else if (this.value > 2.8) {
            return 3;
          } else if (this.value > 1.9) {
            return 2;
          } else if (this.value > 0.9) {
            return 1;
          } else if (this.value <= 1.9) {
            return 0;
          }
          break;
        case 'proteins':
          if (this.value > 8.0) {
            return 5;
          } else if (this.value > 6.4) {
            return 4;
          } else if (this.value > 4.8) {
            return 3;
          } else if (this.value > 3.2) {
            return 2;
          } else if (this.value > 1.6) {
            return 1;
          } else if (this.value <= 1.6) {
            return 0;
          }
          break;
      }
      return 0;
    },
    calculatedItemLiquid() {
      let saltValue = (this.value / 2.5) * 1000
      switch (this.type) {
        case 'kj':
          if (this.value > 270) {
            return 10;
          }
          if (this.value > 240) {
            return 9;
          }
          if (this.value > 210) {
            return 8;
          }
          if (this.value > 180) {
            return 7;
          }
          if (this.value > 150) {
            return 6;
          }
          if (this.value > 120) {
            return 5;
          }
          if (this.value > 90) {
            return 4;
          }
          if (this.value > 60) {
            return 3;
          }
          if (this.value > 30) {
            return 2;
          }
          if (this.value > 0) {
            return 1;
          }
          return 0;
        case 'fat':
          if (this.value > 10) {
            return 10;
          } else if (this.value > 9) {
            return 9;
          } else if (this.value > 8) {
            return 8;
          } else if (this.value > 7) {
            return 7;
          } else if (this.value > 6) {
            return 6;
          } else if (this.value > 5) {
            return 5;
          } else if (this.value > 4) {
            return 4;
          } else if (this.value > 3) {
            return 3;
          } else if (this.value > 2) {
            return 2;
          } else if (this.value > 1) {
            return 1;
          } else if (this.value <= 1) {
            return 0;
          }
          break;
        case 'sugar':
          if (this.value > 13.5) {
            return 10;
          }
          if (this.value > 12) {
            return 9;
          }
          if (this.value > 10.5) {
            return 8;
          }
          if (this.value > 9) {
            return 7;
          }
          if (this.value > 7.5) {
            return 6;
          }
          if (this.value > 6) {
            return 5;
          }
          if (this.value > 4.5) {
            return 4;
          }
          if (this.value > 3) {
            return 3;
          }
          if (this.value > 1.5) {
            return 2;
          }
          if (this.value > 0) {
            return 1;
          }
          return 0;
        case 'salt':
          if (saltValue > 900) {
            return 10;
          } else if (saltValue > 810) {
            return 9;
          } else if (saltValue > 720) {
            return 8;
          } else if (saltValue > 630) {
            return 7;
          } else if (saltValue > 540) {
            return 6;
          } else if (saltValue > 450) {
            return 5;
          } else if (saltValue > 360) {
            return 4;
          } else if (saltValue > 270) {
            return 3;
          } else if (saltValue > 180) {
            return 2;
          } else if (saltValue > 90) {
            return 1;
          } else if (saltValue <= 90) {
            return 0;
          }
          break;
          //  -----------------
        case 'extras':
          if (this.value > 80) {
            return 5;
          } else if (this.value > 60) {
            return 4;
          } else if (this.value > 40) {
            return 2;
          } else if (this.value <= 40) {
            return 0;
          }
          break;
        case 'fibres':
          if (this.value > 7.4) {
            return 5;
          } else if (this.value > 3.7) {
            return 4;
          } else if (this.value > 2.8) {
            return 3;
          } else if (this.value > 1.9) {
            return 2;
          } else if (this.value > 0.9) {
            return 1;
          } else if (this.value <= 1.9) {
            return 0;
          }
          break;
        case 'proteins':
          if (this.value > 8.0) {
            return 5;
          } else if (this.value > 6.4) {
            return 4;
          } else if (this.value > 4.8) {
            return 3;
          } else if (this.value > 3.2) {
            return 2;
          } else if (this.value > 1.6) {
            return 1;
          } else if (this.value <= 1.6) {
            return 0;
          }
          break;
      }
      return 0;
    },
  }
}
</script>

<style scoped lang="scss">
.updatedCalculation {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>