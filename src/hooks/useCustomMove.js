import { useCallback, useState } from "react";
import {
  createSearchParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const getNum = (param, defaultValue) => {
  if (!param) {
    return defaultValue;
  }
  return parseInt(param);
};

const useCustomMove = () => {
  const navigate = useNavigate();

  const [refresh, setRefresh] = useState(false);

  const [queryParams] = useSearchParams();

  const page = getNum(queryParams.get("page"), 1);
  const size = getNum(queryParams.get("size"), 10);

  const queryDefault = createSearchParams({ page, size }).toString(); // 새로 추가

  const moveToList = (pageParam) => {
    let queryStr = "";
    if (pageParam) {
      const pageNum = getNum(pageParam.page, 1);
      const sizeNum = getNum(pageParam.size, 10);

      queryStr = createSearchParams({
        page: pageNum,
        size: sizeNum,
      }).toString();
    } else {
      queryStr = queryDefault;
    }
    setRefresh(!refresh); // 호출될때마다 바뀌는 값으로, 동일페이지 클릭 문제 해결용.
    // // ppt에서 빼먹은 부분 조심! p.138
    navigate({ pathname: `../list`, search: queryStr });
  };

  const moveToModify = useCallback(
    (num) => {
      console.log(queryDefault);
      navigate({ pathname: `../modify/${num}`, search: queryDefault });
    },
    [page, size]
  );

  const moveToRead = (num) => {
    console.log(queryDefault);
    navigate({
      pathname: `../read/${num}`,
      search: queryDefault,
    });
  };

  return { moveToList, moveToModify, moveToRead, page, size, refresh };
};

export default useCustomMove;
