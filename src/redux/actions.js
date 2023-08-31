import axios from "axios";
export const FETCH_FROM_API = "FETCH_FROM_API";
export const auth =
  "eyJhbGciOiJFUzI1NiJ9.eyJzZXNzaW9uX2tleSI6IjVwSlVoN0Nlek1KQ0dGQUdPK3VRWno0TFIxY29WRTlLNzZkSzVFaURXcWFWUEpRQytaWERMeGx1OEZ6VXNvWGJoZVNKM3hkSHRmQXNSSi9oIiwiZXhwaXJlc19hdCI6IjIwMjMtMDktMTAgMDc6NTA6NDIgVVRDIiwiYWRtaW5faWQiOjQ5MH0.g8tZxEvwVro0FSA8S87Ud5K8yIuEyzd05lvNl5Re_vpsKjfXUEeu2K4KUv87EBwnf4vRLY4PoW4j7xy8cd8MDw";
export const token =
  "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyYW5kb21WYWx1ZSI6MTA0NDY5NzQxNX0.psFxEe59mo184_zwuHh48ypvCEzjahHeVtMT1XW0Kdc";

export const fetchedDatas = (dta) => {
  return {
    type: FETCH_FROM_API,
    payload: dta,
  };
};

export const fetching = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get(
        "https://reports.devtest.experience.com/campaign/metrics?account_id=10950&campaign_group_id=2602&limit=10&skip_third_party=false&metric_type=6&page=1&status=[0,1]&sort_by=modified_at&order_by=asc",
        {
          headers: {
            Authorization: auth,
            "Page-Token": token,
          },
        }
      );
      console.log(response.data);
      dispatch(fetchedDatas(response.data));
    } catch (error) {
      console.error(error);
    }
  };
};
