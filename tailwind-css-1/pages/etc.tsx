import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='flex flex-col space-y-2 p-5'>
        <div>
            <details className='select-none open:text-white open:bg-indigo-300'>
                <summary className='cursor-pointer'>what is my favorite food?</summary>
                <span className='selection:bg-indigo-300 selection:text-white'>Kimchi</span>
            </details>
        </div>
        <ul className='list-disc marker:text-indigo-300'>
            <li>Hello</li>
            <li>Hello</li>
            <li>Hello</li>
        </ul>
        <input type="file" className='file:border-0 file:bg-indigo-200 file:rounded-xl file:px-5 file:text-white file:transition-colors file:cursor-pointer file:hover:text-indigo-500 file:hover:border-indigo-500 file:hover:bg-indigo-100 file:hover:border' />
        <p className='first-letter:text-5xl first-letter:hover:text-indigo-400'>HAHAHAHAHAHAHA</p>
    </div>
  )
}

export default Home
