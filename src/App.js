import { Fragment } from "react";
import "./App.css";

// import Layout from "./component/Layout";
// import FoodDisplay from "./foodOrdering/FoodDisplay";
// import NavBar from "./foodOrdering/NavBar";
// import Counter from "./counter/Counter";
// import MyForm from "./counter/MyForm";
// import UsereducerForm from "./usereducer/UsereducerForm";
// import MyContext from "./context/MyContext";
// import AboveNavbar from "./foodOrdering/AboveNavbar";
// import CartcontextProvider from "./context/CartcontextProvider";
// import Hello from "./hello/Hello";
// import MyContext from "./context/MyContext";
// import FormIncrease from "./FormIncrease";
// import Hello from "./hello/Hello";
// import FormIncrease from "./FormIncrease";
// import ReduxToolkitcounter from "./ReduxToolkitcounter";
import Auth from "./component/Auth";
import { useSelector } from "react-redux";
import Cart from "./component/Cart";
function App() {
  // const { isClicked, setIsClicked } = useContext(MyContext);
  // const [click, setClick] = useState(false);
  // const { count, setCount } = useContext(MyContext);
  const isLoggedin = useSelector((state) => state.isLoggedin);

  return (
    //   <div className="App">
    //     <h1>hello geba</h1>
    //     <Counter />
    //     <MyForm />
    //     <UsereducerForm />
    //     <Hello />
    //   </div>

    <Fragment>
      {/* <CartcontextProvider>
        {isClicked ? (
          <Hello />
        ) : (
          <>
            <NavBar />
            <AboveNavbar />
            <FoodDisplay />
          </>
        )}
      </CartcontextProvider> */}
      {/* <FormIncrease /> */}
      {/* <ReduxToolkitcounter /> */}
      {/* {isLoggedin ? <Cart /> : <Auth />} */}
      {isLoggedin && <Cart />}
      {!isLoggedin && <Auth />}
    </Fragment>
  );
}

export default App;
