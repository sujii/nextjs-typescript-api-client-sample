import { useCallback } from "react";
import qs from "querystring";
import axios from "axios";
import { useDispatch } from "react-redux";
// import { API_POSTALCODE_ENDPOINT } from "../config/constants";
// import { handleApiError } from "../utils/api";

export const usePostalCodeApi = () => {
    const dispatch = useDispatch();
    // API ENDPOINT: SampleCode なのでts内に直書きしている
    const API_POSTALCODE_ENDPOINT = "https://zipcloud.ibsnet.co.jp/api";
  
    // const [state, setState] = useState<{
    //   keirinPlayerProfile?: KeirinPlayerProfile;
    //   keirinPlayerProfileLoading: boolean;
    //   keirinPlayerProfileError?: TipstarApiError | Error;
    // }>({ keirinPlayerProfileLoading: false });
  
    const fetchPostalCodeApi = useCallback( () => {
      try {
        const response = await axios.get(ENDPOINT + '/search?zipcode=1710021');
        console.dir(response);
      } catch (error) {
        console.error(error);
      }
    }, [dispatch]);
    
    return {
      ...state,
      fetchPostalCodeApi,
    };
};
