<template>
  <div>
    <v-card
        elevation="3"
        class="calculator"
    >

      <h1>{{ cardTitle }}</h1>

      <v-form ref="form">
        <v-subheader>Negative Components</v-subheader>
        <inputElement @calculatedItem="updateCalculation($event, 'kj', 'negative')"
                      class="ma-5"
                      type="kj"
                      suffix="kcal"
                      :foodType="cardTitle"></inputElement>
        <inputElement @calculatedItem="updateCalculation($event, 'fat', 'negative')"
                      class="ma-5"
                      type="fat"
                      suffix="g"
                      :foodType="cardTitle"></inputElement>
        <inputElement @calculatedItem="updateCalculation($event, 'sugar', 'negative')"
                      class="ma-5"
                      type="sugar"
                      suffix="g"
                      :foodType="cardTitle"></inputElement>
        <inputElement @calculatedItem="updateCalculation($event, 'salt', 'negative')"
                      class="ma-5"
                      type="salt"
                      suffix="g"
                      :foodType="cardTitle"></inputElement>

        <v-divider></v-divider>
        <v-subheader>Positive Components</v-subheader>
        <inputElement @calculatedItem="updateCalculation($event, 'extras', 'positive')"
                      class="ma-5"
                      type="extras"
                      suffix="%"
                      :foodType="cardTitle"></inputElement>
        <inputElement @calculatedItem="updateCalculation($event, 'fibres', 'positive')"
                      class="ma-5"
                      type="fibres"
                      suffix="g"
                      :foodType="cardTitle"></inputElement>
        <inputElement @calculatedItem="updateCalculation($event, 'proteins', 'positive')"
                      class="ma-5"
                      type="proteins"
                      suffix="g"
                      :foodType="cardTitle"></inputElement>

        <v-btn
            elevation="2"
            @click="clearForm"
            class="ma-5"
        >
          reset calculation
        </v-btn>
      </v-form>

    </v-card>
    <v-card
        elevation="3"
        class="calculator"
    >
      <scorePanel v-if="cardTitle === 'Cheese'" :numeric-score="calculatedScore"
                  :alphanumeric-score="alphanumericScoreCheese"></scorePanel>
      <scorePanel v-else-if="cardTitle === 'Liquid'" :cardTitle="cardTitle" :numeric-score="calculatedScore"
                  :alphanumeric-score="alphanumericScoreLiquid"></scorePanel>
      <scorePanel v-else :numeric-score="calculatedScore" :alphanumeric-score="alphanumericScoreFood"></scorePanel>
    </v-card>
  </div>
</template>

<script>
import inputElement from './InputElement.vue';
import scorePanel from './ScorePanel.vue';

export default {
  name: "NutriCalculator",

  components: {
    inputElement,
    scorePanel
  },

  data() {
    return {
      negativeComponents: {
        'kj': 0,
        'fat': 0,
        'sugar': 0,
        'salt': 0
      },
      positiveComponents: {
        'extras': 0,
        'fibres': 0,
        'proteins': 0
      },
    }
  },

  props: {
    cardTitle: String,
  },

  computed: {
    calculatedScore() {
      let negatives = 0;
      let positives = 0;

      for (let item in this.positiveComponents) {
        positives += parseFloat(this.positiveComponents[item]);
      }
      for (let item in this.negativeComponents) {
        negatives += parseFloat(this.negativeComponents[item]);
      }

      if (this.cardTitle === 'Food' && negatives >= 11 && this.positiveComponents['extras'] < 5) {
        return negatives - (positives - this.positiveComponents['proteins']);
      } else {
        return negatives - positives;
      }
    },
    alphanumericScoreFood() {
      let nutriScore = '';
      if (this.calculatedScore >= 19 && this.calculatedScore <= 40) {
        nutriScore = 'E';
      } else if (this.calculatedScore >= 11 && this.calculatedScore <= 18) {
        nutriScore = 'D';
      } else if (this.calculatedScore >= 3 && this.calculatedScore <= 10) {
        nutriScore = 'C';
      } else if (this.calculatedScore >= 0 && this.calculatedScore <= 2) {
        nutriScore = 'B';
      } else if (this.calculatedScore >= -15 && this.calculatedScore <= -1) {
        nutriScore = 'A';
      }
      return nutriScore;
    },
    alphanumericScoreLiquid() {
      let nutriScore = '';
      if (this.calculatedScore >= 10 && this.calculatedScore <= 40) {
        nutriScore = 'E';
      } else if (this.calculatedScore >= 6 && this.calculatedScore <= 9) {
        nutriScore = 'D';
      } else if (this.calculatedScore >= 2 && this.calculatedScore <= 5) {
        nutriScore = 'C';
      } else if (this.calculatedScore >= -15 && this.calculatedScore <= 1) {
        nutriScore = 'B';
      } else if (this.calculatedScore === -15) {
        nutriScore = 'A';
      }
      return nutriScore;
    },
    alphanumericScoreCheese() {
      let nutriScore = '';
      if (this.calculatedScore >= 19 && this.calculatedScore <= 40) {
        nutriScore = 'E';
      } else if (this.calculatedScore >= 11 && this.calculatedScore <= 18) {
        nutriScore = 'D';
      } else if (this.calculatedScore >= 3 && this.calculatedScore <= 10) {
        nutriScore = 'C';
      } else if (this.calculatedScore >= 0 && this.calculatedScore <= 2) {
        nutriScore = 'B';
      } else if (this.calculatedScore >= -15 && this.calculatedScore <= -1) {
        nutriScore = 'A';
      }
      return nutriScore;
    }
  },
  methods: {
    updateCalculation(value, type, component) {
      if (component === 'positive') {
        this.positiveComponents[type] = value;
      } else {
        this.negativeComponents[type] = value;
      }
    },
    clearForm() {
      this.$vuetify.goTo('.calculator');

      this.$refs.form.reset();

      this.negativeComponents = {
        'kj': 0,
        'fat': 0,
        'sugar': 0,
        'salt': 0
      }

      this.positiveComponents = {
        'extras': 0,
        'fibres': 0,
        'proteins': 0
      }
    }
  }
}
</script>

<style scoped lang="scss">
.calculator {
  margin: 20px auto;
  padding: 10px;
  max-width: 90%;

  @media only screen and (min-width: 600px) {
    max-width: 65%;
  }
}
</style>