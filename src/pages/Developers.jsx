import React from 'react'
import DeveloperCard from '../components/DeveloperCard'
import ConnectionRequest from '../components/ConnectionRequest'

const Developers = () => {
  const handleAccept = () => alert("Accepted!");
  const handleReject = () => alert("Rejected!");
  return (
    <div>
      <h1 className='text-2xl py-3 bg-gray-100 font-bold text-center '>Requests </h1>
      <div className=" flex items-center gap-2 flex-wrap justify-center bg-gray-100 p-4">
        <ConnectionRequest
          image="https://i.pravatar.cc/100"
          name="Ayesha Fatima"
          title="Frontend Developer"
          onAccept={handleAccept}
          onReject={handleReject}
        />
        <ConnectionRequest
          image="https://i.pravatar.cc/100"
          name="Ayesha Fatima"
          title="Frontend Developer"
          onAccept={handleAccept}
          onReject={handleReject}
        />
        <ConnectionRequest
          image="https://i.pravatar.cc/100"
          name="Ayesha Fatima"
          title="Frontend Developer"
          onAccept={handleAccept}
          onReject={handleReject}
        />
        <ConnectionRequest
          image="https://i.pravatar.cc/100"
          name="Ayesha Fatima"
          title="Frontend Developer"
          onAccept={handleAccept}
          onReject={handleReject}
        />
      </div>
      <h1 className='text-2xl py-3 bg-gray-100 font-bold text-center '>Dev Suggestions</h1>
      <div className="min-h-screen bg-gray-100 gap-2 flex-wrap flex items-center justify-center p-6">
        <DeveloperCard
          image="https://avatars.githubusercontent.com/u/583231?v=4"
          name="Tariq Ahmad"
          role="Full Stack Developer"
          bio="Passionate MERN stack developer building fast and scalable web apps."
          github="https://github.com/yourgithub"
          linkedin="https://linkedin.com/in/yourprofile"
          email="your@email.com"
        />
        <DeveloperCard
          image="https://avatars.githubusercontent.com/u/583231?v=4"
          name="Tariq Ahmad"
          role="Full Stack Developer"
          bio="Passionate MERN stack developer building fast and scalable web apps."
          github="https://github.com/yourgithub"
          linkedin="https://linkedin.com/in/yourprofile"
          email="your@email.com"
        />

        <DeveloperCard
          image="https://avatars.githubusercontent.com/u/583231?v=4"
          name="Tariq Ahmad"
          role="Full Stack Developer"
          bio="Passionate MERN stack developer building fast and scalable web apps."
          github="https://github.com/yourgithub"
          linkedin="https://linkedin.com/in/yourprofile"
          email="your@email.com"
        />
        <DeveloperCard
          image="https://avatars.githubusercontent.com/u/583231?v=4"
          name="Tariq Ahmad"
          role="Full Stack Developer"
          bio="Passionate MERN stack developer building fast and scalable web apps."
          github="https://github.com/yourgithub"
          linkedin="https://linkedin.com/in/yourprofile"
          email="your@email.com"
        />
      </div>
    </div>
  )
}

export default Developers