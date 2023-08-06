import { memo, useContext, useEffect } from "react";

import { ClientPageContainer } from "@components/page/clients";
import Page from "@components/common/Page";
import { getClients } from "@services/api";
import { StateContext } from "@store/DataProvider";
import WithCreateClientActionsProvider from "@components/page/clients/actions/WithCreateClientActionsProvider";
import WithSearchClientActionsProvider from "@components/page/clients/actions/WithSearchClientActionsProvider";

const Clients = () => {
  const { dispatch } = useContext(StateContext);

  useEffect(() => {
    getClients().then((clients) =>
      dispatch({ type: "FETCH_ALL_CLIENTS", data: clients })
    );
  }, [dispatch]);

  return (
    <Page>
      <WithCreateClientActionsProvider>
        <WithSearchClientActionsProvider>
          <ClientPageContainer />
        </WithSearchClientActionsProvider>
      </WithCreateClientActionsProvider>
    </Page>
  );
}

export default memo(Clients);
