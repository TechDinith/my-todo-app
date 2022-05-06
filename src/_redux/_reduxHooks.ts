import { useDispatch, useSelector } from "react-redux";

export const useReduxHooks = () => {
  const useAppSelector = useSelector;
  const useAppDispatch = useDispatch();

  return {
    useAppDispatch,
    useAppSelector,
  };
};
