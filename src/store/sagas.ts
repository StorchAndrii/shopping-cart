import { takeEvery, call, put } from "redux-saga/effects";
import { addToCart } from "./cart/cart.reducer";
import { getProduct } from "../api/products";
import { setProducts } from "./products.reducer";

function* handleAddToCart(action: any) {
  yield put({ type: "ADD_TO_CART", payload: action.payload });
  console.log(`Added ${action.payload.quantity} items to the cart`);
}

function* fetchProductsSaga(): Generator<any, any, any> {
  try {
    const products = yield call(getProduct); // вызываем функцию для получения данных
    console.log(products);
    yield put({ type: setProducts, payload: products }); // помещаем полученные данные в store
  } finally {
    console.log("Fetch products completed");
  }
}

function* rootSaga() {
  yield takeEvery(addToCart.type, handleAddToCart);
  yield takeEvery("FETCH_PRODUCTS", fetchProductsSaga); // слушаем action "FETCH_PRODUCTS" и вызываем соответствующий эффект
}

export default rootSaga;
