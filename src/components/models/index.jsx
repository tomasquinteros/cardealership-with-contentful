import Model from "./model"
import image from "../../assets/hero-home/images.json"
import Brandings from "../brandings"

const DATA_EXAMPLE = [
  {
    brading: 'BMW',
    model: 'M3',
    price: '$200.000'
  },
  {
    brading: 'BMW',
    model: 'M2',
    price: '$100.000'
  },
  {
    brading: 'BMW',
    model: '125i',
    price: '$80.000'
  }
]
const FOR_BRANDINGS = [
  { brading: 'BMW' }, { brading: 'Porsche' }, { brading: 'Mercedes Benz' }, { brading: 'Audi' }
]

export default function Models() {
  return (
    <section>
      <article className="h-[4rem] w-full">

        <form className=" flex flex-col" action="">
          <label>
            <select name="" id="" className="w-full">
              <option value="">Elige una marca</option>
              <option value="Audi">Audi</option>
              <option value="BMW">BMW</option>
              <option value="Mercedes Benz">Mercedes Benz</option>
              <option value="Porsche">Porsche</option>
            </select>
          </label>
          <label>
            <select name="" id="" className="w-full">
              <option value="100000">$0 - $100.000</option>
              <option value="150000">$100.000 - $150.000</option>
              <option value="150000">$150.000 - ∞</option>
            </select>
          </label>
        </form>
      </article>
      <article className="flex flex-col items-center justify-center">
        {
          FOR_BRANDINGS.map(({ brading, index }) =>
            <div className="w-full" key={index}>
              <section className="w-full bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${image[4].url})`,
                  backgroundSize: "100%",
                }}
              >
                <h2 className="w-full text-center font-extrabold text-2xl text-white p-4 bg-no-repeat bg-center backdrop-blur-sm">{brading}</h2>
              </section>
              <section className="w-full">
                {
                  DATA_EXAMPLE.map((car, index) =>
                    <Model key={index} price={car.price} brading={car.brading} model={car.model}></Model>
                  )
                }
              </section>

            </div>
          )
        }
      </article>
    </section>
  )
}