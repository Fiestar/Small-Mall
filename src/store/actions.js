export default {

  addCart(context, payload) {
   return new Promise(resolve => {
     const product = context.state.cartGoods.find(item => {
       return item.iid === payload.iid
     })
     if (product) {
       context.commit('addCount', product)
       resolve('数量加一')
     } else {
       context.commit('pushCartGoods', payload)
       resolve('添加商品')
     }
   })
  }
}
