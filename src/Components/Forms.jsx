
import "./Forms.css"

function Forms(props){
    return (
        <div id="forms">

            <div className="forms-control">
                <label htmlFor={props.name}>{props.name}</label>
                <input type="text" id={props.name} />
            </div>

        </div>
    )
}

export default Forms; 