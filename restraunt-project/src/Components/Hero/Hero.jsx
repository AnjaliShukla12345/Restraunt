import vict from '../../images/vict.png'



const Hero = () => {
  return (
    <>
      <div className='container grid grid-cols-1 md:grid-cols-2  gap-8 min-h-[500px]'>
        {/* text section */}
        <div className='flex flex-col  justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10'>
            <h1 className='text-4xl lg:text-5xl font-semibold'>Delicious Food Is Waiting For You!</h1>


            <p className=''></p>
        <div className='flex gap-4 items-center md:justify-start justify-center'>


            <button className='primary-btn bg-primary text-white font-bold px-4 py-2  rounded-full  hover:scale-105 duration-200'>Food Menu</button>
            <button className='secondary-btn  bg-gray-300  font-bold px-4 py-2  rounded-full text-black hover:scale-105 duration-200'>Book Table</button>
        </div>


        </div>

        {/* image section */}
        <div className='flex flex-col justify-center'>
            <img src={vict}  className='animate-spin-slow img-shadow w-[500px] mx-auto '/>
        </div>

      </div>
    </>
  )
}

export default Hero
