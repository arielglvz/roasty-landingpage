import { cn } from "@/lib/cn"

const SectionHeader = ({ classNames, children }) => {
  return (
    <div className={cn("w-full text-center text-base space-y-2", classNames)}>
      {children}
    </div>
  )
}

export default SectionHeader
