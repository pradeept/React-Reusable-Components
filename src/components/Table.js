
function Table({data,config,keyFn}){

    const tableHeader = config.map((column)=>{
        return <th key={column.label}>{column.label}</th>
    });


    const renderedRows = data.map((rowData)=>{
        
        //iteration 1: renders one object
        const renderedCells = config.map((column) => {
            return (
              <td className="p-2" key={column.label}>
                {column.render(rowData)}
              </td>
            );
          });
      
          return (
            //iteration 1: takes columns rendered from nested map & insert into tr i.e. table row
            <tr className="border-b" key={keyFn(rowData)}>
              {renderedCells}
            </tr>
          );
    });

    return <>
        <table className="table-auto border-spacing-2">
            <thead >
                <tr className="border-b-2">
                    {tableHeader}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    </>

}

export default Table;