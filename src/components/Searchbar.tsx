import {
  FormControl,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";
import { ChangeEvent } from "react";

type SearchbarProps = {
  title: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  onClick?: () => void;
  width: number;
};

export const Searchbar = (props: SearchbarProps) => {
  return (
    <Grid justifyContent={"center"} alignItems={"center"}>
      <FormControl variant="outlined">
        <InputLabel
          sx={{ fontFamily: "OstrichSansBlack !important" }}
          htmlFor="searchbar"
        >
          {props.title}
        </InputLabel>
        <OutlinedInput
          value={props.value}
          onChange={props.onChange}
          sx={{
            width: props.width,
            borderRadius: 10,
          }}
          id="searchbar"
          endAdornment={
            <InputAdornment position="end">
              <IconButton onClick={props.onClick} edge="end">
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          }
          label={props.title}
        />
      </FormControl>
    </Grid>
  );
};
