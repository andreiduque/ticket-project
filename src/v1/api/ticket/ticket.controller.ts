import { FastifyInstance, FastifyPluginAsync } from "fastify";
import { countTicketsController } from "./count-tickets/count-tickets.controller";
import { createController } from "./create/create.controller";
import { findByCodeController } from "./find-by-code/find-by-code.controller";
import { listTicketsByPageController } from "./list-tickets-by-page/list-tickets-by-page.controller";

// eslint-disable-next-line require-await
const ticketController: FastifyPluginAsync = async fastifyInstancePlugin => {
	fastifyInstancePlugin.post("/create", createController);
	fastifyInstancePlugin.get("/find-by-code", findByCodeController);
	fastifyInstancePlugin.get("/count-tickets", countTicketsController);
	fastifyInstancePlugin.get(
		"/list-tickets-by-page",
		listTicketsByPageController,
	);
};

export const setTicketController = (fastify: FastifyInstance) =>
	fastify.register(ticketController, {
		prefix: "/ticket",
	});
