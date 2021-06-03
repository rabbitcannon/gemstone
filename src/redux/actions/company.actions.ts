import { Dispatch } from 'redux'
import { Company, CompanyTypes } from 'redux/types/company.types'
import Axios from 'axios'
import { companyPaths } from 'common/url-paths'

/*
Action Interfaces
 */
export interface GetCompanyAction {
  type: typeof CompanyTypes.GET_USER_COMPANY
  payload: Company
}

export interface GetCompanyErrorAction {
  type: typeof CompanyTypes.GET_USER_COMPANY_ERROR
  payload: string
}

/*
Get Current User Information
 */
export const getUserCompany = () => {
  return async (dispatch: Dispatch<GetCompanyAction | any>) => {
    await Axios.get<Company>(companyPaths.USER_COMPANY)
      .then((response) => {
        dispatch({
          type: CompanyTypes.GET_USER_COMPANY,
          payload: response.data
        })
      })
      .catch((error) => {
        dispatch({
          type: CompanyTypes.GET_USER_COMPANY_ERROR,
          payload: error.message
        })
      })
  }
}
