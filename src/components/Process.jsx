import { AboutImg1, AboutImg4 } from "@/assets/imgs"
import Card from "@/components/ui/Card"
import SectionHeader from "@/components/ui/SectionHeader"

const Process = () => {
  return (
    <div className="min-h-screen w-full lg:max-w-6xl mx-auto">
      <SectionHeader classNames="py-15 px-4 md:px-0 max-w-xl mx-auto">
        <p className="font-semibold">From Soil to Sip</p>
        <p>
          Our four-pillar philosophy ensures that every bag we ship meets our
          uncompromising standards of excellence.
        </p>
      </SectionHeader>

      <div
        className="py-6 px-4 xl:px-0 w-full
  flex flex-col
  md:grid md:grid-cols-4
  md:grid-rows-[150px_150px_150px_150px]
  gap-2"
      >
        {/* Card 1 */}
        <Card className="group relative w-full md:col-span-3 md:row-span-2 rounded-sm shadow">
          <img
            src={AboutImg1}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="relative z-10 px-6 py-5 flex flex-col w-xs text-white space-y-1.5">
            <p className="text-[#FFDF93]">Pillar 01</p>
            <p>Ethical Sourcing</p>
            <p>
              We partner directly with farmers in Ethiopia and Colombia,
              ensuring fair wages and sustainable harvesting practices.
            </p>
          </div>
        </Card>

        {/* Card 2 */}
        <Card className="group relative w-full md:col-span-1 md:row-span-2 rounded-sm bg-[#F8F2FA] border-[#CBC4D2] border shadow">
          <div className="px-6 py-5 flex flex-col max-w-[280.67px] text-base text-[#1D1B20] space-y-1.5">
            <p className="text-[#765B00]">Pillar 02</p>
            <p>Precision Roasting</p>
            <p>
              Using state-of-the-art thermal monitoring, we find the exact
              'crack' point for each unique bean profile.
            </p>
          </div>
        </Card>

        {/* Card 3 */}
        <Card className="group relative w-full md:col-span-1 md:row-span-2 rounded-sm bg-[#4F378A] shadow">
          <div className="px-6 py-5 flex flex-col max-w-[282.67px] text-white space-y-1.5">
            <p className="text-[#FFDF93]">Pillar 03</p>
            <p>Daily Cupping</p>
            <p>
              Every batch is tasted by our certified Q-graders to guarantee
              flavor consistency and notes accuracy.
            </p>
          </div>
        </Card>

        {/* Card 4 */}
        <Card className="group relative w-full md:col-span-3 md:row-span-2 rounded-sm shadow">
          <img
            src={AboutImg4}
            alt=""
            className="absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-110"
          />
          <div className="relative z-10 px-6 py-5 flex flex-col max-w-sm text-white space-y-1">
            <p className="text-[#FFDF93]">Pillar 04</p>
            <p>Freshness Guaranteed</p>
            <p>
              We roast and ship on the same day. Your coffee never sits on a
              warehouse shelf.
            </p>
          </div>
        </Card>
      </div>
    </div>
  )
}

export default Process
