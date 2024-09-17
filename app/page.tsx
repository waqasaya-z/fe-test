import FerryOperatorList from './components/FerryOperatorList';
import FilterButtons from './components/FilterButtons';

export default function Home() {
  return (
    <main className="container mx-auto py-12 md:px-28">
      <div className='px-4 text-sm md:text-lg'>
      <h1 className="text-3xl font-bold">Ferry Operators</h1>
      <p className='text-sm'> Discover the <span className='font-semibold'> 57 ferry operators </span> we work with </p>
      </div>

      <FilterButtons />
      <FerryOperatorList />
    </main>
  );
}

