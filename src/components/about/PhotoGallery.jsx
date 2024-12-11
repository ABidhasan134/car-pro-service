import React from 'react';

const PhotoGallery = () => {
  const photos = [
    {
      title: "Image1",
      Image_URL: "https://ecartech.pk/wp-content/uploads/2024/01/1065.jpeg"
    },
    {
      title: "Image2",
      Image_URL: "https://www.ilusso.com/imagetag/2832/main/l/Used-2018-McLaren-720S-Luxury-(Launch-Edition)-1706206829.jpg"
    },
    {
      title: "Image3",
      Image_URL: "https://www.garage.movemycar.in/assets/images/content-image-2.png"
    },
    {
      title: "Image4",
      Image_URL: "https://www.garage.movemycar.in/assets/images/schedule-apointment.png"
    },
    {
      title: "Image5",
      Image_URL: "https://www.armotors.ae/wp-content/uploads/2021/03/mechanical-electrical-repairs-armotors-1.jpg"
    },
    {
      title: "Image6",
      Image_URL: "https://performanceautospecialists.com/wp-content/uploads/2021/04/European-auto-repair-center-in-Wilmington-1.jpeg"
    }
  ];

  return (
    <div className="App w-full md:w-[75%] lg:w-[50%] m-4">
      {/* Grid container */}
      <div className="md:grid hidden grid-cols-2 md:grid-cols-3 gap-1 ">
        {photos.map((item, index) => {
          const heightClass = index === 1 || index === 4 ? "h-64 md:h-72" : "h-40 md:h-40";
          const positionClass = index === 2 || index === 0 ? "relative top-20 md:top-32" : "";

          return (
            <a
              key={index}
              href={item.Image_URL}
              className={`w-full ${heightClass} ${positionClass}`}
            >
              <img className="w-full h-full object-cover" alt={item.title} src={item.Image_URL} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default PhotoGallery;
