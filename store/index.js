export const state = () => ({
  results: [
    {currency: '', value: ''}
  ],
  getResult: false
})

export const mutations = {
  SET_RESULT (state, {key, vGeneration}) {
    state.results.currency = key,
    state.results.value = vGeneration ,
    state.getResult = true
  },
  OPEN_MODAL (state, payload) {
    state.modal = payload
  },
  SET_NEW_VEHICLE (state, { name, description, rent }) {
    state.productsList.push({
      id: this.state.productsList.length + 1,
      name: name,
      type: 'custom',
      description: description, 
      rent: rent, 
      preview: 'https://loremflickr.com/160/160', 
      image: 'https://loremflickr.com/160/160'
    })
    state.modal = false
  }
}

// export const actions = {
//   async getCatalog ({ commit }) {
//     try {
//       await commit('SET_PRODUCTS_LIST', vehicles)
//     } catch (err) {
//       console.log(err)
//       throw new Error('Внутреняя ошибка сервера, сообщите администратору')
//     }
//   },
//   async getCurrentDetail ({ commit }, {route}) {
//     await sleep(1000)
//     const detail = vehicles.find((detail) => detail.name === route.params.DetailPage)
//     await commit('SET_CURRENT_DETAIL', detail)
//   }
//   }