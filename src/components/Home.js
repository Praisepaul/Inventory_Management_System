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
              <th>Inventory Control</th>
              <th>Product Detail</th>
              <th>Quantity Purchase</th>
              <th>Price Unit</th>
              <th>Quantity in Stock</th>
              <th>Value stock in hand</th>
              <th>Reorder Level</th>
              <th>Recorder Quantity sold</th>
              <th>Quantity sold</th>
              <th>Discontinued product</th>
            </tr>
          </thead>

          <tbody>
            {Columns && Columns.length > 0
              ? Columns.map((item) => {
                  return (
                    <tr>
                      <td>{item.Ic}</td>

                      <td>{item.Pd}</td>
                      <td>{item.Qp}</td>

                      <td>{item.Pu}</td>
                      <td>{item.Qis}</td>

                      <td>{item.Vh}</td>
                      <td>{item.Rl}</td>

                      <td>{item.Rqs}</td>
                      <td>{item.Qs}</td>
                      <td>{item.Dp}</td>
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
