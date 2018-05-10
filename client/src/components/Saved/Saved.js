import React from "react";
import { Button, Collapse, Card, Input } from "mdbreact";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faStickyNote,
  faTasks,
  faHeart
} from "@fortawesome/fontawesome-free-solid";

class Saved extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      state: ""
    };
  }

  render() {
    return (
      <div className="container">
        <h2>
          Saved Schools
          <Button
            color="danger"
            type="button"
            name="action"
            value="scrollBtn"
            onClick={this.props.handleScrollToggle}
          >
            Scroll To Search
          </Button>
        </h2>
        {this.props.savedSchools.length ? (
          <div className="row">
            {this.props.savedSchools.map((school, index) => (
              <div
                className="card-group col-md-12"
                key={index}
                style={{ padding: 15, justifyContent: "center" }}
              >
                <Card
                  style={
                    school.info.favorite
                      ? { backgroundColor: "#d8d8d8" }
                      : { BackgroundColor: "#ffffff" }
                  }
                >
                  <div style={{ padding: 15 }}>
                    <h4>{school.info.name}</h4>
                    <hr />
                    <div
                      style={{
                        display: "flex",
                        margin: 10
                      }}
                    >
                      <Button
                        block
                        color="primary"
                        type="button"
                        name="action"
                        value="notes"
                        onClick={this.props.toggleNotes}
                      >
                        <FontAwesomeIcon icon={faStickyNote} size={"1x"} />
                      </Button>
                      <Button
                        block
                        color="primary"
                        type="button"
                        name="action"
                        value="progress"
                        onClick={this.toggleProgress}
                      >
                        <FontAwesomeIcon icon={faTasks} size={"1x"} /> Progress
                      </Button>
                      <Button
                        block
                        color="primary"
                        type="button"
                        name="action"
                        value="favBtn"
                        onClick={() =>
                          this.props.toggleFavSchool(school.info.name)
                        }
                      >
                        <FontAwesomeIcon icon={faHeart} size={"1x"} /> Favorite
                      </Button>
                      <Button
                        block
                        color="danger"
                        type="button"
                        name="action"
                        value="deleteBtn"
                        onClick={() =>
                          this.props.handleDeleteSchool(school.info.name)
                        }
                      >
                        <FontAwesomeIcon icon={faTrash} size={"1x"} /> Delete
                      </Button>
                    </div>
                    <Collapse isOpen={this.props.collapse}>
                      <Card>
                        <p>{school.info.notes}</p>
                      </Card>
                      <div>
                        <Input
                          placeholder="notes"
                          group type="notes"
                          datatag={index}
                          name="notes"
                          onChange={this.props.handleInputChange}
                          value={this.props.notes[index]}
                        />
                      </div>
                      <Button
                        color="primary"
                        type="button"
                        name="action"
                        value="saveNote"
                        onClick={() =>
                          this.props.handleSaveNote(this.props.notes[index])
                        }
                      >
                        Save
                      </Button>
                    </Collapse>
                    <div>
                      <Collapse isOpen={this.props.collapse}>
                        {/* <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          value={school.progress.contactEmail}
                          id="defaultCheck1"
                        />
                          <label className="form-check-label" for="defaultCheck1">
                            <p>Contact E-Mail</p>
                          </label>
                      </div> */}
                        {/* <div class="form-check">
                        <input
                          class="form-check-input"
                          type="checkbox"
                          value=""
                          id="defaultCheck2"
                          disabled
                        >
                          <label class="form-check-label" for="defaultCheck2">
                            Disabled checkbox
                          </label>
                        </input>
                      </div> */}
                      </Collapse>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        ) : (
          <div>
            <h3>No Results to Display</h3>
          </div>
        )}
      </div>
    );
  }
}

export default Saved;
