import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderComponent from "./component/HeaderComponent/HeaderComponent"
import DefaultComponent from "./component/DefaultComponent/DefaultComponent";
import { routes } from "./routes";
import { Fragment } from "react";
function App() {    
  return (
    <div>
      <Router>
        <Routes>
          {routes.map((route) => {
            const Page = route.page;
            const Layout = route.isShowHeader ? DefaultComponent : Fragment
            return( <Route key={route.path} path={route.path} element={
              <Layout>
                <Page />
              </Layout>
            } />
            )
          })}
        </Routes>
      </Router>
    </div>
  );
}
export default App;
