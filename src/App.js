import Header from "./components/header";
import Image from "./components/imageContainer";
import Ingredients from "./components/ingredients";
import Preparation from "./components/preparation";




function App() {


  
  return (
    <div className="flex flex-col min-h-screen p-8 bg-slate-300">
     Grandma's recipes
   <Header title = "Perfection Salad"/>
   <Image/>
   <Header title = "Ingredients"/>
   <Ingredients/>
   <Header title = "Preparation"/>
   <Preparation/>




     
      
    </div>
  );
}

export default App;
