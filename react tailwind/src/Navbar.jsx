import React from 'react'

const Navbar = () => {
  return (
  <div className="navbar bg-base-100 shadow-sm">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="bg-base-100 rounded-t-none p-2">
            <li><a>Link 1</a></li>
            <li><a>Link 2</a></li>
          </ul>
        </details>
      </li>
    </ul>
  </div>
  <div className="navbar bg-neutral text-neutral-content">
  <button className="btn btn-ghost text-xl">IIT jodhpur</button>
</div>

<div className="navbar bg-base-300">
  <button className="btn btn-ghost text-xl">IIT bombay</button>
</div>

<div className="navbar bg-primary text-primary-content">
  <button className="btn btn-ghost text-xl">IIT delhi</button>
</div>
<div className="join">
  <button className="join-item btn btn-xs">1</button>
  <button className="join-item btn btn-xs btn-active">2</button>
  <button className="join-item btn btn-xs">3</button>
  <button className="join-item btn btn-xs">4</button>
</div>
<div className="join">
  <button className="join-item btn btn-sm">1</button>
  <button className="join-item btn btn-sm btn-active">2</button>
  <button className="join-item btn btn-sm">3</button>
  <button className="join-item btn btn-sm">4</button>
</div>
<div className="join">
  <button className="join-item btn btn-md">1</button>
  <button className="join-item btn btn-md btn-active">2</button>
  <button className="join-item btn btn-md">3</button>
  <button className="join-item btn btn-md">4</button>
</div>
<div className="join">
  <button className="join-item btn btn-lg">1</button>
  <button className="join-item btn btn-lg btn-active">2</button>
  <button className="join-item btn btn-lg">3</button>
  <button className="join-item btn btn-lg">4</button>
</div>
<div className="join">
  <button className="join-item btn btn-xl">1</button>
  <button className="join-item btn btn-xl btn-active">2</button>
  <button className="join-item btn btn-xl">3</button>
  <button className="join-item btn btn-xl">4</button>
</div>
<div className="join grid grid-cols-2">
  <button className="join-item btn btn-outline">Previous page</button>
  <button className="join-item btn btn-outline">Next</button>
</div>
<ul className="steps steps-vertical">
  <li className="step step-primary">Register</li>
  <li className="step step-primary">Choose plan</li>
  <li className="step">Purchase</li>
  <li className="step">Receive Product</li>
</ul>
</div>
  )
}

export default Navbar
