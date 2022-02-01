import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
// import qs from "querystring";
import { GetAddressFromZip } from "../modules/postalCode";

export const usePostalCodeApi = (zipCode: string | number) => {
  const dispatch = useDispatch();
  const { address } = useSelector((state: IReduxState) => state.address);

  const fetchPostalCodeApi = useCallback(() => {
    dispatch(GetAddressFromZip(zipCode));
  }, [dispatch, zipCode]);

  return { addressData: address, fetchPostalCodeApi };
};
