import type { CSSProperties, ReactEventHandler } from 'react'

export interface ResponsiveImageData {
  width: number
  height: number
  avifSrcSet: string
  webpSrcSet: string
  src: string
}

interface ResponsiveImageProps {
  image: ResponsiveImageData
  alt: string
  sizes: string
  className?: string
  loading?: 'lazy' | 'eager'
  fetchPriority?: 'high' | 'low' | 'auto'
  style?: CSSProperties
  onError?: ReactEventHandler<HTMLImageElement>
}

export function ResponsiveImage({
  image,
  alt,
  sizes,
  className,
  loading = 'lazy',
  fetchPriority = 'auto',
  style,
  onError,
}: ResponsiveImageProps) {
  return (
    <picture>
      <source type="image/avif" srcSet={image.avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={image.webpSrcSet} sizes={sizes} />
      <img
        src={image.src}
        width={image.width}
        height={image.height}
        alt={alt}
        className={className}
        loading={loading}
        fetchPriority={fetchPriority}
        style={style}
        onError={onError}
      />
    </picture>
  )
}
