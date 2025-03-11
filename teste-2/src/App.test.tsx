import { render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";
import App from "./App";

// Mock da API
const mockData = [
    { id: 1, name: "John Doe" },
    { id: 2, name: "Jane Smith" },
];

// Simulamos a função fetch para retornar os dados mockados
global.fetch = vi.fn(() =>
    Promise.resolve({
        json: () => Promise.resolve(mockData),
    })
) as unknown as typeof fetch;

describe("App Component", () => {
    it("deve renderizar os usuários da API", async () => {
        render(<App />);

        // Esperamos que os nomes sejam renderizados na tela
        await waitFor(() => {
            expect(screen.getByText("John Doe")).toBeInTheDocument();
            expect(screen.getByText("Jane Smith")).toBeInTheDocument();
        });
    });
});
