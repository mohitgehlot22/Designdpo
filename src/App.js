import { Col, Container, CarouselItem, Row, Card } from 'react-bootstrap';
import './App.css';
import { Haeder } from './common/Headres';
import './mobileApp.css';
import Carousel from 'react-bootstrap/Carousel';
import slider1 from './slider1.jpg';
import slider2 from './slider_2 (2).jpg';
import slider3 from './slider_3.jpg';
import slider4 from './slider_4.jpg';
import slider5 from './slider_5.jpg';
import sectionimg from './benefits_subimage_1.jpg';
import sectionimg2 from './benefits_subimage_icon.svg';
import sectionimg3 from './box-dots.svg';
import sectionimg4 from './benefits_subimage_icon_2.svg';
import sectionimg5 from './benefits_subimage-bad.jpg';
import sectionimg6 from './benefits_subimage_3.jpg';
import sectionimg7 from './benefits_subimage_icon_3.svg';
import sectionimg8 from './benefits_subimage_4.png';
import sectionimg9 from './benefits_subimage_icon_41681880478.svg';
import sectionimg10 from './benefits_subimage_5.jpg';
import sectionimg11 from './benefits_subimage_icon.svg';
import section3img from './benefits_title_image.jpg';
import Cardimg from './category_1662707351_450x450.jpg';
import { Tabbing } from './common/Tabbing';
import { Footre } from './common/Footre';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



