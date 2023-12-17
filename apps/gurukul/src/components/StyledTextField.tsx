import * as React from 'react';

import TextField from '@mui/material/TextField';


export default function StyledTextField({ fieldProps }: { fieldProps: TextFieldProps }) {

    return (
        <TextField
            label={fieldProps.label}
            sx={{
                // backgroundColor: theme.palette.primary.light,
                // border: '3px solid #001d3d',
                "& .Mui-focused": {
                    color: `${fieldProps.borderColorFocus} !important`
                },
            }}
            InputLabelProps={{
                sx: {
                    color: `${fieldProps.labelColor}`,
                },
            }}
            InputProps={{
                sx: {
                    'fieldset': {
                        border: `1px solid ${fieldProps.borderColor}`,
                        // borderRadius: 0,
                    },
                    '&:hover fieldset': {
                        border: `1px solid ${fieldProps.borderColorHover} !important`,
                        // borderRadius: 0,
                    },
                    '&:focus-within fieldset, &:focus-visible fieldset': {
                        border: `1px solid ${fieldProps.borderColorFocus} !important`,
                    },
                },
            }}
            inputProps={{
                sx: {
                    color: fieldProps.color,
                },
            }}
            fullWidth
        />
    );
}

interface TextFieldProps {
    label: string
    labelColor: string,
    borderColor: string,
    borderColorHover: string,
    borderColorFocus: string,
    color: string
}