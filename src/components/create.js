import React, { useState } from "react";
import { FormField, Button, Checkbox, Form } from "semantic-ui-react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Create() {
  const [firstName, setFirstname] = useState("");
  const [lastName, setLastname] = useState("");
  const [checkbox, setCheckbox] = useState(false);

  let navigate = useNavigate();

  const postData = () => {
    axios
      .post("https://6605280e2ca9478ea17f8288.mockapi.io/fakeData", {
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
          value={firstName}
          placeholder="Алексей"
          onChange={(e) => setFirstname(e.target.value)}
        />
      </FormField>
      <FormField>
        <label>Фамилия</label>
        <input
          value={lastName}
          placeholder="Иванов"
          onChange={(e) => setLastname(e.target.value)}
        />
      </FormField>
      <FormField>
        <Checkbox
          label="Посетитель является VIP-клиентом"
          checked={checkbox}
          onChange={(e) => setCheckbox(!checkbox)}
        />
      </FormField>
      <Button type="submit" onClick={postData}>
        Добавить
      </Button>
    </Form>
  );
}
