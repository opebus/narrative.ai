'use client';
import React from 'react';
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  RadioGroup,
  Radio,
} from '@nextui-org/react';

const colors = [
  'default',
  'primary',
  'secondary',
  'success',
  'warning',
  'danger',
];

export default function App() {
  return (
    <div className='flex flex-col gap-3'>
      <Table
        selectionMode='multiple'
        defaultSelectedKeys={['2', '3']}
        aria-label='Example static collection table'
      >
        <TableHeader>
          <TableColumn>Name</TableColumn>
          <TableColumn>Location</TableColumn>
          <TableColumn>Ranking</TableColumn>
        </TableHeader>
        <TableBody>
          <TableRow key='1'>
            <TableCell>Harvard University</TableCell>
            <TableCell>Cambridge, MA</TableCell>
            <TableCell>#1</TableCell>
          </TableRow>
          <TableRow key='2'>
            <TableCell>Stanford University</TableCell>
            <TableCell>Stanford, CA</TableCell>
            <TableCell>#2</TableCell>
          </TableRow>
          <TableRow key='3'>
            <TableCell>MIT</TableCell>
            <TableCell>Cambridge, MA</TableCell>
            <TableCell>#3</TableCell>
          </TableRow>
          <TableRow key='4'>
            <TableCell>UC Berkeley</TableCell>
            <TableCell>Berkeley, CA</TableCell>
            <TableCell>#4</TableCell>
          </TableRow>
          <TableRow key='5'>
            <TableCell>Princeton University</TableCell>
            <TableCell>Princeton, NJ</TableCell>
            <TableCell>#5</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
