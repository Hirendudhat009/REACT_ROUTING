import { Route, Switch } from 'react-router-dom'
import Welcome from './pages/Welcome';
import Product from './pages/Product';
import MainHeader from './components/MainHeader';
import ProductDetail from './pages/Productdetail';


function App() {
  return (
    <div>
      <header> <MainHeader /></header>
      <main>
        <Switch>
          <Route path="/products" exact>
            <Product />
          </Route>

          <Route path="/welcome">
            <Welcome />
          </Route>

          <Route path="/products/:productId">
            <ProductDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
