function Table() {
    let products = [
      { title: 'Cabbage', id: 1 },
      { title: 'Garlic', id: 2 },
      { title: 'Apple', id: 3 },
    ];
  
    return (<>
      <table className="table text-left">
        <thead className='table-header-group'>
          <tr className='table-row'>
            <th className='table-cell '>id</th>
            <th className='table-cell'>title</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) =>
            <tr className='table-row'>
              <td className='table-cell'>{p.id}</td>
              <td className='table-cell'>{p.title}</td>
            </tr>
          )}
        </tbody>
      </table>
      <table className="min-w-full text-left text-sm font-light">
        <thead className="border-b font-medium dark:border-neutral-500">
          <tr>
            <th scope="col" className="px-6 py-4">ID</th>
            <th scope="col" className="px-6 py-4">title</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p) =>
            <>
              <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-6 py-4 font-medium">{p.id}</td>
                <td className="whitespace-nowrap px-6 py-4">{p.title}</td>
              </tr>
            </>
          )}
        </tbody>
      </table>
    </>)
  }
  
  export default Table