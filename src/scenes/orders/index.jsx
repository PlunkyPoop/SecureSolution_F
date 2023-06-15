import { Box } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataOrders } from "../../data/mockData";
import Header from "../../components/Header";
import { useTheme } from "@mui/material"
import { useEffect, useState } from "react";

import PopUp from "../../components/PopUp";

const Team = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const [orderdata, setOrderData] = useState([]);
    const [popupTrigger, setPopupTrigger] = useState(false);

    const handleRowClick = (params) => {
      setOrderData(params.row);
      setPopupTrigger(true);
    };

    const columns = [
        { 
            field: "id", 
            headerName: "ID",
            flex: 1
        },
        { 
            field: "name", 
            headerName: "Name", 
            cellClassName: "name-column-cell",
            flex: 1
        },
        { 
            field: "lastname", 
            headerName: "Last name",
            cellClassName: "name-column-cell",
            flex: 1
        },
        {
            field: "orderdate",
            headerName: "Order Date",
            flex: 1
        },
        {
            field: "deliverydate",
            headerName: "Delivery Date",
            flex: 1
        },
        {
            field: "status",
            HeaderName: "Status of Order",
            flex: 1
        },
        {
            field: "email",
            headerName: "Email",
            flex: 1
        },
        { 
            field: "phonenumber", 
            headerName: "Phone Number",
            flex: 1
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
                rows={mockDataOrders}
                columns={columns}
                components={{ Toolbar: GridToolbar }}
                sx={{ overflowX: "scroll "}}
                onRowClick={handleRowClick}
                />

                <PopUp trigger={popupTrigger} setTrigger={setPopupTrigger}>
                  <h3>Order Number {orderdata.id}</h3>
                </PopUp>

            </Box>
        </Box>
    )
}

export default Team;