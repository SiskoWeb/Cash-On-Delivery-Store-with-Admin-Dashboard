
const INITIAL_STATE = {


OrderAdmin:localStorage.getItem("OrderAdmin")
? JSON.parse(localStorage.getItem("OrderAdmin"))
: [],

}

export const AdminReducer = (state = INITIAL_STATE , action)=>{


    switch (action.type) {
        case 'GET_ORDERS_ADMIN':
          return{
            ...state,
            OrderAdmin:action.payload
         }

          
           case 'GET_PRODUCTS_ADMIN':
        
           return{
            ...state,
            Products:action.payload
         }
            

     default:
        return state;
        
    }

  
       
       
}

