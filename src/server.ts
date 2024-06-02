import Elysia from "Elysia";
import { NotesController } from "./modules";

export function registerControllers(app: Elysia) {
	app.use(NotesController); // with database
}
