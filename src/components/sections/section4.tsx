import * as React from 'react';

import { cn } from '@/lib/utils';
import { ProductCart } from '@/app/components/ProductCard';
import Carousel from '@/components/sections/carousel';

const Section4 = () => {
  return (<section>
<div className="w-full h-full bg-[#fcfaf3] py-10 mb-20">
  <div className="grid grid-cols-4 gap-4">
    <div className="col-span-2 m-30"><h2>50+ Beautiful rooms <br />inspiration</h2><p>Our designer already made a lot of beautiful prototipe of rooms that inspire you</p><br />
      <button className="text-white bg-yellow-600 py-3 px-8">Explore More</button>
    </div>
    <div className="static"><img src="/images/inspo.png" />
    </div>
  
    <div>
    <Carousel />
    </div>
 
  </div>
</div>

  </section>)
}

export default Section4