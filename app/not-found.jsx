import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div  className='flex flex-col items-center justify-center h-screen text-center space-y-4'>
      <h1  className='gradient-title text-5xl ' >Not Found</h1>
      <p className='text-2xl m-2' >Could not find requested resource</p>
      <Link href="/"  className='m-2 text-blue-600 underline hover:text-blue-800 visited:text-purple-600'>Return Home</Link>
    </div>
  )
}