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
          <ProductCart />
          </div>
          <div className="col-start-3 row-start-2"><ProductCart name="Apple" subtext="DEMO" /></div>
          <div className="col-start-2 row-start-2"><ProductCart image="/images/homepage.png" name="Apple 1" subtext="DEMO 1" /></div>
          <div className="col-start-1 row-start-2"><ProductCart /></div>
          <div className="col-start-2 row-start-1"><ProductCart /></div>
          <div className="col-start-3 row-start-1"><ProductCart /></div>
          <div className="col-start-4 row-start-2"><ProductCart /></div>
          <div className="col-start-4 row-start-1"><ProductCart /></div>
        </div>




      </div>
    </div>
  </section>)
}

export default Section3