import React from 'react'
import TitleAndSub from '../shared/titleAndSub'
import Marquee from '../ui/marquee'

const Testimonial = () => {
  return (
    <div>
      <TitleAndSub title='Testimonial' subtitle="the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. "></TitleAndSub>
      <div className='relative grid justify-center p-2 mb-2'>
      <Marquee pauseOnHover repeat={4} className="[--duration:200s]">
          {testimonialData.map((testimonial, index) => (
            <div key={testimonial.id} className={`grid justify-center text-center p-10 rounded-sm ${index % 2 === 0 ? "bg-gradient-to-r from-[#db6447] to-[#e77205] text-white" : "shadow-lg"} w-96`}>
              <p className="italic">&quot;{testimonial.testimonial}&quot;</p>
              <p className="text-lg opacity-50 mt-2">{testimonial.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
      <div className='relative grid justify-center p-2 mb-2'>
      <Marquee pauseOnHover repeat={4} className="[--duration:200s]" reverse>
          {testimonialData.map((testimonial, index) => (
            <div key={testimonial.id} className={`grid justify-center text-center p-10 rounded-sm ${index % 2 === 0 ? "bg-gradient-to-r from-[#e77205] to-[#db6447] text-white" : "shadow-lg"} w-96`}>
              <p className="italic">&quot;{testimonial.testimonial}&quot;</p>
              <p className="text-lg opacity-50 mt-2">{testimonial.name}</p>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  )
}

export default Testimonial

export const testimonialData = [
    {
      "id": 1,
      "name": "John Doe",
      "testimonial": "This quiz app is a game-changer! It’s fun, engaging, and helps me learn at the same time. Highly recommend!"
    },
    {
      "id": 2,
      "name": "Jane Smith",
      "testimonial": "The quizzes are well-structured and cover a wide range of topics. It’s perfect for sharpening my skills."
    },
    {
      "id": 3,
      "name": "Emily Johnson",
      "testimonial": "I love the interactive dashboard that tracks my progress. It keeps me motivated to improve!"
    },
    {
      "id": 4,
      "name": "Michael Brown",
      "testimonial": "The personalized feedback after each quiz is spot-on and helps me identify where I need to improve."
    },
    {
      "id": 5,
      "name": "Sarah Davis",
      "testimonial": "This app has become my go-to study tool. The variety of quizzes keeps things interesting!"
    },
    {
      "id": 6,
      "name": "David Wilson",
      "testimonial": "The design is sleek, and the user experience is top-notch. Learning has never been this enjoyable!"
    },
    {
      "id": 7,
      "name": "Laura Martinez",
      "testimonial": "I’ve seen a noticeable improvement in my quiz scores thanks to this app."
    },
    {
      "id": 8,
      "name": "Chris Lee",
      "testimonial": "The quizzes are challenging yet fun, and I’m always excited to see my results!"
    },
    {
      "id": 9,
      "name": "Jessica White",
      "testimonial": "I’ve been using this app daily, and it has helped me study efficiently and track my progress."
    },
    {
      "id": 10,
      "name": "Daniel Harris",
      "testimonial": "The progress tracking feature is amazing! It gives me real-time insights into how well I’m doing."
    },
    {
      "id": 11,
      "name": "Karen Lewis",
      "testimonial": "This app makes learning enjoyable. The quizzes are quick and informative!"
    },
    {
      "id": 12,
      "name": "James Clark",
      "testimonial": "I’m hooked on the daily quizzes. They help me stay sharp and focused!"
    },
    {
      "id": 13,
      "name": "Olivia Rodriguez",
      "testimonial": "I appreciate how user-friendly this app is. The features are intuitive, and I love using it."
    },
    {
      "id": 14,
      "name": "Matthew King",
      "testimonial": "This app has become an essential part of my study routine. The quizzes are comprehensive."
    },
    {
      "id": 15,
      "name": "Sophia Moore",
      "testimonial": "I’m so glad I found this app. It has helped me prepare for exams and stay on top of my subjects."
    },
    {
      "id": 16,
      "name": "Anthony Walker",
      "testimonial": "The app’s reward system motivates me to keep taking quizzes and improve my scores."
    },
    {
      "id": 17,
      "name": "Chloe Young",
      "testimonial": "The app covers a wide range of topics, making it the perfect learning companion."
    },
    {
      "id": 18,
      "name": "Megan Hall",
      "testimonial": "I love how easy it is to navigate through the app and take quizzes on any subject I need."
    },
    {
      "id": 19,
      "name": "Benjamin Allen",
      "testimonial": "The quiz results and insights really help me understand my strengths and areas for improvement."
    },
    {
      "id": 20,
      "name": "Grace Scott",
      "testimonial": "This app has made studying much more enjoyable. I feel like I’m learning while having fun!"
    }
  ]
  
