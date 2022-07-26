import React from 'react'
import TableHeader from './TableHeader';
import './Table.css';
import TableBody from './TableBody';
const Table = () => {
  return (
    <>
      <table className="content-table">
        <thead>
          <TableHeader/>
        </thead>
        <tbody>
          <TableBody/>
        </tbody>
      </table>
    </>
  )
}

export default Table