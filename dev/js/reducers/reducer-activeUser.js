export default function(state=null,action){

    switch(action.type){
        case 'USER_CLICKED':
            return action.payload;
            break;
    }
    return state;

}
