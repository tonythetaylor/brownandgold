import React from 'react'
import Hero from '../../components/hero/Hero'
import LeadershipHero from './LeadershipHero'
import Table, {
  AvatarCell,
  SelectColumnFilter,
  StatusPill,
} from "../../components/tables/LeadershipTable"; // new
import {data} from './data'

const Leadership = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        Cell: AvatarCell,
        imgAccessor: "imgUrl",
        emailAccessor: "email",
      },
      {
        Header: "Title",
        accessor: "title",
      },
      {
        accessor: "email",
      },
      // {
      //   Header: "Age",
      //   accessor: "age",
      // },
      {
        Header: "Role",
        accessor: "role",
        Filter: SelectColumnFilter, // new
        filter: "includes",
      },
    ],
    []
  );

  // const data = React.useMemo(() => getData(), []);
  return (
    <div className="container">
       <LeadershipHero />
       <h1 className="text-center text-3xl font-semibold sm:text-3xl text-[#b58037] dark:text-[#b58037] mb-7 mt-7">
       The National Body of Iota Phi Theta
          </h1>
       <Table columns={columns} data={data} />
    </div>
  )
}

export default Leadership