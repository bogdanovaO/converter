<template>
  <div class="container">
    <div style="width: 100%">
      <div :class="$style.title">Сryptocurrency portfolio</div>

      <div :class="$style.wrap">
        <div :class="$style.headOfContent">
          <div style="color: #3273dc; font-weight: bold">
            {{ Math.round(sum)}}<fa
              style="color: #3273dc; margin-left: 5px"
              :icon="['fas', 'dollar-sign']"
            />
          </div>
          <div>
            <button
              class="button is-primary"
              @click="
                modal = true;
                buying = true;
                selling = false;
              ">buy</button>

            <button
              class="button is-danger"
              @click="
                modal = true;
                selling = true;
                buying = false;
              "
            >
              sell
            </button>
          </div>
        </div>

        <table class="table is-striped is-fullwidth">
          <thead>
            <tr :class="$style.border">
              <th>asset</th>
              <th>quantity</th>
              <th>price</th>
              <th>total price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>bitcoin</td>
              <td>{{ totalBitcoin }}</td>
              <td>{{ bitcoin }}</td>
              <td>{{ bitcoin }}</td>
            </tr>
            <tr>
              <td>ethereum</td>
              <td>{{ totalEtheriun }}</td>

              <td>{{ ethereum }}</td>
              <td>{{ bitcoin }}</td>
            </tr>
          </tbody>
        </table>

        <div class="modal" v-bind:class="{ 'is-active': modal }">
          <div class="modal-background"></div>

          <div class="modal-content" :class="$style.mContent">
            <button
              class="modal-close is-large"
              :class="$style.close"
              aria-label="close"
              @click="close"
            ></button>
            <div :class="$style.modalWrap" v-if="buying">
              <div class="field" :class="$style.content__item">
                <label class="label" :class="$style.label">quantity</label>
                <input
                  class="input"
                  type="number"
                  placeholder="enter the amount"
                  v-model="num"
                />
              </div>
              <div class="field" style="margin: 0 5px 0 15px">
                <label class="label" :class="$style.label">currency</label>
                <div class="select" :class="$style.select">
                  <select
                    @change="onChangeCurrentCurrency($event)"
                    :class="$style.select"
                  >
                    <option value="btc">BTC</option>
                    <option value="eth">ETH</option>
                  </select>
                </div>
              </div>

              <button
                v-bind:class="{ 'is-hidden': complete }"
                @click="buy"
                class="button is-link"
                style="margin-top: 2rem"
              >
                 <fa style="color: #fff" :icon="['fas', 'arrow-right']" />
              </button>
              <button
                v-bind:class="{ 'is-hidden': !complete }"
                style="margin-top: 2rem"
                class="button is-primary"
              >
                <fa style="color: #fff" :icon="['fas', 'check']" />
              </button>
            </div>

            <div :class="$style.modalWrap" v-if="selling">
              <div class="field" :class="$style.content__item">
                <label class="label" :class="$style.label">quantity</label>
                <input
                  class="input"
                  type="number"
                  placeholder="enter the amount"
                  v-model="num"
                />
              </div>
              <div class="field" style="margin: 0 5px 0 15px">
                <label class="label" :class="$style.label">currency</label>
                <div class="select" :class="$style.select">
                  <select
                    @change="onChangeCurrentCurrency($event)"
                    :class="$style.select"
                  >
                    <option value="btc">BTC</option>
                    <option value="eth">ETH</option>
                  </select>
                </div>
              </div>

              <button
                v-bind:class="{ 'is-hidden': complete }"
                @click="sell"
                class="button is-link"
                style="margin-top: 2rem"
              >
                 <fa style="color: #fff" :icon="['fas', 'arrow-right']" />
              </button>
              <button
                v-bind:class="{ 'is-hidden': !complete }"
                style="margin-top: 2rem"
                class="button is-primary"
              >
                <fa style="color: #fff" :icon="['fas', 'check']" />
              </button>
            </div>
          </div>
        </div>
        <PieChart
          style="margin-top: 40px"
          :dataEth="totalEtheriun"
          :dataBtc="totalBitcoin"
        />
      </div>
    </div>
  </div>
</template>
<script>
import PieChart from "/components/PieChart.vue";

import axios from "axios";
import { mapState } from "vuex";
export default {
  components: {
    PieChart,
  },
  mounted() {
    this.getPortfolioData();
  },
  data() {
    return {
      bitcoin: "",
      ethereum: "",
      totalBitcoin: 17,
      totalEtheriun: 36,
      sum: "",
      modal: false,
      buying: false,
      selling: false,
      num: "",
      currentCurrency: "btc",
      componentKey: 0,
      changed: false,
      complete: false,
    };
  },
  computed: {
    ...mapState({}),
  },
  methods: {
    buy() {
      this.modal = true;
      this.buying = true;
      if (this.currentCurrency === "btc" && this.num > 0) {
        this.totalBitcoin = this.totalBitcoin + +this.num;
        this.num = "";
        this.sum =
          this.bitcoin * this.totalBitcoin + this.ethereum * this.totalEtheriun;
      } else {
        this.totalEtheriun = this.totalEtheriun + +this.num;
        this.num = "";
        this.sum =
          this.bitcoin * this.totalBitcoin + this.ethereum * this.totalEtheriun;
      }
      this.complete = true;
    },
    sell() {
      debugger
      if (
        this.currentCurrency === "btc" &&
        this.num > 0 &&
        this.num < this.totalBitcoin 
      ) {
        this.totalBitcoin = this.totalBitcoin - +this.num;
        this.num = "";
        this.sum =
          this.bitcoin * this.totalBitcoin + this.ethereum * this.totalEtheriun;
      } else if (
        this.currentCurrency === "eth" &&
        this.num > 0 &&
        this.num < this.totalEtheriun 
      ) {
        debugger
        this.totalEtheriun = this.totalEtheriun - +this.num;
        this.num = "";
        this.sum =
          this.bitcoin * this.totalBitcoin + this.ethereum * this.totalEtheriun;
      } else {
        alert('not enough funds')
      }

      this.complete = true;
    },
    close() {
      this.modal = false;
      this.selling = false;
      this.buying = false;
      this.complete = false;
    },
    onChangeCurrentCurrency(event) {
      this.currentCurrency = event.target.value;
    },
    getPortfolioData() {
      axios
        .get(
          `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum&vs_currencies=usd`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res.data.bitcoin.usd);
          this.bitcoin = res.data.bitcoin.usd;
          this.ethereum = res.data.ethereum.usd;
          this.sum =
            this.bitcoin * this.totalBitcoin +
            this.ethereum * this.totalEtheriun;
          console.log(this.sun);
        })
        .catch((error) => alert('Houston, we have a problem:' + error.message));
    },
  },
};
</script>
<style lang="sass" module>
.close
  position: relative!important
  color: #000
  background-color: rgb(50, 115, 220)
  float: right
.label
  text-align: left
.complete
  align-self: flex-end
.button
  margin-top: 2rem
.border
  borger-bottom: 1px solid #000
.headOfContent
  display: flex
  justify-content: space-between
  margin-bottom: 40px
.la
.title
  color: #fff
  font-weight: bold
  font-size: 30px
  padding-bottom: 30px
  margin-top: 50px
.modalWrap

  padding: 40px
  box-sizing: border-box
  width: 100%
  flex-wrap: wrap
  display: flex
  // margin-bottom: 0!important
.wrap
  background: #fff
  padding: 40px
  width: 100%
.mContent
  background: #fff
  margin: auto auto!important
</style>