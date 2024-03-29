import Head from "next/head";
import React, { useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import JsonFormatter from "react-json-formatter";
import { usePostalCodeApi } from "../src/hooks/postalCodeApi";
import {
  GetAddressFromZip,
  ClearPostalCodeAction,
} from "../src/modules/postalCode";
import styles from "./styles/Home.module.scss";

const IndexPage: React.FC<IndexPageProps> = () => {
  const dispatch = useDispatch();
  const [zipCode, setZipCode] = useState<number | string | null>(undefined);

  const onChangeField = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      console.log(text);
      setZipCode(text);
    },
    []
  );

  const addressData = usePostalCodeApi(zipCode);
  const addressStings = JSON.stringify(addressData);

  const jsonStyle = {
    propertyStyle: { color: "red" },
    stringStyle: { color: "green" },
    numberStyle: { color: "darkorange" },
  };

  const getAddress = useCallback(() => {
    if (!zipCode) {
      return;
    }
    GetAddressFromZip(zipCode)(dispatch);
  }, [dispatch, zipCode]);

  return (
    <div className={styles.container}>
      <Head>
        <title>nextjs-typescript-api-client-sample</title>
      </Head>

      <main className={styles.main}>
        {addressData?.addressData != undefined ? (
          <JsonFormatter
            json={addressStings}
            tabWith={4}
            jsonStyle={jsonStyle}
          />
        ) : (
          <p></p>
        )}

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
