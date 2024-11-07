import { useTypedSelector } from "./redux"

export function useAuth(){
    
    const {id, email} = useTypedSelector((state) => state.user);
    
    
    return{
        isAuth: !!email, //email 있으면 isAuth -> true
        email,
        id
    }
}