import ErrorMessage from "../components/ErrorMessage";
import FoodItems from "../components/FoodItems";

function App() {
  let foodItems = ["Ghee", "Roti", "Milk", "Lassi"];

  return (
    <>
      <h1>Healthy Foods</h1>
      <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
    </>
  );
}

export default App;
