const doctors = [
  {
    id: 1,
    name: "Benedict Cumberbatch",
    specialization: "Therapist",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
  {
    id: 2,
    name: "Harry Styles",
    specialization: "Therapist",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
  {
    id: 3,
    name: "John Dorian",
    specialization: "Therapist",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
];

const assistants = [
  {
    id: 1,
    name: "Assistant One",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
  {
    id: 2,
    name: "Assistant Two",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
  {
    id: 3,
    name: "Assistant Three",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
  {
    id: 4,
    name: "Assistant Four",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
];

const receptionists = [
  {
    id: 1,
    name: "Receptionist One",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
  {
    id: 2,
    name: "Receptionist Two",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
  {
    id: 3,
    name: "Receptionist Three",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
  {
    id: 4,
    name: "Receptionist Four",
    email: "frontdesk@gmail.com",
    phoneNumber: "380959423146",
  },
];

let rooms = [
  {
    id: 1,
    name: `1b`,
    timeStatus: "10:52",
    statusId: 1,
    assignedDoctorId: 1,
  },
  {
    id: 2,
    name: `2b`,
    timeStatus: "10:52",
    statusId: 1,
    assignedDoctorId: 2,
  },
  {
    id: 3,
    name: `3b`,
    timeStatus: "10:52",
    statusId: 1,
    assignedDoctorId: 3,
  },
  {
    id: 4,
    name: `4b`,
    timeStatus: "10:52",
    statusId: 1,
    assignedDoctorId: 1,
  },
  {
    id: 5,
    name: `5b`,
    timeStatus: "10:52",
    statusId: 1,
    assignedDoctorId: 2,
  },
  {
    id: 6,
    name: `6b`,
    timeStatus: "10:52",
    statusId: 1,
    assignedDoctorId: 3,
  },
];

const colors = [
  "rgba(72, 125, 54, 0.19)",
  "rgba(31, 125, 116, 0.19)",
  "rgba(55, 67, 171, 0.19)",
  "rgba(248, 251, 102, 0.19)",
  "rgba(120, 242, 117, 0.19)",
  "rgba(238, 88, 151, 0.19)",
  "rgba(250, 112, 12, 0.19)",
  "rgba(228, 133, 243, 0.19)",
  "rgba(134, 232, 238, 0.19)",
  "rgba(196, 230, 233, 0.19)",
];
const alerts = [
  {
    id: 1,
    name: `Doctor in 1`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 2,
    name: `Doctor in 2`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 3,
    name: `Doctor in 3`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 4,
    name: `Doctor in 4`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 5,
    name: `Doctor in 5`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 6,
    name: `Doctor in 6`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 7,
    name: `Doctor in 7`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 8,
    name: `Doctor in 8`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 9,
    name: `Doctor in 9`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
  {
    id: 10,
    name: `Doctor in 10`,
    color: colors[Math.floor(Math.random() * 10)],
    textColor: colors[Math.floor(Math.random() * 10)],
  },
];

const createWithId = (input) => {
  const id = Date.now();
  return {
    id,
    ...input,
  };
};

const resolvers = {
  Query: {
    // DOCTOR
    getAllDoctors: () => {
      return doctors;
    },
    getDoctor: ({ id }) => {
      return doctors.find((doctor) => doctor.id == id);
    },
    getDoctorRooms: ({ id }) => {
      return rooms.find((room) => room.assignedDoctorId == id);
    },
    //Receptionists
    getAllReceptionists: () => {
      return receptionists;
    },
    getReceptionist: ({ id }) => {
      return receptionists.find((receptionist) => receptionist.id == id);
    },
    //Assistants
    getAllAssistants: () => {
      return assistants;
    },
    getAssistant: ({ id }) => {
      return assistants.find((assistant) => assistant.id == id);
    },
    //Rooms
    getAllRooms: () => {
      return rooms;
    },
    // Alerts
    getAllAlerts: () => {
      return alerts;
    },
  },
  Mutation: {
    // DOCTOR
    createDoctor: ({ input }) => {
      const doctor = createWithId(input);
      doctors.push(doctor);
      return doctor;
    },
    deleteDoctor: ({ id }) => {
      const doctorToDelete = doctors.findIndex((doc) => doc.id == id);
      doctors.splice(doctorToDelete, 1);
      return id;
    },
    editDoctor: ({ id, input }) => {
      const freshDoctor = doctors.findIndex((doc) => doc.id == id);
      doctors.splice(freshDoctor, 1, { id, ...input });
      return { id, ...input };
    },
    //Receptionists

    createReceptionist: ({ input }) => {
      const receptionist = createWithId(input);
      receptionists.push(receptionist);
      return receptionist;
    },
    deleteReceptionist: ({ id }) => {
      const receptionistToDelete = receptionists.findIndex(
        (rec) => rec.id == id
      );
      receptionists.splice(receptionistToDelete, 1);
      return id;
    },
    editReceptionist: ({ id, input }) => {
      const freshReceptionist = receptionists.findIndex((rec) => rec.id == id);
      receptionists.splice(freshReceptionist, 1, { id, ...input });
      return { id, ...input };
    },
    //Assistants
    createAssistant: ({ input }) => {
      const assistant = createWithId(input);
      assistants.push(assistant);
      return assistant;
    },
    deleteAssistant: ({ id }) => {
      const assistantToDelete = assistants.findIndex((ass) => ass.id == id);
      assistants.splice(assistantToDelete, 1);
      return id;
    },
    editAssistant: ({ id, input }) => {
      const freshAssistant = assistants.findIndex((ass) => ass.id == id);
      assistants.splice(freshAssistant, 1, { id, ...input });
      return { id, ...input };
    },
    //Rooms
    createRoom: ({ input }) => {
      const id = Date.now();
      const room = { id, ...input };
      rooms.push(room);
      return room;
    }, 
    assignToDoctor: (roomId, doctorId ) => {
      const roomIndex = rooms.findIndex((roomEl) => roomEl.id == roomId);
      console.log(roomIndex)
      const room = rooms[roomIndex];
      rooms.splice(roomIndex, 1, { ...room, assignedDoctorId: doctorId });
      return { ...room, doctorId };
    },
    deleteRoom: ({ id }) => {
      const roomToDelete = rooms.findIndex((room) => room.id == id);
      rooms.splice(roomToDelete, 1);
      return id;
    },
    editRoom: ({ id, input }) => {
      const roomToEdit = rooms.findIndex((room) => room.id == id);
      rooms.splice(roomToEdit, 1, { id, ...input });
      return { id, ...input };
    },
    // Alerts
    createAssistant: ({ input }) => {
      const assistant = createWithId(input);
      assistants.push(assistant);
      return assistant;
    },
    createAlert: ({ input }) => {
      const alert = createWithId(input);
      alerts.push(alert);
      return alert;
    },
    editAlert: ({ id, input }) => {
      const alertToEdit = alerts.findIndex((alert) => alert.id == id);
      alerts.splice(alertToEdit, 1, { id, ...input });
      return { id, ...input };
    },
  },
  Doctor: {
    rooms: ({ id }) => {
      return rooms.filter((room) => room.id == id);
    },
  },
  Room: {
    assignedDoctor: ({ assignedDoctorId }) => {
      return doctors.find((doc) => doc.id == assignedDoctorId);
    },
    status: ({ statusId }) => {
      return alerts.find((alert) => alert.id == statusId);
    },
  },
};

module.exports = { resolvers };
