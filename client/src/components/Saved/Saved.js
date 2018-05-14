import React from "react";
import { Button, Collapse, Card, Input } from "mdbreact";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faStickyNote,
  faTasks,
  faHeart
} from "@fortawesome/fontawesome-free-solid";

const Saved = props => (
  <div className="container">
    {props.savedSchools.length ? (
      <div className="row">
        {props.savedSchools.map((school, schoolIndex) => (
          <div
            className="card-group col-md-12"
            key={schoolIndex}
            style={{ padding: 15, justifyContent: "center" }}
          >
            <Card
              style={
                school.info.favorite
                  ? { backgroundColor: "#d8d8d8" }
                  : { backgroundColor: "#ffffff" }
              }
            >
              <div style={{ padding: 15 }}>
                <h4>{school.info.name}</h4>
                <hr />
                <div className="row">
                  <div className= "col-md-3">
                    <Button
                      size="lg"
                      color="primary"
                      type="button"
                      name="action"
                      value="notes"
                      onClick={() => props.toggleNotesBtn(schoolIndex)}
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
                      onClick={() => props.toggleProgressBtn(schoolIndex)}
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
                        props.toggleFavSchool(school.info.name)
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
                        props.handleDeleteSchool(school.info.name)
                      }
                    >
                      <FontAwesomeIcon icon={faTrash} size={"1x"} /> Delete
                    </Button>
                  </div>
                </div>
                <Collapse
                  isOpen={
                    props.collapseNotes[schoolIndex]
                      ? props.collapseNotes[schoolIndex]
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
                                props.handleDeleteNote(note, schoolIndex)
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
                      onChange={props.handleInputChange}
                      value={props.notes[schoolIndex]}
                    />
                  </div>
                  <Button
                    color="primary"
                    type="button"
                    name="action"
                    value="saveNote"
                    onClick={() =>
                      props.handleSaveNote(props.notes, schoolIndex)
                    }
                  >
                    Save
                  </Button>
                </Collapse>
                { props.role === "athlete" && (
                  <Collapse
                    isOpen={
                      props.collapseProgress[schoolIndex]
                        ? props.collapseProgress[schoolIndex]
                        : false
                    }
                  >
                    <Card>
                      <div className="form-check">
                        <div className="row">
                          {Object.entries(school.progress).map((progress, progressIndex) => (
                            <div key={progressIndex}>
                              <div className="container-fluid" key={progressIndex}>
                                <div className="col-md-3">
                                  <input
                                    type="checkbox"
                                    value={progress}
                                    name="name"
                                    onChange={() => props.toggleCheckProgress(progress, schoolIndex, progressIndex)}
                                    checked={progress[1]}
                                  />
                                  <label>
                                    <p>{progress}</p>
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
                )}
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

export default Saved;
