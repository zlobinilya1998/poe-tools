import {Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";
import React, {useEffect, useState} from "react";
import PoeService from "../../services/PoeService";
import {League} from "../../models/entities/League";

const LeagueSelect = () => {
    const [leagues, setLeagues] = useState<League[] | null>(null);
    const [selected,setSelected] = useState('');

    useEffect(() => {
        const getLeague = async () => {
            const res = await PoeService.getLeagues();
            setLeagues(res as any)
        }
        getLeague();
    }, [])

    const handleChange = (event: SelectChangeEvent) => {
        setSelected(event.target.value as string);
    };

    return (
        <Box sx={{minWidth: 120, maxWidth: 320}}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Select league</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={selected}
                    label="Age"
                    onChange={handleChange}
                >
                    {leagues?.map(item => <MenuItem key={item.id} value={item.id}>{item.id}</MenuItem>)}
                </Select>
            </FormControl>
        </Box>
    )
}
export default LeagueSelect;

