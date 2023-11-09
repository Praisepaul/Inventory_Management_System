import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Columns from './Columns'

export default function Home() {
  return (
    <>
      <div style={{ margin: '5%' }}>
        <Table striped bordered hover variant='dark' size='sm'>
          <thead>
            <tr>
              <th>Product Detail</th>
              <th>Price Unit</th>
              <th>Quantity in Stock</th>
              <th>Value stock in hand</th>
              <th>Quantity sold</th>
            </tr>
          </thead>

          <tbody>
            {Columns && Columns.length > 0
              ? Columns.map((item) => {
                  return (
                    <tr>
                      <td>{item.Pd}</td>
                      <td>{item.Qp}</td>

                      <td>{item.Pu}</td>
                      <td>{item.Qis}</td>
                      <td>{item.Qs}</td>
                    </tr>
                  )
                })
              : 'No data available'}
          </tbody>
        </Table>
      </div>
    </>
  )
}
