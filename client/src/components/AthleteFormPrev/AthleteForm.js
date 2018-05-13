import React from "react";
import { Button } from "mdbreact";
import SimpleCard from "../../components/SimpleCard";

import "./AthleteForm.css"

const AthleteInput = ({
    handleFormSubmit,
    handleInputChange,
    user,
  }) => (
    <SimpleCard>
      <h4 className="text-center justify-center mb-3">Athlete Profile</h4>
	    <form>
        <p>
          <label htmlFor="email">E-mail:</label>
          <input id="email" type="text" name="email" value={user.email} readOnly
          />
        </p>
        <p>
          <label htmlFor="firstName">First Name:</label>
          <input id="firstName" type="text" name="firstName" value={user.firstName} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="middleName">Middle Name:</label>
          <input id="middleName" type="text" name="middleName" value={user.middleName} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="lastName">Last Name:</label>
          <input id="lastName" type="text" name="lastName" value={user.lastName} onChange={handleInputChange}
          />
        </p>

        <h6 className="font-weight-bold mt-3 mb-0">Contact Info:</h6>
        <p>
          <label htmlFor="phone">Phone:</label>
          <input id="phone" type="text" name="phone" value={user.phone} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="url">Website:</label>
          <input id="url" type="url" name="url" value={user.url} onChange={handleInputChange}
          />
        </p>

        <h6 className="font-weight-bold mt-3 mb-0">Address:</h6>
        <p>
          <label htmlFor="street1">Street1:</label>
          <input id="street1" type="text" name="street1" value={user.street1} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="street2">Street2:</label>
          <input id="street2" type="text" name="street2" value={user.street2} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="city">City:</label>
          <input id="city" type="text" name="city" value={user.city} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="state">State:</label>
          <input id="state" type="text" name="state" value={user.state} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="zip">Zip Code:</label>
          <input id="zip" type="text" name="zip" value={user.zip} onChange={handleInputChange}
          />
        </p>

        <h6 className="font-weight-bold mt-3 mb-0">Personal Info:</h6>
        <p>
          <label htmlFor="parentNames">Parent Names:</label>
          <input id="parentNames" type="text" name="parentNames" value={user.parentNames} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="birthDate">Birth Date:</label>
          <input id="birthDate" type="date" name="birthDate" value={user.birthDate} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="gradYear">Graduation Year:</label>
          <input id="gradYear" type="number" name="gradYear" value={user.gradYear} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="jerseyNum">Jersey Number:</label>
          <input id="jerseyNum" type="number" name="jerseyNum" value={user.jerseyNum} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="positions">Positions:</label>
          <input id="positions" type="text" name="positions" value={user.positions} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="ncaaId">NCAA ID:</label>
          <input id="ncaaId" type="text" name="ncaaId" value={user.ncaaId} onChange={handleInputChange}
          />
        </p>

        <h6 className="font-weight-bold mt-3 mb-0">Academics:</h6>
        <p>
          <label htmlFor="weightGPA">Weighted GPA:</label>
          <input id="weightGPA" type="number" name="weightGPA" value={user.weightGPA} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="unweightGPA">Unweighted GPA:</label>
          <input id="unweightGPA" type="number" name="unweightGPA" value={user.unweightGPA} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="classRank">Class Rank:</label>
          <input id="classRank" type="number" name="classRank" value={user.classRank} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="classSize">Class Size:</label>
          <input id="classSize" type="number" name="classSize" value={user.classSize} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="scoreSAT">SAT Score:</label>
          <input id="scoreSAT" type="number" name="scoreSAT" value={user.scoreSAT} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="scoreACT">ACT Score:</label>
          <input id="scoreACT" type="number" name="scoreACT" value={user.scoreACT} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="major">Major:</label>
          <input id="major" type="text" name="major" value={user.major} onChange={handleInputChange}
          />
        </p>

        <h6 className="font-weight-bold mt-3 mb-0">Club Info:</h6>
        <p>
          <label htmlFor="clubName">Name:</label>
          <input id="clubName" type="text" name="clubName" value={user.clubName} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubTeam">Team:</label>
          <input id="clubTeam" type="text" name="clubTeam" value={user.clubTeam} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubDirFirst">Director First Name:</label>
          <input id="clubDirFirst" type="text" name="clubDirFirst" value={user.clubDirFirst} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubDirMiddle">Director Middle Name:</label>
          <input id="clubDirMiddle" type="text" name="clubDirMiddle" value={user.clubDirMiddle} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubDirLast">Director Last Name:</label>
          <input id="clubDirLast" type="text" name="clubDirLast" value={user.clubDirLast} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubCoachFirst">Coach First Name:</label>
          <input id="clubCoachFirst" type="text" name="clubCoachFirst" value={user.clubCoachFirst} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubCoachMiddle">Coach Middle Name:</label>
          <input id="clubCoachMiddle" type="text" name="clubCoachMiddle" value={user.clubCoachMiddle} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubCoachLast">Coach Last Name:</label>
          <input id="clubCoachLast" type="text" name="clubCoachLast" value={user.clubCoachLast} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubStreet1">Street1:</label>
          <input id="clubStreet1" type="text" name="clubStreet1" value={user.clubStreet1} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubStreet2">Street2:</label>
          <input id="clubStreet2" type="text" name="clubStreet2" value={user.clubStreet2} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubCity">City:</label>
          <input id="clubCity" type="text" name="clubCity" value={user.clubCity} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubState">State:</label>
          <input id="clubState" type="text" name="clubState" value={user.clubState} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubZip">Zip Code:</label>
          <input id="clubZip" type="text" name="clubZip" value={user.clubZip} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubEmail">Email:</label>
          <input id="clubEmail" type="email" name="clubEmail" value={user.clubEmail} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubPhone">Phone:</label>
          <input id="clubPhone" type="text" name="clubPhone" value={user.clubPhone} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="clubUrl">Website:</label>
          <input id="clubUrl" type="url" name="clubUrl" value={user.clubUrl} onChange={handleInputChange}
          />
        </p>

        <h6 className="font-weight-bold mt-3 mb-0">High School Info:</h6>
        <p>
          <label htmlFor="hsName">Name:</label>
          <input id="hsName" type="text" name="hsName" value={user.hsName} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsCoachFirst">Coach First Name:</label>
          <input id="hsCoachFirst" type="text" name="hsCoachFirst" value={user.hsCoachFirst} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsCoachMiddle">Coach Middle Name:</label>
          <input id="hsCoachMiddle" type="text" name="hsCoachMiddle" value={user.hsCoachMiddle} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsCoachLast">Coach Last Name:</label>
          <input id="hsCoachLast" type="text" name="hsCoachLast" value={user.hsCoachLast} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsStreet1">Street1:</label>
          <input id="hsStreet1" type="text" name="hsStreet1" value={user.hsStreet1} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsStreet2">Street2:</label>
          <input id="hsStreet2" type="text" name="hsStreet2" value={user.hsStreet2} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsCity">City:</label>
          <input id="hsCity" type="text" name="hsCity" value={user.hsCity} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsState">State:</label>
          <input id="hsState" type="text" name="hsState" value={user.hsState} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsZip">Zip Code:</label>
          <input id="hsZip" type="text" name="hsZip" value={user.hsZip} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsEmail">Email:</label>
          <input id="hsEmail" type="email" name="hsEmail" value={user.hsEmail} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsPhone">Phone:</label>
          <input id="hsPhone" type="text" name="hsPhone" value={user.hsPhone} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="hsUrl">Website:</label>
          <input id="hsUrl" type="url" name="hsUrl" value={user.hsUrl} onChange={handleInputChange}
          />
        </p>

        <h6 className="font-weight-bold mt-3 mb-0">Statistics:</h6>
        <p>
          <label htmlFor="height">Height:</label>
          <input id="height" type="text" name="height" value={user.height} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="weight">Weight:</label>
          <input id="weight" type="text" name="weight" value={user.weight} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="handed">Handed:</label>
          <input id="handed" type="text" name="handed" value={user.handed} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="standReach">Standing Reach:</label>
          <input id="standReach" type="text" name="standReach" value={user.standReach} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="approachTouch">Approach Touch:</label>
          <input id="approachTouch" type="text" name="approachTouch" value={user.approachTouch} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="blockJump">Block Jump:</label>
          <input id="blockJump" type="text" name="blockJump" value={user.blockJump} onChange={handleInputChange}
          />
        </p>

        <h6 className="font-weight-bold mt-3 mb-0">Additional:</h6>
        <p>
          <label htmlFor="athleteAccomps">Athletic Accomplishments:</label>
          <input id="athleteAccomps" type="text" name="athleteAccomps" value={user.athleteAccomps} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="schoolAccomps">Academic/Other Acomplishments:</label>
          <input id="schoolAccomps" type="text" name="schoolAccomps" value={user.schoolAccomps} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="videoLinks">You Tube Video Links:</label>
          <input id="videoLinks" type="url" name="videoLinks" value={user.videoLinks} onChange={handleInputChange}
          />
        </p>
        <p>
          <label htmlFor="profileImg">Profile Image File:</label>
          <input id="profileImg" type="file" name="profileImg" value={user.profileImg} onChange={handleInputChange}
          />
        </p>
        <input type="submit" value="Submit" onClick={handleFormSubmit} />
      </form>
    </SimpleCard>
  );
  
  export default AthleteInput;