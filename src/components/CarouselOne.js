import React from 'react'
  import Carousel from "react-multi-carousel";
  import "react-multi-carousel/lib/styles.css";
import image2 from '../Images/carouselshoes.jpg'
import image6 from '../Images/men-leather-jacket.webp'
import image4 from '../Images/multiple jackets.jpg'
import image5 from '../Images/shoes caraosel.jpg'
function CarouselOne() {

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 3
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };
  return (
    <div>
     

<Carousel  
  swipeable={true}
  showDots={true}
  autoPlay={true}
  responsive={responsive}
  autoPlaySpeed={2000}
  keyBoardControl={true}
  customTransition="all .5"
  transitionDuration={500}
  itemClass="carousel-item-padding-40-px"

  removeArrowOnDeviceType={["tablet", "mobile"]}
  infinite={true}>
  <div><img  style={{width: "90%", height: "60vh", margin:'5%'}} src={image5}></img></div>
  <div><img   style={{width: "90%", height: "60vh", margin:'5%'}} src={image4}></img></div>
  <div><img   style={{width: "90%", height: "60vh", margin:'5%'}} src={image6}></img></div>
  <div><img   style={{width: "90%", height: "60vh", margin:'5%'}} src={image2}></img></div>
</Carousel>;
    </div>
  )
}

export default CarouselOne