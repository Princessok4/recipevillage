import React from 'react';
import Navbar from '../components/Navbar';


const teamMembers = [
  {
    name: 'Aturaka Tomilola',
    role: 'Fullstack Developer',
    email: 'tomilolaaturaka@gmail.com',
    phone: '08067014209',
    image: '/images/Oluwatomilola Aturaka.jpg'
  },
  {
    name: 'Mena Orona',
    role: 'UI/UX Designer',
    email: 'oronamena18@gmail.com',
    phone: '07086059414',
    image: '/images/Mena.jpg'
  },
  {
    name: 'Olasupo Oyinkansola',
    role: 'Backend Developer',
    email: 'oyinkansolaolasupo@gmail.com',
    phone: '08032795450',
    image: '/images/Olasupo Oyinkansola.jpg'
  },
  {
    name: 'Olukoyede Moyosore',
    role: 'Frontend Developer',
    email: 'OlukoyedeMoyosore@gmail.com',
    phone: '07048240577',
    image: '/images/Moyo.jpg'
  },

  {
    name: 'Ebireri Temisan',
    role: 'Frontend Developer',
    email: 'ebireritemisan@gmail.com',
    phone: '08163723002',
    image: '/images/Temi.jpg'
  },
  
  {
    name: 'Anthony Apkan',
    role: 'Backend Developer',
    email: 'tonyakpan45@gmail.com',
    phone: '09020339649',
    image: '/images/Anthony.jpg'
  },


  {
    name: 'Blessing Isibor',
    role: 'PHP Developer',
    email: 'iyobosa.isibor022@gmail.com',
    phone: '08179661363',
    image: '/images/blessing.jpg'
  },

  {
    name: 'Chibuike Ogbonna',
    role: 'Frontend Developer',
    email: 'Davidoooc2000@gmail.com',
    phone: '08168653251',
    image: '/images/chibuike.jpg'
  },
  {
    name: 'Taofeek Ishola',
    role: 'Backend developer(flask, NestJs)',
    email: 'taofeekishola1791@gmail.com',
    phone: '08074448522',
    image: '/images/Taofeek.jpg'
  },

  {
    name: 'Abdulazeez Kolawole',
    role: 'Frontend Developer',
    email: 'kolawoleabdulazeez5@gmail.com',
    phone: '09075004018',
    image: '/images/Azeez.jpg'
  },

  {
    name: 'Princess Okoroafor',
    role: 'Frontend Developer',
    email: 'princessoutlook@gmail.com',
    phone: '08162223056',
    image: '/images/princess.png'
  },

  {
    name: 'Alaegbu Ugochukwu',
    role: 'Backend Developer',
    email: 'Ugooalaegbu@gmail.com',
    phone: '08108651252',
    image: '/images/Ugo.png'
  },

  {
    name: 'Lawal Abudullah',
    role: 'Backend Developer',
    email: 'lawalabdullah28@gmail.com',
    phone: '08127315101',
    image: '/images/Abdul.jpg'
  },

];
const ContactUs = () => {
  return (
    <div>
        <Navbar/>
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-semibold text-center text-gray-900 mb-12">Contact Us</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
              />
              <h2 className="text-xl font-semibold text-gray-800">{member.name}</h2>
              <p className="text-gray-600">{member.role}</p>
              <div className="mt-4">
                <p className="text-gray-800 font-medium">Email: <a href={`mailto:${member.email}`} className="text-indigo-600 hover:underline">{member.email}</a></p>
                <p className="text-gray-800 font-medium">Phone: <span>{member.phone}</span></p>
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  );
};

export default ContactUs;
