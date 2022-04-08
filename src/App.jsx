import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./componentes/NavBar/NavBar";
import ItemDetailContainer from "./container/ItemDetailContainer";
import "./App.css";
import Cart from "./componentes/Cart/Cart";
import CartContextProvider from "./Context/CartContext";
import { lazy, Suspense } from "react";

const ItemListContainer = lazy(() => import("./container/ItemListContainer"));
function App() {
  return (
    <Suspense fallback={<h1>Cargando ...</h1>}>
      <BrowserRouter>
        <CartContextProvider>
          <div className="App">
            <NavBar />
            <Routes>
              <Route
                path="/"
                element={
                  <ItemListContainer
                    id="saludo"
                    saludo={"No te pierdas los descuentos pagando en efectivo!"}
                  />
                }
              />
              <Route
                path="/categoria/:id"
                element={
                  <ItemListContainer
                    id="saludo"
                    saludo={"No te pierdas los descuentos pagando en efectivo!"}
                  />
                }
              />
              <Route
                path="/detalle/:detalleId"
                element={<ItemDetailContainer />}
              />

              <Route path="/cart" element={<Cart />} />
              <Route path="/*" element={<Navigate to="/" />} />
            </Routes>
          </div>
        </CartContextProvider>
      </BrowserRouter>
    </Suspense>
  );
}

export default App;
