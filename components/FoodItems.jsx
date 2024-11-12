import Item from "./Item";

const FoodItems = (props) => {
  return (
    <ul className={"ist-group"}>
      {props.items.map((item) => (
        <Item foodItems={item}></Item>
      ))}
    </ul>
  );
};

export default FoodItems;
