import AboutImg from '../assets/about.webp'

function AboutUs() {
  return (
    <div id="about" className='w-[90vw] mx-auto flex flex-col lg:flex-row py-10 border-b-2 border-slate-200'>
        <div className='about-image w-1/2'>
            <img className=' pt-20' src={AboutImg} alt="" />
        </div>
        <div className='w-1/2 pt-36'>
            <h3 className='text-slate-500 font-semibold '>About Kabir Enterprises</h3>
            <p className='py-10 lg:w-[600px]'>At Kabir Enterprises, we pride ourselves on being a comprehensive provider of diverse services and products, designed to meet the varied needs of our community. Our journey began with a vision to offer high-quality, convenient, and reliable solutions across multiple sectors, all under one roof.</p>

            <h3 className='text-slate-500 font-semibold '>Our Mission</h3>
            <p className='py-10 lg:w-[600px]'>Our mission is to enhance the quality of life for our customers by offering a wide array of products and services that are accessible, affordable, and reliable. We are committed to providing exceptional customer service and fostering a welcoming environment for all who visit us.</p>

            <h3 className='text-slate-500 font-semibold '>Our Vision</h3>
            <p className='py-10 lg:w-[600px]'>Our vision is to be a leading provider of diverse services and products, recognized for our commitment to quality, innovation, and customer satisfaction.</p>
        </div>
    </div>
  )
}

export default AboutUs