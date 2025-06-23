const people = [
  {
    name: 'Ashutosh Mishra',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]

 function App() {
  return (
    <>
   <div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
      />
    </div>
  </div>
  <div className="chat-bubble">he said that he is learning the full stack from Manish sir, He is going to creat his first website, and launch it.</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
      />
    </div>
  </div>
  <div className="chat-bubble">website which he is going to launch is a social media website</div>
</div>
<div className="chat chat-start">
  <div className="chat-image avatar">
    <div className="w-10 rounded-full">
      <img
        alt="Tailwind CSS chat bubble component"
        src="https://img.daisyui.com/images/profile/demo/kenobee@192.webp"
      />
    </div>
  </div>
  <div className="chat-bubble">And after sometime he become a billinar</div>
</div>
<div className="badge badge-xs">name</div>
<div className="badge badge-sm">ammount</div>
<div className="badge badge-md">Medium</div>
<div className="badge badge-lg"> networth</div>
<div className="badge badge-xl">position</div><br />
<div className="badge badge-primary">Primary</div>
<div className="badge badge-secondary">Secondary</div>
<div className="badge badge-accent">Accent</div>
<div className="badge badge-neutral">Neutral</div>
<div className="badge badge-info">Info</div>
<div className="badge badge-success">Success</div>
<div className="badge badge-warning">Warning</div>
<div className="badge badge-error">Error</div><br />
<div className="bg-blue-100 p-6">
  <div className="badge badge-neutral badge-outline">Outline details</div>
  <div className="badge badge-neutral badge-dash">Dashbord about</div>
</div>
</>
  )
}


export default App;