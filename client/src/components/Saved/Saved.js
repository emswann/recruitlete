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
            {this.props.savedSchools.map((school, schoolIndex) => (
                         // {school.info.notes.map((note, noteIndex) => (
                            // {school.progress.map((progress, progressIndex) => (
              <div
                className="card-group col-md-12"
                key={schoolIndex}
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
                    <div className="row">
                    <div
                      className= "col-md-3">
                      <Button
                        size="lg"
                        color="primary"
                        type="button"
                        name="action"
                        value="notes"
                        onClick={() => this.props.toggleNotesBtn(schoolIndex)}
                      >
                        <FontAwesomeIcon icon={faStickyNote} size={"1x"} /> Notes
                      </Button>
                      </div>
                      <div className="col-md-3">
                      <Button
                        size="lg"
                        color="primary"
                        type="button"
                        name="action"
                        value="progress"
                        onClick={() => this.props.toggleProgressBtn(schoolIndex)}
                      >
                        <FontAwesomeIcon icon={faTasks} size={"1x"} /> Progress
                      </Button>
                      </div>
                      <div className="col-md-3">
                      <Button
                        size="lg"
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
                      </div>
                      <div className="col-md-3">
                      <Button
                        size="lg"
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
                    </div>
                    <Collapse
                      isOpen={
                        this.props.collapseNotes[schoolIndex]
                          ? this.props.collapseNotes[schoolIndex]
                          : false
                      }
                    >
                      <Card>
                      {school.info.notes.map((note, noteIndex) => (
                        <div key={noteIndex}>
                        <div className = "row" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                        <div className = "col-md-11">
                        <p>{note}</p>
                        </div>
                        <div className = "col-md-1">
                        <Button
                        color="danger"
                        type="button"
                        name="action"
                        value="deleteBtn"
                        onClick={() =>
                          this.props.handleDeleteNote(note, schoolIndex)
                        }
                      >
                       X
                      </Button>
                      <hr />
                      </div>
                       
                        </div>
                        </div>
                      ))}
                      </Card>
                      <div>
                        <Input
                          placeholder="notes"
                          group
                          type="notes"
                          name="notes"
                          onChange={this.props.handleInputChange}
                          value={this.props.notes[schoolIndex]}
                        />
                      </div>
                      <Button
                        color="primary"
                        type="button"
                        name="action"
                        value="saveNote"
                        onClick={() =>
                          this.props.handleSaveNote(this.props.notes, schoolIndex)
                        }
                      >
                        Save
                      </Button>
                    </Collapse>
                    <Collapse
                      isOpen={
                        this.props.collapseProgress[schoolIndex]
                          ? this.props.collapseProgress[schoolIndex]
                          : false
                      }
                    >
                      <Card>
                        <div className="form-check">
                          <div className="row">
                            {Object.entries(school.progress).map((progress, progressIndex) => (
                              <div key={progressIndex}>
                              <div className="container-fluid">
                              <div className="col-md-3">
                              <input
                                //className="form-check-input"
                                type="checkbox"
                                value={progress}
                                name="name"
                                onChange={() => this.props.toggleCheckProgress(progress, schoolIndex, progressIndex)}
                                checked={progress[1]}
                              />
                              <label>
                                <p>                       {progress}</p>
                              </label>
                              <br />
                              </div>
                              </div>
                              <div class="w-100"></div>
                              </div>
                            ))}
                      
                  </div>
                  </div>
                </Card>
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
