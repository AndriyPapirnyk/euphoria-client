'use client'
import './page.scss';
import Image from "next/image";
import sliderNext from "../../public/icons/sliderNext.png";
import sliderPrev from "../../public/icons/sliderPrev.png";
import { useRef, useState } from 'react';

interface SliderContent {
  subtitle: string;
  title: string;
  p?: string;
  buttonText: string;
}

const Home: React.FC = () => {

  const pagination =  useRef<HTMLDivElement>(null);
  const [sliderPage, setSliderPage] = useState<number>(0);

  const slider: SliderContent[] = [{
    subtitle: 'T-shirt / Tops',
    title: 'Summer Value Pack',
    p: 'cool / colorful / comfy',
    buttonText: 'Shop Now',
  },{
    p: 'rah / bad / bitch',
    title: 'Summer Value Pack',
    subtitle: 'Sweatshirt / Hoodies',
    buttonText: 'Shop Now',
  }]

  const hadnlePaginationSliderPage = (e: React.MouseEvent<HTMLImageElement>) => {
    const target = e.target as HTMLDivElement;
    if(target.getAttribute('data-action')){
      if(target.getAttribute('data-action') == 'prev'){
        if(sliderPage !== 0){
          setSliderPage(sliderPage - 1);
        }
      }else if(target.getAttribute('data-action') == 'next'){
        if(sliderPage !== slider.length - 1){
          setSliderPage(sliderPage + 1);
        }
      }else if(target.getAttribute('data-action') == '0' || '1'){
        setSliderPage(parseInt(target.getAttribute('data-action') ?? ''));
      }
    }
  }


  return (
    <div className='home'>
      <div className="home__slider" style={{backgroundImage: `url(/background/sliderPage${sliderPage+1}.jpg)`}} onClick={hadnlePaginationSliderPage}>
        <Image data-action='prev' src={sliderPrev} width={30} height={30} alt={'prev'}></Image>
        <div className="home__slider-container">
          {slider.map((item:SliderContent, index:number)=> 
        <div className='home__slider-content' style={{display: sliderPage == index ? 'flex' : 'none'}} key={index}>
          <div>
            <p>{item.subtitle}</p>
            <h1> {item.title}</h1>
            <p>{item.p}</p>
            <button>{item.buttonText}</button>
          </div>
          <div></div>
        </div>
          )}
          <div className='home__slider-paginations' ref={pagination}>
            <div data-action='0' style={{opacity: sliderPage == 0 ? '1' : '0.5'}} className='home__slider-pagination home__slider-pagination_left'></div>
            <div data-action='1' style={{opacity: sliderPage == 1 ? '1' : '0.5'}} className='home__slider-pagination home__slider-pagination_right '></div>
          </div>
        </div>
        <Image  data-action='next' src={sliderNext} width={30} height={30} alt={'next'}></Image>
      </div>
      <div className="home__container">
       
      </div>
    </div>
  )
}

export default Home;