import { useState } from 'react'
import './PlaceholderImage.css'

function PlaceholderImage({ src, alt = '', className = '', label = 'IMAGE' }) {
  const [loaded, setLoaded] = useState(false)
  const [failed, setFailed] = useState(!src)

  const showImage = Boolean(src) && loaded && !failed

  return (
    <div className={`placeholder-slot ${className}`.trim()}>
      {!showImage && (
        <div className="placeholder-image" role="img" aria-label={alt || label}>
          <span>{label}</span>
        </div>
      )}
      {src && !failed && (
        <img
          src={src}
          alt={alt}
          className={`placeholder-photo ${showImage ? 'placeholder-photo--visible' : ''}`}
          onLoad={() => setLoaded(true)}
          onError={() => setFailed(true)}
        />
      )}
    </div>
  )
}

export default PlaceholderImage
