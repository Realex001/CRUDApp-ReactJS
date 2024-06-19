import React, { useEffect, useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Update() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [checkbox, setCheckbox] = useState(false);
  const [id, setID] = useState(null);

  let navigate = useNavigate();

  useEffect(() => {
    setID(localStorage.getItem("ID"));
    setFirstname(localStorage.getItem("First Name"));
    setLastname(localStorage.getItem("Last Name"));
    setCheckbox(localStorage.getItem("Checkbox Value"));
  }, []);

  const updateAPIData = () => {
    axios
      .put(`https://6605280e2ca9478ea17f8288.mockapi.io/fakeData/${id}`, {
        firstName,
        lastName,
        checkbox,
      })
      .then(() => {
        navigate("/");
      });
  };
  return (
    <Form className="create-form">
      <FormField>
        <label>Имя</label>
        <input
          placeholder="Алексей"
          value={firstName}
          onChange={(e) => setFirstname(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>Фамилия</label>
        <input
          placeholder="Иванов"
          value={lastName}
          onChange={(e) => setLastname(e.target.value)}
        />
      </FormField>
      <FormField>
        <Checkbox
          label="Посетитель является VIP-клиентом"
          checked={JSON.parse(checkbox) === true}
          onChange={() => setCheckbox(!checkbox)}
        />
      </FormField>
      <Button type="submit" onClick={updateAPIData}>
        Обновить
      </Button>
    </Form>
  );
}
