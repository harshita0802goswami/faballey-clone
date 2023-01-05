const Action = (data,dispatch)=>{

    dispatch({
        type : "LOGIN-SIGNUP",
        payload : data
    })
}
export default Action