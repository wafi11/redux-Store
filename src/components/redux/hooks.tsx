import { TypedUseSelectorHook,useDispatch,useSelector } from "react-redux";

import type { RootState,AppDispatch } from "./store";

export const UseAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector : TypedUseSelectorHook<RootState> = useSelector