import { IUser } from "../Interfaces/IUser";
import { Mappings } from "../Utils/Mappings";

export default class ServiceHelper{

    public static async getCurrentUser(): Promise<IUser|undefined>{
        try{
            const response = await (await fetch(Mappings.endPointGetUser)).json();
            const currentUserResponse = response.results[0];
            let currentUser: IUser;
            
            if(currentUserResponse){
                currentUser={
                    first: currentUserResponse.name.first,
                    last: currentUserResponse.name.last,
                    address: currentUserResponse.location.street.number + " " + currentUserResponse.location.street.name,
                    birthday: currentUserResponse.dob.date,
                    email: currentUserResponse.email,
                    img: currentUserResponse.picture.large,
                    password: currentUserResponse.login.password,
                    phone: currentUserResponse.phone
                }
                return currentUser;
            }
            return undefined;
        }
        catch(error){
            console.log(error);
            return undefined;
        }

    }
}
    