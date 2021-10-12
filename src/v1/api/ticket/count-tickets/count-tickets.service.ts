import { StatusCodeEnum } from "v1/enum/status-code";
import { CustomError } from "v1/utils/error";
import { TicketRepository } from "../ticket.entity";

interface Injectables {
	ticketRepository: TicketRepository;
}

export const countTickets = async ({ ticketRepository }: Injectables) => {
	const numberOfTickets = await ticketRepository.count();

	if (!numberOfTickets) {
		throw new CustomError("No ticket found.", StatusCodeEnum.NOT_FOUND);
	}

	return numberOfTickets;
};
