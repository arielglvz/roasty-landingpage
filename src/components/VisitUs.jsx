import { RiMapPin2Line } from "react-icons/ri"
import { FaArrowRightLong } from "react-icons/fa6"
import { MdAccessTime } from "react-icons/md"
import { VisitUsImg } from "@/assets/imgs"
import Container from "@/components/ui/Container"

const VisitUs = () => {
  return (
    <div className="min-h-screen w-full bg-[#FDF7FF] flex items-center justify-center mx-auto">
      <Container>
        <div className="lg:h-128 flex-col flex md:flex-row md:justify-between mx-auto sm:rounded-xl text-[14px] overflow-hidden sm:shadow">
          {/* Left */}
          <div className="p-6 w-full flex-1 flex items-center justify-center bg-[#ECE6EE]">
            <div className="w-md h-96 flex flex-col justify-between">
              <p className="font-semibold">Experience the Aroma</p>
              <p>
                Our flagship roastery and tasting room is located in the heart
                of the historic district. Watch the roasting process while you
                enjoy a perfect pour-over.
              </p>

              <ul className="space-y-4">
                <li className="flex items-start gap-2 text-[#494551]">
                  <RiMapPin2Line className="text-[#765B00]" />
                  <div className="">
                    <p>Address</p>
                    <p>124 Artisans Lane, Seattle, WA 98101</p>
                  </div>
                </li>
                <li className="flex items-start gap-2 text-[#494551]">
                  <MdAccessTime className="text-[#765B00]" />
                  <div className="">
                    <p>Hours</p>
                    <p>Mon-Fri: 7am - 4pm</p>
                    <p>Sat-Sun: 8am - 6pm</p>
                  </div>
                </li>
              </ul>

              <div className="w-[192.56px] h-12 flex items-center justify-center text-[#FDF7FF] bg-[#1D1B20] text-base gap-3 cursor-pointer">
                <p>Get Directions</p>
                <FaArrowRightLong className="text-sm -rotate-45" />
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="w-full flex-1 group overflow-hidden">
            <img
              src={VisitUsImg}
              className="w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
              alt="visit us image"
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default VisitUs
