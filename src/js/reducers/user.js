export default (state={userLogin:false},action)=>{
    console.log(state)
    switch(action.type){
    case "ADD_USER":
        return action.payload; 
    case "USER_LOGIN":
    return {
        userLogin:true
    };
}
    return state;
}