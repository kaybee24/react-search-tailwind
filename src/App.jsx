import React, { useState } from 'react';
import Table from './Table';
import { Users } from "./users";


function App() {
  const [query, setQuery] = useState('');

  // console.log(query)
  // console.log(Users.filter(user => user.first_name.toLowerCase().includes("fe")))

  // console.log(Users[0]["email"])

  const search = (data) => {
    return data.filter(item =>
      item.first_name.toLowerCase().includes(query) ||
      item.last_name.toLowerCase().includes(query) ||
      item.team.name.toLowerCase().includes(query)
    );
  }

  return (
    <>
      <div className="mt-8 text-center">
        <h1 className="text-3xl text-teal-500	uppercase font-semibold">"If you're not talking, you're not playing defense"</h1>
      </div>
      <div className="mt-8 text-center">
        <input
          type="text"
          placeholder="Search…"
          className='search'
          onChange={event => setQuery(event.target.value)} />
        <Table data={search(Users)} />
      </div >
    </>
  )
}

export default App;