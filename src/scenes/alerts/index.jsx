import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataContacts } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material"

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const columns = [
        { 
            field: "id", 
            headerName: "ID" 
        },
        { 
            field: "name", 
            headerName: "Name", 
            flex: 1, 
            cellClassName: "name-column-cell",
        },
        { 
            field: "lastname", 
            headerName: "Last name",
            flex: 1,
            cellClassName: "name-column-cell",
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1,
        },
        { 
            field: "phonenumber", 
            headerName: "Phone Number",
            flex: 1,
        },
        { 
            field: "age", 
            headerName: "Age",
            type: "number",
            headerAlign: "left",
            align: "left",

        },
        { 
            field: "streetName", 
            headerName: "Street Name",
        },
        { 
            field: "homeNumber", 
            headerName: "Home Number",
        },
        { 
            field: "country", 
            headerName: "Country",
        },
        { 
            field: "county", 
            headerName: "County",
        },
        { 
            field: "city", 
            headerName: "City",
        },
        { 
            field: "zipCode", 
            headerName: "Zipcode",
        },
    ]


    
    return(
        <Box m="15px">
            <Header title="Customer Accounts" subtitle="Account data of customers" />
            <Box
            m="30px 0 0 0"
            height="75vh"
            sx={{
                "& .MuiDataGrid-root": {
                    border: "none",
                  },
                  "& .MuiDataGrid-cell": {
                    borderBottom: "none",
                  },
                  "& .name-column--cell": {
                    color: colors.greenAccent[300],
                  },
                  "& .MuiDataGrid-columnHeaders": {
                    backgroundColor: colors.blueAccent[700],
                    borderBottom: "none",
                  },
                  "& .MuiDataGrid-virtualScroller": {
                    backgroundColor: colors.primary[400],
                  },
                  "& .MuiDataGrid-footerContainer": {
                    borderTop: "none",
                    backgroundColor: colors.blueAccent[700],
                  },
                  "& .MuiCheckbox-root": {
                    color: `${colors.greenAccent[200]} !important`,
                  },
                  "& .MuiDataGrid-toolbarContainer .MuiButton-text":{
                    color: `${colors.grey[100]} !important`,
                  }
                }}
            >
                <DataGrid
                rows={mockDataContacts}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                />
            </Box>
        </Box>
    )
}

export default Team;