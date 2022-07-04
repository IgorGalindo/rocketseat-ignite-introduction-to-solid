import { Request, Response } from "express";
import { User } from "modules/users/model/User";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
    constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

    handle(request: Request, response: Response): Response {
        const user_id = request.header("user_id");

        let users: User[];

        try {
            users = this.listAllUsersUseCase.execute({ user_id });
        } catch (err) {
            return response.status(400).json({ error: err.message });
        }

        return response.json(users);
    }
}

export { ListAllUsersController };
