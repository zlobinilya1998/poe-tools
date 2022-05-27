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
import {ItemTable} from '../../models/entities/Table';

type TCategory = Exclude<Categories, Categories.Currency>

type TableProps = {
    category: TCategory,
}

const CurrencyTable = (props: TableProps) => {
    const [data, setData] = useState<ItemTable | undefined>(undefined);
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
                        onClick={() => goToWiki(row.name)}
                        key={row.id}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell component="th" scope="row">
                            <div style={{display: "flex", alignItems: 'center'}}>
                                <Avatar src={row.icon} style={{marginRight: '15px'}}/>
                                <div className="row-name">{row.name}</div>
                                {row.links > 0 && <span style={{color: 'gray'}}>, {row.links}L</span>}<span
                                style={{color: 'gray'}}>, {row.baseType}</span>
                            </div>
                        </TableCell>
                        <TableCell align="right">
                            <div className="row-price">
                                {row.exaltedValue > 2 ?
                                    <div style={{display: "flex",justifyContent: 'flex-end',alignItems: 'center'}}>
                                        {row.exaltedValue.toFixed(1)}
                                        <Avatar style={{marginLeft: '10px'}} sx={{width: 21,height: 21}} src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyAddModToRare.png?scale=1&w=1&h=1"/>
                                    </div> :
                                    <div style={{display: "flex",justifyContent: 'flex-end',alignItems: 'center'}}>
                                        {row.chaosValue.toFixed(1)}
                                        <Avatar style={{marginLeft: '10px'}} sx={{width: 21,height: 21}} src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png?scale=1&w=1&h=1"/>
                                    </div>
                                }
                            </div>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>}
    </TableContainer>)
}


export default CurrencyTable;
