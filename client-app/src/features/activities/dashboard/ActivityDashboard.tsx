import React from "react";
import { Grid } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { ActivityList } from "./ActivityList";

interface IProps {
  activities: IActivity[];
  selectedActivity: IActivity | null;
  setSelectedActivity: (activity: IActivity | null) => void;
  selectActivity: (id: string) => void;
  editMode: boolean;
  setEditMode: (b: boolean) => void;
  createActivity: (activity: IActivity) => void;
  editActivity: (activity: IActivity) => void;
  deleteActivity: (id: string) => void;
}
export const ActivityDashboard: React.FC<IProps> = ({
  activities,
  selectedActivity,
  setSelectedActivity,
  selectActivity,
  editMode,
  setEditMode,
  createActivity,
  editActivity,
  deleteActivity,
}) => {
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList
          activities={activities}
          selectActivity={selectActivity}
          deleteActivity={deleteActivity}
        />
      </Grid.Column>
      <Grid.Column width={6}>
        {selectedActivity && !editMode && (
          <ActivityDetails
            activity={selectedActivity}
            setSelectedActivity={setSelectedActivity}
            setEditMode={setEditMode}
          />
        )}
        {editMode && (
          <ActivityForm
            key={(selectedActivity && selectedActivity.id) || 0}
            setEditMode={setEditMode}
            activity={selectedActivity}
            editActivity={editActivity}
            createActivity={createActivity}
          />
        )}
      </Grid.Column>
    </Grid>
  );
};
