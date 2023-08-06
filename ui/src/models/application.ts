export interface IClient {
	id: string;
	firstName: string;
	lastName: string;
	email: string;
	phoneNumber: string;
}

export interface IApplicationState {
	clients: IClient[];
}
