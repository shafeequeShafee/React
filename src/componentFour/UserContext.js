import React from 'react'

const UserContext =React.createContext('something hurts') // default value
const UserProvider = UserContext.Provider
const UserConsume = UserContext.Consumer

export {UserProvider,UserConsume}
export default UserContext