import React from "react"
import { Button, Card, Image, Icon, Modal, Header } from "semantic-ui-react"

export const SingleJob = ({ job }) => {
  const [open, setOpen] = React.useState(false)
  function handleOpen() {
    setOpen(true)
  }
  function handleClose() {
    setOpen(false)
  }

  return (
    <Card.Group>
      <Card color="grey">
        <Card.Content>
          <Image floated="right" size="mini" src={job.company_logo} />
          <Card.Header as="h5">{job.title}</Card.Header>
          <Card.Meta>
            <Icon name="chess rook" />
            <strong> {job.company}</strong>
          </Card.Meta>
          <Card.Meta>
            <Icon name="map pin" />
            {job.location}
          </Card.Meta>
          <Card.Description>
           
          </Card.Description>
          <Card.Meta > <Icon name="calendar alternate" />{new Date(job.created_at).toLocaleDateString()}</Card.Meta>
        </Card.Content>
        <Card.Content extra>
          <div className="ui two buttons">
            <Modal
              trigger={
                <Button basic color="green" onClick={handleOpen}>
                  More
                </Button>
              }
              open={open}
              onClose={handleClose}
              basic
              closeIcon
            >
              <Modal.Header>{job.company}</Modal.Header>

              <Modal.Content image scrolling>
                <Image wrapped size="small" src={job.company_logo} spaced />

                <Modal.Description>
                  <Header as="h4" color="blue">
                    {job.title}
                  </Header>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: job.description
                    }}
                  ></div>
                </Modal.Description>
              </Modal.Content>
              <Modal.Actions>
                <Button color="red" as="a" href={job.url} inverted>
                  Proceed <Icon name="right chevron" />
                </Button>
              </Modal.Actions>
            </Modal>

            <Button basic color="red" as="a" href={job.url}>
              Apply
            </Button>
          </div>
        </Card.Content>
      </Card>
    </Card.Group>
  )
}
