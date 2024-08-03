import classes from "./App.module.css";

import Header from "./components/Header";
import Searchbar from "./components/Searchbar";
import Content from "./components/Content";

export default function App() {
  return (
    <div className={classes.mainContainer}>
      <Header />
      <Searchbar />
      <Content />
    </div>
  );
}
