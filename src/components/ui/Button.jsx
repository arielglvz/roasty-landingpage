import { cn } from "@/lib/cn"

export const Button = ({ classNames, children }) => {
  const base =
    "px-6 py-3 flex flex-row items-center justify-center cursor-pointer"

  return <button className={`${cn(base, classNames)} `}>{children}</button>
}