function App() {

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='container-fluid p-0 headerBackground'>
        <Haeder />
        <section>
          <Container>
            <div className='row'>
              <Col className='col-lg-6 col-12'>
                <div className='textsec'>
                  <p className='m-0 p-0 sectionfstext'>
                    Design Your Dream<br />
                    Home...<br />
                    At Your Fingertips
                  </p>
                </div>
                <div className='pb-5 btnmore'>
                  <button className='explore fw-bold ps-4  rounded fs-5'>
                    Explore More
                  </button>
                </div>
              </Col>
              <Col className='col-lg-6 slider1'>
                <Carousel>
                  <CarouselItem>
                    <img src={slider1} class="img-fluid carousel" alt="" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={slider2} class="img-fluid carousel" alt="" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={slider3} class="img-fluid carousel" alt="" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={slider4} class="img-fluid carousel" alt="" />
                  </CarouselItem>
                  <CarouselItem>
                    <img src={slider5} class="img-fluid carousel" alt="" />
                  </CarouselItem>
                </Carousel>
              </Col>
            </div>
          </Container>
        </section>
      </div>
      <section className='bacgroundsection2'>
        <Container>
          <h1 className='Getusing'>
            Benifits You Get When Using
          </h1>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <img src={sectionimg} className='img-fluid' />
            </div>
            <div className='col-lg-6 col-12 pt-5'>
              <div className='manyp'>
                <img src={sectionimg2} className='pt-3' />
                <h1 className='Many fw-bold'>  Many Options In All Designs </h1>
              </div>

              <div className='btnmore'>
                <button className='explore fw-bold  rounded fs-5'>
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </Container>
        <div className='imgmobile container-fluid py-5 text-end'>
          <img src={sectionimg3} />
        </div>
        <Container>
          <div className='row mt-4'>
            <div className='col-lg-6 col-12  order-last order-lg-last pt-lg-5 text-end pe-lg-5'>
              <div className='manyp'>
                <img src={sectionimg4} className='pt-3' />
                <h1 className='Many fw-bold'>
                  High Resolution 3D Drawings
                </h1>
              </div>
              <div className='btnmore'>
                <button className='explore fw-bold my-4 rounded fs-5'>
                  Explore More
                </button>
              </div>
            </div>
            <div className='col-lg-6 col-12  order-first order-lg-last'>
              <img src={sectionimg5} className='img-fluid imgRounded' />
            </div>
          </div>
        </Container>
        <div className='imgmobile container-fluid py-5'>
          <img src={sectionimg3} />
        </div>
        <Container>
          <div className='row'>
            <div className='col-lg-6 col-12'>
              <img src={sectionimg6} className='img-fluid imgRounded' />
            </div>
            <div className='col-lg-6 col-12 pt-4 pt-lg-5 p-0 ps-lg-5'>
              <div className='manyp'>
                <img src={sectionimg7} className='pt-3' />
                <h1 className='Many fw-bold'>
                  2D Measurements Of Per Drawing
                </h1>
              </div>
              <div className='btnmore'>
                <button className='explore fw-bold my-4 rounded fs-5'>
                  View More
                </button>
              </div>
            </div>

          </div>
        </Container>
        <div className=' imgmobile container-fluid py-5 text-end'>
          <img src={sectionimg3} />
        </div>
        <Container>
          <div className='row'>
            <div className='col-lg-6 col-12 order-last order-lg-first   p-0 pt-lg-5 text-end pe-lg-5 '>
              <div className='manyp'>
                <img src={sectionimg9} className='pt-3' />
                <h1 className='Many fw-bold'>
                  Material List For Cost Calculation Of Furniture
                </h1>
              </div>
              <div className='btnmore'>
                <button className='explore fw-bold my-4 rounded fs-5'>
                  View More
                </button>
              </div>
            </div>
            <div className='col-lg-6 col-12  order-first order-lg-last'>
              <img src={sectionimg8} className='img-fluid imgRounded' />
            </div>
          </div>
        </Container>
        <div className=' imgmobile container-fluid'>
          <img src={sectionimg3} />
        </div>
        <Container>
          <div className='row'>
            <div className='col-lg-6 col-12 '>
              <img src={sectionimg10} className='img-fluid imgRounded' />
            </div>
            <div className='col-lg-6 col-12 p-0 pt-3 pt-lg-5 ps-lg-5'>
              <div className='manyp'>
                <img src={sectionimg11} className='pt-3' />
                <h1 className='Many fw-bold'>
                  Get Daily Latest Designs Updates
                </h1>
              </div>
              <div className='btnmore'>
                <button className='explore fw-bold my-4 rounded fs-5'>
                  View More
                </button>
              </div>
            </div>

          </div>
        </Container>
        <div className='container-fluid imgmobile pt-3 text-end'>
          <img width="150px" src={sectionimg3} />
        </div>
      </section>
      <div className='section3h'>
        <section className='bacgroundsection3'>
          <Container className='section3'>
            <h1 className='Designs'>
              Designs That Define You
            </h1>
            <div className='imgsection3'>
              <img src={section3img} className='img-fluid' />
            </div>
          </Container>
        </section>
      </div>
      <div className='container-fluid imgmobile pt-5 mt-5'>
        <img src={sectionimg3} />
      </div>
      <div className='container-fluid pt-5 pb-5 mb-3'>
        <h1 className='text-center fw-bold'>Explore Categories</h1>
        <div className='slider'>
          <Slider {...settings}>
            
            <Card >
              <img src={Cardimg} className='img-fluid' />
              <h5 className="fw-semibold fs-6 text-center py-3">
                Wardrobe Designs
              </h5>
            </Card>
            <Card >
              <img src={Cardimg} className='img-fluid' />
              <h5 className="fw-semibold fs-6 text-center py-3">
                Wardrobe Designs
              </h5>
            </Card>
            <Card >
              <img src={Cardimg} className='img-fluid' />
              <h5 className="fw-semibold fs-6 text-center py-3">
                Wardrobe Designs
              </h5>
            </Card>
            <Card >
              <img src={Cardimg} className='img-fluid' />
              <h5 className="fw-semibold fs-6 text-center py-3">
                Wardrobe Designs
              </h5>
            </Card>
            <Card >
              <img src={Cardimg} className='img-fluid' />
              <h5 className="fw-semibold fs-6 text-center py-3">
                Wardrobe Designs
              </h5>
            </Card>
          </Slider>
        </div>
        <div className='text-center mt-5'>
          <button className='explore fw-bold mt-5 px-5 rounded fs-5'>
            See All
          </button>
        </div>
      </div>
      <Tabbing />
      <Footre />
    </>
  )
};
export default App;