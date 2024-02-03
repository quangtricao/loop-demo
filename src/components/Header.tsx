type PageType = {
  title: string;
  path: string;
};

export default function Header() {
  const pages: PageType[] = [
    { title: 'Marketplace', path: '#' },
    { title: 'Rankings', path: '#' },
    { title: 'Connect a wallet', path: '#' },
  ];

  return (
    <div className='flex flex-row justify-between py-[20px] px-[50px] bg-background text-white leading-[60px]'>
      <p>
        <a href='/#' className='hover:text-buttonBackground duration-500'>
          Loop NFT Marketplace
        </a>
      </p>

      <div className='hidden md:flex flex-row gap-[10px] justify-between'>
        {pages.map((page) => (
          <p key={page.title} className='px-[30px] '>
            <a href={page.path} className='hover:text-buttonBackground duration-500'>
              {page.title}
            </a>
          </p>
        ))}
        <button className='bg-buttonBackground px-[30px] rounded-[20px] hover:brightness-[80%] duration-500'>
          <p>Signup</p>
        </button>
      </div>
    </div>
  );
}
