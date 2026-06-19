import { cn } from "@/lib/cn"

const Container = ({ classNames, children }) => {
  return (
    <div className={cn("w-full max-w-6xl mx-auto px-4", classNames)}>
      {children}
    </div>
  )
}

export default Container
