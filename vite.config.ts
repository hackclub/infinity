import tailwind from "@tailwindcss/vite";
import react from "@vitejs/plugin-react-oxc";
import type { UserConfig } from "vite";

export default {
	plugins: [react(), tailwind()],
} satisfies UserConfig;
