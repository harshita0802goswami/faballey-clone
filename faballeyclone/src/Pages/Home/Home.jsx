import Banner from "../../Components/Landing/Banner";
import Navbar from "../../Components/Navbar/Navbar";
import Trending from "../../Components/Landing/Trending";
import SingleImg from "../../Components/Landing/SingleImg";
import ImageSet from "../../Components/Landing/ImageSet";
import CalltoAction from "../../Components/Landing/CalltoAction";
import ProductCarousel from "../../Components/Landing/ProductCarousel";
import InstaShop from "../../Components/Landing/InstaShop";
import { useState } from "react";
import Scroll2Top from "../../Components/Scroll2Top/Scroll2Top";
import Chatbot from "../../Components/ChatBot/Chatbot";

const Home = ()=>{
    const [visible, setVisible] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 300){
          setVisible(true)
        } 
        else if (scrolled <= 300){
          setVisible(false)
        }
      };

      window.addEventListener('scroll', toggleVisible);

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
              slidesToShow: 2,
              slidesToScroll: 2,
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
        <div style={{zIndex:'1',marginBottom:'3%'}}>
            
            <Banner />
            <Trending />
            <SingleImg title='HOT RIGHT NOW' url='https://img.faballey.com/images/banner/13261f57-0431-4ccc-965c-6eeb9aaf64fd.jpg'/>
            <SingleImg title='NEW ARRIVALS' url='https://img.faballey.com/images/banner/3786cbe6-2824-41f7-ab47-c05038516265.jpg'/>
            <ProductCarousel />
            <InstaShop />
            <ImageSet 
                title="DEALS YOU DON'T WANT TO MISS"
                classname='dealsImg'
                images={[
                    'https://img.faballey.com/images/banner/c1ec67b2-6310-446d-bcd2-236656309955.jpg',
                    'https://img.faballey.com/images/banner/e5422ac4-865e-4fe0-9dbf-2d0672a31913.jpg',
                    'https://img.faballey.com/images/banner/05b3e299-7f6f-4d3a-9a1a-b2b96ea76018.jpg',
                    'https://img.faballey.com/images/banner/112420fc-fcae-4ea4-962a-cf35c7e536c3.jpg',
                    'https://img.faballey.com/images/banner/f57cfdc2-3ac2-4e29-ae04-4a7094796d56.jpg'
                ]}
            />
            <CalltoAction />
            <ImageSet 
                title="IN THE SPOTLIGHT"
                classname='spotlightImg'
                images={[
                    'https://img.faballey.com/images/banner/1db6a74c-8cfe-47dd-89ad-41d95c1d0a27.jpg',
                    'https://img.faballey.com/images/banner/10b0d460-96d8-47e1-b80d-a92d19b5c179.jpg',
                    'https://img.faballey.com/images/banner/119b9e37-e8bc-4bd6-a05c-b26192949c72.jpg',
                    'https://img.faballey.com/images/banner/d83b6a05-93aa-46e8-98c0-93e80ad920b2.jpg',
                    'https://img.faballey.com/images/banner/4235acd0-54d2-442e-b113-604106143286.jpg',
                    'https://img.faballey.com/images/banner/8f65246f-da1d-4191-93f1-a8a278d4cc52.jpg'
                ]}
            />

            <div style={{marginTop: '10px'}}>
            <SingleImg title='' url='https://img.faballey.com/images/banner/33b3c025-eea0-4efc-85ff-f6c534be8fbf.jpg'/>
            </div>

            <ImageSet 
                title="EXPLORE MORE"
                classname='exploreImg'
                para="Invest in trends you'll wear on repeat"
                images={[
                    'https://img.faballey.com/images/banner/8b737eb9-8b69-4613-aaf6-80534b3270bd.jpg',
                    'https://img.faballey.com/images/banner/83694101-251c-43b8-b0e3-bfb852a1fb55.jpg',
                    'https://img.faballey.com/images/banner/1542622f-efee-4e6f-84d2-5c88a941476f.jpg',
                    'https://img.faballey.com/images/banner/09985e07-ed9e-4fe9-9d3c-fcba8ac200a6.jpg'
                ]}
            > <p className='titlePara'>Invest in trends you'll wear on repeat</p> </ImageSet>
            {visible?<Scroll2Top/>:""}
            <Chatbot/>
        </div>
    )
}

export default Home;