import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { Container } from "semantic-ui-react";
import { ActivityDashboard } from "../../features/activities/dashboard/ActivityDashboard";
import { NavBar } from "../../features/nav/NavBar";
import { IActivity } from "../models/activity";

const App = () => {
  const [activities, setActivities] = useState<IActivity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(
    null
  );
  const [editMode, setEditMode] = useState(false);

  const handleSelectActivity = (id: string) => {
    setSelectedActivity(activities.filter((activity) => activity.id === id)[0]);
    setEditMode(false);
  };
  const handleOpenCreateForm = () => {
    setSelectedActivity(null);
    setEditMode(true);
  };
  const handleCreateActivity = (activity: IActivity) => {
    setActivities([...activities, activity]);
    setSelectedActivity(activity);
    setEditMode(false);
  };
  const handleEditActivity = (newActivity: IActivity) => {
    setActivities([
      ...activities.filter((a) => a.id !== newActivity.id),
      newActivity,
    ]);
    setSelectedActivity(newActivity);
    setEditMode(false);
  };
  const handleDeleteActivity = (id: string) =>
    setActivities([...activities.filter((a) => a.id !== id)]);

  useEffect(() => {
    axios
      .get<IActivity[]>("http://localhost:5000/api/activities")
      .then((Response) => {
        let activities: IActivity[] = [];
        Response.data.forEach((activity) => {
          activity.date = activity.date.split(".")[0];
          activities.push(activity);
        });
        setActivities(activities);
      });
  }, []); //the extra array is to make sure that the function will occur only once instead of every render of the component
  return (
    <Fragment>
      <NavBar openCreateForm={() => handleOpenCreateForm()} />
      <Container style={{ marginTop: "7em" }}>
        <ActivityDashboard
          activities={activities}
          selectedActivity={selectedActivity}
          setSelectedActivity={setSelectedActivity}
          selectActivity={handleSelectActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          editActivity={handleEditActivity}
          createActivity={handleCreateActivity}
          deleteActivity={handleDeleteActivity}
        />
      </Container>
    </Fragment>
  );
};

export default App;
