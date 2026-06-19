const Signup = () => {
  return (
    <div className="w-full bg-[#765B00]">
      <div className="p-4 xl:px-0 max-w-6xl min-h-40 mx-auto flex items-center flex-col md:flex-row justify-between text-white space-y-4">
        <div className="w-full space-y-2">
          <p className="text-center md:text-left font-semibold">
            Join the Coffee Club
          </p>
          <p className="text-center md:text-left">
            Get exclusive access to limited-edition beans and brewing tips.
          </p>
        </div>

        <div className="flex items-center justify-between ">
          <div className="bg-white">
            <input
              type="text"
              placeholder="Your email address"
              className="w-max h-10 md:h-15 px-4 text-black outline-0"
            />
          </div>
          <div className="px-4 w-max h-10 md:h-15 flex items-center justify-center bg-[#241A00] font-semibold cursor-pointer">
            Sign Up
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup
