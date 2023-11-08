import Slider from "react-slick";
import CardsMain from "./cards";

export default function SLIDER(props:any){
  return (<div>
    <h2> Single Item</h2>
    <Slider {...props}>
      <CardsMain />
    </Slider>
  </div>)
}