import React, { Fragment } from 'react'
import { Button, Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import Columns from './Columns'

export default function OrderHome() {
  return (
    <>
      <div style={{ margin: '5%' }}>
        <Table striped bordered hover variant='dark' size='sm'>
          <thead>
            <tr>
              <th>Order Detail</th>
              <th>Price per Unit</th>
              <th>Quantity</th>
              <th>Total</th>
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
                      <td>{item.total}</td>
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
