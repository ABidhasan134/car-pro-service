import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CardsServices = ({displayData}) => {
  return (
    <>
    {displayData.map((service) => (
                    <div
                        key={service._id}
                        className="border-y-2 border-[#e76637] card bg-base-100 xl:w-96 lg:w-72 md:w-56 w-62 shadow-xl mb-2"
                    >
                        <figure>
                            <Image src={service.img} alt={service.title} width={300} height={350} />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{service.title}</h2>
                            <p>{service.description.slice(0, 40)}...</p>
                            <div className="card-actions justify-end">
                                <Link href={`services/${service._id}`}>
                                    <button className="btn btn-outline">View Details</button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
    </>
  )
}

export default CardsServices
