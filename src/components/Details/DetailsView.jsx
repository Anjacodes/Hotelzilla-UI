import React from 'react'

function DetailsView() {
  return (
    <section className='flex mx-[5vw] my-[25vh] justify-between w-[80vw]'>
        <img className="w-[40vw] mr-4" src="https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg" alt="placeholder"/>
        <div className='flex flex-col items-end'>
          <h2 className="mb-10">ROOM NAME</h2>
          <p className='text-right'>Lorem ipsum dolor sit amet consectetur adipiscing elit, urna consequat felis vehicula class ultricies mollis dictumst, aenean non a in donec nulla. Phasellus ante pellentesque erat cum risus consequat imperdiet aliquam, integer placerat et turpis mi eros nec lobortis taciti, vehicula nisl litora tellus ligula porttitor metus.</p>
          <table>
              <tr>
                <td>CAPACITY:</td>
                <td>2</td>
              </tr>
              <tr>
                <td>PRICE:</td>
                <td>200$</td>
              </tr>
              <tr>
                <td>HOTEL:</td>
                <td>4 seasons</td>
              </tr>
          </table>
          <button className='mt-auto py-3 px-8 bg-lime-400 rounded-lg'>Reserve</button>
        </div>
    </section>
  )
}

export default DetailsView