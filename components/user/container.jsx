import { useGetUsersQuery } from "../../redux/service/api"
import { User } from "./component"
import { Loader } from "../loader/component"


export const UserContainer = ({userId}) => {

    const {data: user, isLoading, isError} = useGetUsersQuery(undefined, {
        selectFromResult: (result) => ({...result, data: result.data?.find(({id}) => id === userId)})
    })

    if(isLoading) return <Loader load = {'loading'}/>
    if(isError) return 'Error'

    return <User user = {user}/>
}
