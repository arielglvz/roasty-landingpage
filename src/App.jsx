import { GiHamburgerMenu } from "react-icons/gi"
import { FaArrowRight } from "react-icons/fa"
import { RiMapPin2Line, RiCupLine } from "react-icons/ri"
import { FaArrowRightLong } from "react-icons/fa6"
import { MdAccessTime } from "react-icons/md"
import { GrShareOption } from "react-icons/gr"
import BackgroundImg from "./assets/bg-coffee.jpeg"
import AboutImg1 from "./assets/about-img1.jpg"
import AboutImg4 from "./assets/about-img4.jpg"
import VisitUs from "./assets/visitus.jpg"
import "./App.css"

function App() {
  return (
    <div className="bg-[#FDF7FF]">
      <header className="w-full max-w-6xl h-20 flex items-center justify-between mx-auto px-4">
        {/* Logo */}
        <div className="text-xl font-bold">Bean & Brew</div>

        {/* Nav (desktop) */}
        <nav className="hidden md:block">
          <ul className="flex gap-6 text-gray-700">
            <li className="text-[#765B00] font-bold cursor-pointer">
              Roastery
            </li>
            <li className="cursor-pointer">Process</li>
            <li className="cursor-pointer">Subscription</li>
            <li className="cursor-pointer">Visit Us</li>
          </ul>
        </nav>

        {/* CTA Button */}
        <div className="w-[162.17px] h-12 hidden md:flex items-center justify-center text-white bg-[#765B00] border">
          <a href="#">Get in Touch</a>
        </div>

        <GiHamburgerMenu className="md:hidden" size={25} />
      </header>

      {/* Hero */}
      <div
        className="md:px-0 h-screen w-full flex items-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${BackgroundImg})`,
        }}
      >
        <div className="px-4 w-full max-w-6xl mx-auto">
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
              <div className="px-6 py-4 w-full md:w-max flex flex-row items-center justify-center gap-2 bg-[#765B00] cursor-pointer">
                Shop the collection
                <FaArrowRight className="leading-normal" />
              </div>
              <div className="px-6 py-4 w-full md:w-max flex items-center justify-center border-white/50 border cursor-pointer">
                Our Story
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Process */}
      <div className="min-h-screen w-full lg:max-w-6xl mx-auto">
        <div className="py-15 w-full mx-auto text-center space-y-2 text-base">
          <p className="font-semibold">From Soil to Sip</p>
          <p>
            Our four-pillar philosophy ensures that every bag we ship meets our
            uncompromising standards of excellence.
          </p>
        </div>

        <div className="px-4 xl:px-0 w-full flex flex-col md:grid md:grid-cols-6 gap-4">
          {/* About 1 */}
          <div
            className="p-4 w-full bg-cover bg-center bg-no-repeat col-span-4 flex items-end rounded-sm shadow"
            style={{
              backgroundImage: `url(${AboutImg1})`,
            }}
          >
            <div className="px-6 py-5 flex flex-col w-xs text-white space-y-1.5">
              <p className="text-[#FFDF93]">Pillar 01</p>
              <p>Ethical Sourcing</p>
              <p>
                We partner directly with farmers in Ethiopia and Colombia,
                ensuring fair wages and sustainable harvesting practices.
              </p>
            </div>
          </div>

          {/* About 2 */}
          <div className="px-6 py-5 w-full col-start-5 col-end-7 rounded-sm bg-[#F8F2FA] shadow">
            <div className="flex flex-col max-w-[280.67px] text-base text-[#1D1B20] space-y-1.5">
              <p className="text-[#765B00]">Pillar 02</p>
              <p>Precision Roasting</p>
              <p>
                Using state-of-the-art thermal monitoring, we find the exact
                'crack' point for each unique bean profile.
              </p>
            </div>
          </div>

          {/* About 3 */}
          <div className="p-4 w-full col-start-1 col-end-3 rounded-sm bg-[#765B00] shadow">
            <div className="px-6 py-5 flex flex-col max-w-[282.67px] text-white space-y-1.5">
              <p className="text-[#FFDF93]">Pillar 03</p>
              <p>Daily Cupping</p>
              <p>
                Every batch is tasted by our certified Q-graders to guarantee
                flavor consistency and notes accuracy.
              </p>
            </div>
          </div>

          {/* About 4 md:h-75  */}
          <div
            className="p-4 w-full bg-cover bg-center bg-no-repeat col-start-3 col-end-7 flex items-center rounded-sm shadow"
            style={{
              backgroundImage: `url(${AboutImg4})`,
            }}
          >
            <div className="px-6 py-5 flex flex-col max-w-sm text-white space-y-1">
              <p className="text-[#FFDF93]">Pillar 04</p>
              <p>Freshness Guaranteed</p>
              <p>
                We roast and ship on the same day. Your coffee never sits on a
                warehouse shelf.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Subscription */}
      <div className="min-h-screen w-full bg-[#FFFFFF] mx-auto">
        <div className="py-6 px-4 xl:px-0 max-w-6xl mx-auto ">
          <div className="text-base">
            <div className="py-10 flex flex-col md:flex-row items-center justify-between space-y-5">
              <div className="max-w-xl text-center md:text-left text-[#494551] space-y-4">
                <p className="font-semibold">Never Run Out Again</p>
                <p>
                  Tailor your caffeine intake with our flexible subscription
                  plans. Change, pause, or cancel anytime with a single click.
                </p>
              </div>
              <div className="p-2 w-full min-w-sm: max-w-xs flex flex-row justify-between gap-2 bg-[#ECE6EE] rounded-lg border-[#CBC4D2] border">
                <span className="px-8 py-2 bg-[#FFFFFF] text-[#1D1B20] rounded-lg shadow cursor-pointer">
                  Monthly
                </span>
                <span className="px-4 py-2 text-[#494551] rounded-lg cursor-pointer">
                  Yearly (Save 15%)
                </span>
              </div>
            </div>
          </div>

          <div className="py-6 px-4 md:px-0">
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
          </div>
        </div>
      </div>

      {/* Visit Us */}
      <div className="min-h-screen w-full bg-[#FDF7FF] flex items-center justify-center mx-auto">
        <div className="px-4 xl:px-0 w-full max-w-6xl lg:h-128 flex-col flex md:flex-row md:justify-between mx-auto sm:rounded-xl text-[14px] overflow-hidden sm:shadow">
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
              src={VisitUs}
              className="w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out"
              alt="visit us image"
            />
          </div>
        </div>
      </div>

      {/* Signup */}
      <div className="w-full bg-[#765B00]">
        <div className="p-4 xl:px-0 max-w-6xl min-h-40 mx-auto flex items-center flex-col md:flex-row justify-between text-white space-y-4">
          <div className="text-center space-y-2">
            <p className="font-semibold">Join the Coffee Club</p>
            <p>
              Get exclusive access to limited-edition beans and brewing tips.
            </p>
          </div>

          <div className="flex items-center justify-between ">
            <div className="bg-white">
              <input
                type="text"
                placeholder="Your email address"
                className="h-14.5 md:h-20 px-4 text-black outline-0"
              />
            </div>
            <div className="w-[105.19px] h-14.5 md:h-20 flex items-center justify-center bg-[#241A00] font-semibold cursor-pointer">
              Sign Up
            </div>
          </div>
        </div>
      </div>

      <footer className="p-4 w-full bg-white">
        <div className="p-4 xl:px-0 max-w-6xl min-h-40 mx-auto flex items-center flex-col md:flex-row justify-between text-center gap-4">
          <div className="space-y-4 md:text-left">
            <p className="font-bold">Bean & Brew</p>
            <p>
              © 2024 Freelance Multi-Industry <br />
              Solutions. All rights reserved.
            </p>
          </div>

          <ul className="flex flex-row items-center gap-4">
            <li className="text-[#494551] cursor-pointer">Privacy Policy</li>
            <li className="text-[#494551] cursor-pointer">Terms of Service</li>
            <li className="text-[#494551] cursor-pointer">Contact</li>
            <li className="text-[#494551] cursor-pointer">Case Studies</li>
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
    </div>
  )
}

export default App
