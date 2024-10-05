import React, { useState } from "react";
import { Form, Input, Button, Card, Typography } from "antd";

const { Title } = Typography;

const App = () => {
  // Состояние для формы
  const [formData, setFormData] = useState({
    name: "",
    description: "",
  });

  // Состояние для отображения данных
  const [submittedData, setSubmittedData] = useState(null);

  // Функция для обновления состояния при изменении полей формы
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Функция для обработки отправки формы
  const handleSubmit = () => {
    setSubmittedData(formData);
    setFormData({ name: "", description: "" }); // Очистка полей после отправки
  };

  return (
    <div style={{ padding: "50px", maxWidth: "600px", margin: "auto" }}>
      <Title level={2}>Форма для ввода данных</Title>
      <Form layout="vertical" onFinish={handleSubmit}>
        <Form.Item label="Имя" required>
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Введите ваше имя"
          />
        </Form.Item>
        <Form.Item label="Описание" required>
          <Input.TextArea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Введите описание"
            rows={4}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Отправить
          </Button>
        </Form.Item>
      </Form>

      {submittedData && (
        <Card title="Отправленные данные" style={{ marginTop: "20px" }}>
          <p>
            <strong>Имя:</strong> {submittedData.name}
          </p>
          <p>
            <strong>Описание:</strong> {submittedData.description}
          </p>
        </Card>
      )}
    </div>
  );
};

export default App;
