

export const increment=()=>{
    return{
        type:'INCREMENT'
    }
}
export const decrement = () =>{
    return{
        type:'DECREMENT'
    }
}
const operation = {
    increment,
    decrement
}
export default operation