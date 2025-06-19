import React from 'react'

const Projects = ({login}) => {
    return (
        <>
           {login ?  <div className='border-b-2'>
                <h1>My Projects</h1>
                <p>latarr patr</p>
                <p>latarr patr</p>
                <p>latarr patr</p>
            </div>:""}
            <div className='border-b-2'>
                <h1>Top Projects</h1>
                <p>latarr patr</p>
                <p>latarr patr</p>
                <p>latarr patr</p>
            </div>
            <div className='border-b-2'>
                <h1>Recent Projects</h1>
                <p>latarr patr</p>
                <p>latarr patr</p>
                <p>latarr patr</p>
            </div>
        </>
    )
}

export default Projects