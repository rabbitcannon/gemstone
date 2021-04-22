import React, { Component } from 'react'
import { FlatfileButton } from '@flatfile/react'

class TestComponent extends Component {
  render() {
    return (
      <div
        style={{
          backgroundColor: 'white',
        }}
      >
        <h1>Import using Flatfile</h1>
        <FlatfileButton
          settings={{
            type: 'test import',
            fields: [
              { label: 'name', key: 'name' },
              { label: 'Email', key: 'email' },
            ],
          }}
          licenseKey={'c07b2674-04da-4923-a59e-028dfee48a1f'}
          customer={{
            companyId: 'ABC-123',
            companyName: 'ABC Corp.',
            email: 'john@abc123.com',
            name: 'John Smith',
            userId: '12345',
          }}
          onData={async (results) => {
            // do something with the results
            console.log(results)
          }}
          onRecordChange={(record) => {
            return {
              name: {
                value: record.name + ' from change',
              },
            }
          }}
          onRecordInit={(record) => {
            return {
              name: {
                value: record.name + ' from init',
              },
            }
          }}
          fieldHooks={{
            email: (values) => {
              return values.map(([item, index]) => [
                { value: item + '.au' },
                index,
              ])
            },
          }}
          onCancel={() => {
            console.log('cancel')
          }}
          render={(importer, launch) => {
            return (
              <button
                style={{ backgroundColor: 'blue', color: 'white' }}
                onClick={launch}
              >
                Upload file
              </button>
            )
          }}
        />
      </div>
    )
  }
}

export default TestComponent
