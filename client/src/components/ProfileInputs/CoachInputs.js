const CoachInputs = ({
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
              label="Position"
              icon="envelope"
              group type="position"
              name="position"
              onChange={handleInputChange}
              value={user.position}
            />
            <Input
              label="Accomplishments"
              icon="envelope"
              group type="accomplishments"
              name="accomplishments"
              onChange={handleInputChange}
              value={user.accomplishments}
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
  
  export default CoachInputs;
  