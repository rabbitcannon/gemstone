import React, { Component } from "react";
import { connect } from "react-redux";
import {UserType} from "../../redux/types/user.types";

interface StateFromProps {
    user: UserType
}

class MenuProfile extends Component<StateFromProps, {}> {
    render() {
        const { user } = this.props
console.log("User: ", user)
console.log("Profile: ", user.profile)
        return (
            <div className="flex-shrink-0 flex p-4">
                <a href="#" className="flex-shrink-0 w-full group block">
                    <div className="flex items-center">
                        <div>
                            <img className="inline-block h-9 w-9 rounded-full"
                                 src="https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=8&w=256&h=256&q=80"
                                 alt="" />
                        </div>
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-300 group-hover:text-gray-600">
                                {/*{user.profile.first_name} {user?.last_name}*/}
                            </p>
                            <p className="text-xs font-medium text-gray-100 group-hover:text-gray-500">
                                View profile
                            </p>
                        </div>
                    </div>
                </a>
            </div>
        );
    }
}
//---
const mapStateToProps = (state: any) => {
    console.log(state)
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(MenuProfile);