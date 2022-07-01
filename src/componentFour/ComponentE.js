import React, { Component } from 'react'
import { UserConsume } from './UserContext'

class ComponentE extends Component {
    render() {
        return (
            <UserConsume>
                {
                    (userName) => {
                        return (
                            <div>
                                <h6>component E , userName: {userName}</h6>
                            </div>
                        )

                    }
                }
            </UserConsume>

        )
    }
}

export default ComponentE
