<template>
  <div class="ma-5">
    <h2>Calculated Nutri Score:</h2>
    <div class="d-flex justify-space-between pointContainer">
      <v-card class="d-inline scoreCard" id="resultPoints">{{ numericScore }}</v-card>
      <v-card class="d-inline scoreCard" id="resultScore">{{ alphanumericScore }}</v-card>
    </div>

    <v-card class="scoreCard waterIndicator" v-if="cardTitle">Water</v-card>

    <div class="sliderContainer">
      <input type="range" min="-15" max="40" :value="numericScore" class="slider" id="myRange" disabled>

      <div class="scoreContainer" v-if="cardTitle">
        <div class="score b__liquid">B</div>
        <div class="score c__liquid">C</div>
        <div class="score d__liquid">D</div>
        <div class="score e__liquid">E</div>
      </div>
      <div class="scoreContainer" v-else>
        <div class="score a">A</div>
        <div class="score b">B</div>
        <div class="score c">C</div>
        <div class="score d">D</div>
        <div class="score e">E</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ScorePanel",

  props: {
    numericScore: Number,
    alphanumericScore: String,
    cardTitle: String
  },
}
</script>

<style lang="scss" scoped>
$sliderHeight: 38px;
$a: #0E8648;
$b: #74C928;
$c: #FBC801;
$d: #F4730E;
$e: #EF2D1A;

.pointContainer {
  margin: 15px 0;
}

.sliderContainer {
  position: relative;
  height: $sliderHeight;
  margin: 10px 0;
}

.sliderContainer input {
  width: 100%;
}

.slider {
  position: absolute;
  top: 0;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  height: $sliderHeight;
  background: transparent;
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
  z-index: 10;
}

.slider:hover {
  opacity: 1;
}

/* The slider handle (use -webkit- (Chrome, Opera, Safari, Edge) and -moz- (Firefox) to override default look) */
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 5px;
  height: $sliderHeight;
  background: #000000;
}

.slider::-moz-range-thumb {
  width: 5px;
  height: $sliderHeight;
  background: #000000;
}

.scoreContainer {
  position: absolute;
  top: 0;
  width: 100%;
  background-color: #ddd;
  display: flex;
  z-index: 0;
}

.score {
  text-align: center;
  padding-top: 10px;
  padding-bottom: 10px;
  color: white;
  font-weight: bold;
  margin: 0;
  line-height: 1.15;
}

.e {
  width: 40%;
  background-color: $e;
}

.d {
  width: 14.45%;
  background-color: $d;
}

.c {
  width: 14.45%;
  background-color: $c;
}

.b {
  width: 5.45%;
  background-color: $b;
}

.a {
  width: 27.27%;
  background-color: $a;
}

.waterIndicator {
  color: white;
  background-color: $a;
}

.e__liquid {
  width: 55.35%;
  background-color: $e;
}

.d__liquid {
  width: 7.14%;
  background-color: $d;
}

.c__liquid {
  width: 7.14%;
  background-color: $c;
}

.b__liquid {
  width: 30.35%;
  background-color: $b;
}

.scoreCard {
  width: 45%;
  padding: 5px 10px;
  text-align: center;
}
</style>