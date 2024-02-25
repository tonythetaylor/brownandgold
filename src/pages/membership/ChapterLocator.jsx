import React from 'react'
import Hero from '../../components/hero/Hero'
// import LeadershipHero from './LeadershipHero'
import Table, {
  AvatarCell,
  SelectColumnFilter,
  SelectChapterTypeColumnFilter,
  StatusPill,
} from "../../components/tables/Table"; // new
import { chapters } from './data/Iota_Phi_Theta_Chapters-2/chapters'

const ChapterLocator = () => {
   const columns = React.useMemo(
    () => [
      {
        Header: "School",
        accessor: "Name",
      },
      {
        Header: "Chapter",
        accessor: "ChapterDesignation",
      },
      {
        Header: "Chartering Year",
        accessor: "Chartering Year",
      },
      {
        Header: "Region",
        accessor: "Region",
        Filter: SelectColumnFilter, // new
      },
      {
        Header: "Chapter Type",
        accessor: "Chapter_Type",
        Filter: SelectChapterTypeColumnFilter
      },
      {
        Header: "Email",
        accessor: "Email",
      },
    ],
    []
  );

  // const data = React.useMemo(() => getData(), []);
  return (
    <div className="container">
       {/* <LeadershipHero /> */}
       <h1 className="text-center text-3xl font-semibold sm:text-3xl text-[#b58037] dark:text-[#b58037] mb-7 mt-7">
       Chapter Locator
          </h1>
       <Table columns={columns} data={chapters} />
    </div>
  )
}

export default ChapterLocator