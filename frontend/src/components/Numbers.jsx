import React from 'react'

export default function Numbers() {
  return (
    <div className='px-12'>
      
<section className="bg-[#f8fdf9] md:text-black mt-12 rounded-3xl">
    <div className="container grid grid-cols-2 gap-8 py-8 mx-auto text-center md:grid-cols-4">
        <div>
            <h5 className="text-3xl text-[#00df9a]">
                    30+
            </h5>
            <p className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                Clients
            </p>
        </div>
        <div>
            <h5 className="text-3xl font-bold text-white">
                <span className="inline text-[#00df9a] ">
                    30+
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                Active Clients
            </p>
        </div>
        <div>
            <h5 className="text-3xl font-bold text-white">
                <span className="inline text-[#00df9a]">
                    10%
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-gray-600 md:text-black uppercase">
                Return 
            </p>
        </div>
        <div>
            <h5 className="text-3xl font-bold text-white">
                <span className="inline text-[#00df9a] ">
                    3+
                </span>
            </h5>
            <p className="text-xs font-medium tracking-wide text-gray-600 uppercase">
                Years in business
            </p>
        </div>
    </div>
</section>

    </div>
  )
}
