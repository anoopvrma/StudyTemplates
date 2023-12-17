import { PaletteOptions } from '@mui/material';

declare module "@mui/material/styles" {
    interface Palette {
        gradient: string;
    }
    interface PaletteOptions {
        gradient?: string;
    }
}