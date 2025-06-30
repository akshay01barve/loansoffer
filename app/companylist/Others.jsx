import TeamTable from "./TeamTable"; // adjust the path accordingly

const TABLE_HEAD = ["SM Name", "Code", "Mail", "Number", "Location","Boss Name", "Boss Mail","Boss Number" ,"Edit"];
const TABLE_ROWS = [
  {
    name: "KIRTI PATIL",
    code: "K8946",
    email: "Kirti.Patil1@hdfcbank.com",
    number: "9921234567",
    location: "Pune_Prime",
    bossName: "Prashanta Paul",
    bossEmail: "prashanta.paul@hdfcbank.com",
    bossNumber: "9921234567",
    edit: "Edit",
  },
  
];

const Others = () => {
  return (
    <div>
      <TeamTable
        title="Team members and roles"
        description="Overview of the key personnel involved in our project and their geographical distribution."
        tableHead={TABLE_HEAD}
        tableRows={TABLE_ROWS}
      />
    </div>
  );
};

export default Others;
