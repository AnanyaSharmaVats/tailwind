import * as React from 'react';

import { cn } from '@/lib/utils';
import { ProductCart } from '@/app/components/ProductCard';

const Section3 = () => {
  return (<section>
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="space-y-4 md:space-y-8">
        <div className=" flex flex-col content-center w-full">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Browse The Range
          </h2>
        </div>

        <div className="grid grid-cols-5 grid-rows-5 gap-4">
        <div className="">
          < ProductCart />
          </div>
         
          <div className="col-start-2 row-start-1"><ProductCart image="/images/leviosa.png" name="Leviosa" subtext="Stylish cafe chair" price="Rp 2.500.000" discountPrice="" /></div>
          <div className="col-start-3 row-start-1"><ProductCart image="/images/lolito.png" name="Lolito" subtext="Luxury big sofa" price="Rp 7.000.000" discountPrice="Rp 14.000.000" /></div>
          <div className="col-start-4 row-start-1"><ProductCart image="/images/respira.png" name="Respira" subtext="Outdoor bar table and stool" price="Rp 500.000" discountPrice="" /></div>

          <div className="col-start-1 row-start-2"><ProductCart image="/images/grifo.png" name="Grifo" subtext="Night lamp" price="Rp 1.500.000" discountPrice="" /></div>
          <div className="col-start-2 row-start-2"><ProductCart image="/images/muggo.png" name="Muggo" subtext="Small mug" price="Rp 150.000" discountPrice="" /></div>
          <div className="col-start-3 row-start-2"><ProductCart image="/images/pingky.png" name="Pingky" subtext="Cute bed set" price="Rp 7.000.000" discountPrice="Rp 14.000.000" /></div>
          <div className="col-start-4 row-start-2"><ProductCart image="/images/potty.png" name="Potty" subtext="Minimalist flower pot" price="Rp 500.000" discountPrice="" /></div>



        </div>




      </div>
    </div>
  </section>)
}

export default Section3