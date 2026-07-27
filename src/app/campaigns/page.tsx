"use client"

import { useGetEnergyMix } from '@/api/energy-mix-controller/energy-mix-controller';
import EnergyMixCard from '@/components/EnergyMixCard';
import { Alert, AlertColor, AlertProps, AlertPropsColorOverrides, Box } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';

const COLORS: { [name: string]: string } = {
    hydro: "#2196F3",
    wind: "#90CAF9",
    solar: "#FFC107",
    biomass: "#4CAF50",
    nuclear: "#9C27B0",
    gas: "#FF9800",
    coal: "#424242",
    imports: "#795548",
    other: "#B0BEC5",
};

export default function EnergyMix() {

    return <>
        Hello World!
    </>
}
