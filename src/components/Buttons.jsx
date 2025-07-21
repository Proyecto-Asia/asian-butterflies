import React from 'react'

function Buttons({ btnColor, btnColorHover, btnTextColor, btnText, }) {
    return (
        <button className={`bg-${btnColor} text-${btnTextColor} text-white font-bold py-2 px-4 rounded`}>{btnText}</button>
    )
}

export default Buttons