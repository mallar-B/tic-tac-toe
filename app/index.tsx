import { Text, View } from "react-native";
import Square from "@/components/Square";
import Game from "./Game";


export default function Index() {
  document.body.style.backgroundColor = '#282828'
  document.body.style.color = '#fbf1c7'
  return(
  <>
    <Game/>
  </>)
}
