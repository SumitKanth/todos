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
import { sampleTodos } from "../../constants/sample";
import toast, { Toaster } from "react-hot-toast";

const Todo = () => {
  const [inputValue, setInputValue] = useState("");

  const todoAddHandler = () => {
    if (!inputValue) {
      toast.error("Plz Provide Todo 😒");
      return;
    }

    setInputValue("");
  };

  const editTodoHandler = (todo, id) => {
    setInputValue(todo);
  };

  const deleteTodoHandler = (id) => {};

  const unCheckedTodoHandler = (id) => {};

  const checkedTodoHandler = (id) => {};

  return (
    <>
    <Toaster />
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          width: "fit-content",
          margin: "auto",
        }}
      >
        <TextField
          id="standard-basic"
          label="Enter Todo"
          variant="standard"
          sx={{
            marginTop: "2rem",
          }}
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />

        <Tooltip title={"Add Todo"}>
          <IconButton
            size="large"
            sx={{
              position: "absolute",
              right: "-3rem",
              bottom: "-.5rem",
            }}
            onClick={todoAddHandler}
          >
            <AddIcon color="success" />
          </IconButton>
        </Tooltip>
      </Stack>
      <Stack
        sx={{
          textAlign: "center",
          alignItems: "center",
          padding: "2rem 0",
        }}
      >
        {sampleTodos.map((todos, ind) => {
          return (
            <Paper
              key={ind}
              sx={{
                margin: ".5rem 0",
                padding: ".7rem 1.5rem",
              }}
            >
              <Stack
                direction={"row"}
                sx={{
                  alignItems: "center",
                }}
                spacing={"1.5rem"}
              >

                {todos.isCompleted ? (
                  <>
                    <Checkbox defaultChecked onClick={() => unCheckedTodoHandler(todos._id)}/>
                    <Typography
                      variant="p"
                      sx={{
                        textDecoration: "line-through",
                      }}
                    >
                      {todos.todo}
                    </Typography>
                  </>
                ) : (
                  <>
                    <Checkbox onClick={() => checkedTodoHandler(todos._id)}/>
                    <Typography variant="p">{todos.todo}</Typography>
                  </>
                )}

                <Tooltip title="Edit Todo">
                  <IconButton
                    color="#808080"
                    size="large"
                    onClick={() => editTodoHandler(todos.todo, todos._id)}
                  >
                    <EditIcon />
                  </IconButton>
                </Tooltip>

                <Tooltip title="Delete Todo">
                  <IconButton
                    color="warning"
                    size="large"
                    onClick={() => deleteTodoHandler(todos._id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Tooltip>
              </Stack>
            </Paper>
          );
        })}
      </Stack>
    </>
  );
};

export default Todo;
