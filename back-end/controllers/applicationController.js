const Application = require("../models/applicationModel");

// get all Applications
async function getApplications() {
    const applications = await Application.find({}).sort({ createdAt: -1 });
    return applications;
}

// create a new Application
async function addApplication(application) {
    const { internshipID, companyName, companyLogo, positionName, locations, status } =
    application;
    try {
    const newApplication = await Application.create({
        id: "test id",
        userID: "test user id",
        internshipID,
        companyName,
        companyLogo,
        positionName,
        locations,
        status,
        reviews: "test review",
    });
    } catch (error) {
    console.log("Error creating new Application position", error.message);
    console.log("new Application details: ", application);
    };
}

module.exports = {
    getApplications,
    addApplication,
};