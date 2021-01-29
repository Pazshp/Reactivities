import { observer } from "mobx-react-lite";
import React, { Fragment, useContext, useEffect } from "react";
import { Container } from "semantic-ui-react";
import ActivityDashboard from "../../features/activities/dashboard/ActivityDashboard";
import NavBar from "../../features/nav/NavBar";
import ActivityStore from "../stores/activityStore";
import { LoadingComponent } from "./LoadingComponent";

const App = () => {
  const activityStore = useContext(ActivityStore);

  useEffect(() => {
    activityStore.loadActivities();
  }, [activityStore]); //the extra array is to make sure that the function will occur only once instead of every render of the component
  if (activityStore.loadingInitial)
    return <LoadingComponent content="Loading Activities..." />;
  return (
    <Fragment>
      <NavBar />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard />
      </Container>
    </Fragment>
  );
};

export default observer(App);
