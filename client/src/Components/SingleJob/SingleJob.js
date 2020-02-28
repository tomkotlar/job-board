import React from "react"
import { Button, Card, Image, Icon } from "semantic-ui-react"

export const SingleJob = ({ job }) => (
  
 
  <Card.Group>
    <Card color="grey">
      <Card.Content>
        <Image floated="right" size="mini" src={job.company_logo} />
        <Card.Header as='h5'>{job.title}</Card.Header>
        <Card.Meta>
        <Icon name='chess rook' />
          <strong> {job.company}</strong>
        </Card.Meta>
        <Card.Meta> <Icon name='map pin' />{job.location}</Card.Meta>
        <Card.Description>
          Steve wants to add you to the group <strong>best friends</strong>
        </Card.Description>
        <Card.Meta>{new Date(job.created_at).toLocaleDateString()}</Card.Meta>
      </Card.Content>
      <Card.Content extra>
        <div className="ui two buttons">
          <Button basic color="green">
            More
          </Button>
          <Button basic color="red">
            Apply
          </Button>
        </div>
      </Card.Content>
    </Card>
 
    </Card.Group>
 


  


)