import React from "react";
import { Button, Collapse, Card, Input, FormInline } from "mdbreact";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import {
  faTrash,
  faStickyNote,
  faTasks,
  faHeart
} from "@fortawesome/fontawesome-free-solid";

const styles = {
  row: {
    display: "flex",
    flexWrap: "wrap"
  },
  col: {
    flexBasis: 0,
    flexGrow: 1,
  }
};

const Saved = props => (
  <div className="container" style={{ padding: 10 }}>
    <h2><strong>Saved Schools</strong></h2>
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
              <div style={{ padding: 10 }}>
                <h4>{school.info.name}</h4>
                <hr />
                <div className="row">
                  <div className="col">
                    <Button
                      size="lg"
                      className="blue lighten-1"
                      type="button"
                      name="action"
                      value="notes"
                      onClick={() => props.toggleNotesBtn(schoolIndex)}
                    >
                      <FontAwesomeIcon icon={faStickyNote} size={"1x"} /><small> Notes</small>
                    </Button>
                  </div>
                  {props.userRole === "athlete" && (
                    <div className="col">
                      <Button
                        size="lg"
                        className="blue lighten-1"
                        type="button"
                        name="action"
                        value="progress"
                        onClick={() => props.toggleProgressBtn(schoolIndex)}
                      >
                        <FontAwesomeIcon icon={faTasks} size={"1x"} /><small> Progress</small>
                      </Button>
                    </div>
                  )}
                  <div className="col">
                    <Button
                      size="lg"
                      className="blue lighten-1"
                      type="button"
                      name="action"
                      value="favBtn"
                      onClick={() => props.toggleFavSchool(school.info.name)}
                    >
                      <FontAwesomeIcon icon={faHeart} size={"1x"} /><small> Favorite</small>
                    </Button>
                  </div>
                  <div className="col">
                    <Button
                      size="lg"
                      className="red lighten-1"
                      type="button"
                      name="action"
                      value="deleteBtn"
                      onClick={() => props.handleDeleteSchool(school.info.name)}
                    >
                      <FontAwesomeIcon icon={faTrash} size={"1x"} /><small> Delete</small>
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
                        <div
                          className="row"
                          style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center"
                          }}
                        >
                          <div className="col-md-10">
                            <p>{note}</p>
                          </div>
                          <div className="col-md-2">
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
                          </div>
                        </div>
                        <hr />
                      </div>
                    ))}
                  </Card>
                  <div>
                    <Input
                      placeholder="note"
                      group
                      type="note"
                      name="note"
                      onChange={props.handleInputChange}
                      value={props.note}
                    />
                  </div>
                  <Button
                    color="primary"
                    type="button"
                    name="action"
                    value="saveNote"
                    onClick={() =>
                      props.handleSaveNote(props.note, schoolIndex)
                    }
                  >
                    Save
                  </Button>
                </Collapse>
                {props.userRole === "athlete" && (
                  <Collapse
                    isOpen={
                      props.collapseProgress[schoolIndex]
                        ? props.collapseProgress[schoolIndex]
                        : false
                    }
                  >
                    <Card>
                      <FormInline>
                        <div className="container">
                          <div className="row flex-fill">
                            {Object.entries(school.progress).map(
                              (progress, progressIndex) => (
                                <div key={progressIndex}>
                                  <div className="col-md-12" styles={styles.col}>
                                    <input
                                      type="checkbox"
                                      checked={progress[1]}
                                      onChange={() =>
                                        props.toggleCheckProgress(
                                          progress,
                                          schoolIndex,
                                          progressIndex
                                        )
                                      }
                                    />
                                    <label>
                                      <p>{progress}</p>
                                    </label>
                                    {/* <input
                                      type="checkbox"
                                      value={progress}
                                      name="name"
                                      onChange={() =>
                                        props.toggleCheckProgress(
                                          progress,
                                          schoolIndex,
                                          progressIndex
                                        )
                                      }
                                      checked={progress[1]}
                                    />
                                    <label>
                                      <p>{progress}</p>
                                    </label> */}
                                  </div>
                                  <br />
                                  {/* <div className="w-100" /> */}
                                </div>
                              )
                            )}
                          </div>
                        </div>
                      </FormInline>
                      <div className="progress">
                        <div
                          className="progress-bar progress-bar-striped progress-bar-animated"
                          role="progressbar"
                          aria-valuenow={props.progressWidths[schoolIndex]}
                          aria-valuemin="0"
                          aria-valuemax="100"
                          style={{ width: props.progressWidths[schoolIndex] }}
                        />
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
