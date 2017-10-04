import React, { Component } from 'react'
import { gql, graphql } from 'react-apollo'

const usersQuery = gql`
  query users {
    users {
      id
      name
      role
    }
  }
`
const User = ({ object }) => {
  return (
    <div>
      <br />
      <br />
      { object.id }
      &nbsp;
      { object.name }
      &nbsp;
      { object.role }
      <br />
      <br />
    </div>
  )
}

class Dashboard extends Component {

  render() {
    let { loading, error, users } = this.props.usersQuery


    if (loading ) {
      return <p className="text-center">Loading ...</p>
    }

    if (error) {
      return <p className="text-center">Error ...</p>
    }

    return (
      <div className="animated fadeIn">
        <div className="row">

          Dashboard

          { users.map( (object, index) =>
            <User
              key={index}
              object={object}
            />
          )}

        </div>
      </div>
    )
  }
}

export default graphql(
  usersQuery, { name: "usersQuery" },
)(Dashboard)
