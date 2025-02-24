import axios from "axios";
import { useEffect, useState } from "react";
import BasicLayout from "../layouts/BasicLayout";

const GreenList = () => {
  // axios 로 backend 연결
  const [data, setData] = useState([]);
  //
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:8080/green/list");
      console.log(res.data);
      setData(res.data);
    };
    fetchData();
  }, []);

  return (
    <BasicLayout>
      <div className="p-4 w-full bg-orange-200">
        <div className="text-3xl font-extrabold">
          GreenList 페이지
          <p>
            {data.map((i) => (
              <div>
                <span>이름: {i.name}</span>
                <span>, 가격: {i.price}</span>
                <span className="underline">, 합계: {i.total}</span>
                <span className="underline">, vat: {i.vat}</span>
              </div>
            ))}
          </p>
        </div>
      </div>
    </BasicLayout>
  );
};

export default GreenList;
