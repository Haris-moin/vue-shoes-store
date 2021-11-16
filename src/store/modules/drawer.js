const state={
    isOpen:false
}
const getters={
    drawerOpenState:state=>state.isOpen
}
const actions={
    openDrawer({commit},isDrawerOpen){
        commit('drawerOpen',isDrawerOpen)
    }
}
const mutations={
    drawerOpen:(state,isDrawerOpen)=>(
        state.isOpen=isDrawerOpen
        )
}
export default{
    state,
    getters,
    actions,
    mutations
}