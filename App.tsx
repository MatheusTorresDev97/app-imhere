import { StatusBar } from "react-native";
import Home from "./src/screens/Home";

const App = () => {
  return (
    <>
     <StatusBar 
     backgroundColor="transparent"
     translucent
     />
     <Home />
    </>
  )
};

export default App
