const AthleteInputs = ({
    handleFormSubmit,
    handleInputChange,
    errors,
    successMessage,
    user,
  }) => (
    <div className="row">
      <div className="offset-md-4 col-md-4">
        <SimpleCard>
          <form>
            <p className="h5 text-center justify-center mb-4">Create Athlete Profile</p>
  
            {successMessage && <p className="success-message">{successMessage}</p>}
            {errors.summary && <p className="error-message">{errors.summary}</p>}
  
            <Input
              label="E-mail"
              icon="envelope"
              group type="email"
              name="email"
              errortext={errors.email}
              onChange={handleInputChange}
              value={user.email}
            />
            <Input
              label="Phone"
              icon="phone"
              group type="phone"
              name="phone"
              onChange={handleInputChange}
              value={user.phone}
            />
            <Input
              label="Website"
              icon="envelope"
              group type="website"
              name="url"
              onChange={handleInputChange}
              value={user.url}
            />
            <Input
              label="First Name"
              icon="envelope"
              group type="name"
              name="firstName"
              onChange={handleInputChange}
              value={user.firstName}
            />
            <Input
              label="Middle Name"
              icon="envelope"
              group type="name"
              name="middleName"
              onChange={handleInputChange}
              value={user.middleName}
            />
            <Input
              label="Last Name"
              icon="envelope"
              group type="name"
              name="lastName"
              onChange={handleInputChange}
              value={user.lastName}
            />
            <Input
              label="Street"
              icon="envelope"
              group type="address"
              name="street1"
              onChange={handleInputChange}
              value={user.street1}
            />
            <Input
              label="City"
              icon="envelope"
              group type="address"
              name="city"
              onChange={handleInputChange}
              value={user.city}
            />
            <Input
              label="State"
              icon="envelope"
              group type="address"
              name="state"
              onChange={handleInputChange}
              value={user.state}
            />
            <Input
              label="Zip Code"
              icon="envelope"
              group type="address"
              name="zip"
              onChange={handleInputChange}
              value={user.zip}
            />
            <Input
              label="Zip4"
              icon="envelope"
              group type="address"
              name="zip4"
              onChange={handleInputChange}
              value={user.zip4}
            />
            <Input
              label="Parent Names"
              icon="envelope"
              group type="parentNames"
              name="parentNames"
              onChange={handleInputChange}
              value={user.parentNames}
            />
            <Input
              label="Jersey Number"
              icon="envelope"
              group type="jerseyNumber"
              name="jerseyNumber"
              onChange={handleInputChange}
              value={user.jerseyNumber}
            />
            <Input
              label="Graduating Year"
              icon="envelope"
              group type="gradYear"
              name="gradYear"
              onChange={handleInputChange}
              value={user.gradYear}
            />
            <Input
              label="Positions"
              icon="envelope"
              group type="positions"
              name="positions"
              onChange={handleInputChange}
              value={user.positions}
            />
            <Input
              label="NCAA ID"
              icon="envelope"
              group type="ncaaId"
              name="ncaaId"
              onChange={handleInputChange}
              value={user.ncaaId}
            />
            <Input
              label="Birthdate"
              icon="envelope"
              group type="birthDate"
              name="birthDate"
              onChange={handleInputChange}
              value={user.birthDate}
            />
            <Input
              label="Weighted GPA"
              icon="envelope"
              group type="weightGPA"
              name="weightGPA"
              onChange={handleInputChange}
              value={user.weightGPA}
            />
            <Input
              label="Unweighted GPA"
              icon="envelope"
              group type="unweightGPA"
              name="unweightGPA"
              onChange={handleInputChange}
              value={user.unweightGPA}
            />
            <Input
              label="Class Rank"
              icon="envelope"
              group type="classRank"
              name="classRank"
              onChange={handleInputChange}
              value={user.classRank}
            />
            <Input
              label="Class Size"
              icon="envelope"
              group type="classSize"
              name="classSize"
              onChange={handleInputChange}
              value={user.classSize}
            />
            <Input
              label="SAT Score"
              icon="envelope"
              group type="scoreSAT"
              name="scoreSAT"
              onChange={handleInputChange}
              value={user.scoreSAT}
            />
            <Input
              label="ACT Score"
              icon="envelope"
              group type="scoreACT"
              name="scoreACT"
              onChange={handleInputChange}
              value={user.scoreACT}
            />
            <Input
              label="Desired Major"
              icon="envelope"
              group type="major"
              name="major"
              onChange={handleInputChange}
              value={user.major}
            />
            <Input
              label="Club Name"
              icon="envelope"
              group type="clubName"
              name="clubName"
              onChange={handleInputChange}
              value={user.clubName}
            />
            <Input
              label="Club Team"
              icon="envelope"
              group type="clubTeam"
              name="clubTeam"
              onChange={handleInputChange}
              value={user.clubTeam}
            />
            <Input
              label="Club Director"
              icon="envelope"
              group type="director"
              name="director"
              onChange={handleInputChange}
              value={user.director}
            />
            <Input
              label="Club Coach"
              icon="envelope"
              group type="coachClub"
              name="coachClub"
              onChange={handleInputChange}
              value={user.coachClub}
            />
            <Input
              label="Club Street Address"
              icon="envelope"
              group type="clubStreet"
              name="clubStreet"
              onChange={handleInputChange}
              value={user.clubStreet}
            />
            <Input
              label="Club City"
              icon="envelope"
              group type="clubCity"
              name="clubCity"
              onChange={handleInputChange}
              value={user.clubCity}
            />
            <Input
              label="Club State"
              icon="envelope"
              group type="clubState"
              name="clubState"
              onChange={handleInputChange}
              value={user.clubState}
            />
            <Input
              label="Club Zip Code"
              icon="envelope"
              group type="clubZip"
              name="clubZip"
              onChange={handleInputChange}
              value={user.clubZip}
            />
            <Input
              label="Club Zip4"
              icon="envelope"
              group type="clubZip4"
              name="clubZip4"
              onChange={handleInputChange}
              value={user.clubZip4}
            />
            <Input
              label="Club Email"
              icon="envelope"
              group type="clubEmail"
              name="clubEmail"
              onChange={handleInputChange}
              value={user.clubEmail}
            />
            <Input
              label="Club Phone"
              icon="envelope"
              group type="clubPhone"
              name="clubPhone"
              onChange={handleInputChange}
              value={user.clubPhone}
            />
            <Input
              label="Club Website"
              icon="envelope"
              group type="clubURL"
              name="clubURL"
              onChange={handleInputChange}
              value={user.clubURL}
            />
            <Input
              label="High School Name"
              icon="envelope"
              group type="highSchoolName"
              name="highSchoolName"
              onChange={handleInputChange}
              value={user.highSchoolName}
            />
            <Input
              label="High School Coach"
              icon="envelope"
              group type="highSchoolCoach"
              name="highSchoolCoach"
              onChange={handleInputChange}
              value={user.highSchoolCoach}
            />
            <Input
              label="High School Street Address"
              icon="envelope"
              group type="highSchoolStreet"
              name="highSchoolStreet"
              onChange={handleInputChange}
              value={user.highSchoolStreet}
            />
            <Input
              label="High School City"
              icon="envelope"
              group type="highSchoolCity"
              name="highSchoolCity"
              onChange={handleInputChange}
              value={user.highSchoolCity}
            />
            <Input
              label="High School State"
              icon="envelope"
              group type="highSchoolState"
              name="highSchoolState"
              onChange={handleInputChange}
              value={user.highSchoolState}
            />
            <Input
              label="High School Zip Code"
              icon="envelope"
              group type="highSchoolZip"
              name="highSchoolZip"
              onChange={handleInputChange}
              value={user.highSchoolZip}
            />
            <Input
              label="High School Zip4"
              icon="envelope"
              group type="highSchoolZip4"
              name="highSchoolZip4"
              onChange={handleInputChange}
              value={user.highSchoolZip4}
            />
            <Input
              label="High School Email"
              icon="envelope"
              group type="highSchoolEmail"
              name="highSchoolEmail"
              onChange={handleInputChange}
              value={user.highSchoolEmail}
            />
            <Input
              label="High School Phone"
              icon="envelope"
              group type="highSchoolPhone"
              name="highSchoolPhone"
              onChange={handleInputChange}
              value={user.highSchoolPhone}
            />
            <Input
              label="High School Website"
              icon="envelope"
              group type="highSchoolURL"
              name="highSchoolURL"
              onChange={handleInputChange}
              value={user.highSchoolURL}
            />
            <Input
              label="Height"
              icon="envelope"
              group type="height"
              name="height"
              onChange={handleInputChange}
              value={user.height}
            />
            <Input
              label="Weight"
              icon="envelope"
              group type="weight"
              name="weight"
              onChange={handleInputChange}
              value={user.weight}
            />
            <Input
              label="Handed"
              icon="envelope"
              group type="handed"
              name="handed"
              onChange={handleInputChange}
              value={user.handed}
            />
            <Input
              label="Standing Reach"
              icon="envelope"
              group type="standReach"
              name="standReach"
              onChange={handleInputChange}
              value={user.standReach}
            />
            <Input
              label="Approach Touch"
              icon="envelope"
              group type="approachTouch"
              name="approachTouch"
              onChange={handleInputChange}
              value={user.approachTouch}
            />
            <Input
              label="Block Jump"
              icon="envelope"
              group type="blockJump"
              name="blockJump"
              onChange={handleInputChange}
              value={user.blockJump}
            />
            <Input
              label="Athlete Accomplishments"
              icon="envelope"
              group type="athleteAccomps"
              name="athleteAccomps"
              onChange={handleInputChange}
              value={user.athleteAccomps}
            />
            <Input
              label="School Accomplishments"
              icon="envelope"
              group type="schoolAccomps"
              name="schoolAccomps"
              onChange={handleInputChange}
              value={user.schoolAccomps}
            />
            <Input
              label="Video Links"
              icon="envelope"
              group type="videoLinks"
              name="videoLinks"
              onChange={handleInputChange}
              value={user.videoLinks}
            />
            <Input
              label="Profile Image"
              icon="envelope"
              group type="profileImg"
              name="profileImg"
              onChange={handleInputChange}
              value={user.profileImg}
            />
            <div className="text-center">
              <Button block color="danger"
                type="submit" 
                name="action"
                value="login" 
                onClick={handleFormSubmit}>
                Login
              </Button>
            </div>
          </form>
        </SimpleCard>
      </div>
    </div>
  );
  
  export default AthleteInputs;
  