
export async function GetAll(){
    
    var returned;
    await $.ajax({
        url: "http://localhost:3000/Task",
        type: "Get",
        success: (response) => {
            
            returned = response;
        }
    })
    return returned;
} 

export async function Set(object){

    var returned;
    await $.ajax({
        url: "http://localhost:3000/Task",
        type: "post",
        data: {nome: object},
        success: (response) => {
            
            returned = response;
        }
    })
    
    return returned;
} 


export async function Remove(object){

    await $.ajax({
        url: "http://localhost:3000/Task/"+object,
        type: "delete"
    })
    
} 
