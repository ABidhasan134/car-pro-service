import React from 'react';
import Image from 'next/image';
import img1 from '../../../public/assets/images/banner/1.jpg';
import img2 from '../../../public/assets/images/banner/2.jpg';
import img3 from '../../../public/assets/images/banner/3.jpg';
import img4 from '../../../public/assets/images/banner/4.jpg';

const Bannar = () => {
  return (
    <div className="carousel w-full snap-none">
      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full md:h-[500px] h-[400px] lg:h-[600px] rounded-md">
        <Image
          src={img1}
          alt="Banner Image 1"
          className="w-full"
          layout="responsive"
        />
        <div className="absolute inset-0 rounded-md bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-white p-6 ">
            <h1 className="mb-5 text-5xl font-bold">Service your car</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br/>
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-outline text-white mx-2">Discover More</button>
            <button className="btn btn-outline btn-error mx-2">Latest Project</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-2">
          <a href="#slide4" className="btn btn-circle hover:bg-orange-500 border-0 hover:text-white">❮</a>
          <a href="#slide2" className="btn btn-circle hover:bg-orange-500 border-0 hover:text-white">❯</a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full md:h-[500px] h-[400px] lg:h-[600px] rounded-md">
        <Image
          src={img2}
          alt="Banner Image 2"
          className="w-full"
          layout="responsive"
        />
         <div className="absolute inset-0 rounded-md bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-white p-6 ">
            <h1 className="mb-5 text-5xl font-bold">Service your car</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br/>
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-outline text-white mx-2">Discover More</button>
            <button className="btn btn-outline btn-error mx-2">Latest Project</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-2">
          <a href="#slide1" className="btn btn-circle hover:bg-orange-500 border-0 hover:text-white">❮</a>
          <a href="#slide3" className="btn btn-circle hover:bg-orange-500 border-0 hover:text-white">❯</a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full md:h-[500px] h-[400px] lg:h-[600px] rounded-md">
        <Image
          src={img3}
          alt="Banner Image 3"
          className="w-full"
          layout="responsive"
        />
         <div className="absolute inset-0 rounded-md bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-white p-6 ">
            <h1 className="mb-5 text-5xl font-bold">Service your car</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br/>
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-outline text-white mx-2">Discover More</button>
            <button className="btn btn-outline btn-error mx-2">Latest Project</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-2">
          <a href="#slide2" className="btn btn-circle hover:bg-orange-500 border-0 hover:text-white">❮</a>
          <a href="#slide4" className="btn btn-circle hover:bg-orange-500 border-0 hover:text-white">❯</a>
        </div>
      </div>

      {/* Slide 4 */}
      <div id="slide4" className="carousel-item relative w-full md:h-[500px] h-[400px] lg:h-[600px] rounded-md">
        <Image
          src={img4}
          alt="Banner Image 4"
          className="w-full"
          layout="responsive"
        />
         <div className="absolute inset-0 rounded-md bg-black bg-opacity-60 flex items-center justify-center">
          <div className="text-white p-6 ">
            <h1 className="mb-5 text-5xl font-bold">Service your car</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda <br/>
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
            <button className="btn btn-outline text-white mx-2">Discover More</button>
            <button className="btn btn-outline btn-error mx-2">Latest Project</button>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-2">
          <a href="#slide3" className="btn btn-circle hover:bg-orange-500 border-0 hover:text-white">❮</a>
          <a href="#slide1" className="btn btn-circle hover:bg-orange-500 border-0 hover:text-white">❯</a>
        </div>
      </div>
    </div>
  );
};

export default Bannar;
