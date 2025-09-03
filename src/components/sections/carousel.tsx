import * as React from 'react';

import { cn } from '@/lib/utils';

const Carousel = () => {
  return (
  
<div id="custom-carousel" className="relative w-full h-full" data-carousel="static">
  <div className="relative w-full h-full overflow-hidden">
    <div className="hidden duration-700 ease-in-out" data-carousel-item="active">
      <img src="/images/inspo2.png" className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="Slide 1"/>
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="/images/inspo2.png" className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="Slide 2"/>
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="/images/inspo2.png" className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="Slide 3"/>
    </div>
    <div className="hidden duration-700 ease-in-out" data-carousel-item>
      <img src="/images/inspo2.png" className="absolute block w-full h-full object-cover top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" alt="Slide 4"/>
    </div>
  </div>
  <div className="absolute z-30 flex -translate-x-1/2 space-x-3 bottom-5 left-1/2">
    <button type="button" className="w-3 h-3 rounded-full bg-gray-400" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
    <button type="button" className="w-3 h-3 rounded-full bg-gray-400" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
    <button type="button" className="w-3 h-3 rounded-full bg-gray-400" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
    <button type="button" className="w-3 h-3 rounded-full bg-gray-400" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
  </div>
  <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-prev>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 group-hover:bg-white/60">
      <svg className="w-4 h-4 text-white rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
      </svg>
      <span className="sr-only">Previous</span>
    </span>
  </button>
  <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group" data-carousel-next>
    <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/40 group-hover:bg-white/60">
      <svg className="w-4 h-4 text-white rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
      </svg>
      <span className="sr-only">Next</span>
    </span>
  </button>
</div>

  
  )
}

export default Carousel


