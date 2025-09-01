import * as React from 'react';

import { cn } from '@/lib/utils';

const Section2 = () => {
  return (<section className="mb-40 ">
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className=" flex flex-col content-center w-full">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl flex justify-center">
              Browse The Range
            </h2>

            <span className="mt-4 text-gray-700 flex justify-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>

          </div>
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8 flex justify-center mb-70">
            <div className="h-32 rounded "> <img
              src="/images/dining.png"
              className="rounded"
              alt="dining"
            /> <p className= "text-2xl font-semibold text-gray-900 mb-1 flex justify-center" >Dining</p></div>
            <div className="h-32 rounded "> <img
              src="/images/livingroom.png"
              className="rounded"
              alt="livingroom"
            /> <p className= "text-2xl font-semibold text-gray-900 mb-1 flex justify-center" >Living</p></div>
            <div className="h-32 rounded "> <img
              src="/images/bedroom.png"
              className="rounded"
              alt="bedroom"
            /> <p className= "text-2xl font-semibold text-gray-900 mb-1 flex justify-center" >Bedroom</p></div>
          </div>

        </div>
      </div>
    </section>
  </section>)
}

export default Section2