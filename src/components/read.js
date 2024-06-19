import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
  Button,
  Icon,
} from "semantic-ui-react";

export default function Read() {
  const [APIData, setAPIData] = useState([]);
  useEffect(() => {
    axios
      .get("https://6605280e2ca9478ea17f8288.mockapi.io/fakeData")
      .then((response) => setAPIData(response.data));
  }, []);

  const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
    localStorage.setItem("ID", id);
    localStorage.setItem("First Name", firstName);
    localStorage.setItem("Last Name", lastName);
    localStorage.setItem("Checkbox Value", checkbox);
  };

  const onDelete = (id) => {
    axios
      .delete(`https://6605280e2ca9478ea17f8288.mockapi.io/fakeData/${id}`)
      .then(() => {
        getData();
      });
  };

  const getData = () => {
    axios
      .get("https://6605280e2ca9478ea17f8288.mockapi.io/fakeData")
      .then((getData) => setAPIData(getData.data));
  };
  return (
    <>
      <Table padded>
        <TableHeader>
          <TableRow>
            <TableHeaderCell singleLine textAlign="center">
              Имя
            </TableHeaderCell>
            <TableHeaderCell textAlign="center">Фамилия</TableHeaderCell>
            <TableHeaderCell textAlign="center">VIP-клиент</TableHeaderCell>
            <TableHeaderCell textAlign="center">Обновить</TableHeaderCell>
            <TableHeaderCell textAlign="center">Удалить</TableHeaderCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {APIData.map((data) => {
            return (
              <TableRow key={data.id}>
                <TableCell>{data.firstName}</TableCell>
                <TableCell>{data.lastName}</TableCell>
                <TableCell>{data.checkbox ? "Да" : "Нет"}</TableCell>

                <TableCell>
                  <Link to="/update">
                    <Button onClick={() => setData(data)}>Обновить</Button>
                  </Link>
                </TableCell>

                <TableCell>
                  <Button onClick={() => onDelete(data.id)}>Удалить</Button>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
      <div className="create-wrapper">
        <Link to="/create">
          <Button icon>
            <Icon link name="plus" size="big"></Icon>
          </Button>
        </Link>
      </div>
    </>
  );
}
