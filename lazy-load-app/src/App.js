import './App.css';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SuspenseFallback from './Suspense'; //in order to use lazy loaing wrap routes in suspense
import Header from './Header';
const Home = lazy(() => import('./Home'));
const AnotherHome = lazy(() => import('./Another'));

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Suspense fallback={<SuspenseFallback />}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={AnotherHome} />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
