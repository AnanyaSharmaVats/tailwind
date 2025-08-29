
export const ProductCart = ({ image = "/images/syltherine.png", name ="Syltherine", subtext="Stylish cafe chair", price="Rp 2.500.000", discountPrice="Rp 3.500.000"}: any) => {
  return  (
    <div className="max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden">

            <div className="relative">
              <img src={image} alt="Stylish Cafe Chair" className="w-full object-cover" />
            </div>

            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-900 mb-1">{name}</h2>
              <p className="text-gray-500 mb-4">{subtext}</p>


              <div className="flex items-center space-x-3">
                <span className="text-l font-bold text-gray-900">{price}</span>
                <span className="text-gray-400 line-through">{discountPrice}</span>
              </div>
            </div>
          </div>
  )
}