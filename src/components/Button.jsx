function Button({ value, onButtonClick }) {
    return (
        <button onClick={onButtonClick}>
            {value}
        </button>
    )
}

export default Button
