import { useQuery } from '@apollo/client'
import { userDetails } from "../app/api/graphql"
import { useAuthentication } from '../app/api/authorization'

function Dashboard() {

  const { isSignedIn } = useAuthentication()

  function Check(){
    if(isSignedIn())
    return (
      <>
        YOU ARE SIGNED IN!
      </>
    )
  }

  const { data, loading } = useQuery(userDetails)
  if(loading) {
    return (
      <>
        Page Loading...
      </>
    )
  }
  return (
    <>
    <Check />
    How are you doing {data.userDetails.username} ?
    </>
  )
}

export default Dashboard;