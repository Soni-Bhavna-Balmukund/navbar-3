import "./styles.css";
import Navbar from "./components/Navbar";
import Box from "./components/Box";
import PackageBox from "./components/PackageBox";
import PackageContainer from "./components/PackageContainer";
export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Box />
      {/* <PackageBox /> */}
      <PackageContainer />
    </div>
  );
}
