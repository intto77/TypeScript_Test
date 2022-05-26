import { useState } from "react";
import { useQuery } from "react-query";
// Components
import Drawer from "@material-ui/core/Drawer";
import LinearProgress from "@material-ui/core/LinearProgress";
import Grid from "@material-ui/core/Grid";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";
import Badge from "@material-ui/core/Badge";
//Style
import { Wrapper } from "./App.styles";
import { type } from "@testing-library/user-event/dist/type";

export type CartItemType = {
  id: number;
  category: string;
  image: string;
  price: Number;
  title: string;
  amount: number;
};

const getProducts = async (): Promise<CartItemType[]> =>
  await (await fetch("http://fakestoreapi.com/products")).json();

const App = () => {
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    "products",
    getProducts
  );
  console.log(data);
  return <div className="App">Start</div>;
};

export default App;
