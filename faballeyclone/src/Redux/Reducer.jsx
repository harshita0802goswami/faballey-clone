const inialData =  {
    signUpDetails : [{
        name:''
    }]
}

const Reducer = (state=inialData , action)=>{

    switch(action.type){
        case  "LOGIN-SIGNUP" :{
            return{
                ...state,
                signUpDetails : [...state.signUpDetails, action.payload]
            }
        }
        default : {
            return state
    
        }
    }

    
}

export default Reducer;