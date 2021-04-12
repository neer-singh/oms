import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useMemo, useState } from 'react';
import { useFilters, usePagination, useSortBy, useTable } from 'react-table';
import {
  Container,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import {
  TAX_TRANSITION_VALUE,
  TAX_TRANSITION_VALUE_COLUMN,
  TAX_PER_UNIT,
  TAX_PER_UNIT_COLUMN,
} from '../../assets/Json/TAX';
import TableTax from '../../components/Table/TableTax';

const Tax = () => {
  const [transition, settransition] = useState(false);
  const memoizedTTVC = useMemo(() => TAX_TRANSITION_VALUE_COLUMN, []);
  const memoizedTTV = useMemo(() => TAX_TRANSITION_VALUE, []);
  const memoizedTPUC = useMemo(() => TAX_PER_UNIT_COLUMN, []);
  const memoizedTPU = useMemo(() => TAX_PER_UNIT, []);
  const columns = transition ? memoizedTPUC : memoizedTTVC;
  const data = transition ? memoizedTPU : memoizedTTV;
  const [filterInput, setFilterInput] = useState('');
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    setFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useSortBy,
    usePagination
  );
  const { pageIndex, pageSize } = state;
  const handleSelectFilterChange = (e) => {
    // const value = Boolean(e.target.value) || undefined;
    const value = e.target.value === 'true' ? true : false;
    settransition(value);
    console.log(typeof value, value);
    // setFilter('state', value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
  };
  // Update the state when input changes
  const handleFilterChange = (e) => {
    const value = e.target.value || undefined;

    setFilter('code', value); // Update the show.name filter. Now our table will filter and show only the rows which have a matching value
    setFilterInput(value);
  };
  return (
    <Container>
      <h4 className='pt-4 pb-5'>Tax</h4>
      <div className='d-flex w-60 ml-3  mb-3 filters'>
        <div className='d-flex flex-column mr-3 w-100'>
          <span>HSN Code</span>
          <InputGroup size='sm'>
            <Input
              value={filterInput}
              onChange={handleFilterChange}
              placeholder='Search by HSN Code'
            />
            <InputGroupAddon addonType='append'>
              <InputGroupText>
                <FontAwesomeIcon className='icon' icon={faSearch} />
              </InputGroupText>
            </InputGroupAddon>
          </InputGroup>
        </div>
        <div className='d-flex flex-column mr-3 w-100'>
          <span>State</span>
          <InputGroup size='sm'>
            <Input
              type='select'
              name='select'
              onChange={(e) => handleSelectFilterChange(e)}
              id='exampleSelect'>
              {[
                { name: 'Transition Value', value: false },
                { name: 'Per-Unit', value: true },
              ].map((data, index) => {
                return (
                  <option value={data.value} key={index}>
                    {data.name}
                  </option>
                );
              })}
            </Input>
          </InputGroup>
        </div>
      </div>

      <TableTax
        columns={columns}
        data={data}
        getTableProps={getTableProps}
        getTableBodyProps={getTableBodyProps}
        headerGroups={headerGroups}
        page={page}
        nextPage={nextPage}
        previousPage={previousPage}
        canNextPage={canNextPage}
        canPreviousPage={canPreviousPage}
        pageOptions={pageOptions}
        state={state}
        gotoPage={gotoPage}
        pageCount={pageCount}
        setPageSize={setPageSize}
        prepareRow={prepareRow}
        setFilter={setFilter}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
    </Container>
  );
};

export default Tax;
