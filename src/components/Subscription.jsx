import Container from "@/components/ui/Container"
import SectionHeader from "@/components/ui/SectionHeader"

const Subscription = () => {
  return (
    <div className="py-6 bg-[#FFFFFF] space-y-5">
      <Container>
        <div className="flex flex-col md:flex-row items-center justify-between md: space-y-5">
          <SectionHeader className="text-[#494551]">
            <p className="text-left font-semibold">Never Run Out Again</p>
            <p className="text-left">
              Tailor your caffeine intake with our flexible subscription <br />
              plans. Change, pause, or cancel anytime with a single click.
            </p>
          </SectionHeader>
          <div className="p-2 w-full min-w-sm: max-w-xs flex flex-row justify-between gap-2 bg-[#ECE6EE] rounded-lg border-[#CBC4D2] border">
            <span className="px-8 py-2 bg-[#FFFFFF] text-[#1D1B20] rounded-lg shadow cursor-pointer">
              Monthly
            </span>
            <span className="px-4 py-2 text-[#494551] rounded-lg cursor-pointer">
              Yearly (Save 15%)
            </span>
          </div>
        </div>
      </Container>

      <Container>
        <div className="w-full flex flex-col md: md:flex-row items-center justify-between gap-5 xl:gap-10">
          {/* Card 1 */}
          <div className="px-6 py-10 w-full md:h-[472px]bg  -[#F8F2FA] border-[#CBC4D2] rounded-md border shadow">
            <div className="md:h-97.5 flex flex-col justify-between gap-5">
              <div className="space-y-5">
                <div className="">
                  <p>The Enthusiast</p>
                  <p>
                    <span className="text-2xl font-bold">$24</span> /month
                  </p>
                </div>

                <ul className="space-y-4">
                  <li>2 x 250g Bags / Month</li>
                  <li>Rotating SIngle Origin</li>
                  <li>Free Shipping</li>
                </ul>
              </div>
              <div className="w-full h-14.5 flex items-center justify-center text-[#765B00] border-[#765B00] border cursor-pointer">
                Select Plan
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className="relative px-6 py-10 w-full md:h-[495.6px] bg-[#1D1B20] text-[#FDF7FF] border-[#CBC4D2] rounded-md border shadow">
            <span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[148.87px] h-[25.2px] bg-[#765B00] font-bold text-center rounded-full">
              MOST POPULAR
            </span>
            <div className="h-full flex flex-col justify-between gap-5">
              <div className="space-y-5">
                <div className="">
                  <p>The Roaster's Choice</p>
                  <p>
                    <span className="text-2xl font-bold">$42</span> /month
                  </p>
                </div>

                <ul className="space-y-4">
                  <li>4 x 250g Bags / Month</li>
                  <li>Exclusive Small Batch Access</li>
                  <li>Brewing Guide Zine</li>
                  <li>Priority Shipping</li>
                </ul>
              </div>
              <div className="w-full h-14.5 flex items-center justify-center bg-[#765B00] cursor-pointer">
                Start Subscription
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className="px-6 py-10 w-full md:h-[472px] bg-[#F8F2FA] border-[#CBC4D2] rounded-md border shadow">
            <div className="md:h-97.5 flex flex-col justify-between gap-5">
              <div className="space-y-5">
                <div className="">
                  <p>Office Ritualt</p>
                  <p>
                    <span className="text-2xl font-bold">$85</span> /month
                  </p>
                </div>

                <ul className="space-y-4">
                  <li>5kg Bulk Whole Bean</li>
                  <li>Custom Roast Profile</li>
                  <li>Dedicated Support</li>
                </ul>
              </div>
              <div className="w-full h-14.5 flex items-center justify-center text-[#765B00] border-[#765B00] border cursor-pointer">
                Select Plan
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Subscription
