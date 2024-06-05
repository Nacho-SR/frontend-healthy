export const state = () => ({
  actualUser: null,
  token: null
})

export const mutations = {
  setUser (state, user) {
    state.actualUser = user
  },
  setToken (state, token) {
    state.token = token
  }
}

export const getters = {
  getActualUser (state) {
    return state.actualUser
  }
  // this.$store.getters.getActualUser <- ASI SE ACCEDE A LA INFO EN LOS COMPONENTES
}
