<template>
<div style="width: 100%">
      <div :class="$style.title">
      Converter: Bitcoin (BTC), Ether (ETH), US Dollar (USD)
    </div>

  <div :class="$style.wrap">
<div class="tabs">
  <ul>
    <li  v-bind:class="{ 'is-active' : !charts }" v-on:click="charts = false "><a>converter</a></li>
    <li v-bind:class="{ 'is-active' : charts }" v-on:click="charts = true "><a>charts</a></li>
  </ul>
</div>
<div v-if="!charts">
    <div class="columns "  :class="$style.content">

      <div class="field" :class="$style.content__item">
        <label class="label" :class="$style.label">Amount</label>
        <input
          class="input"
          type="text"
          placeholder="Text input"
          v-model="num"
        />
      </div>
      <div class="field" :class="$style.content__item">
        <label class="label" :class="$style.label">From</label>
        <div class="select" :class="$style.select">
          <select @change="onChangeFirst($event)" :class="$style.select" >
            <option value="bitcoin">BTC</option>
            <option value="ethereum">ETH</option>
            <option value="dollar">USD</option>
          </select>
        </div>
      </div>


      <div class="field" :class="$style.content__item">
        <label class="label" :class="$style.label">To</label>
        <div class="select" :class="$style.select">
          <select @change="onChangeSecond($event)" :class="$style.select">
            <option value="usd">USD
            </option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </select>

        </div>
      </div>


      <button
        v-on:click="getData"
        class="button is-link"
        :class="$style.button">>
      </button>
    </div>
              <div v-if="getResult" :class="$style.resultGroup">
          <div class="textColor" :class="$style.request">
            <span style="margin-right: 10px">{{num}}</span><span>{{firstNum}} =</span>
            </div>
            <div :class="$style.result" class="textColor">
             <span> {{results.value}}</span>
             <span> {{results.currency}}</span>
              </div>
        </div>
    </div>
   



            <div v-if="charts" class="columns is-centered"  :class="$style.contentWrap">
                    <div class="field" >
        <label class="label" :class="$style.label">From</label>
        <div class="select">
          <select @change="onChangeFirst($event)">
            <option value="bitcoin">BTC</option>
            <option value="ethereum">ETH</option>
            <option value="dollar">USD</option>
          </select>
        </div>
      </div>


      <div class="field">
        <label class="label" :class="$style.label">To</label>
        <div class="select">
          <select @change="onChangeSecond($event)">
            <option value="usd">USD</option>
            <option value="btc">BTC</option>
            <option value="eth">ETH</option>
          </select>
        </div>
      </div>
            <button

        class="button is-link"
        :class="$style.button">
        >
      </button>
            </div>
  </div>
</div>

</template>
<script>
import axios from "axios";
import { mapState } from "vuex";
export default {
  data() {
    return {
      send: false,
      num: "",
      firstNum: "bitcoin",
      secondNum: "usd",
      charts: false
      // arr: []
    };
  },
  computed: {
    ...mapState({
      results: "results",
      getResult: "getResult"
    })
  },
    //    props: {
    // results: {
    //   type: Array,
    //   default: () => {}
    // }
    // },
  methods: {
    onChangeFirst(event) {
      this.firstNum = event.target.value;
      console.log(this.charts)
    },
    onChangeSecond(event) {
      this.secondNum = event.target.value;
    },

    getData() {
      const currentDate = new Date();
      const timestamp = currentDate.getTime();
      const magicNumber = 12096e5;
      const dateTo = timestamp + magicNumber;
      console.log(timestamp);
      console.log(dateTo);
      console.log(currentDate);
      //https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range?vs_currency=usd&from=1392577232&to=1422577232
      //api для графика
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
            const vGeneration = (Number (value) + Number (this.num) )
            console.log(value)
            console.log(Number (value) + Number (this.num) )
            return this.$store.commit("SET_RESULT", {key, vGeneration } );
          });
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
  // box-shadow: 0 0 24px 0 rgba(0,0,0,.5)
  background: #fff
  padding: 40px
  width: 100%
  // margin-top: 50px
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
