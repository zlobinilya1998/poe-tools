import {Categories} from "../../models/entities/League";
import {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Avatar} from "@mui/material";
import CategoryService from "../../services/CategoryService";
import './DataTable.css';

type TableProps = {
    category: Categories.Fragment | Categories.Currency
}


const DataTable = (props: TableProps) => {
    const [data, setData] = useState<{ lines: any[], currencyDetails: any[] } | null>(null);

    useEffect(() => {
        const getPricesForCategory = async () => {
            const res = await CategoryService.getPrices('Sentinel', props.category);
            setData(res);
        }
        getPricesForCategory();
    }, [props.category])

    const goToWiki = (name: string) => window.open(`https://www.poewiki.net/wiki/${name}`,'_blank')
    const getAvatar = (currencyTypeName: string) => data?.currencyDetails.find(item => item.name === currencyTypeName).icon

    return (
        <TableContainer component={Paper}>
            {data && <Table sx={{minWidth: 650}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Buying price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="data-table">
                    {data.lines?.map((row: any) => (
                        <TableRow
                            onClick={() => goToWiki(row.currencyTypeName)}
                            key={row.detailsId}
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >

                            <TableCell component="th" scope="row">
                                <div style={{display: "flex", alignItems: 'center'}}>
                                    <Avatar src={getAvatar(row.currencyTypeName)} style={{marginRight: '15px'}}/>
                                    <div className="row-name">{row.currencyTypeName}</div>
                                </div>
                            </TableCell>
                            <TableCell align="right">{row.chaosEquivalent}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>}
        </TableContainer>
    )
}


export default DataTable;
