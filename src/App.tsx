import React from "react";
import Footer from "./components/Footer";
import Homepage from "./pages/Homepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Designers from "./pages/Designers";
import DesignerDetail from "./pages/DesignerDetail";
import ScrollToTop from "./components/ScrollToTop";

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/designers" component={Designers} />
        <Route exact path="/designers/:id" component={DesignerDetail} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
