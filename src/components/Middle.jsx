import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Post from "./Post";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function Middle() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", paddingTop: "80px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab sx={{ marginLeft: "50px" }} label="Primary" {...a11yProps(0)} />
          <Tab
            sx={{ marginLeft: "80px" }}
            label="Promotions"
            {...a11yProps(1)}
          />
          <Tab sx={{ marginLeft: "80px" }} label="Social" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Post />
        <Post />
        
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        <Post />
        
      </CustomTabPanel>
    </Box>
  );
}

// import * as React from "react";
// import PropTypes from "prop-types";
// import Tabs from "@mui/material/Tabs";
// import Tab from "@mui/material/Tab";
// import Typography from "@mui/material/Typography";
// import Box from "@mui/material/Box";
// import Post from "./Post";
// import { useParams } from "react-router-dom";

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box sx={{ p: 3 }}>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

// export default function Middle() {
//   const [value, setValue] = React.useState(1);

//   const handleChange = (event, newValue) => {
//     setValue(newValue);
//   };
//   const handleTabClick = (id) => {
//     setValue(id);
//   };

//   const [message, setTeam] = React.useState([]);

//   React.useEffect(() => {
//     fetch("gmail.json")
//       .then((res) => res.json())
//       .then((data) => setTeam(data));
//     console.log({ setTeam });
//   }, []);

//   const categories = ["Primary", "Promotions"];
//   const { workplace } = useParams();
//   const initialIndex = categories.indexOf(workplace);
//   const [tabIndex, setTabIndex] = React.useState(initialIndex);
//   const remote = message.filter((item) => item.workplace === "Primary");
//   const onsite = message.filter((item) => item.workplace === "Promotions");
//   const Internship = message.filter((item) => item.workplace === "Social");
//   return (
//     <Box sx={{ width: "100%", paddingTop: "80px" }}>
//       <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
//         <Tabs
//           value={value}
//           defaultIndex={tabIndex}
//           onChange={handleChange}
//           onSelect={(index) => setTabIndex(index)}
//           aria-label="basic tabs example"
//         >
//           <Tab sx={{ marginLeft: "50px" }} label="Primary" {...a11yProps(0)} />
//           <Tab
//             sx={{ marginLeft: "80px" }}
//             label="Promotions"
//             {...a11yProps(1)}
//           />
//           <Tab sx={{ marginLeft: "80px" }} label="Social" {...a11yProps(2)} />
//         </Tabs>
//       </Box>
//       <CustomTabPanel value={value} index={0} onClick={() => handleTabClick(1)}>
//         <Post items={remote} />
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={1}>
//         <Post items={onsite} />
//       </CustomTabPanel>
//       <CustomTabPanel value={value} index={2}>
//         <Post items={Internship} />
//       </CustomTabPanel>
//     </Box>
//   );
// }
