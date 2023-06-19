import {Box, Container, Grid, Typography, useTheme} from "@mui/material";
import { tokens } from "../../theme";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import StatBox from "../../components/StatBox";
import PieChart from "../../components/PieChart";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    
    return (
        <div>
            <Container  maxWidth={false}>
                {/* HEADER */}
                <Box mt="-50px" display="flex" justifyContent="space-between" alignItems="center">
                    <Header title="Monitoring FHICT"/>
                </Box>

                {/* GRID & CHARTS */}
                <Box
                    sx={{flexWrap: "wrap"}}
                    display="grid"
                    gridTemplateColumns="repeat(12, 1fr)"
                    gridAutoRows="140px"
                    gap="20px"
                >
                    {/* ROW 1 */}

                    {/* Aantal connecties */}
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title="12,361"
                            subtitle="Aantal connecties"
                            icon={
                                <EmailIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                            }
                        />
                    </Box>

                    {/* CPU Gebruik */}
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title="40%"
                            subtitle="CPU Gebruik"
                            // progress="0.30"
                            // increase="+5%"
                            icon={
                                <PointOfSaleIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                            }
                        />
                    </Box>

                    {/* Opslag gebruik */}
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title="42TB"
                            subtitle="Opslag gebruik"
                            // progress="0.30"
                            // increase="+5%"
                            icon={
                                <PersonAddIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                            }
                        />
                    </Box>

                    {/* Aantal meldingen */}
                    <Box
                        gridColumn="span 3"
                        backgroundColor={colors.primary[400]}
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <StatBox
                            title="6"
                            subtitle="Aantal meldingen"
                            // progress="0.30"
                            // increase="+5%"
                            icon={
                                <TrafficIcon
                                    sx={{ color: colors.greenAccent[600], fontSize: "26px" }}
                                />
                            }
                        />
                    </Box>

                    {/* ROW 2 */}

                    {/* LINECHART */}
                    <Box
                        gridColumn="span 12"
                        gridRow="span 2"
                        backgroundColor={colors.primary[400]}
                    >
                        <Box
                            mt="25px"
                            p="0 30px"
                            display="flex "
                            justifyContent="space-between"
                            alignItems="center"
                        >
                            <Box>
                                <Typography
                                    variant="h5"
                                    fontWeight="600"
                                    color={colors.grey[100]}
                                >
                                    Number of sessions overtime
                                </Typography>
                                <Typography
                                    variant="h3"
                                    fontWeight="bold"
                                    color={colors.greenAccent[500]}
                                >
                                    4.463.290
                                </Typography>
                            </Box>
                        </Box>
                        <Box height="250px" m="-20px 0 0 0">
                            <LineChart isDashboard={true} />
                        </Box>
                    </Box>
                </Box>

                <Grid container sx={{marginTop:"20px"}}>
                    {/* ROW 3 */}
                    {/* Pie 1 */}
                    <Grid item
                          xs={12} sm={3.9} md={3.9}
                          sx={{height: "300px", justifyContent: "center", alignItems: "center", marginBottom:"20px"}}
                          backgroundColor={colors.primary[400]}
                    >
                        <PieChart sx={{margin:"10px"}}/>
                    </Grid>
                    <Grid item sm={0.15} md={0.15}></Grid>
                    {/* Pie 2 */}
                    <Grid item
                          xs={12} sm={3.9} md={3.9}
                          sx={{height: "300px", justifyContent: "center", alignItems: "center", marginBottom:"20px"}}
                          backgroundColor={colors.primary[400]}
                    >
                        <PieChart sx={{margin:"10px"}}/>
                    </Grid>
                    <Grid item sm={0.15} md={0.15}></Grid>
                    {/* Pie 3 */}
                    <Grid item
                          xs={12} sm={3.9} md={3.9}
                          sx={{height: "300px", justifyContent: "center", alignItems: "center", marginBottom:"20px"}}
                          backgroundColor={colors.primary[400]}
                    >
                        <PieChart sx={{margin:"10px"}}/>
                    </Grid>
                </Grid>
                {/*/!* GRID & CHARTS *!/*/}
                {/*<Box*/}
                {/*    sx={{flexWrap: "wrap", paddingBottom: "20px"}}*/}
                {/*    display="grid"*/}
                {/*    gridTemplateColumns="repeat(12, 1fr)"*/}
                {/*    gridAutoRows="140px"*/}
                {/*    gap="20px"*/}
                {/*>*/}
                {/*    /!* ROW 2 *!/*/}
                {/*    /!* LINECHART *!/*/}
                {/*    <Box*/}
                {/*        gridColumn="span 12"*/}
                {/*        gridRow="span 2"*/}
                {/*        backgroundColor={colors.primary[400]}*/}
                {/*    >*/}
                {/*        <Box*/}
                {/*            mt="25px"*/}
                {/*            p="0 30px"*/}
                {/*            display="flex "*/}
                {/*            justifyContent="space-between"*/}
                {/*            alignItems="center"*/}
                {/*        >*/}
                {/*            <Box>*/}
                {/*                <Typography*/}
                {/*                    variant="h5"*/}
                {/*                    fontWeight="600"*/}
                {/*                    color={colors.grey[100]}*/}
                {/*                >*/}
                {/*                    Number of sessions overtime*/}
                {/*                </Typography>*/}
                {/*                <Typography*/}
                {/*                    variant="h3"*/}
                {/*                    fontWeight="bold"*/}
                {/*                    color={colors.greenAccent[500]}*/}
                {/*                >*/}
                {/*                    4.463.290*/}
                {/*                </Typography>*/}
                {/*            </Box>*/}
                {/*        </Box>*/}
                {/*        <Box height="250px" m="-20px 0 0 0">*/}
                {/*            <LineChart isDashboard={true} />*/}
                {/*        </Box>*/}
                {/*    </Box>*/}
                {/*</Box>*/}
            </Container>
        </div>
      );
    };
    
export default Dashboard;