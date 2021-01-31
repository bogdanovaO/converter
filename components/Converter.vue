<template>
  <div style="width: 100%">
    <div :class="$style.title" v-if="!charts">
      Converter: Bitcoin (BTC), Ether (ETH), US Dollar (USD)
    </div>
    <div :class="$style.title" v-else>
      Charts: from BTC/ETH to BTC/ETH/USD
    </div>
    
    <div :class="$style.wrap">
      <div class="tabs">
        <ul>
          <li
            v-bind:class="{ 'is-active': !charts }"
            v-on:click="charts = false"
          >
            <a>converter</a>
          </li>
          <li v-bind:class="{ 'is-active': charts }" v-on:click="charts = true">
            <a>charts</a>
          </li>
        </ul>
        <fa style="color: #3273dc" :icon="['fas', 'dollar-sign']" />
        <fa
          style="color: #3273dc; margin: 0 5px"
          :class="$style.icon"
          :icon="['fab', 'btc']"
        />
        <fa
          style="color: #3273dc"
          :class="$style.icon"
          :icon="['fab', 'ethereum']"
        />
      </div>
      <div v-if="!charts">
        <div class="columns" :class="$style.content">
          <div class="field" :class="$style.content__item">
            <label class="label" :class="$style.label">Amount</label>
            <input
              @change="rerenderInput"
              class="input"
              type="text"
              placeholder="enter the amount"
              v-model="num"
            />
          </div>
          <div class="field" :class="$style.content__item">
            <label class="label" :class="$style.label">From</label>
            <div class="select" :class="$style.select">
              <select @change="onChangeFirst($event)" :class="$style.select">
                <option value="bitcoin">BTC</option>
                <option value="ethereum">ETH</option>
              </select>
            </div>
          </div>

          <div class="field" :class="$style.content__item">
            <label class="label" :class="$style.label">To</label>
            <div class="select" :class="$style.select">
              <select @change="onChangeSecond($event)" :class="$style.select">
                <option value="usd">USD</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
              </select>
            </div>
          </div>

          <button
            v-on:click="getData"
            class="button is-link"
            :class="$style.button"
          >
            <fa style="color: #fff" :icon="['fas', 'arrow-right']" />
            
          </button>

          <div></div>
        </div>
        <div v-if="convertStatus" :class="$style.resultGroup">
          <div class="textColor" :class="$style.request">
            <span style="margin-right: 10px">{{ num }}</span
            ><span>{{ firstNum }} =</span>
          </div>
          <div :class="$style.result" class="textColor">
            <span> {{ results.value }}</span>
            <span> {{ results.currency }}</span>
          </div>
        </div>
      </div>

      <div v-if="charts">
        <div class="columns is-centered" :class="$style.contentWrap">
          <div class="field">
            <label class="label" :class="$style.label">From</label>
            <div class="select">
              <select @change="onChangeChartFirst($event)">
                <option value="bitcoin">BTC</option>
                <option value="ethereum">ETH</option>
              </select>
            </div>
          </div>

          <div class="field">
            <label class="label" :class="$style.label">To</label>
            <div class="select">
              <select @change="onChangeChartSecond($event)">
                <option value="usd">USD</option>
                <option value="btc">BTC</option>
                <option value="eth">ETH</option>
              </select>
            </div>
          </div>
          <button
            v-on:click="getChart"
            class="button is-link"
            :class="$style.button"
          >
            <fa style="color: #fff" :icon="['fas', 'arrow-right']" />
          </button>
        </div>
        <AreaChart v-if="chartValues !== 0" />
      </div>
    </div>
  </div>
</template>
<script>
import AreaChart from "./AreaChart.vue";
import axios from "axios";
import { mapState } from "vuex";
export default {
  components: {
    AreaChart,
  },
  data() {
    return {
      send: false,
      num: "",
      firstNum: "bitcoin",
      secondNum: "usd",
      firstChart: "bitcoin",
      secondChart: "usd",
      charts: false,
      convertStatus: false,
    };
  },
  computed: {
    ...mapState({
      results: "results",
      getResult: "getResult",
      chartValues: "chartValues",
    }),
  },
  methods: {
    onChangeFirst(event) {
      this.firstNum = event.target.value;
      this.convertStatus = false;
    },
    onChangeSecond(event) {
      this.secondNum = event.target.value;
      this.convertStatus = false;
    },
    onChangeChartFirst(event) {
      this.firstChart = event.target.value;
      const value = 0;
      return this.$store.commit("SET_CHART", value);
    },
    onChangeChartSecond(event) {
      this.secondChart = event.target.value;
      const value = 0;
      return this.$store.commit("SET_CHART", value);
    },
    rerenderInput() {
      this.convertStatus = false;
    },
    getData() {
      axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=${this.firstNum}&vs_currencies=${this.secondNum}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          const obj = Object.values(res.data)[0];
          const objectArray = Object.entries(obj);
          objectArray.forEach(([key, value]) => {
            const vGeneration = Number(value) * Number(this.num);
            this.convertStatus = true;
            return this.$store.commit("SET_RESULT", { key, vGeneration });
          });
        })
        .catch((error) => console.log(error.message));
    },
    getChart() {
      axios
        .get(
          `https://api.coingecko.com/api/v3/coins/${this.firstChart}/market_chart?vs_currency=${this.secondChart}&days=91`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          const arrOfArrays = res.data.prices.splice(77, 14);
          let customArr = () => {
            const arrOfObjects = [];

            for (let i = 0; i < arrOfArrays.length; i++) {
              let customObject = {
                ["course"]: arrOfArrays[i][1],
                ["data"]: new Date(arrOfArrays[i][0])
                  .toUTCString()
                  .substr(5, 5),
              };
              arrOfObjects.push(customObject);
            }
            return arrOfObjects;
          };
          const value = customArr();
          return this.$store.commit("SET_CHART", value);
        })
        .catch((error) => console.log(error.message));
    },
  },
};
</script>
<style lang="sass" module>
.select
  width: 100%!important
.resultGroup
  text-align: left
  margin-top: 30px
.title
  color: #fff
  font-weight: bold
  font-size: 30px
  padding-bottom: 30px
  margin-top: 50px
.result
  font-size: 30px
.wrap
  background: #fff
  padding: 40px
  width: 100%
.content
  margin: 0 auto
  justify-content: space-between
  &__item
    width: 30%
.button
  margin-top: 2rem
.label
  text-align: left
  color: #000
.link
  color: #000
.navBcg
  background: transparent!important
</style>
