import Logo from "@/components/ui/Logo"
import { GrShareOption } from "react-icons/gr"
import { RiCupLine } from "react-icons/ri"

const Footer = () => {
  return (
    <footer className="p-4 w-full bg-white">
      <div className="p-4 xl:px-0 max-w-6xl min-h-40 mx-auto flex items-center flex-col md:flex-row justify-between text-center gap-4">
        <div className="space-y-4 md:text-left">
          <Logo label="Bean & Brew" />
          <p>
            © 2024 Freelance Multi-Industry <br />
            Solutions. All rights reserved.
          </p>
        </div>

        <ul className="flex flex-col md:flex-row items-center gap-4">
          <li className="text-[#494551] cursor-pointer">Privacy Policy</li>
          <li className="text-[#494551] cursor-pointer">Terms of Service</li>
          <li className="text-[#494551] cursor-pointer">Contact</li>
          <li className="text-[#494551] w-full max-w-6xl mx-auto cursor-pointer">
            Case Studies
          </li>
        </ul>

        <div className="flex gap-4">
          <span className="p-5 text-[#1D1B20] bg-[#ECE6EE] rounded-lg text-lg cursor-pointer">
            <GrShareOption />
          </span>
          <div className="p-5 text-[#1D1B20] bg-[#ECE6EE] rounded-lg text-lg cursor-pointer">
            <RiCupLine />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
