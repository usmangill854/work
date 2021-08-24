import {Card, Table, Button, Container} from "react-bootstrap";
import {useState} from "react";

const Cart=()=>{
    const[count,setCount]=useState(0)
    return<Container>
        <Table responsive="auto">
            <thead>
            <tr>
                <th>#</th>
                <th>image</th>
                <th>Item Name</th>
                <th>Quantity</th>
                <th>Fries</th>
                <th>Drink</th>
                <th>Total</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td>1</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>Table cell</td>
                <td>
                    <Button  className="m-3"  size= "sm" onClick={()=>setCount(count-1)} disabled={count<1} >-</Button>

                    {count}
                    <Button size= "sm" className="m-3"  onClick={()=>setCount(count+1)} disabled={count>4} >+</Button>

                </td>
                <td>Table cell</td>
                <td>Table cell</td>
            </tr>
            </tbody>
        </Table>


                <Card style={{marginLeft:"80%"}} >
                    <Card.Title className="ml-auto">
                        Grand Total=
                    </Card.Title>
                    <Button> Confrm Order</Button>

                </Card>

    </Container>
}
export default  Cart