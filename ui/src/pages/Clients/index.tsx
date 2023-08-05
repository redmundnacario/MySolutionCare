import { memo, useContext, useEffect } from "react";

import { ClientPageContainer } from "@components/Clients";
import Page from "@components/Page";
import { getClients } from "@services/api";
import { StateContext } from "@store/DataProvider";

const Clients = () => {
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    getClients().then((clients) =>
      dispatch({ type: "FETCH_ALL_CLIENTS", data: clients })
    );
  }, [dispatch]);

  return (
    <Page>
      <ClientPageContainer />
    </Page>
  );
}

// export default memo(Clients);
export default Clients
