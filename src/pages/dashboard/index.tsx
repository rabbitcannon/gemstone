import React, {Component} from "react";
import Axios from 'axios'

import Menu from "../layout/Menu"
import DashboardHeader from "./Header"
import Stats from "./Stats"

import { connect } from 'react-redux'
// import { getCurrentUser } from "../../redux/actions/user.actions";

import { API_URL } from '../../common/filepaths'

// interface IProps {
//     getCurrentUser: () => any
// }

// class DashboardIndex extends Component<IProps> {
class DashboardIndex extends Component {
    // componentDidMount() {
    //     this.props.getCurrentUser()
    // }

    componentDidUpdate() {
        this.checkIfLoggedIn()
    }

    checkIfLoggedIn = () => {
        Axios.get(API_URL + "user").then(() => {
        }).catch(error => {
            if(error.response.status === 401) {
                window.location.replace("/login")
            }
        })
    }

    render() {
        return (
            <div className="h-screen flex overflow-hidden">

                <Menu />

                <div className="flex flex-col min-w-0 flex-1 overflow-hidden bg-cool-gray-50">
                    <div className="lg:hidden">
                        <div
                            className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
                            <div>
                                <img className="h-8 w-auto"
                                     src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                                     alt="Workflow" />
                            </div>
                            <div>
                                <button type="button"
                                        className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900">
                                    <span className="sr-only">Open sidebar</span>
                                    {/* Heroicon name: outline/menu */}
                                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none"
                                         viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                              d="M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <DashboardHeader />
                    <Stats />

                    <div className="flex-1 relative z-0 flex overflow-hidden">
                        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">


                            {/* Start main area*/}
                            <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg"></div>
                            </div>
                            {/* End main area */}
                        </main>
                    </div>
                </div>
            </div>
        );
    }
}

// const mapDispatchToProps = (dispatch: any) => ({
//     getCurrentUser: () => dispatch(getCurrentUser())
// })
//
// export default connect(null, mapDispatchToProps)(DashboardIndex);

export default DashboardIndex

