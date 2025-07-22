
function Buttons({ styleType = "primary", text, className = "" }) {
    const base = "py-2 px-4 rounded-lg font-segoe font-semibold cursor-pointer border-2";
    const styles = {
        primary: "bg-lime-green text-mint-green-700 border-mint-green-600 outline hover:bg",
        secondary: "bg-white",
        tertiary: "bg-red",
        quaternary: "bg-red",
        quinary: "bg-red"
    }

    return (
        <button className={`${className} ${base} ${styles[styleType]}`}>  {text} </button>
    )
}

export default Buttons