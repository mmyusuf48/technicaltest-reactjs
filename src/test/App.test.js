import React from 'react';
import { render, screen } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import App from '../App';

test('renders OmdbApi header', () => {
  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );

  const headerElement = screen.getByText(/OmdbApi/i);
  expect(headerElement).toBeInTheDocument();
});
