import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import {Link} from 'react-router-dom';


const Slider = () => {
  return (
    <Carousel>
    <Carousel.Item interval={2000}>
      <img width={"100%"} height={"25%"}
        className="d-block w-100"
        src="img/f.webp"//
        alt=""
      />
      <Carousel.Caption>
        <Link exact to={'/form'}>
        </Link>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={2000}>
    <img width={"100%"} height={"25%"}
        className="d-block w-100"
        src="img/a.webp"
        alt=""
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={2000}>
    <img width={"100%"} height={"25%"}
        className="d-block w-100"
        src="img/t.webp"
        alt=""
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={2000}>
    <img width={"100%"} height={"25%"}
        className="d-block w-100"
        src="img/b.webp"
        alt=""
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

    <Carousel.Item interval={2000}>
    <img width={"100%"} height={"25%"}
        className="d-block w-100"
        src="img/c.webp"
        alt=""
      />
      <Carousel.Caption>
      </Carousel.Caption>
    </Carousel.Item>

  </Carousel>
  
  )
}

export default Slider