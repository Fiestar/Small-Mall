export default {
  addCount(state,payload) {
    payload.count += 1;
  },
  pushCartGoods(state,payload) {
    payload.isCheck = true;
    payload.count = 1;
    state.cartGoods.push(payload)
  }
}
