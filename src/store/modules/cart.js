const state={
    cart:[]
}
const getters={
    cartItems:state=>state.cart
}
const actions={
    addToCartItem({commit},item){
        commit('addItems',item)
    },
    deleteCartItem({commit},id){
        commit('deleteItem',id)
    },
    resetCart({commit}){
        commit('resetCartItems')
    }
}
const mutations={
    addItems:(state,item)=>{
        let found = false;
        if(state.cart.length>0){
            state.cart.map(cartItem=>{
                if(cartItem.id===item.id){
                    found = true;
                }
            })
            if (!found)  state.cart.push(item)

        }else{
            state.cart.push(item)
        }
        
    },
        deleteItem:(state,id)=>{
           state.cart= state.cart.filter(item=> item.id!==id)
        },
        resetCartItems:(state)=>{
            state.cart=[];
        }
           
        
}
export default{
    state,
    getters,
    actions,
    mutations
}