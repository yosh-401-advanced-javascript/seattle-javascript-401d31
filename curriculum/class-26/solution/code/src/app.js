import React from "react";

import "./app.scss";
import Header from "./components/header";
import Footer from "./components/footer";
import Counter from "./components/counter";

class App extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Counter />
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
