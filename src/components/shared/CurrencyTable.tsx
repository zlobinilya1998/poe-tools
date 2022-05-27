import {Categories} from "../../models/entities/League";
import {useEffect, useState} from "react";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Avatar, CircularProgress} from "@mui/material";
import CategoryService from "../../services/CategoryService";
import './DataTable.css';
import {CurrencyTable, DetailsItem} from '../../models/entities/Table';

type TCategory = Categories.Fragment | Categories.Currency
type TableProps = {
    category: TCategory,
}

const CurrencyTable = (props: TableProps) => {
    const [data, setData] = useState<CurrencyTable | undefined>(undefined);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getPricesForCategory = async () => {
            setLoading(true)
            const res = await CategoryService.getPrices('Sentinel', props.category);
            setData(res);
            setLoading(false)
        }
        getPricesForCategory();
    }, [props.category])

    const goToWiki = (name: string) => window.open(`https://www.poewiki.net/wiki/${name}`, '_blank')
    const getAvatar = (currencyTypeName: string) => (data as any).currencyDetails.find((item: DetailsItem) => item.name === currencyTypeName).icon

    if (loading) return <CircularProgress/>;
    return (<TableContainer component={Paper}>
            {data && <Table sx={{minWidth: 650}}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="right">Buying price</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody className="data-table">
                    {data.lines.map((row) => (
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
                            <TableCell align="right">
                                <div className="row-price">{row.chaosEquivalent}</div>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>}
        </TableContainer>)
}

export default CurrencyTable;
