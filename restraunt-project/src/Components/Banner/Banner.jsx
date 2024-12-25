import chilly from '../../images/chilly.png'



const Banner = () => {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 mdgrid-cols-2 gap-8 ">

    {/* img section  */}
<div className='flex justify-center items-center'>
    <img src={chilly} alt="" />
</div>


{/* text section */}

<div className='flex flex-col justify-center'>
    <h1 className='text-4xl font-semibold'>Food Is Always Good</h1>

    <p className='py-4 font-semibold'>Food is essential for survival, providing energy and nutrients to the body. It brings joy, connects people, and reflects diverse cultures. While food nourishes the body, it also uplifts the spirit through flavors and aromas. Choosing wholesome, balanced meals ensures food remains a source of health, comfort, and happiness for all.{}</p>
</div>



            
        </div>
      </div>
    </>
  )
}

export default Banner
