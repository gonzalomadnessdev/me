import { useState, useEffect } from 'react'
import { IUser } from '../../interfaces/IUser'

function Users() {
    const [users, setUsers] = useState<IUser[]>([])

    //componentDidMount
    useEffect(() => {
        fetchUserData()
        console.log("componentDidMount")
    }, [])

    //componentDidUpdate
    // useEffect(() => {
    //     console.log("componentDidUpdate")
    // })

    //componentDidUpdate
    // useEffect(() => {
    //     console.log("componentDidUpdate")
    // })

    const fetchUserData = () => {
        fetch("http://15.228.50.177/api/users")
            .then(response => {
                return response.json()
            })
            .then(data => {
                setUsers(data)
            })
    }

    return (<>
        <table className="min-w-full text-left text-sm font-light">
          <thead className="border-b font-medium dark:border-neutral-500">
            <tr>
              <th scope="col" className="px-6 py-4">ID</th>
              <th scope="col" className="px-6 py-4">name</th>
              <th scope="col" className="px-6 py-4">email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) =>
                <tr className="border-b dark:border-neutral-500" key={user.id}>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{user.id}</td>
                  <td className="whitespace-nowrap px-6 py-4 font-medium">{user.name}</td>
                  <td className="whitespace-nowrap px-6 py-4">{user.email}</td>
                </tr>
            )}
          </tbody>
        </table>
      </>)
}

export default Users;