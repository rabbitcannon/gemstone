import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const UploadForm: React.FC = () => {
  return (
    <form className="space-y-8">
      <div className="space-y-8">
        <div className="pt-8">
          <div className="mt-6 grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="payrollCheckDate"
                className="block text-sm font-medium text-gray-700"
              >
                Payroll Check Date
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="payrollCheckDate"
                  id="payrollCheckDate"
                  className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
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
                  $
                </span>
                <input
                  type="number"
                  name="spreadSheetTotal"
                  id="spreadSheetTotal"
                  className="focus:ring-indigo-500 focus:border-indigo-500 flex-1 block w-full rounded-none rounded-r-md sm:text-sm border-gray-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* File Uplaod START */}
        <div className="sm:col-span-6">
          <label
            htmlFor="cover_photo"
            className="block text-sm font-medium text-gray-700"
          >
            Attach spreadsheet file
          </label>
          <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
            <div className="space-y-1 text-center">
              <svg
                className="mx-auto h-12 w-12 text-gray-400"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path
                  d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="flex text-sm text-gray-600">
                <label
                  htmlFor="file-upload"
                  className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500
                  focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500"
                >
                  <span>Upload a file</span>
                  <input
                    id="file-upload"
                    name="file-upload"
                    type="file"
                    className="sr-only"
                  />
                </label>
                <p className="pl-1">or drag and drop</p>
              </div>
              <p className="text-xs text-gray-500">CSV, XLS, XLSX up to 40MB</p>
            </div>
          </div>
        </div>
        {/* File Uplaod END */}

        <div style={{ textAlign: 'center' }}>
          <button className="btn bg-tag-orange">
            <FontAwesomeIcon icon={['fas', 'upload']} />
            &nbsp;Begin Upload
          </button>
        </div>
      </div>
    </form>
  )
}

export default UploadForm
