import { cn } from "@/lib/cn"

const Container = ({ classNames, children }) => {
  return (
    <div className={cn("w-full max-w-6xl mx-auto", classNames)}>{children}</div>
  )
}

export default Container
