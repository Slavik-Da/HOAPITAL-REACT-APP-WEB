const { makeExecutableSchema } = require("graphql-tools");
const { resolvers } = require("./resolvers");
const schema = makeExecutableSchema({
  typeDefs: `
    type Doctor {
    id: ID
    name: String!
    specialization: String!
    email: String!
    phoneNumber: String!
    rooms: [Room]
 }
 
 type Room {
    id: ID
    name: String!
    timeStatus: String!
    statusId: Int!
    status: Alert
    assignedDoctorId: Int!
    assignedDoctor: Doctor
    
 }
 
 type Assistant {
    id: ID
    name: String!
    email: String!
    phoneNumber: String!
 }
 
 type Receptionist {
    id: ID
    name: String!
    email: String!
    phoneNumber: String!
 }
 
 type Alert {
    id: ID
    name: String! 
    color: String
    textColor: String
 }
 type Color {
    id: ID
    value: String!
 }
 
 input DoctorInput {
    name: String!
    specialization: String!
    email: String!
    phoneNumber: String!
 }
 
 input RoomInput {
    id: ID
    name: String
    timeStatus: String
    status: String
    statusId: Int
    assignedDoctorId: Int
 }
 
 input AssistantInput {
    name: String!
    email: String!
    phoneNumber: String!
 }
 
 input ReceptionistInput {
    name: String!
    email: String!
    phoneNumber: String!
 }
 
 input AlertInput {
    name: String!
    color: String!
    textColor: String!
 }
 
 input ColorInput {
    value: String!
 }
 
 type Query {
    getAllDoctors: [Doctor]
    getDoctor ( id: ID! ) : Doctor
    getDoctorRooms ( id: ID! ) : [Room]
    
    getAllAssistants: [Assistant]
    getAssistant (id: ID!): Assistant 
    
    getAllReceptionists: [Receptionist]
    getReceptionist (id: ID!) : Receptionist
    
    getAllRooms: [Room]
    getAllAlerts: [Alert]
    
 }
 
 type Mutation {
    createDoctor ( input: DoctorInput! ) : Doctor
    deleteDoctor ( id: ID! ) : ID
    editDoctor ( id: ID, input: DoctorInput! ) : Doctor
    
    createAssistant ( input: AssistantInput! ) : Assistant
    deleteAssistant ( id: ID! ) : ID
    editAssistant ( id: ID!, input: AssistantInput! ) : Assistant
    
    createReceptionist ( input: ReceptionistInput! ) : Receptionist
    deleteReceptionist ( id: ID! ) : ID
    editReceptionist ( id: ID!, input: ReceptionistInput!) : Receptionist
    
    createAlert ( input: AlertInput! ) : Alert 
    editAlert ( id: ID!, input: AlertInput! ) : Alert
    
    createRoom ( input: RoomInput! ) : Room
    deleteRoom ( id: ID! ) : ID
    editRoom ( id: ID!, input: RoomInput! ): Room
    assignToDoctor ( roomId : ID!, doctorId: ID! ) : Room
 }
    `,
  resolvers,
});

module.exports = schema;
