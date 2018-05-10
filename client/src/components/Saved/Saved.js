import React from "react";
import { Button, Collapse, Card, Input } from "mdbreact";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faBuilding,
  faTrash,
  faStickyNote,
  faTasks,
  faHeart
} from "@fortawesome/fontawesome-free-solid";

class Saved extends React.Component {
  constructor(props) {
    super(props);
    this.toggleNotes = this.toggleNotes.bind(this);
    this.toggleProgress = this.toggleProgress.bind(this);

    this.state = {
      accordion: false
    };
  }

  toggleNotes() {
    let state = "";

    if (this.state.accordion !== 1) {
      state = 1;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  toggleProgress() {
    let state = "";

    if (this.state.accordion !== 2) {
      state = 2;
    } else {
      state = false;
    }

    this.setState({
      accordion: state
    });
  }

  render() {
    return (
      <div className="container">
        <h2> Saved Schools </h2>
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
                        onClick={this.toggleNotes}
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
                    <Collapse isOpen={this.state.accordion === 1}>
                      <Card>
                        <p>{school.info.notes}</p>
                      </Card>
                      <Input
                        type="textarea"
                        name="note"
                        value={this.props.notes}
                        className="form-control"
                        placeholder="Add a note here..."
                        onChange={this.props.handleInputchange}
                      />
                      <Button
                        onClick={() =>
                          this.props.handleSaveNote(this.props.notes)
                        }
                      >
                        Save
                      </Button>
                    </Collapse>
                    <Collapse isOpen={this.state.accordion === 2}>
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
