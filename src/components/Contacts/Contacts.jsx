
export const Contacts = ({children,valueFilter,onChangeFilter}) => {
  return (
    <>
    <h2>Contacts</h2>
    <div>
    <label >Find contacts by name</label>
    <input type="text" value={valueFilter} onChange={e=>onChangeFilter('filter',e.target.value)} />
    </div>
    {children}
    </>
  )
}
