"use client";


import { useGetProducts } from "@/api/generated";
import {
    Button,
    Stack,
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
} from "@mui/material";

export default function ProductsPage() {

    const {
        data,
        isLoading,
        error,
    } = useGetProducts();

    console.log(data);

    return (

        <div className="flex-1 p-10">
            <Table>

                <TableHead>

                    <TableRow>

                        <TableCell>Nazwa</TableCell>

                        <TableCell>Cena</TableCell>

                        <TableCell width={180}>
                            Działania
                        </TableCell>

                    </TableRow>

                </TableHead>

                <TableBody>

                    {data?.data.map(product => (

                        <TableRow key={product.id}>

                            <TableCell>
                                {product.id}
                            </TableCell>

                            <TableCell>
                                {product.name}
                            </TableCell>

                            <TableCell>
                                {product.price}
                            </TableCell>

                            <Stack
                                direction="row"
                                spacing={1}
                            >

                                <Button
                                    size="small"
                                    variant="outlined"
                                >
                                    Edytuj
                                </Button>

                                <Button
                                    size="small"
                                    color="error"
                                    variant="outlined"
                                >
                                    Usuń
                                </Button>

                            </Stack>

                        </TableRow>

                    ))}

                </TableBody>

            </Table>
        </div>

    );
}