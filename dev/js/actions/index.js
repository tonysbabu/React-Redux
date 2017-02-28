export const selectUser = (user)=>{

    console.log("You clicked"+user.title);

    return{ type:"USER_CLICKED",payload:user}

}
