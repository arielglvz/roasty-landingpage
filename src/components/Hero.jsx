import { BackgroundImg } from "@/assets/imgs"
import { Button } from "@/components/ui/Button"
import Container from "@/components/ui/Container"
import { FaArrowRight } from "react-icons/fa"

const Hero = () => {
  return (
    <div
      className="h-screen w-full flex items-center justify-start bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${BackgroundImg})`,
      }}
    >
      <Container classNames="px-4">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-2 text-base text-white">
            <p className="text-[#FFDF93] tracking-widest">
              EST. 2012 • SMALL BATCH
            </p>
            <p>The Soul of the Bean, Roasted for the Bold.</p>
            <p className="w-min-sm max-w-md">
              Experience the complex notes of high-altitude harvests,
              meticulously roasted in small batches to preserve every drop of
              character.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5 text-white">
            <Button classNames="gap-2 bg-[#765B00]">
              Shop the collection <FaArrowRight className="leading-normal" />
            </Button>
            <Button classNames="border-white/50 border">Our Story</Button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Hero
