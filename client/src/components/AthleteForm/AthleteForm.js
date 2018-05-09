import React from "react";
import { Button, Input } from "mdbreact";
import SimpleCard from "../../components/SimpleCard";

const AthleteInput = ({
    handleFormSubmit,
    handleInputChange,
    user,
  }) => (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <SimpleCard>
          <form>
            <p className="h5 text-center justify-center mb-4">Create Athlete Profile</p>
            <Input
              label="E-mail"
              icon="envelope"
              group type="email"
              name="email"
              onChange={handleInputChange}
              value={user.contact.email}
            />
            <Input
              label="Phone"
              icon="phone"
              group type="phone"
              name="phone"
              onChange={handleInputChange}
              value={user.contact.phone}
            />
            <Input
              label="Website"
              group type="website"
              name="url"
              onChange={handleInputChange}
              value={user.contact.url}
            />
            <Input
              label="First Name"
              group type="name"
              name="firstName"
              onChange={handleInputChange}
              value={user.name.first}
            />
            <Input
              label="Middle Name"
              group type="name"
              name="middleName"
              onChange={handleInputChange}
              value={user.name.middle}
            />
            <Input
              label="Last Name"
              group type="name"
              name="lastName"
              onChange={handleInputChange}
              value={user.name.last}
            />
            <Input
              label="Street"
              group type="address"
              name="street1"
              onChange={handleInputChange}
              value={user.address.street1}
            />
            <Input
              label="Street 2"
              group type="address"
              name="street2"
              onChange={handleInputChange}
              value={user.address.street2}
            />
            <Input
              label="City"
              group type="address"
              name="city"
              onChange={handleInputChange}
              value={user.address.city}
            />
            <Input
              label="State"
              group type="address"
              name="state"
              onChange={handleInputChange}
              value={user.address.state}
            />
            <Input
              label="Zip Code"
              group type="address"
              name="zip"
              onChange={handleInputChange}
              value={user.address.zip}
            />
            <Input
              label="Zip 4"
              group type="address"
              name="zip4"
              onChange={handleInputChange}
              value={user.address.zip4}
            />
            <Input
              label="Parent Names"
              group type="parentNames"
              name="parentNames"
              onChange={handleInputChange}
              value={user.parentNames}
            />
            <Input
              label="Jersey Number"
              group type="jerseyNumber"
              name="jerseyNumber"
              onChange={handleInputChange}
              value={user.jerseyNum}
            />
            <Input
              label="Graduating Year"
              group type="gradYear"
              name="gradYear"
              onChange={handleInputChange}
              value={user.gradYear}
            />
            <Input
              label="Positions"
              group type="positions"
              name="positions"
              onChange={handleInputChange}
              value={user.positions}
            />
            <Input
              label="NCAA ID"
              group type="ncaaId"
              name="ncaaId"
              onChange={handleInputChange}
              value={user.ncaaId}
            />
            <Input
              label="Birthdate"
              group type="birthDate"
              name="birthDate"
              onChange={handleInputChange}
              value={user.birthDate}
            />
            <Input
              label="Weighted GPA"
              group type="scholastic"
              name="weightGPA"
              onChange={handleInputChange}
              value={user.scholastic.weightGPA}
            />
            <Input
              label="Unweighted GPA"
              group type="scholastic"
              name="unweightGPA"
              onChange={handleInputChange}
              value={user.scholastic.unweightGPA}
            />
            <Input
              label="Class Rank"
              group type="scholastic"
              name="classRank"
              onChange={handleInputChange}
              value={user.scholastic.classRank}
            />
            <Input
              label="Class Size"
              group type="scholastic"
              name="classSize"
              onChange={handleInputChange}
              value={user.scholastic.classSize}
            />
            <Input
              label="SAT Score"
              group type="scholastic"
              name="scoreSAT"
              onChange={handleInputChange}
              value={user.scholastic.scoreSAT}
            />
            <Input
              label="ACT Score"
              group type="scholastic"
              name="scoreACT"
              onChange={handleInputChange}
              value={user.scholastic.scoreACT}
            />
            <Input
              label="Major"
              group type="scholastic"
              name="major"
              onChange={handleInputChange}
              value={user.scholastic.major}
            />
            <Input
              label="Club Name"
              group type="club"
              name="clubName"
              onChange={handleInputChange}
              value={user.club.name}
            />
            <Input
              label="Club Team"
              group type="club"
              name="clubTeam"
              onChange={handleInputChange}
              value={user.club.team}
            />
            <Input
              label="Club Director First Name"
              group type="club"
              name="director"
              onChange={handleInputChange}
              value={user.club.director.first}
            />
            <Input
              label="Club Director Middle Name"
              group type="club"
              name="director"
              onChange={handleInputChange}
              value={user.club.director.middle}
            />
            <Input
              label="Club Director Last Name"
              group type="club"
              name="director"
              onChange={handleInputChange}
              value={user.club.director.last}
            />
            <Input
              label="Club Coach First Name"
              group type="club"
              name="coachClub"
              onChange={handleInputChange}
              value={user.club.coach.first}
            />
            <Input
              label="Club Coach Middle Name"
              group type="club"
              name="coachClub"
              onChange={handleInputChange}
              value={user.club.coach.middle}
            />            
            <Input
            label="Club Coach Last Name"
            group type="club"
            name="coachClub"
            onChange={handleInputChange}
            value={user.club.coach.last}
          />
            <Input
              label="Club Street Address"
              group type="club"
              name="clubStreet"
              onChange={handleInputChange}
              value={user.club.address.street1}
            />
            <Input
              label="Club Street Address 2"
              group type="club"
              name="clubStreet"
              onChange={handleInputChange}
              value={user.club.address.street2}
            />
            <Input
              label="Club City"
              group type="club"
              name="clubCity"
              onChange={handleInputChange}
              value={user.club.address.city}
            />
            <Input
              label="Club State"
              group type="club"
              name="clubState"
              onChange={handleInputChange}
              value={user.club.address.state}
            />
            <Input
              label="Club Zip Code"
              icon="club"
              group type="clubZip"
              name="clubZip"
              onChange={handleInputChange}
              value={user.club.address.zip}
            />
            <Input
              label="Club Zip 4"
              group type="club"
              name="clubZip4"
              onChange={handleInputChange}
              value={user.club.address.zip4}
            />
            <Input
              label="Club Email"
              group type="clubContact"
              name="clubEmail"
              onChange={handleInputChange}
              value={user.club.contact.email}
            />
            <Input
              label="Club Phone"
              group type="clubContact"
              name="clubPhone"
              onChange={handleInputChange}
              value={user.club.contact.phone}
            />
            <Input
              label="Club Website"
              group type="clubContact"
              name="clubURL"
              onChange={handleInputChange}
              value={user.club.contact.url}
            />
            <Input
              label="High School Name"
              group type="highSchool"
              name="highSchoolName"
              onChange={handleInputChange}
              value={user.highSchool.name}
            />
            <Input
              label="High School Coach First Name"
              group type="highSchool"
              name="highSchoolCoach"
              onChange={handleInputChange}
              value={user.highSchool.coach.first}
            />
            <Input
              label="High School Coach Middle Name"
              group type="highSchool"
              name="highSchoolCoach"
              onChange={handleInputChange}
              value={user.highSchool.coach.middle}
            />
            <Input
              label="High School Coach Last Name"
              group type="highSchool"
              name="highSchoolCoach"
              onChange={handleInputChange}
              value={user.highSchool.coach.last}
            />
            <Input
              label="High School Street Address 1"
              group type="highSchool"
              name="highSchoolStreet1"
              onChange={handleInputChange}
              value={user.highSchool.address.street1}
            />
            <Input
              label="High School Street Address 2"
              group type="highSchool"
              name="highSchoolStreet2"
              onChange={handleInputChange}
              value={user.highSchool.address.street2}
            />
            <Input
              label="High School City"
              group type="highSchool"
              name="highSchoolCity"
              onChange={handleInputChange}
              value={user.highSchool.address.city}
            />
            <Input
              label="High School State"
              group type="highSchool"
              name="highSchoolState"
              onChange={handleInputChange}
              value={user.highSchool.address.state}
            />
            <Input
              label="High School Zip Code"
              group type="highSchool"
              name="highSchoolZip"
              onChange={handleInputChange}
              value={user.highSchool.address.zip}
            />
            <Input
              label="High School Zip 4"
              group type="highSchool"
              name="highSchoolZip4"
              onChange={handleInputChange}
              value={user.highSchool.address.zip4}
            />
            <Input
              label="High School Email"
              group type="highSchool"
              name="highSchoolEmail"
              onChange={handleInputChange}
              value={user.highSchool.contact.email}
            />
            <Input
              label="High School Phone"
              group type="highSchool"
              name="highSchoolPhone"
              onChange={handleInputChange}
              value={user.highSchool.contact.phone}
            />
            <Input
              label="High School Website"
              group type="highSchool"
              name="highSchoolURL"
              onChange={handleInputChange}
              value={user.highSchool.contact.url}
            />
            <Input
              label="Height"
              group type="statistics"
              name="height"
              onChange={handleInputChange}
              value={user.statistics.height}
            />
            <Input
              label="Weight"
              group type="statistics"
              name="weight"
              onChange={handleInputChange}
              value={user.statistics.weight}
            />
            <Input
              label="Handed"
              group type="statistics"
              name="handed"
              onChange={handleInputChange}
              value={user.statistics.handed}
            />
            <Input
              label="Standing Reach"
              group type="statistics"
              name="standReach"
              onChange={handleInputChange}
              value={user.statistics.standReach}
            />
            <Input
              label="Approach Touch"
              group type="statistics"
              name="approachTouch"
              onChange={handleInputChange}
              value={user.statistics.approachTouch}
            />
            <Input
              label="Block Jump"
              group type="statistics"
              name="blockJump"
              onChange={handleInputChange}
              value={user.statistics.blockJump}
            />
            <Input
              label="Athlete Accomplishments"
              group type="athleteAccomps"
              name="athleteAccomps"
              onChange={handleInputChange}
              value={user.athleteAccomps}
            />
            <Input
              label="School Accomplishments"
              group type="schoolAccomps"
              name="schoolAccomps"
              onChange={handleInputChange}
              value={user.schoolAccomps}
            />
            <Input
              label="Video Links"
              group type="videoLinks"
              name="videoLinks"
              onChange={handleInputChange}
              value={user.videoLinks}
            />
            <Input
              label="Profile Image"
              group type="profileImg"
              name="profileImg"
              onChange={handleInputChange}
              value={user.profileImg}
            />
            <div className="text-center">
              <Button block color="danger"
                type="submit" 
                name="action"
                value="populate" 
                onClick={handleFormSubmit}>
                Submit
              </Button>
            </div>
          </form>
        </SimpleCard>
      </div>
    </div>
  );
  
  export default AthleteInput;