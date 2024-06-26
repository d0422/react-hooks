import useCarousel from '@/useCarousel/useCarousel';
import React from 'react';
import { carouselDiv, carouselImage, carouselWrapper, wrapper } from './Carousel.css';

export default function Carousel() {
  const images = [
    'https://i.namu.wiki/i/8BAuDmjlFbHoGpGTyTUJyeIsrWw7vrGKTvbOBS1DbaLNHHFL6D05TSZEyVGGffn_RIs6zrf4jCb5Xq5Lnbs8QQ.webp',
    'https://cdn.topstarnews.net/news/photo/202208/14724511_938042_3651.jpg',
    'https://image.xportsnews.com/contents/images/upload/article/2023/0825/mb_1692925582785123.jpg',
    'https://cdn.entermedia.co.kr/news/photo/202210/30302_58507_3849.jpg',
  ];
  const { next, prev, CarouselWrapper, ref, isEnd, isStart } = useCarousel(images.length);

  return (
    <div className={wrapper}>
      <button onClick={prev} disabled={isStart}>
        &lt;
      </button>
      <CarouselWrapper ref={ref} className={carouselWrapper}>
        {images.map((image) => (
          <div key={image} className={carouselDiv}>
            <img src={image} className={carouselImage} />
          </div>
        ))}
      </CarouselWrapper>
      <button onClick={next} disabled={isEnd}>
        &gt;
      </button>
    </div>
  );
}
