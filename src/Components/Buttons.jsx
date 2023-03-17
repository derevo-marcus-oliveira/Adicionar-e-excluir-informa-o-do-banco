import "./Buttons.css"


function Buttons (props){
    return (
        <div id="buttons">
            <input type="button" className={"btn-"+props.class} value={props.name} onClick={ async (object) => {
                
                object = document.getElementById("name").value
                document.getElementById("name").value = ""

                if(object || object != ""){
                    var dado = []
                    dado.push(await props.method(object))
                    
                    if(props.result){
                        props.result(dado);
                    }
                }
                else{
                    var dado = await props.method();
                    
                    if(props.result){
                        props.result(dado);
                    }
                }           
            }}/>
        </div>
    )
}

export default Buttons;