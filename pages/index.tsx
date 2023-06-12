import Head from 'next/head';
import AddTask from './components/AddTask';

export default function Home() {
  return (
    <>
      <Head>
        <title>Todo App</title>
        <meta name="description" content="Simple Todo App built with NextJS 13" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='max-w-4xl mx-auto mt-4'>
        <div className="text-center my-5 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Todo App</h1>
          <AddTask />
        </div>
      </main>
    </>
  )
}
