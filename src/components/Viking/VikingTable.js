import React from "react";
import Spinner from "../../common/Spinner";
import MatchTable from "../Layout/MatchTable";
import useAxiosFetch from "../../api/useAxiosFetch";
import { filterStandings, filterParticipants } from "../../api/filterData";
import { makeStyles } from "@material-ui/styles";
import TablePage from "../Layout/TablePage";

const tableUrl =
  "https://vglive.no/api/vg/tournaments/seasons/1877/standings?type=live-changes";

const VikingTable = () => {
  return <TablePage url={tableUrl} />;
};

export default VikingTable;
