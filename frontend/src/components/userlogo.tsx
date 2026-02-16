import logo from '../../public/user-icon.svg'
export default function UserLogo() {
  return (
    <div className='h-7 w-7 bg-neutral-300 rounded-full'>
        <img src={logo} alt={logo}/>
    </div>
  );
}
