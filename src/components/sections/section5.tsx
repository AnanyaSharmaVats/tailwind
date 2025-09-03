import * as React from 'react';

import { cn } from '@/lib/utils';

const Section5 = () => {
  return (<section>
<div className="w-full h-full bg-white py-10 flex justify-center text-center">
  <div><p className="text-gray-600">Share your setup with</p><br/>
  <h2>#FuniroFurniture</h2></div>
</div>


<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full " src="/images/1st.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full " src="/images/2nd.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full " src="/images/3rd.png" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full " src="/images/4th.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full " src="/images/5th.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full " src="/images/6th.png" alt=""/>
        </div>
    </div>
    <div className="grid gap-4">
        <div>
            <img className="h-auto max-w-full " src="/images/7th.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full " src="/images/8th.png" alt=""/>
        </div>
        <div>
            <img className="h-auto max-w-full " src="/images/9th.png" alt="" />
        </div>
    </div>
</div>

  </section>)
}

export default Section5