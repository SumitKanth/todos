import React, { useState } from "react";
import {
  Box,
  Stack,
  Typography,
  TextField,
  IconButton,
  Checkbox,
  Paper,
  Tooltip,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Add as AddIcon,
} from "@mui/icons-material";
import Todo from "../shared/Todo";

const Todos = () => {
  return (
    <>
      
      <Box
        sx={{
          textAlign: "center",
          padding: "2rem 0",
        }}
      >
        <Stack>
          <Typography
            variant="p"
            fontSize={"2rem"}
            fontFamily={"sans-serif"}
            letterSpacing={".2rem"}
            sx={{
              textDecoration: "underline",
              marginBottom: "2rem",
            }}
          >
            Todo's
          </Typography>

          <Paper>
            <Box>
              <Todo />
            </Box>
          </Paper>
        </Stack>
      </Box>
    </>
  );
};

export default Todos;
