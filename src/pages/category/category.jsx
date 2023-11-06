import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
// import { playListArr } from "../../utils/playListArr";
import { TrackList } from "../../components/TrackList/TrackList";
import { useGetSelectionsQuery } from "../../servicesQuery/tracks";
import { setCurrentPage, setCategoryArr } from "../../store/slices/tracksSlice";
import { categoryArrSelector } from "../../store/selectors/tracks";

export function Category() {
  const categoryArr = useSelector(categoryArrSelector);
  const params = useParams();
  const dispatch = useDispatch();
  const { data, error, isLoading } = useGetSelectionsQuery(Number(params.id));

  useEffect(() => {
    if (data) {
      dispatch(setCurrentPage("Category"));
      dispatch(setCategoryArr(data?.items));
      console.log(`category №${Number(params.id)}`, data);
    }
  }, [data]);

  return (
    <TrackList
      title={data?.name}
      tracks={categoryArr}
      error={error}
      isLoading={isLoading}
    />
    // <S.wrapper>
    //   <S.container>
    //     <S.main>
    //       <h1>CategoryPage {category.id}</h1>
    //     </S.main>
    //     <footer className="footer" />
    //   </S.container>
    // </S.wrapper>
  );
}
