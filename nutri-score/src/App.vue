<template>
  <v-app id="app">
    <v-main>
      <v-toolbar
          color="#333333"
          dark
          flat
      >
        <v-toolbar-title>Nutri Score</v-toolbar-title>

        <v-spacer></v-spacer>

        <template v-slot:extension>
          <v-tabs
              v-model="tab"
              align-with-title
          >
            <v-tabs-slider color="#ffffff"></v-tabs-slider>

            <v-tab>
              Food
            </v-tab>
            <v-tab>
              Fluid
            </v-tab>
            <v-tab>
              Cheese
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tab">
        <v-tab-item>
          <nutriCalculator cardTitle="Food"></nutriCalculator>
        </v-tab-item>
        <v-tab-item>
          <nutriCalculator cardTitle="Liquid"></nutriCalculator>
        </v-tab-item>
        <v-tab-item>
          <nutriCalculator cardTitle="Cheese"></nutriCalculator>
        </v-tab-item>
      </v-tabs-items>

      <v-footer class="pa-5 footer">
        <p>
          All Information are based on the Files from the <a
            href="https://www.bmel.de/DE/themen/ernaehrung/lebensmittel-kennzeichnung/freiwillige-angaben-und-label/nutri-score/naehrwertkennzeichnung-hilfestellungen.html"
            lang="de" target="_blank">Bundesministerium
          für Ernährung und Landwirtschaft</a>
        </p>
        <h3>Links: </h3>
        <ul>
          <li>
            <a href="https://www.bmel.de/SharedDocs/Downloads/DE/_Ernaehrung/Lebensmittel-Kennzeichnung/markensatzung.pdf?__blob=publicationFile&v=3"
               lang="de" target="_blank">Markensatzung</a>
          </li>
          <li>
            <a href="https://www.bmel.de/SharedDocs/Downloads/DE/_Ernaehrung/Lebensmittel-Kennzeichnung/nutri-score-dt-excel-berechnungstabelle.xlsx?__blob=publicationFile&v=3"
               lang="de" target="_blank">Excel
              file for calculation</a>
          </li>
          <li>
            <a href="https://www.flaticon.com/free-icons/barcode" title="barcode icons" target="_blank">Barcode icons created by DinosoftLabs - Flaticon</a>
          </li>
          <li>
            <a href="https://openfoodfacts.github.io/api-documentation/" title="Food API" target="_blank">Nutrition/Food API</a>
          </li>
        </ul>
      </v-footer>

    </v-main>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import nutriCalculator from './components/NutriCalculator.vue';
import inputElement from './components/InputElement.vue';

@Component({
  components: {
    nutriCalculator,
    inputElement
  },
})
export default class App extends Vue {

  data () {
    return {
      tab: undefined,
      nutriScore: String,
    }
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'JetBrains Mono', monospace;
  //font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.footer {
  font-size: 8px;
  display: block !important;
}
</style>
