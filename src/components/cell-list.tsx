import { useTypedSelector } from "../hooks/used-type-selector";
import CellListItem from "./cell-list-item";
import AddCell from "./add-cell";
import { Fragment } from "react";
import './cell-list.css'

const CellList: React.FC = () => {
  const cells = useTypedSelector((reducer) => {
    const cellsReducer = reducer.cells;
    return cellsReducer
      ? cellsReducer.order.map((id) => cellsReducer.data[id])
      : [];
  });

  const renderedCells = cells.map((cell) => (
    <Fragment key={cell.id}>
      <CellListItem cell={cell} />
      <AddCell previousCellId={cell.id} />
    </Fragment>
  ));

  return (
    <div className="cell-list">
      <AddCell forceVisible={cells.length === 0} previousCellId={null} />
      {renderedCells}
    </div>
  );
};

export default CellList;
