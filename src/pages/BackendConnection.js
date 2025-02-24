import axios from "axios";
import BasicLayout from "../layouts/BasicLayout";
import React, { useEffect, useState } from "react";

const BackendConnection = () => {
  const [formData, setFormData] = useState({
    eng: "99",
    korea: "100",
    math: "50",
    address: "",
  });

  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:8080/calc", formData, {
        headers: { "Content-Type": "application/json" },
      });
      setResponse(res.data);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  return (
    <BasicLayout>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="math"
            value={formData.math}
            onChange={handleChange}
            placeholder="수학점수"
          />
          <input
            type="text"
            name="eng"
            value={formData.eng}
            onChange={handleChange}
            placeholder="영어점수"
          />
          <input
            type="text"
            name="korea"
            value={formData.korea}
            onChange={handleChange}
            placeholder="국어어점수"
          />
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            placeholder="주소"
          />
          <button type="submit">데이터전송</button>
        </form>
        {response && <p>{JSON.stringify(response)}</p>}
      </div>
    </BasicLayout>
  );
};

export default BackendConnection;
