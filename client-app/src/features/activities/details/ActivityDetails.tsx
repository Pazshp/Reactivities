import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import { IActivity } from "../../../app/models/activity";

interface IProps {
  activity: IActivity;
  setSelectedActivity: (activity: IActivity | null) => void;
  setEditMode: (b: boolean) => void;
}
export const ActivityDetails: React.FC<IProps> = ({
  activity,
  setSelectedActivity,
  setEditMode,
}) => {
  return (
    <Card fluid>
      <Image
        src={`/assets/categoryImages/${activity.category}.jpg`}
        wrapped
        ui={false}
      />
      <Card.Content>
        <Card.Header>{activity ? activity.title : "Title"}</Card.Header>
        <Card.Meta>
          <span>{activity ? activity.date : "Date"}</span>
        </Card.Meta>
        <Card.Description>
          {activity ? activity.description : "Description"}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths={2}>
          <Button
            onClick={() => setEditMode(true)}
            basic
            color="blue"
            content="Edit"
          />
          <Button
            onClick={() => setSelectedActivity(null)}
            basic
            color="grey"
            content="Cancel"
          />
        </Button.Group>
      </Card.Content>
    </Card>
  );
};
