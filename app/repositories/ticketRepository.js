const { ticket, airport, airplane, company, } = require("../models");

// untuk mencari data sesuai dengan nama ticket
const findTicket = (code) => {
  // cari berdasarkan nama ticket
  const find = ticket.findOne({
    where: {
      code,
    },
    include: [
      {
        model: airport, 
        as:"origin",
      },
      {
        model: airport, 
        as:"destination",
      },
      {
        model: airplane, attributes: { exclude: ["seatCapacity",], },
        include: company,
      },
    ],
  });
  return find;
};

const createTicket = (newTicket) => {
  return ticket.create(newTicket);
};

const getTicket = () => {
  return ticket.findAll({
    include: [
      {
        model: airport, 
        as:"origin",
      },
      {
        model: airport, 
        as:"destination",
      },
      {
        model: airplane, attributes: { exclude: ["seatCapacity",], },
        include: company,
      },
    ],
  });
};

const findTicketById = (id) => {
  return ticket.findOne({
    where: {
      id,
    },
    include: [
      {
        model: airport, 
        as:"origin",
      },
      {
        model: airport, 
        as:"destination",
      },
      {
        model: airplane, attributes: { exclude: ["seatCapacity",], },
        include: company,
      },
    ],
  });
};

const updateTicket = async (reqBody, id) => {
  return await ticket.update(reqBody, { where: { id, }, });
};

const deleteTicket = async (id) => {
  return await ticket.destroy({ where: { id, }, });
};

module.exports = {
  findTicket,
  createTicket,
  getTicket,
  findTicketById,
  updateTicket,
  deleteTicket,
};
