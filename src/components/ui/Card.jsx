import { cn } from "@/lib/cn"

const Card = ({ image, alt, className, children }) => {
  return (
    <div className={cn("w-full flex-1 group overflow-hidden", className)}>
      {image && (
        <img
          src={image}
          className="w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
          alt={alt}
        />
      )}
      {children}
    </div>
  )
}

export default Card
