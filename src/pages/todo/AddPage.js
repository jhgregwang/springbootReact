import axios from "axios";
import { useEffect, useState } from "react";
import AddComponent from "../../components/todo/AddComponent";

const AddPage = () => {
  const [form, setForm] = useState({ aString: "", anotherString: "", tno: 0 });

  const clickHandler = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "tno" ? parseInt(value, 10) || 0 : value,
    }));
  };

  const addHandler = async (e) => {
    e.preventDefault();

    const res = await axios.post("http://localhost:8080/todo/add", form, {
      headers: { "Content-Type": "application/json" },
    });
    console.log(res.data);
  };

  return (
    <div className="p-4 w-full bg-white">
      <div className="text-3xl font-extrabold">Todo Add Page</div>
      <AddComponent />
    </div>
  );
};

export default AddPage;
