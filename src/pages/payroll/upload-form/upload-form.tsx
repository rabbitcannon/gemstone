import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UploadForm: React.FC = () => {
  return (
    <div className="panel border">
      <div className="panel__content">
        <form className="space-y-8">
          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <div className="flex justify-between">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Payroll Check Date
                  </label>
                  <span className="text-sm text-gray-500" id="email-optional">
                    <i>Required</i>
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="date"
                    name="email"
                    id="email"
                    className="shadow-sm focus:ring-tag-orange focus:border-tag-orange block w-full sm:text-sm border-gray-300 rounded-md"
                    placeholder="MM/DD/YYYY"
                    aria-describedby="payroll-check-date-required"
                  />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label
                  htmlFor="spreadSheetTotal"
                  className="block text-sm font-medium text-gray-700"
                >
                  Spreadsheet Total
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                    <FontAwesomeIcon icon={['fas', 'dollar-sign']} />
                  </span>
                  <input
                    type="number"
                    name="spreadSheetTotal"
                    id="spreadSheetTotal"
                    className="focus:ring-tag-orange focus:border-tag-orange flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                  />
                </div>
              </div>
            </div>

            {/* File Upload START */}
            <div className="sm:col-span-6">
              <label htmlFor="cover_photo" className="block text-sm font-medium text-gray-700">
                Attach spreadsheet file
              </label>
              <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                <div className="space-y-1 text-center">
                  <FontAwesomeIcon
                    icon={['far', 'file-excel']}
                    size="3x"
                    className="text-gray-200"
                  />
                  <div className="flex text-sm text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer bg-white rounded-md font-medium text-tag-orange
                      focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                    >
                      <span>Upload a file</span>
                      <input id="file-upload" name="file-upload" type="file" className="sr-only" />
                    </label>
                    <p className="pl-1">or drag and drop</p>
                  </div>
                  <p className="text-xs text-gray-500">CSV, XLS, XLSX up to 40MB</p>
                </div>
              </div>
            </div>
            {/* File Uplaod END */}

            <div className="grid justify-center mb-4">
              <button className="btn bg-tag-orange">
                <FontAwesomeIcon icon={['fas', 'upload']} />
                &nbsp;Begin Upload
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="panel__footer">
        <a href="#">
          Questions? Contact Us&nbsp;
          <FontAwesomeIcon icon={['fas', 'arrow-right']} />
        </a>
      </div>
    </div>
  )
}

export default UploadForm
