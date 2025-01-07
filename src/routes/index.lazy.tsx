import { createLazyFileRoute } from "@tanstack/react-router";
import Home from "../pages/HomePage/HomePage";

export const Route = createLazyFileRoute("/")({
	component: Home,
});