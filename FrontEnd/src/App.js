import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./Root";
import Home from "./pages/Home";
import Create from "./pages/Create";
import NotFound from "./pages/NotFound";
import Products from "./pages/Products";
import ShoppingCart from "./pages/ShoppingCart";
import ProductDetails from "./pages/ProductDetails/ProductDetails.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      {/* Root elemnt will be render in every page as header,drawer  The close tag at the end*/}

      <Route index element={<Home />} />
      {/* this is the home page  take (index) with close tag */}

      <Route path="blog" element={<Create />} />
      {/* one of inner pages with also close tag */}
      <Route path="products" element={<Products />} />
      <Route path="cart" element={<ShoppingCart />} />
      <Route path="product-details/:id" element={<ProductDetails />} />

      <Route path="*" element={<NotFound />} />
      {/* return you to home page if u write wrong link or extension */}
    </Route>,
    // here the close tag of root to wrap all elemnts
  ),
);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
