import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="my-0 pr-24 pl-24 w-full h-24 flex items-center justify-end border-b-2">
      <div className="flex gap-10">
        <Link className="text-2xl" to={'/'}>
          Home
        </Link>
        <Link className="text-2xl" to={'/forms'}>
          Forms
        </Link>
        <Link className="text-2xl" to={'/about'}>
          About us
        </Link>
      </div>
    </div>
  );
};

export default Navigation;
