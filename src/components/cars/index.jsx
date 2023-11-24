import images from '../../assets/hero-home/images.json'
import Models from '../models'

export default function Cars () {
  return (
    <div className='flex flex-col'>
      <section 
        className='p-6 flex flex-col items-center justify-center text-white text-center gap-4' 
        style={{
          backgroundImage: `url(${images[0].url})`,
          filter: blur('8px')
        }}>
        <h1 className='font-extrabold text-2xl text-lime-500'> See the cars we have in stock </h1>
        <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate libero rem </p>
      </section>
      <section>
        <Models></Models>
      </section>
    </div>
  )
}