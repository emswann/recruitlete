import React from "react";
import { Card } from "mdbreact";
import { Button } from "mdbreact";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import { faBuilding, faTrash, faStickyNote, faTasks, faHeart } from "@fortawesome/fontawesome-free-solid";

class Saved extends React.Component {
  constructor(props) {
    super(props);
  this.state={
    backgroundColor: "#ffffff"
  }
}

handleLoveBtn = () => {
  this.setState({
    backgroundColor:"#d8d8d8"
  })
}

  render() {
    return (
  <div className="container">
    <h2> Saved Schools </h2>
    {this.props.savedSchools.length ? (
      <div className="row">
        {this.props.savedSchools.map((school, index) => (
          <div
            className="card-group col-md-3"
            key={index}
            style={{ padding: 15, justifyContent: "center" }}
          >
            <Card>
              <div style={{ padding: 15}}>
                <FontAwesomeIcon icon={faBuilding} size={"2x"} />
                <h4>{school.info.name}</h4>
                <hr/>
                <div style={{margin:5, display: "flex", justifyContent: "space-between"}}>
                <Button
                  color="primary"
                  type="button"
                  name="action"
                  value="notesBtn"
                >
                  <FontAwesomeIcon icon={faStickyNote} size={"1x"} />
                </Button>
                <Button
                  color="primary"
                  type="button"
                  name="action"
                  value="progressBtn"
                >
                  <FontAwesomeIcon icon={faTasks} size={"1x"} />
                </Button>
                <Button
                  color="primary"
                  type="button"
                  name="action"
                  value="loveBtn"
                  onClick={this.handleLoveBtn}
                >
                  <FontAwesomeIcon icon={faHeart} size={"1x"} />
                </Button>
                <Button
                  color="danger"
                  type="button"
                  name="action"
                  value="deleteBtn"
                  onClick={() => this.props.handleDeleteSchool(school.info.name)}
                >
                  <FontAwesomeIcon icon={faTrash} size={"1x"} />
                </Button>
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
