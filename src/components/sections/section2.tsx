import * as React from 'react';

import { cn } from '@/lib/utils';

const Section2 = () => {
  return (<section className="mb-40">
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="space-y-4 md:space-y-8">
          <div className=" flex flex-col content-center w-full">
            <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
              Browse The Range
            </h2>

            <span className="mt-4 text-gray-700 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </div>


          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div className="h-32 rounded "> <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            /></div>
            <div className="h-32 rounded "> <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            /></div>
            <div className="h-32 rounded "> <img
              src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className="rounded"
              alt=""
            /></div>
          </div>
        </div>
      </div>
    </section>
  </section>)
}

export default Section2