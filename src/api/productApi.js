import { API_SERVER_HOST } from "./todoApi";
import jwtAxios from "../util/jwtUtil";

const host = `${API_SERVER_HOST}/api/products`;

export const postAdd = async (product) => {
  const header = { headers: { "Content-Type": "multipart/form-data" } };

  // 경로 뒤 '/' 주의
  const res = await jwtAxios.post(`${host}/`, product, header);
  return res.data;
};

export const getList = async (pageParam) => {
  const { page, size } = pageParam;
  const res = await jwtAxios.get(`${host}/list`, {
    params: { page: page, size: size },
  });
  return res.data;
};
export const getOne = async (tno) => {
  const res = await jwtAxios.get(`${host}/${tno}`);
  return res.data;
};
export const putOne = async (pno, product) => {
  // putProduct아닌 putOne으로.
  const header = { headers: { "Content-Type": "multipart/form-data" } };
  // 중간에 경로/ 삽입 주의의
  const res = await jwtAxios.put(`${host}/${pno}`, product, header);
  return res.data;
};
export const deleteOne = async (pno) => {
  // One으로!
  const res = await jwtAxios.delete(`${host}/${pno}`);
  return res.data;
};
