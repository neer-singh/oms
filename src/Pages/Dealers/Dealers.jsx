import React, { useMemo } from 'react';
import { TableC } from '../../components/Table/TableC';
import { DEALERS, DEALERS_COLUMN, STATES } from '../../assets/Json/DEALERS';

const Dealers = () => {
  const columns = useMemo(() => DEALERS_COLUMN, []);
  const data = useMemo(() => DEALERS, []);
  return (
    <TableC
      columns={columns}
      searchTitle='Dealer'
      searchPlaceHolder='Search Dealer'
      dropdownList={STATES}
      data={data}
      heading="Dealer's List"
      bordered={true}
      filter='name'
      dropfilter='state'
    />
  );
};

export default Dealers;
