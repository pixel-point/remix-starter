import { useLoaderData, json } from 'remix';

// Loaders provide data to components and are only ever called on the server, so
// you can connect to a database or run any server side code you want right next
// to the component that renders it.
// https://remix.run/api/conventions#loader
export const loader = () => {
  const data = {
    title: 'Welcome to Remix',
  };

  // https://remix.run/api/remix#json
  return json(data);
};

// https://remix.run/api/conventions#meta
export const meta = () => ({
  title: 'Remix Starter',
  description: 'Welcome to remix!',
});

// https://remix.run/guides/routing#index-routes
const Index = () => {
  const data = useLoaderData();

  return (
    <div>
      <main className="mt-4">
        <h2>{data.title}</h2>
      </main>
    </div>
  );
};

export default Index;
