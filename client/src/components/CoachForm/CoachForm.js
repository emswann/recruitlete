import React from "react";
import { Button, Input } from "mdbreact";
import SimpleCard from "../../components/SimpleCard";

const CoachForm = ({
    handleFormSubmit,
    handleInputChange,
    user,
  }) => (
    <div className="row">
    <div className="offset-md-4 col-md-4">
      <SimpleCard>
        <form>
          <p className="h5 text-center justify-center mb-4">Create Coach Profile</p>
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
            label="Position"
            group type="position"
            name="position"
            onChange={handleInputChange}
            value={user.position}
          />
          <Input
            label="Accomplishments"
            group type="accomplishments"
            name="accomplishments"
            onChange={handleInputChange}
            value={user.accomplishments}
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

export default CoachForm;