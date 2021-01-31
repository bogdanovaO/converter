export const state = () => ({
  results: [
    {currency: '', value: ''}
  ],
  chartValues: 0
})

export const mutations = {
  SET_RESULT (state, {key, vGeneration}) {
    state.results.currency = key,
    state.results.value = vGeneration 
  },
  SET_CHART (state, value) {
    state.chartValues = value
  }
}

