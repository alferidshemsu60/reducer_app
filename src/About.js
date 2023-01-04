import React from 'react'
const data = [
    {id: 1, name : "Mike", hobby: "Coding"},
    {id: 2, name : "Fraol", hobby: "Betting"},
    {id: 1, name : "John", hobby: "Readung"},
]
const About = () => {
    const displayData = () => {}
    return (
        <div className="flex flex-col space-y-10">
            <p>First Record {data[0].name}</p>
            
            <p className='mb-10'>Map</p>
            {data?.map((person) => {
                return(
                <p>{person.name}</p>
                )

            })}
        </div>
    )
}