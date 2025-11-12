import React, { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'

// Importar estilos do Swiper
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'
import './Gallery.css'

export default function Gallery() {
  const [imageErrors, setImageErrors] = useState({})

  const galleryImages = [
    {
      src: '/images/gallery/gato1.jpg',
      alt: 'Dra. Rayssa com paciente felino',
      caption: 'Cuidado especializado em felinos',
      className: ''
    },
    {
      src: '/images/gallery/gato2.jpg',
      alt: 'Atendimento veterinário humanizado',
      caption: 'Cada pet merece atenção individual',
      className: ''
    },
    {
      src: '/images/gallery/cachorra.jpg',
      alt: 'Dra. Rayssa com sua cachorra',
      caption: 'Amor e profissionalismo',
      className: 'image-cachorra'
    },
    {
      src: '/images/gallery/logo_rayssa.jpg',
      alt: 'Logo Dra. Rayssa Lopes',
      caption: 'Medicina Veterinária de Excelência',
      className: ''
    }
  ]

  const handleImageError = (index) => {
    setImageErrors(prev => ({ ...prev, [index]: true }))
    console.error(`❌ Erro ao carregar: ${galleryImages[index].src}`)
  }

  const handleImageLoad = (index) => {
    console.log(`✅ Imagem carregada: ${galleryImages[index].src}`)
  }

  return (
    <div className="gallery-section">
      <div className="gallery-header">
        <h3>Momentos de Cuidado</h3>
        <p>Veja alguns momentos especiais do nosso trabalho</p>
      </div>

      <Swiper
        modules={[Navigation, Pagination, Autoplay, EffectFade]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ 
          clickable: true,
          dynamicBullets: true
        }}
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
          pauseOnMouseEnter: true
        }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        loop={true}
        speed={800}
        className="gallery-swiper"
      >
        {galleryImages.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="gallery-slide">
              <div className="image-container">
                {imageErrors[index] ? (
                  <div className="image-placeholder-error">
                    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                    <p>Imagem não encontrada</p>
                    <small>{image.src}</small>
                  </div>
                ) : (
                  <>
                    <img 
                      src={image.src} 
                      alt={image.alt}
                      className={image.className}
                      onError={() => handleImageError(index)}
                      onLoad={() => handleImageLoad(index)}
                      loading="lazy"
                    />
                    <div className="image-overlay">
                      <p className="image-caption">{image.caption}</p>
                    </div>
                  </>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="gallery-decoration"></div>
    </div>
  )
}