import React from 'react'
import { connect, useDispatch } from 'react-redux'
import { User } from 'redux/types/user.types'
import { push } from 'connected-react-router'

interface IProfile {
  readonly profile?:
    | {
        first_name: string
        last_name: string
      }
    | undefined
}

const MenuProfileIndex: React.FC<IProfile> = ({ profile }) => {
  const dispatch = useDispatch()

  return (
    <div className="flex-shrink-0 flex p-4">
      <a
        href="#"
        onClick={() => dispatch(push('/profile'))}
        className="flex-shrink-0 w-full group block"
      >
        <div className="flex items-center">
          <div>
            <img
              className="inline-block h-9 w-9 rounded-full"
              src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
              alt=""
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-300 group-hover:text-gray-600">
              {profile?.first_name} {profile?.last_name}
            </p>
            <p className="text-xs font-medium">View profile</p>
          </div>
        </div>
      </a>
    </div>
  )
}

const mapStateToProps = (state: User) => {
  return {
    profile: state.user.profile
  }
}

export default connect(mapStateToProps, { push })(MenuProfileIndex)
