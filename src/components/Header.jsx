import { Button } from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import Logo from "@/components/ui/Logo"
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
  return (
    <header className="py-6 px-4 bg-white">
      <Container>
        <nav className="flex items-center justify-between">
          {/* Logo */}
          <Logo label="Bean & Brew" />

          {/* Nav (desktop) */}
          <ul className="hidden md:flex gap-6 text-gray-700">
            <li className="text-[#765B00] font-bold cursor-pointer">
              <a href="#">Roastery</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Process</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Subscription</a>
            </li>
            <li className="cursor-pointer">
              <a href="#">Visit Us</a>
            </li>
          </ul>

          {/* CTA Button */}
          <Button classNames="w-[162.17px] h-12 hidden md:flex items-center justify-center text-white bg-[#765B00]">
            Get in Touch
          </Button>

          <GiHamburgerMenu className="md:hidden" size={25} />
        </nav>
      </Container>
    </header>
  )
}

export default Header
