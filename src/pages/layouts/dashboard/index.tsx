import React, { Component } from 'react'
// import Axios from 'axios'

import Menu from './menu'
import DashboardHeader from './header/Header'
import Stats from './stats'

import { connect } from 'react-redux'
import { getCurrentUser } from 'redux/actions/user.actions'
import Contacts from './contacts'
// import { useUserAction } from "../../redux/hooks/useActions"

// import { API_URL } from '../../common/filepaths'
// import { push } from 'connected-react-router'

interface IProps {
  getCurrentUser: () => object
  children: any
}

class DashboardIndex extends Component<IProps> {
  componentDidMount() {
    this.props.getCurrentUser()

    // const { getCurrentUser } = useUserAction()
    // getCurrentUser()
    // this.checkIfLoggedIn()
  }

  componentDidUpdate() {}

  // checkIfLoggedIn = () => (dispatch: any) => {
  //     Axios.get(API_URL + "user").then((response) => {
  //         console.log(response)
  //     }).catch(error => {
  //         console.log(error)
  //         if(error.response.status === 401) {
  //             console.log("test")
  //             dispatch(push("/login"))
  //         }
  //     })
  // }

  render() {
    return (
      <div className="h-screen flex overflow-hidden animate__animated animate__fadeIn">
        <Menu />

        <div className="flex flex-col min-w-0 flex-1 overflow-hidden bg-cool-gray-50">
          <div className="lg:hidden">
            <div className="flex items-center justify-between bg-gray-50 border-b border-gray-200 px-4 py-1.5">
              <div>
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                  alt="Workflow"
                />
              </div>
              <div>
                <button
                  type="button"
                  className="-mr-3 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900"
                >
                  <span className="sr-only">Open sidebar</span>
                  {/* Heroicon name: outline/menu */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <DashboardHeader />
          <Contacts />
          <Stats />

          <div className="flex-1 relative z-0 flex overflow-hidden">
            <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none xl:order-last">
              {/* Start main area*/}
              <div className="absolute inset-0 py-6 px-4 sm:px-6 lg:px-8">
                <div className="h-full border-2 border-gray-200 border-dashed rounded-lg">
                  {this.props.children}
                </div>
              </div>
              {/* End main area */}
            </main>
          </div>
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch: any) => ({
  getCurrentUser: () => dispatch(getCurrentUser())
})

export default connect(null, mapDispatchToProps)(DashboardIndex)
