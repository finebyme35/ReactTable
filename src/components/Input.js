

function Input({
    id,
    type,
    name,
    value,
    onChange,
}) {
    return(
        <div className="form-input-div">
            <input type={type}
                    id={id}
                    name={name}
                    value={value}
                    onChange={onChange}
                    className="form-input">
            </input>
        </div>
    )
}

export default Input;