import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { ParticipantList } from "./participant/ParticipantList";
import { ParticipantCreate } from "./participant/ParticipantCreate";
import { ParticipantEdit } from "./participant/ParticipantEdit";
import { ParticipantShow } from "./participant/ParticipantShow";
import { ConferenceList } from "./conference/ConferenceList";
import { ConferenceCreate } from "./conference/ConferenceCreate";
import { ConferenceEdit } from "./conference/ConferenceEdit";
import { ConferenceShow } from "./conference/ConferenceShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Jits Video Conference"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Participant"
          list={ParticipantList}
          edit={ParticipantEdit}
          create={ParticipantCreate}
          show={ParticipantShow}
        />
        <Resource
          name="Conference"
          list={ConferenceList}
          edit={ConferenceEdit}
          create={ConferenceCreate}
          show={ConferenceShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;
