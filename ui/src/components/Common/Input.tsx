import React from 'react'

import SearchIcon from "@mui/icons-material/Search";
import { Grid, InputAdornment, InputLabel, TextField, Typography } from '@mui/material'

type InputPropsType = {
  label: string;
  fieldName: string;
  labelOff: boolean;
  isSearch?: boolean;
  placeholder?: string;
  onChange: (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
}

const Input = ({
  label,
  fieldName,
  labelOff,
  isSearch = false,
  placeholder,
  onChange,
}: InputPropsType) => {
  return (
    <Grid container >
      <Grid item xs={12}>
        {
          !labelOff && <InputLabel
            shrink={false}
            htmlFor={fieldName}
        >
            <Typography >{label}</Typography>
        </InputLabel>
        }

        <TextField
          id={fieldName}
          fullWidth
          name={fieldName}
          InputLabelProps={{shrink: labelOff ? false : true}}
          variant="outlined"
          onChange={(event) => onChange(event)}
          type={isSearch? "search": undefined}
          placeholder={placeholder}
          InputProps={{
            endAdornment: isSearch ? (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ): undefined,
          }}
        />
      </Grid>
    </Grid>
  )
}

export default Input