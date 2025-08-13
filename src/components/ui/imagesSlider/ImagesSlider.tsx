import { Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

// eslint-disable-next-line import/extensions
import 'swiper/css'
// eslint-disable-next-line import/extensions
import 'swiper/css/navigation'
// eslint-disable-next-line import/extensions
import 'swiper/css/pagination'

import styles from './ImagesSlider.module.scss'
type Props = {
  images: any
}

export const ImagesSlider = ({ images }: Props) => {
  if (!Array.isArray(images)) {
    return null
  }
  if (images.length > 1) {
    return (
      <Swiper
        width={234}
        height={234}
        modules={[Navigation, Pagination]}
        spaceBetween={10}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {images.map((img, i) => (
          <SwiperSlide key={img.url ?? i}>
            <img src={img.url!} alt={`Post image`} />
          </SwiperSlide>
        ))}
      </Swiper>
    )
  }
  if (images.length === 1) {
    return <img src={images[0].url!} alt={'Post image'} className={styles.image} />
  }

  return null
}
