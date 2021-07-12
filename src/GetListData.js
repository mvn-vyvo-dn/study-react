import React, { useEffect, useState } from 'react';

const GetListData = () => {
  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPage, setTotalPage] = useState();

  useEffect(() => {
    fetch(`https://reqres.in/api/users?page=${currentPage}`)
      .then(e => e.json())
      .then(e => {
        // console.log(e);
        setUsers(e.data);
        setTotalPage(e.total_pages);
      });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((currentPage) => currentPage + 1);
  }

  function goToPrevPage() {
    setCurrentPage((currentPage) => currentPage - 1);
  }

  function changePage(e) {
    setCurrentPage(Number(e.target.innerText));
  }

  let pageGroups = [];
  for (let i = 1; i <= totalPage; i++) {
    pageGroups.push(<li key={i} className={currentPage === i ? 'active' : ''} onClick={changePage}>{i}</li>);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Email Address</th>
            <th>First name</th>
            <th>Last name</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map(e => (
              <tr key={e.id}>
                <td>{e.email}</td>
                <td>{e.first_name}</td>
                <td>{e.last_name}</td>
              </tr>
            ))
          }
        </tbody>
      </table>

      <ul className='pagination'>
        <li onClick={goToPrevPage} className={currentPage === 1 ? 'disabled' : ''}>prev</li>
        {pageGroups}
        <li onClick={goToNextPage} className={currentPage === totalPage ? 'disabled' : ''}>next</li>
      </ul>
    </div>
  )
}

export default GetListData;