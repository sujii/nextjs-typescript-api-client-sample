import Head from "next/head";
import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { usePostalCodeApi } from "../src/hooks/postalCodeApi";
import { GetAddressFromZip } from "../src/modules/postalCode";
import styles from "./styles/Home.module.scss";

const IndexPage: React.FC<IndexPageProps> = () => {
  const dispatch = useDispatch();
  const { address } = useSelector((state: IReduxState) => state.address);
  const [zipCode, setZipCode] = useState<number | string | null>(undefined);

  const onChangeField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      console.log(text);
      setZipCode(text);
    },
    []
  );

  const { addressData } = usePostalCodeApi(zipCode);
  const addressStings = JSON.stringify(addressData);

  // console.dir("address ////////");
  // console.dir(address);

  // console.dir("addressData ////////");
  // console.dir(addressData);

  const getAddress = useCallback(() => {
    if (zipCode) {
      dispatch(GetAddressFromZip(zipCode));
    }
  }, [dispatch, zipCode]);

  return (
    <div className={styles.container}>
      <Head>
        <title>nextjs-typescript-api-client-sample</title>
      </Head>

      <main className={styles.main}>
        <p>{addressStings}</p>

        <p className={styles.postalcode}>
          <input
            type="text"
            placeholder="Please fill in your postal codes"
            name="postal-code"
            autoComplete="postal-code"
            onChange={onChangeField}
          />
        </p>

        <p className={styles.requestButton}>
          <button type="button" name="requestFromCodes" onClick={getAddress}>
            Get an address by your code
          </button>
        </p>
      </main>
    </div>
  );
};

export type IndexPageProps = {};

export default IndexPage;
