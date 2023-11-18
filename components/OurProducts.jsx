import Link from "next/link";

const OurProducts = () => {
  return (
    <div
      id="ourproducts"
      className="w-full h-full bg-slate-700/50 overflow-hidden"
    >
      <div className="pt-10 pb-5">
        <div className="mb-10 ">
          <h1 className="text-center text-white font-semibold text-2xl uppercase">
            Our-collections
          </h1>
          <p className="text-white text-center font-normal pt-10 container mx-auto ">
            Welcome to our exquisite collection of Ethiopian gemstones. Explore
            our collections.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
            <div className="bg-hexa-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <Link href="/#myform">
                <div className="flex justify-end pt-2">
                  <h1 className="text-white flex justify-center rounded-lg bg-yellow-500 w-20 h-5 text-sm text-shadow-lg animate-pulse">
                    In stock
                  </h1>
                </div>
              </Link>
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                onsdaleite (Hexagonal) iamond
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-10 pb-1 container mx-auto rounded-lg">
                Rare hexagonal diamond, harder than regular diamonds, formed
                under extreme impact conditions like meteorite collisions.
              </p>
            </div>

            <div className="bg-emrerald-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                EMERALD
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Ethiopia's radiant Emeralds: Nature's treasure, vivid green
                hues, and cultural significance enchant admirers worldwide.
              </p>
            </div>

            <div className="bg-opal-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                opal
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Discover Ethiopia's radiant beauty with Row Opal
                gemstones—nature's exquisite dance of color and elegance.
              </p>
            </div>

            <div className="bg-sapph-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                sapphire
              </h1>
              <p className="text-white text-center bg-gray-800/80 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Rare Ethiopian Row Sapphire: Stunning hues, ancient allure, a
                gemstone masterpiece, nature's vibrant elegance revealed.
              </p>
            </div>

            <div className="bg-aquam-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                Aquamarine
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Ethiopian Aquamarine: Captivating blue hues, sourced from
                Ethiopia, embody elegance and allure in every facet."
              </p>
            </div>

            <div className="bg-ruby-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                Rubies
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Ethiopia's renowned Rubies: Rich, vibrant, and culturally
                significant gemstones, embodying the nation's natural splendor.
              </p>
            </div>

            <div className="bg-topaz-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                Topaz
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Ethiopian Topaz: A dazzling treasure, radiating warmth and
                beauty from the heart of the earth.
              </p>
            </div>

            <div className="bg-tourma-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                Tourmaline
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Explore Ethiopia's radiant beauty with exquisite Tourmaline
                gems, a testament to nature's captivating artistry.
              </p>
            </div>

            <div className="bg-garnet-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase text-shadow-lg">
                garnet
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Rare Ethiopian Row Garnet: Radiant hues and cultural
                significance, a gemstone steeped in Ethiopian history.
              </p>
            </div>

            <div className="bg-peridot-bg bg-center bg-cover w-[330px] h-[210px] rounded-lg shadow-lg text-shadow-lg">
              <h1 className="text-white text-center text-xl font-semibold pt-3 uppercase">
                Peridot
              </h1>
              <p className="text-white text-center bg-gray-600/70 w-full font-normal mt-20 pb-3 container mx-auto rounded-lg">
                Ethiopian Peridot: Vibrant green allure, mined with care, a
                symbol of nature's beauty in Ethiopia.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
