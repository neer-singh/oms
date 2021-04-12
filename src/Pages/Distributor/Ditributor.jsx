import React, { useMemo } from 'react';
import { DEALERS_COLUMN, STATES, DEALERS } from '../../assets/Json/DEALERS';
import { TableC } from '../../components/Table/TableC';

const Distributor = () => {
  const columns = useMemo(() => DEALERS_COLUMN, []);
  const data = useMemo(() => DEALERS, []);
  return (
    <TableC
      columns={columns}
      searchTitle='Distributor'
      searchPlaceHolder='Search Distributor'
      dropdownList={STATES}
      data={data}
      heading="Distributor's List"
      filter='name'
      dropfilter='state'
    />
  );
};

export default Distributor;
