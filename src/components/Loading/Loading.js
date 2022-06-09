import React from "react";
import Stack from "@mui/material/Stack";
import LinearProgress from "@mui/material/LinearProgress";

const Loading = () => {
  return (
    <div
      style={{ height: "100vh" }}
      className="flex justify-center items-center text-2xl text-amber-600"
    >
      <Stack sx={{ width: "100%", color: "grey.500" }} spacing={2}>
        <LinearProgress color="secondary" />
        <LinearProgress color="success" />
        <LinearProgress color="inherit" />
      </Stack>
    </div>
  );
};

export default Loading;
