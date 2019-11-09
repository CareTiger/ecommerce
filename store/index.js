import data from "~/static/storedata.json"

export const state = () => ({
    cartUIStatus: "idle",
    storedata: data,
    cart: []
})

export const getters = {

    featuredProducts: state => state.storedata.slice(0,3),
    women: state => state.storedata.filter(el => el.gender === "Female")
}

export const mutations = {}

export const actions = {}