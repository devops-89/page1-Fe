import { COLORS } from "@/utils/colors";
import { nunito, raleway } from "@/utils/fonts";
import { Box, Stack, Tab, Tabs, Typography } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../tabPanel";
import OnewayForm from "./oneWayForm";
import RoundTrip from "./roundTripForm";
import Multiway from "./multiForm";

const FlightForm = () => {
  const tab = [
    {
      label: "Oneway",
    },
    {
      label: "Round Trip",
    },
    {
      label: "Multi Trip",
    },
  ];

  const [flightValue, setFlightValue] = useState(0);

  const flightTabChangeHandler = (e, newValue) => {
    setFlightValue(newValue);
  };

  return (
    <Box sx={{ p: 1 }}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Tabs
          value={flightValue}
          sx={{
            "& .MuiTab-root": {
              width: 120,
              minHeight: 40,
              top: 5,
              borderRadius: 8,
              padding: 0,
              transition: "0.5s ease all",
            },
            "& .MuiTabs-indicator": {
              display: "none !important",
            },
            "& .Mui-selected": {
              color: `${COLORS.BLACK} !important`,
            },
          }}
          onChange={flightTabChangeHandler}
        >
          {tab.map((val, i) => (
            <Tab
              icon={
                <Box
                  sx={{
                    border:
                      i === flightValue
                        ? `3px solid ${COLORS.SECONDARY}`
                        : "1px solid #d7d7d7",
                    borderRadius: "50%",
                    width: 10,
                    height: 10,
                  }}
                ></Box>
              }
              label={
                <Typography
                  sx={{
                    fontSize: 12,
                    fontWeight: 500,
                    fontFamily: nunito.style,
                  }}
                >
                  {val.label}
                </Typography>
              }
              iconPosition="start"
              key={i}
            />
          ))}
        </Tabs>
        <Typography sx={{ fontSize: 15, fontFamily: raleway.style, mr: 2 }}>
          Millions of cheap flights. One simple search
        </Typography>
      </Stack>

      <TabPanel value={flightValue} index={0}>
        <OnewayForm onSubmit={"jee"} />
      </TabPanel>
      <TabPanel value={flightValue} index={1}>
        <RoundTrip />
      </TabPanel>
      <TabPanel value={flightValue} index={2}>
        <Multiway />
      </TabPanel>
    </Box>
  );
};

export default FlightForm;
