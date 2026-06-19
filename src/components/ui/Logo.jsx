import { cn } from "@/lib/cn"

const Logo = ({ classNames, onClick, label }) => {
  return (
    <a
      className={cn(
        "-m-1.5 p-1.5 text-xl font-bold cursor-pointer",
        classNames,
      )}
      onClick={onClick}
    >
      {label}
    </a>
  )
}

export default Logo
