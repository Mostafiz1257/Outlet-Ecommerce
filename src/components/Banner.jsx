import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';

// import img1 from '../../src/assets/home/1.png'
import img4 from '../../src/assets/home/1.jpg'
import img3 from '../../src/assets/home/2.png'
import img2 from '../../src/assets/home/3.jpeg'
import img1 from '../../src/assets/home/4.jpg'
const Banner = () => {
    return (
        <Carousel>
        <div>
            <img src={img4} />
        </div>
        <div>
            <img src={img2} />
        </div>
        <div>
            <img src={img3} />
        </div>
        <div>
            <img src={img1} />
        </div>
        {/* <div>
            <img src={img5} />
        </div> */}
        
        
    </Carousel>
    );
};

export default Banner;