type FrameProps = {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

// Narrow white mat with a soft shadow, no frame.
export default function Frame({
  src,
  alt,
  width,
  height,
  className = '',
}: FrameProps) {
  return (
    <div
      className={`bg-mat p-2 shadow-[0_18px_36px_-20px_rgb(0_0_0/0.6)] sm:p-3 ${className}`}
    >
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading="lazy"
        className="block h-auto w-full"
      />
    </div>
  )
}
