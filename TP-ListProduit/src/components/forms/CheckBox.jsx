export function Checkbox ({checked, onChange, label, id}){
    return <div>
        <input type="checkbox"
        id={id}
        className="form-check-input"
        checked={checked}
        onChange={(e)=>onChange(e.target.checked)} 
        />
        <label htmlFor={id} className="form-check-label"> en stock</label>
    </div>
}